import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix Breeze App" },
    { name: "description", content: "Welcome to Remix Breeze!" },
  ];
};

export default function Login() {
  return (
    <section className="w-full py-12">
      <div className="px-4 md:px-6 flex flex-col items-center space-y-4">
        <div className="w-full max-w-[700px] mx-auto text-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Login Page</h1>
          <p className="text-gray-500 md:text-xl dark:text-gray-400">
            Login page not implemented yet. You can customize this page in{" "}
            <code className="text-orange-500">app/routes/_site.auth.login.tsx</code>.
          </p>
          <p className="text-gray-500 md:text-xl dark:text-gray-400">
            If you want to quickly add authentication to your app, you can run the Remix-Breeze
            &nbsp;
            <Link
              to="https://github.com/paterson1720/remix-breeze-starter"
              target="_blank"
              rel="noreferrer"
            >
              <strong className="text-blue-500 hover:underline">
                npx @remix-breeze/cli scaffold auth
              </strong>{" "}
            </Link>
            command to scaffold a complete authentication flow.
          </p>
          <p className="text-gray-500 md:text-xl dark:text-gray-400">
            If you don&apos;t want auth support in your app you can delete the{" "}
            <code className="text-orange-500">app/routes/_site.auth.login.tsx</code> file.
          </p>
        </div>
      </div>
    </section>
  );
}
