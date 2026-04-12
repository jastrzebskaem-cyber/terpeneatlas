import { Outlet, Link, useLocation } from "react-router-dom";
import { Leaf, FlaskConical, Heart, Menu, X } from "lucide-react";
import { useState } from "react";
import Disclaimer from "./Disclaimer";

export default function Layout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Baza wiedzy - odmiany", icon: Leaf },
    { to: "/terpeny", label: "Przewodnik po terpenach", icon: FlaskConical },
  ];

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/" || location.pathname.startsWith("/odmiana/");
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-foreground text-primary-foreground shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="https://media.base44.com/images/public/69cc87bd87449e71204049cd/7d5f3ed18_GreenDecorativeFloristorGardenCentreLineArtLogo.png"
                alt="Terpene Atlas logo"
                className="h-10 w-10 object-contain invert"
              />
              <div>
                <span className="font-playfair font-semibold text-lg text-primary-foreground leading-none">
                  Terpene Atlas
                </span>
                <span className="block text-[10px] text-primary-foreground/60 leading-tight tracking-widest uppercase">
                  Baza wiedzy o terpenach
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const active = isActive(link.to);
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      active
                        ? "bg-white/15 text-white"
                        : "text-white/60 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/10 text-white transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile nav */}
          {mobileMenuOpen && (
            <nav className="md:hidden pb-4 space-y-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const active = isActive(link.to);
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      active
                        ? "bg-white/15 text-white"
                        : "text-white/60 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          )}
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Disclaimer */}
      <Disclaimer />
    </div>
  );
}