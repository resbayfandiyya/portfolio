import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const menus = [
    "About",
    "Skills",
    "Projects",
    "Contact",
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-slate-900/70 shadow-lg border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 h-20">

        {/* Logo */}

        <a
          href="#"
          className="text-3xl font-bold text-blue-500"
        >
          Resbay
        </a>

        {/* Desktop */}

        <nav className="hidden md:flex items-center gap-10">

          {menus.map((menu) => (
            <a
              key={menu}
              href={`#${menu.toLowerCase()}`}
              className="text-slate-300 hover:text-blue-400 transition"
            >
              {menu}
            </a>
          ))}

          <a
            href="/CV Resbay Fandiyya Gautama.pdf"
            className="bg-blue-600 hover:bg-blue-700 transition px-5 py-3 rounded-xl font-semibold"
          >
            Resume
          </a>

        </nav>

        {/* Mobile */}

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>

      </div>

      {open && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">

          {menus.map((menu) => (
            <a
              key={menu}
              href={`#${menu.toLowerCase()}`}
              className="block px-8 py-4 text-slate-300 hover:bg-slate-800"
            >
              {menu}
            </a>
          ))}

        </div>
      )}
    </header>
  );
}