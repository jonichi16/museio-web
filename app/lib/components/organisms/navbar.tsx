import { Outlet } from "react-router";

export default function NavBar() {
  return (
    <>
      <header>
        <nav className="fixed top-0 left-0 w-full shadow-md z-50">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <h1 className="text-2xl font-bold uppercase tracking-[0.25em]">
              Museio
            </h1>
          </div>
        </nav>
      </header>
      <main className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </>
  );
}
