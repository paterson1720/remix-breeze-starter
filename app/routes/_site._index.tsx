import type { MetaFunction } from "@remix-run/node";

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
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Remix Breeze</h1>
          <p className="text-gray-500 md:text-xl dark:text-gray-400">
            Give yourself the toolkit to stop configuring and start innovating. Securely build,
            deploy, and scale the best web experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
