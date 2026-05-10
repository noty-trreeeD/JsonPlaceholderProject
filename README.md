# JSONPlaceholder React App

Учебное React-приложение для практики работы с API на примере JSONPlaceholder.

Проект сделан для отработки базовых и важных вещей в React:

- работа с серверными данными
- Структурой FSD
- маршрутизация
- Material UI
- TypeScript
- разделение логики по папкам

## Стек

- React
- TypeScript
- Vite
- pnpm
- React Router
- Material UI
- JSONPlaceholder API

## Установка

```bash
  pnpm install
```

## Запуск проекта

```bash
  pnpm dev
```

После запуска проект будет доступен по адресу:

```txt
http://localhost:5173
```

## Сборка проекта

```bash
  pnpm build
```

## Предпросмотр production-сборки

```bash
  pnpm preview
```

## Структура проекта

```txt
src/
  app/
    App.tsx
    prodivers.tsx
    router.tsx
    theme.ts

  layouts/
    MainLayout.tsx

  pages/
    HomePage.tsx
    PostsPage.tsx
    PostDetailsPage.tsx
    UsersPage.tsx
    TodosPage.tsx
    NotFoundPage.tsx

  features/
    posts/
      api/
        postsApi.ts
      components/
        PostList.tsx
        PostCard.tsx
      types/
        post.ts

    comments/
      types/
        comment.ts

  shared/
    api/
      client.ts
    ui/
      ErrorMessage.tsx
      Loader.tsx
      EmptyState.tsx
```

## Архитектурная идея

Проект разделён по смысловым слоям:

### `app`

Глобальная настройка приложения:

* роутер
* корневой компонент
* провайдеры

### `layouts`

Общие layout-компоненты приложения.

Например:

* верхняя панель
* боковое меню
* область для страниц

### `pages`

Страницы приложения.

Страница отвечает за:

* загрузку данных
* состояние загрузки
* состояние ошибки
* передачу данных в компоненты

### `features`

Фичи приложения, сгруппированные по сущностям.

Например:

* posts
* users
* comments
* todos

Внутри каждой фичи могут быть:

* api
* components
* types

### `shared`

Переиспользуемые части проекта:

* общий api-клиент
* UI-компоненты
* утилиты

## Принцип работы с API

Компоненты не делают `fetch` напрямую.

Вместо этого используется отдельный api-слой:

```txt
PostsPage
  ↓
getPosts()
  ↓
apiClient("/posts")
  ↓
JSONPlaceholder API
```

Это помогает не смешивать UI и работу с сервером.

## JSONPlaceholder

В проекте используется публичное тестовое API:

```txt
https://jsonplaceholder.typicode.com
```

Основные эндпоинты:

```txt
/posts
/posts/:id
/posts/:id/comments
/users
/todos
```

## Основной поток данных

```txt
Пользователь открывает страницу
        ↓
Страница вызывает функцию API
        ↓
Данные загружаются с сервера
        ↓
Данные сохраняются в state
        ↓
React делает re-render
        ↓
Компоненты отображают новые данные
```

## Цель проекта

Главная цель проекта — закрепить базовые навыки React-разработки:

* работа с компонентами
* работа с props
* работа с state
* работа с `useEffect`
* запросы к серверу
* обработка loading/error
* роутинг
* структурирование проекта
* использование MUI
