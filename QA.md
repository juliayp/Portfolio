# Portfolio — QA Protocol

## Purpose

Этот документ определяет постоянный процесс QA для Portfolio.

Используй Playwright MCP для браузерной проверки сайта.

Есть два режима:

* `QUICK QA` — во время разработки после существенных изменений.
* `FINAL QA` — полный аудит перед production/handoff.

Если я пишу:

`Запусти Quick QA`

выполни раздел QUICK QA.

Если я пишу:

`Запусти Final QA`

выполни QUICK QA + FINAL QA и после исправлений обязательно проведи regression check.

---

# QUICK QA

Используй QUICK QA после завершения секции или существенного изменения layout, typography, responsive behavior, navigation или animations.

Проверь минимум:

* Desktop — 1440×900
* Tablet — 834×1194
* Mobile — 390×844

## Visual & Responsive

Проверь:

* horizontal overflow;
* unintended vertical overflow;
* clipping текста и декоративных элементов;
* пересечения элементов;
* layout shifts;
* spacing;
* alignment;
* responsive typography;
* изображения;
* элементы возле краёв viewport;
* reveal masks;
* outline/stroke typography.

Особое внимание уделяй Hero и крупной типографике `FRONT END DEVELOPER`.

Проверяй, чтобы контуры букв, особенно `D`, `L`, `R` и крайние символы, не обрезались.

## Navigation & Interaction

Проверь:

* header;
* desktop navigation;
* mobile menu;
* открытие/закрытие меню;
* Escape;
* hover states;
* основные кнопки и ссылки;
* отсутствие перекрывающихся интерактивных элементов.

## Technical

Проверь:

* console errors;
* console warnings, если они имеют практическое значение;
* network errors;
* failed requests;
* 404;
* broken assets;
* broken internal links.

## Screenshots

Создай screenshots всех проверяемых viewport.

Сохраняй QA-артефакты в:

`qa-artifacts/`

Не добавляй QA screenshots в Git.

## Quick QA Report

После проверки выдай отчёт:

### Critical

Ошибки, ломающие интерфейс или функциональность.

### Important

Responsive, clipping, overflow, navigation или layout-проблемы.

### Minor

Небольшие визуальные или технические замечания.

### Passed

Что проверено и работает корректно.

Для каждой проблемы укажи:

* viewport;
* страницу/секцию;
* элемент;
* описание;
* вероятную техническую причину;
* предлагаемое исправление.

Не изменяй код автоматически после первого QA.

Сначала покажи отчёт и дождись подтверждения.

---

# FINAL QA — PRE-HANDOFF

FINAL QA запускается перед production/handoff.

Сначала выполни весь QUICK QA.

Затем проведи полный аудит сайта.

## Full Responsive Audit

Дополнительно проверь промежуточные размеры:

* 1280×800
* 1024×768
* 768×1024
* 430×932
* 375×812

Ищи проблемы, которые возникают не только на основных breakpoint, но и между ними.

## Full Page Review

Проверь все существующие секции сайта сверху вниз.

Проверь:

* визуальную последовательность;
* spacing между секциями;
* typography;
* изображения;
* animations;
* reveal effects;
* hover states;
* CTA;
* footer;
* navigation между секциями;
* отсутствие случайного overflow.

## Functional Review

Проверь все доступные:

* links;
* buttons;
* menu items;
* language controls;
* external links;
* email/contact links;
* social links;
* другие интерактивные элементы.

## Browser Technical Review

Проверь:

* console;
* network;
* JavaScript errors;
* failed resources;
* 404;
* favicon;
* asset loading;
* очевидные performance-проблемы.

## Accessibility Basics

Проверь базовые вещи:

* keyboard navigation;
* focus states;
* доступность интерактивных элементов с клавиатуры;
* alt для meaningful images;
* корректные button/link semantics;
* отсутствие очевидных проблем с contrast;
* reduced-motion behavior, если на сайте используются существенные animations.

Это базовый QA, а не полноценный WCAG-аудит.

## Production Verification

Если доступен Vercel Production Deployment, после локальной проверки проверь production-версию.

Убедись, что production соответствует проверенной локальной версии.

Проверь:

* загрузку страницы;
* assets;
* console;
* network;
* основные interactions;
* responsive layout.

## Final Regression Check

После одобренных исправлений снова запусти основные проверки:

* 1440×900
* 834×1194
* 390×844

Убедись, что исправления не сломали ранее работающие части сайта.

---

# FINAL REPORT

В конце FINAL QA сформируй:

### Critical

### Important

### Minor

### Passed

Затем дай итоговый статус:

`READY FOR HANDOFF`

или

`NOT READY FOR HANDOFF`

Если статус `NOT READY FOR HANDOFF`, перечисли конкретные блокирующие проблемы.

Не объявляй проект `READY FOR HANDOFF`, если остаются Critical-проблемы.

Не изменяй субъективные дизайнерские решения без моего подтверждения.

Whitespace, композицию, визуальный ритм, размеры декоративных элементов и другие дизайнерские решения сначала только отмечай как рекомендации.

Технические дефекты также сначала показывай в отчёте. Исправления вноси только после моего подтверждения.
