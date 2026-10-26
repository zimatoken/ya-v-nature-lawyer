🛡️ Я в натуре Юрист
Личный правовой помощник: фиксация обстоятельств (GPS, фото, свидетели) и генерация
проектов юридических документов за пару минут. Работает офлайн (PWA).
🚀 Запуск
Любой статический сервер из корня проекта, например:
```
npx serve .
```
или просто откройте `index.html` через локальный сервер (нужен для Service Worker).
🧩 Архитектура
`index.html` — интерфейс, State Machine, DocumentAssembler (LEGO-блоки)
`modules/lawyer/data/` — сценарии: police, labor, debts, consumer, dtp, housing, divorce, inheritance (+ adapter.js, en/)
`lawyer-font.js` — DejaVuSans base64 для PDF с кириллицей
`sw.js` — офлайн-кэш (lawyer-v3.4-professional)
⚠️ Дисклеймер
Приложение помогает фиксировать обстоятельства и готовить проекты документов,
но не заменяет консультацию юриста. Проверяйте нормы на pravo.gov.ru.
📝 История версий
См. CHANGELOG.md