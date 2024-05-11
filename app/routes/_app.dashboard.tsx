import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix Breeze App" },
    { name: "description", content: "Welcome to Remix Breeze!" },
  ];
};

export default function Dashboard() {
  return (
    <section className="w-full py-12">
      <div className="px-4 md:px-6 flex flex-col items-center space-y-4">
        <div className="w-full max-w-[700px] mx-auto text-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Dashboard</h1>
          <p className="text-gray-500 md:text-xl dark:text-gray-400">
            This is an example dashboard page. You can customize this page in{" "}
            <code className="text-orange-500">app/routes/_app.dashboard.tsx</code>.
          </p>
          <p className="text-gray-500 md:text-xl dark:text-gray-400">
            Follow the{" "}
            <Link to="https://github.com/paterson1720/remix-breeze-starter?tab=readme-ov-file#scaffolding-authentication">
              <strong className="text-blue-500 hover:underline">Remix-Breeze Starter</strong>{" "}
            </Link>
            instructions to easily add authentication to your app using the{" "}
            <Link to="https://github.com/paterson1720/remix-breeze-starter?tab=readme-ov-file#scaffolding-authentication">
              <strong className="text-blue-500 hover:underline">
                npx @remix-breeze/cli scaffold auth
              </strong>{" "}
            </Link>{" "}
            command
          </p>
          <p className="text-gray-500 md:text-xl dark:text-gray-400">
            once you got authentication setup this page will be protected to be accessible to only
            authenticated users.
          </p>
        </div>
      </div>
    </section>
  );
}
