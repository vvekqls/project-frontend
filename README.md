# Task Tracker App

A full-stack task tracking application built with **Next.js**, **Express.js**, and **MySQL**, emphasizing clean architecture and modularity.

## Features

- **Task Management**: Create, read, update, and delete tasks.
- **Responsive UI**: User-friendly interface built with Next.js.
- **Dockerized Environment**: Easy setup and deployment using Docker.

## Technologies Used

- **Frontend**: Next.js, React.js
- **Containerization**: Docker, Docker Compose
- **Version Management**: NVM (Node Version Manager)

## Getting Started

- First, run the development server: https://github.com/vvekqls/project-backend

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
## Setup

- To run locally, install dependencies. Install nvm if no version found.
  ```sh
    nvm -v
  ```
  ```sh
    nvm install 20.9.0
    ```
  ```sh
    nvm use 20.9.0
  ```
  ```sh
    npm install --legacy-peer-deps
  ```
  ```sh
    npm run dev
  ```

### Run Docker

- make sure Docker is running first & run docker on root folder
- this will run server
  - ```sh
    docker compose up 
    ```

### Starting Client

```sh
# go to http://localhost:3000
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
