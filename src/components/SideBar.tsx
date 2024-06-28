import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const SideBar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('idUsuario');
    navigate('/'); // Redireciona para a página de login
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative">
      <button
        className={`absolute top-4 left-4 md:hidden ${menuOpen ? 'hidden' : 'block'}`}
        onClick={toggleMenu}
      >
        <AiOutlineMenu size={24} />
      </button>
      <nav
        className={`fixed inset-0 z-50 sm:bg-transparent bg-white  transition-transform transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } md:static md:translate-x-0 flex flex-col items-center justify-center px-20`}
      >
        <button
          className="absolute top-4 left-4 md:hidden"
          onClick={toggleMenu}
        >
          <AiOutlineClose size={24} />
        </button>
        <img
          src="/logo/logo-acheie.svg"
          alt="Logo Achei-e"
          className="w-[200px] mb-10"
        />
        <div className="flex flex-col items-center justify-center gap-5">
          <Link to="/home" className="w-full" onClick={toggleMenu}>
            <button className="bg-gray-200 p-2 w-[240px] rounded-full text-black font-semibold hover:bg-[#1D8BC9] hover:text-white transition-all">
              Home
            </button>
          </Link>
          <Link to="/newitem" className="w-full" onClick={toggleMenu}>
            <button className="bg-gray-200 p-2 w-[240px] rounded-full text-black font-semibold hover:bg-[#1D8BC9] hover:text-white transition-all">
              Novo Item
            </button>
          </Link>
          <Link to="/profile" className="w-full" onClick={toggleMenu}>
            <button className="bg-gray-200 p-2 w-[240px] rounded-full text-black font-semibold hover:bg-[#1D8BC9] hover:text-white transition-all">
              Perfil
            </button>
          </Link>
          <button
            onClick={() => {
              handleLogout();
              toggleMenu();
            }}
            className="bg-gray-200 p-2 w-[240px] rounded-full text-black font-semibold hover:bg-[#1D8BC9] hover:text-white transition-all"
          >
            Sair
          </button>
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
