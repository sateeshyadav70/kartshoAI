import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data/navData";
import BrandMark from "./BrandMark";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const primaryLinks = navLinks.filter((link) => link.name !== "Book Call");

  useEffect(() => {
    const closeMenu = window.setTimeout(() => {
      setMenuOpen(false);
    }, 0);

    return () => window.clearTimeout(closeMenu);
  }, [location.pathname]);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-5 sm:pt-4 bg-black">
      <div className="relative w-full max-w-[1120px] pointer-events-auto">
        <div className="navbar-shell relative overflow-hidden rounded-[28px] p-[1px]">
          <div className="navbar-shell__glow pointer-events-none absolute inset-0 rounded-[28px] bg-[linear-gradient(90deg,rgba(255,255,255,0.12),rgba(255,255,255,0.08),rgba(255,255,255,0.12))] bg-[length:320%_320%] opacity-55" />

          <div className="relative overflow-hidden rounded-[27px] border border-white/8 bg-[linear-gradient(180deg,rgba(8,12,16,0.34)_0%,rgba(8,12,16,0.18)_100%)] text-white shadow-sm backdrop-blur-xl backdrop-saturate-150 transition-transform transition-colors duration-300 hover:border-cyan-300/20">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.015)_18%,transparent_55%,rgba(34,211,238,0.03)_100%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,transparent_45%)]" />
            <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-5 md:px-8">
              <BrandMark compact className="shrink-0 scale-90 sm:scale-100" />

              <div className="hidden items-center gap-7 text-sm md:flex">
                {primaryLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="relative group text-white/78 transition hover:text-white"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-teal-400 transition-[width] duration-300 group-hover:w-full" />
                  </Link>
                ))}
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <Link
                  to="/book"
                  className="inline-flex items-center justify-center rounded-full border border-cyan-400/40 bg-white/5 px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white transition hover:border-cyan-300/70 hover:bg-white/10 sm:px-4 sm:py-2.5 sm:text-xs md:text-sm"
                >
                  Book Call
                </Link>

                <button
                  type="button"
                  onClick={() => setMenuOpen((open) => !open)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-cyan-400/50 hover:bg-white/10 md:hidden"
                  aria-label={menuOpen ? "Close menu" : "Open menu"}
                  aria-expanded={menuOpen}
                >
                  {menuOpen ? <X size={18} /> : <Menu size={18} />}
                </button>
              </div>
            </div>

            <div
              className={`md:hidden overflow-hidden border-t border-white/10 transition-[max-height,opacity] duration-300 ${
                menuOpen ? "max-h-[70vh] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="grid gap-2 px-4 py-4">
                {primaryLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/85 transition hover:border-cyan-400/40 hover:bg-white/10 hover:text-white"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <style>
          {`
            .navbar-shell__glow {
              animation: navbarBorderFlow 8s linear infinite;
            }

            @keyframes navbarBorderFlow {
              0% {
                background-position: 0% 50%;
              }
              100% {
                background-position: 300% 50%;
              }
            }

            @media (prefers-reduced-motion: reduce) {
              .navbar-shell__glow {
                animation: none !important;
              }
            }
          `}
        </style>
      </div>
    </nav>
  );
};

export default Navbar;
