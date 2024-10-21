import logo from "../assets/logo.png";
import { Menu } from "./menu";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-between border-b border-stone-300 bg-white px-6 py-2.5 shadow-sm sm:px-8 md:px-12">
      <Link to="/">
        <img src={logo} alt="Logo da Magnivertente" className="w-44 sm:w-56" />
      </Link>
      <Menu />
    </header>
  );
};

export { Header };
