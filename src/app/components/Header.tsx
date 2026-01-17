import {
  Mail,
  Phone,
  Menu,
  Moon,
  Sun,
  X,
  ChevronDown,
  ChevronRight,
  Leaf,
  PawPrint,
  Grid2x2,
  Sparkles,
  LampDesk,
  Package,
  Factory,
  BookOpen,
  Info,
  Box,
  Ship,
  FileText,
} from "lucide-react";
import { useState } from "react";
import { useTheme } from "next-themes";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileEdibleOpen, setMobileEdibleOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const productCategories = [
    {
      label: "Edible Salt",
      slug: "edible-salt",
      icon: Leaf,
      shades: [
        { label: "Light", value: "light" },
        { label: "Medium", value: "medium" },
        { label: "Dark", value: "dark" },
      ],
    },
    { label: "Animal Lick", slug: "animal-lick", icon: PawPrint },
    { label: "Tiles & Bricks", slug: "tiles-bricks", icon: Grid2x2 },
    { label: "Spa & Wellness", slug: "spa-wellness", icon: Sparkles },
    { label: "Decor & Crafts", slug: "decor-crafts", icon: LampDesk },
    // { label: "Accessories", slug: "accessories", icon: Package },
    { label: "Raw / Industrial", slug: "raw-industrial", icon: Factory },
  ];

  const mainMenu = [
    { label: "About Us", to: "/about", icon: Info },
    { label: "Packaging", to: "/packaging", icon: Box },
    { label: "Export & Compliance", to: "/export", icon: Ship },
    { label: "Blog", to: "/blog", icon: BookOpen },
    { label: "Request Quote", to: "/rfq", icon: FileText },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-stone-950 z-50 shadow-sm">
      {/* Top bar */}
      <div className="bg-[#3D9B93] text-white">
        <div className="max-w-7xl mx-auto px-6 py-2">
          <div className="flex flex-wrap items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <a
                href="mailto:info@freshrootspinksalt.com"
                className="flex items-center gap-2 hover:text-white/90 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="hidden sm:inline">info@freshrootspinksalt.com</span>
              </a>
              <a
                href="tel:+92"
                className="flex items-center gap-2 hover:text-white/90 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">+92 XXX XXXXXXX</span>
              </a>
            </div>
            <div className="text-sm">B2B Exporters | Pakistan</div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-white dark:bg-stone-950 border-b border-stone-200 dark:border-stone-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between py-2">
            {/* Logo */}
            <Link className="flex items-center gap-3 cursor-pointer" to="/">
              <img
                src={logo}
                alt="Fresh Roots Salt & Minerals"
                className="h-16 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <NavLink
                end
                to="/"
                className={({ isActive }) =>
                  `transition-colors pb-1 border-b-2 ${
                    isActive
                      ? "text-[#3D9B93] border-[#3D9B93]"
                      : "text-stone-700 dark:text-stone-200 border-transparent hover:text-[#3D9B93] dark:hover:text-[#3D9B93]"
                  }`
                }
              >
                Home
              </NavLink>

              <div className="relative group flex items-center">
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    `transition-colors pb-1 border-b-2 inline-flex items-center gap-2 ${
                      isActive
                        ? "text-[#3D9B93] border-[#3D9B93]"
                        : "text-stone-700 dark:text-stone-200 border-transparent hover:text-[#3D9B93] dark:hover:text-[#3D9B93]"
                    }`
                  }
                >
                  Products
                  <ChevronDown className="w-4 h-4 opacity-70 transition-transform group-hover:rotate-180" />
                </NavLink>
                <div className="absolute left-0 top-full pt-4 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200">
                  <div className="w-[320px] bg-white dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-2xl shadow-xl p-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400 px-2 pb-3">
                      Categories
                    </div>
                    <div className="space-y-2">
                      {productCategories.map((category) => {
                        const Icon = category.icon;
                        return (
                          <div
                            key={category.slug}
                            className={`rounded-xl hover:bg-stone-50 dark:hover:bg-stone-900 p-2 transition-colors ${
                              category.shades ? "relative group/edible" : ""
                            }`}
                          >
                            <Link
                              to={`/products?category=${category.slug}`}
                              className="flex items-center gap-3 text-stone-800 dark:text-stone-200"
                            >
                              <div className="h-9 w-9 rounded-lg bg-[#E88B7F]/15 text-[#E88B7F] flex items-center justify-center">
                                <Icon className="w-4 h-4" />
                              </div>
                              <div className="text-sm font-medium flex items-center gap-2">
                                {category.label}
                                {category.shades ? (
                                  <ChevronRight className="w-4 h-4 opacity-60" />
                                ) : null}
                              </div>
                            </Link>
                            {category.shades ? (
                              <div className="absolute left-full top-2 ml-2 w-48 bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl shadow-xl p-3 opacity-0 invisible group-hover/edible:visible group-hover/edible:opacity-100 transition-all">
                                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400 mb-3 px-2">
                                  Edible Shades
                                </div>
                                <div className="space-y-2">
                                  {category.shades.map((shade) => (
                                    <Link
                                      key={shade.value}
                                      to={`/products?category=${category.slug}&shade=${shade.value}`}
                                      className="flex items-center gap-3 px-3 py-2 rounded-xl border border-transparent text-sm text-stone-700 dark:text-stone-200 hover:border-[#E88B7F]/40 hover:bg-white dark:hover:bg-stone-950 transition-colors"
                                    >
                                      {shade.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ) : null}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {mainMenu.slice(0, 3).map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `transition-colors pb-1 border-b-2 ${
                      isActive
                        ? "text-[#3D9B93] border-[#3D9B93]"
                        : "text-stone-700 dark:text-stone-200 border-transparent hover:text-[#3D9B93] dark:hover:text-[#3D9B93]"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              {mainMenu.slice(3, 4).map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `transition-colors pb-1 border-b-2 ${
                      isActive
                        ? "text-[#3D9B93] border-[#3D9B93]"
                        : "text-stone-700 dark:text-stone-200 border-transparent hover:text-[#3D9B93] dark:hover:text-[#3D9B93]"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* CTA + Theme */}
            <Link
              to="/rfq"
              className="hidden lg:block bg-[#E88B7F] text-white px-6 py-2.5 rounded-lg hover:bg-[#d97a6e] transition-colors"
            >
              Request Quote
            </Link>
            <button
              type="button"
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className="hidden lg:inline-flex items-center justify-center w-10 h-10 rounded-full border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-200 hover:text-[#3D9B93] hover:border-[#3D9B93] transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-stone-700 dark:text-stone-200" />
              ) : (
                <Menu className="w-6 h-6 text-stone-700 dark:text-stone-200" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-stone-950 border-b border-stone-200 dark:border-stone-800 shadow-lg">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            <NavLink
              end
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-left py-2 text-stone-700 dark:text-stone-200 hover:text-[#3D9B93] transition-colors"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-left py-2 text-stone-700 dark:text-stone-200 hover:text-[#3D9B93] transition-colors"
            >
              About Us
            </NavLink>

            <button
              type="button"
              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              className="flex items-center justify-between py-2 text-stone-700 dark:text-stone-200 hover:text-[#3D9B93] transition-colors"
            >
              <span>Products</span>
              <ChevronDown
                className={`w-4 h-4 text-stone-400 transition-transform ${
                  mobileProductsOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {mobileProductsOpen ? (
              <div className="mt-2 space-y-2 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50/70 dark:bg-stone-900/60 p-3">
                {productCategories.map((category) => {
                  const isEdible = Boolean(category.shades);
                  return (
                    <div key={category.slug} className="space-y-2">
                      {isEdible ? (
                        <button
                          type="button"
                          onClick={() => setMobileEdibleOpen(!mobileEdibleOpen)}
                          className="w-full flex items-center justify-between rounded-lg px-3 py-2 text-sm text-stone-700 dark:text-stone-200 hover:bg-white/70 dark:hover:bg-stone-950 transition-colors"
                        >
                          <span>{category.label}</span>
                          <ChevronDown
                            className={`w-4 h-4 text-stone-400 transition-transform ${
                              mobileEdibleOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      ) : (
                        <NavLink
                          to={`/products?category=${category.slug}`}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block rounded-lg px-3 py-2 text-sm text-stone-700 dark:text-stone-200 hover:bg-white/70 dark:hover:bg-stone-950 transition-colors"
                        >
                          {category.label}
                        </NavLink>
                      )}
                      {isEdible && mobileEdibleOpen ? (
                        <div className="grid grid-cols-3 gap-2 px-2">
                          {category.shades?.map((shade) => (
                            <NavLink
                              key={shade.value}
                              to={`/products?category=${category.slug}&shade=${shade.value}`}
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-xs px-2 py-1.5 rounded-full border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-300 hover:border-[#3D9B93] hover:text-[#3D9B93] transition-colors text-center bg-white/70 dark:bg-stone-950"
                            >
                              {shade.label}
                            </NavLink>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            ) : null}

            <NavLink
              to="/packaging"
              onClick={() => setMobileMenuOpen(false)}
              className="text-left py-2 text-stone-700 dark:text-stone-200 hover:text-[#3D9B93] transition-colors"
            >
              Packaging
            </NavLink>
            <NavLink
              to="/export"
              onClick={() => setMobileMenuOpen(false)}
              className="text-left py-2 text-stone-700 dark:text-stone-200 hover:text-[#3D9B93] transition-colors"
            >
              Export & Compliance
            </NavLink>
            <NavLink
              to="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="text-left py-2 text-stone-700 dark:text-stone-200 hover:text-[#3D9B93] transition-colors"
            >
              Blog
            </NavLink>
            <NavLink
              to="/rfq"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-[#E88B7F] text-white px-6 py-3 rounded-lg hover:bg-[#d97a6e] transition-colors text-center"
            >
              Request Quote
            </NavLink>
            <button
              type="button"
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className="flex items-center justify-center gap-2 border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-200 px-6 py-3 rounded-lg hover:border-[#3D9B93] hover:text-[#3D9B93] transition-colors"
            >
              {isDark ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
              {isDark ? "Light Mode" : "Dark Mode"}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
