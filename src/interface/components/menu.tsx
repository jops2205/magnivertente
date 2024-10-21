import { useState, useEffect } from "react";
import { useWindow } from "@/app/hooks/use-window";
import { NavLink } from "react-router-dom";
import { List } from "@phosphor-icons/react";

const Menu = () => {
  const links = [
    { label: "Início", to: "/" },
    { label: "Quem Somos", to: "/about" },
    { label: "Nossos Serviços", to: "/service" },
    { label: "Contacte-nos", to: "/contact" },
    { label: "Carreiras", to: "/career" },
  ];

  const linkStyle = `font-medium text-stone-600/50 underline-offset-8 transition-colors hover:text-blue-800 hover:underline sm:text-lg`;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { width } = useWindow();

  useEffect(() => {
    if (width >= 1024) {
      setIsMenuOpen(false);
    }
  }, [width]);

  return (
    <nav className="relative">
      <div className="flex items-center lg:hidden">
        <button onClick={toggleMenu}>
          <List weight="bold" className="text-2xl text-stone-800 sm:text-3xl" />
        </button>
      </div>
      {isMenuOpen && (
        <ul className="absolute -right-6 top-12 -mt-0.5 flex w-screen flex-col items-center gap-8 border-b border-stone-300 bg-white py-8 sm:-right-8 sm:top-14 sm:-mt-0 md:-right-12">
          {links.map(({ label, to }) => (
            <li key={to}>
              <NavLink to={to} className={linkStyle}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
      <ul className="hidden gap-8 lg:flex">
        {links.map(({ label, to }) => (
          <li key={to}>
            <NavLink to={to} className={linkStyle}>
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { Menu };
