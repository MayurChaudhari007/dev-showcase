import { useState } from "react";
import {
  ExternalLink,
  Menu,
  X,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";

import Container from "../ui/Container";

const navItems = [
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "About",
    path: "/about",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `relative transition-all duration-300 ${
      isActive
        ? "text-white"
        : "text-zinc-400 hover:text-white"
    }`;

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <Container>
          <div className="flex h-18 items-center justify-between">
            {/* Logo */}

            <Link
              to="/"
              className="group flex items-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 font-bold transition-all duration-300 group-hover:rotate-6 group-hover:border-zinc-600">
                D
              </div>

              <div>
                <p className="text-lg font-semibold tracking-tight">
                  Dev Showcase
                </p>

                <p className="text-xs text-zinc-500">
                  Software Developer
                </p>
              </div>
            </Link>

            {/* Desktop */}

            <nav className="hidden items-center gap-8 lg:flex">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={navLinkClass}
                >
                  {({ isActive }) => (
                    <span className="relative">
                      {item.name}

                      {isActive && (
                        <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-white" />
                      )}
                    </span>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Right */}

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-300 transition-all duration-300 hover:border-zinc-600 hover:bg-zinc-800 hover:text-white lg:inline-flex"
              >
                <ExternalLink size={16} />
                GitHub
              </a>

              <button
                onClick={() =>
                  setMobileOpen(!mobileOpen)
                }
                className="rounded-xl border border-zinc-800 bg-zinc-900 p-2 transition hover:border-zinc-600 lg:hidden"
              >
                {mobileOpen ? (
                  <X size={22} />
                ) : (
                  <Menu size={22} />
                )}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Menu */}

      <div
        className={`fixed inset-0 z-40 transition-all duration-300 lg:hidden ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-lg"
          onClick={() => setMobileOpen(false)}
        />

        <div
          className={`absolute left-0 right-0 top-[72px] mx-5 rounded-3xl border border-zinc-800 bg-zinc-950 p-6 transition-all duration-300 ${
            mobileOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-5 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-4 text-lg transition ${
                    isActive
                      ? "bg-white text-black"
                      : "text-zinc-300 hover:bg-zinc-900"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-zinc-700 py-4 transition hover:bg-zinc-900"
            >
              <ExternalLink size={18} />
              GitHub
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}