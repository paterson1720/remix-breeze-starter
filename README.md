# Welcome to Remix Breeze!

The Kit to ship amazing apps with Remix without headache.

This kit is setup with Remix + Tailwindcss + Prisma + SQLite (You can easily change to another database when you are ready to move to prod)

## Get started

- Clone the repository

```bash
git clone https://github.com/paterson1720/remix-breeze-starter.git
```

- Create a `.env` file

```bash
touch .env
```

Copy the content of the `.env.example`and paste it in it:

```bash
cp -i .env.example .env
```

- Install the dependencies

```bash
npm install
```

- Generate the prisma client

```bash
npx prisma db push
npx prisma generate
```

Now you should be able to run your dev server with `npm run dev` and open your app in the browser.

## Scaffolding authentication

If you want to setup authentication in your app, follow these step to quickly scaffold authentication.

- Seed the database

```bash
npx prisma db seed
```

- See your database records with prisma studio by running the following command:

```bash
npx prisma studio
```

Then navigate to `http://localhost:5555` you should be able to see your database records using the prisma studio client and your `Role` model should have a `user` role in it.

- Install the `@remix-breeze/auth` library

```bash
npm i @remix-breeze/auth
```

- Scaffold authentication using the `@remix-breeze/cli`:

```bash
npx @remix-breeze/cli scaffold auth
```

This will setup `@remix-breeze/auth` and create a full authentication flow for you.
You should see the following files beeing generated in your project:

- app/auth.server.ts
- app/routes/\_site.auth.register.tsx
- app/routes/\_site.auth.login.tsx
- app/routes/\_site.auth.logout.tsx
- app/routes/\_site.auth.forgot-password.tsx
- app/routes/\_site.auth.reset-password-email-sent.tsx
- app/routes/\_site.auth.reset-password.tsx
- app/routes/\_site.auth.reset-password-success
- app/routes/\_site.auth.unauthorized.tsx
- app/routes/\_app.test-dashboard.tsx
- app/routes/\_app.test-admin-page.tsx

Now your app has a full authentication flow, user can:

- Register using the `/auth/register` route
- Login using the `/auth/login` route
- Logout using `/auth/logout`
- Reset password
  And more...

If you visit `/auth/register` route in your app you should be able to register and redirected to the `/test-dashboard` page, feel free to change where user is redirected after authentication in the code. You can visit `/auth/logout` to logout.

Feel free to test the authentication flow and play with it.

Happy coding!
