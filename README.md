# Nuxt 3

## SOUL MELODY App

## Setup

Node lts/stable 16.17.0

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## bugs - [error](http://joxi.ru/DmB5vqnCql3Jar) in console

Нашел кучу тикетов с такой проблемой, у каждого был свой источник проблемы, причём, некоторые, я в том числе, так и не нашли решение для своего проекта.
[Ссылка](https://github.com/nuxt/framework/issues/5183) на issues подобной проблемы, некоторые считают это проблемой nuxt3.
В моем случае ошибка пропадает, если закомментировать или удалить html audio.
