import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix Breeze App" },
    { name: "description", content: "Welcome to Remix Breeze!" },
  ];
};

export default function Logout() {
  return (
    <section className="w-full py-12">
      <div className="px-4 md:px-6 flex flex-col items-center space-y-4">
        <div className="w-full max-w-[700px] mx-auto text-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Logout Action</h1>
          <p className="text-gray-500 md:text-xl dark:text-gray-400">
            Logout action not implemented yet. You can customize this in{" "}
            <code className="text-orange-500">app/routes/_site.auth.logout.tsx</code>.
          </p>
          <p className="text-gray-500 md:text-xl dark:text-gray-400">
            If you want to quickly add authentication to your app, you can run the Remix-Breeze
            &nbsp;
            <Link to="https://github.com/paterson1720/remix-breeze-starter">
              <strong className="text-blue-500 hover:underline">
                npx @remix-breeze/cli scaffold auth
              </strong>{" "}
            </Link>
            command to scaffold a complete authentication flow.
          </p>
          <p className="text-gray-500 md:text-xl dark:text-gray-400">
            If you don&apos;t want authentication support in your app you can delete the{" "}
            <code className="text-orange-500">app/routes/_site.auth.logout.tsx</code> file.
          </p>
        </div>
      </div>
    </section>
  );
}
