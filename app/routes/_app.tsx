import { Link, Outlet } from "@remix-run/react";
import { useState } from "react";
import HamburgerMenu from "~/components/icons/hamburger-menu";

/**
 * ----------------------------------------------------------------------------
 * App Layout
 * ----------------------------------------------------------------------------
 * This is the layout for the app. Like your dashboard, settings page, user profile page etc.
 * It includes a basic navbar and a main content area. Every page you need to use this layout
 * should start with "_app" inside the routes folder.
 * For example:
 * - app/routes/_app.dashboard.tsx //This is the dashboard page, already created inside the routes folder
 * - app/routes/_app.settings.tsx
 * - app/routes/_app.account.tsx
 */
export default function AppLayout() {
  return (
    <>
      <AppNavbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

const menuItem = [
  {
    name: "Account",
    href: "#",
  },
  {
    name: "Settings",
    href: "#",
  },
];

function AppNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/dashboard" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-black text-2xl font-semibold whitespace-nowrap dark:text-white">
            APP
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <HamburgerMenu />
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {menuItem.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {menuOpen ? (
          <div className="items-center justify-between w-full md:hidden md:w-auto md:order-1">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {menuItem.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </nav>
  );
}
