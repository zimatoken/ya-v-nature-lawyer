// modules/lawyer/data/adapter.js
// Адаптер модулей SOS_REGISTER_QUIZ к движку «Я в натуре Юрист».
(function () {
  'use strict';

  window.SOS_QUIZZES = window.SOS_QUIZZES || [];
  
  // Регистрация квиза с защитой от падения
  window.SOS_REGISTER_QUIZ = function (data) {
    if (!data || !data.meta || !data.meta.category || !Array.isArray(data.questions)) {
      console.error('[Lawyer adapter] ❌ ПРОПУЩЕН МОДУЛЬ. Неверная структура (нет meta, category или questions):', data);
      return;
    }
    window.SOS_QUIZZES.push(data);
    console.log(`[Lawyer adapter] ✅ Модуль "${data.meta.category}" добавлен в очередь.`);
  };

  function matchesConditions(conditions, answerIds) {
    if (!conditions || typeof conditions !== 'object') return true;
    return Object.entries(conditions).every(([questionId, allowed]) =>
      Array.isArray(allowed) && allowed.includes(answerIds[questionId])
    );
  }

  function getBestSolution(quiz, context) {
    const solutions = Array.isArray(quiz.solutions) ? quiz.solutions : [];
    const answerIds = context.answerIds || {};
    return solutions
      .filter(solution => solution && solution.conditions && matchesConditions(solution.conditions, answerIds))
      .sort((a, b) => Object.keys(b.conditions || {}).length - Object.keys(a.conditions || {}).length)[0] || null;
  }

  window.loadLawyerModules = function () {
    if (typeof SCENARIOS === 'undefined') {
      console.error('[Lawyer adapter] ❌ SCENARIOS ещё не инициализирован в index.html.');
      return;
    }

    const quizzes = window.SOS_QUIZZES || [];
    console.log(`[Lawyer adapter] Начинаю обработку. Найдено модулей в очереди: ${quizzes.length}`);

    quizzes.forEach(quiz => {
      const id = String(quiz.meta.category);
      
      if (SCENARIOS[id]) {
        console.warn(`[Lawyer adapter] ⚠️ Сценарий ${id} уже существует — модуль пропущен.`);
        return;
      }

      const questions = quiz.questions.filter(q => q && q.id && Array.isArray(q.options));
      if (!questions.length) {
        console.error(`[Lawyer adapter] ❌ В модуле ${id} нет валидных вопросов (с id и options).`);
        return;
      }

      // Строим шаги для движка
      const steps = questions.map((q, index) => ({
        id: q.id,
        question: q.text || q.question || 'Уточните обстоятельства ситуации',
        conditions: q.conditions || null,
        options: q.options.map(o => ({
          id: o.id || o.value,
          value: o.id || o.value,
          label: o.label || o.text || String(o.id || 'Выбрать'),
          next: questions[index + 1]?.id || null,
          tag: Array.isArray(o.tags) && o.tags.length ? o.tags[0] : null
        }))
      }));

      const baseBlocks = [
        { type: 'header', text: 'Адресат: {company}\nОт: {fio}\nАдрес: {address}\nТелефон: {phone}' },
        { type: 'user_data' },
        { type: 'narrative', template: `Обстоятельства обращения: ${quiz.meta.title}.\n\nОписание: ${quiz.meta.description || 'не указано'}.\n\nОтветы пользователя:\n{context_details}` },
        { type: 'recommendation', text: 'Выберите вариант действий после проверки обстоятельств. Автоматическая рекомендация не сформирована.' },
        { type: 'evidence_log' },
        { type: 'demand', text: 'Автоматическое требование не сформировано. Укажите конкретное требование после проверки фактов.' },
        { type: 'attachments' }
      ];

      SCENARIOS[id] = {
        id,
        title: `${quiz.meta.icon || '⚖️'} ${quiz.meta.title || id}`,
        icon: quiz.meta.icon || 'scale',
        xp: 10,
        required: ['note'],
        steps,
        blocks: baseBlocks,
        resolveBlocks(context) {
          const solution = getBestSolution(quiz, context || {});
          if (!solution) return baseBlocks;
          const lines = [solution.title || 'Вариант действий'];
          if (solution.description) lines.push(solution.description);
          if (Array.isArray(solution.steps) && solution.steps.length) {
            lines.push('', ...solution.steps.map((step, i) => `${i + 1}. ${step}`));
          }
          if (Array.isArray(solution.warnings) && solution.warnings.length) {
            lines.push('', 'ОГРАНИЧЕНИЯ:', ...solution.warnings.map(w => `• ${w}`));
          }
          lines.push('', 'Проверка: актуальность законодательства не подтверждена автоматическим движком.');
          return baseBlocks.map(block => block.type === 'recommendation'
            ? { ...block, text: lines.join('\n') }
            : block);
        }
      };
      
      console.log(`[Lawyer adapter] ✅ Сценарий "${id}" успешно собран и добавлен в SCENARIOS.`);
    });

    if (typeof renderScenarios === 'function') renderScenarios();
    console.log(`[Lawyer adapter] 🏁 Завершено. Всего активных сценариев в системе: ${Object.keys(SCENARIOS).length}`);
  };
})();