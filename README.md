## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Описание

```
Это простое приложение на Next js

Имеет форму авторизации с валидацией емайла и пароля

После авторизации доступны две вкладки,
   Главная, где подгружается список криптовалют
   Профиль пользователя с его данными
```

```
    Емайл и пароль заданы статичными, в корне программы
    
    Например:
        email: TestAdmin@gmail.com,
        password: "TestAdminPassword123_"
```

## Docker run

### Docker Compose
```docker compose -f "docker-compose.prod.yml" up -d --build```

### Docker
```
docker build . -t next-test-app
docker run -p 3000:3000 next-test-app
```