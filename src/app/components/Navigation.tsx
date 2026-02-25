import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export function Navigation() {
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = location.pathname === "/";

  const navLinks = [
    { href: "#projects", label: "Projects" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl shadow-lg shadow-primary/5 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 via-blue-500 to-blue-500 flex items-center justify-center shadow-md group-hover:shadow-indigo-500/40 transition-shadow">
              <span className="text-white text-sm font-bold">TD</span>
            </div>
            <span className="text-lg font-bold tracking-tight group-hover:text-primary transition-colors">
              Thomas Diky
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {isHome &&
              navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-accent group"
                >
                  {link.label}
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full group-hover:w-4 transition-all duration-200" />
                </a>
              ))}

            {!isHome && (
              <Link
                to="/"
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </Link>
            )}

            <div className="w-px h-5 bg-border mx-2" />

            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
              aria-label="Toggle theme"
            >
              {mounted &&
                (theme === "dark" ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                ))}
            </button>

            {isHome && (
              <a
                href="#contact"
                className="ml-2 px-5 py-2 text-sm bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-all shadow-sm hover:shadow-primary/30 hover:shadow-md"
              >
                Hire Me
              </a>
            )}
          </div>

          {/* Mobile right */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg hover:bg-accent transition-colors"
              aria-label="Toggle theme"
            >
              {mounted &&
                (theme === "dark" ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                ))}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg hover:bg-accent transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-4 space-y-1">
              {isHome &&
                navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 text-sm rounded-lg hover:bg-accent transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              {!isHome && (
                <Link
                  to="/"
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-sm rounded-lg hover:bg-accent transition-colors"
                >
                  Home
                </Link>
              )}
              {isHome && (
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-sm bg-primary text-primary-foreground rounded-lg text-center mt-2"
                >
                  Hire Me
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
