import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix Breeze App" },
    { name: "description", content: "Welcome to Remix Breeze!" },
  ];
};

export default function Index() {
  return (
    <section className="w-full py-12">
      <div className="px-4 md:px-6 flex flex-col items-center space-y-4">
        <div className="w-full max-w-[700px] mx-auto text-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Remix-Breeze</h1>
          <p className="text-gray-500 md:text-xl dark:text-gray-400">
            Give yourself the toolkit to ship amazing web apps without headache. Easily build,
            deploy, and scale the best web experiences with Remix & Remix-Breeze
          </p>

          <h2 className="text-3xl font-bold tracking-tighter">
            Want to quickly add authentication feature ?
          </h2>
          <p className="text-xl">
            Follow the &nbsp;
            <Link
              to="https://github.com/paterson1720/remix-breeze-starter?tab=readme-ov-file#scaffolding-authentication"
              target="_blank"
              rel="noreferrer"
            >
              <code>
                <strong className="text-blue-500 hover:underline">
                  @remix-breeze/cli scaffold instructions
                </strong>
              </code>{" "}
            </Link>{" "}
            to scaffold a complete authentication flow.
          </p>
          <Link
            to="/auth/login"
            className="bg-blue-600 w-full mt-6 block text-white  px-6 p-2 rounded-md"
          >
            Login
          </Link>
        </div>
      </div>
    </section>
  );
}
