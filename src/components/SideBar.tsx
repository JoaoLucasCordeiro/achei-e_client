import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <nav className="flex flex-col items-center justify-center px-20">
      <img
        src="/logo/logo-acheie.svg"
        alt="Logo Achei-e"
        className="w-[200px]"
      />
      <div className="flex flex-col items-center justify-center gap-5">
        <Link to="/Home" className="w-full">
          <button className="bg-gray-200 p-2 w-[240px] rounded-full text-black font-semibold hover:bg-[#1D8BC9] hover:text-white transition-all">
            Home
          </button>
        </Link>
        <Link to="/newitem" className="w-full">
          <button className="bg-gray-200 p-2 w-[240px] rounded-full text-black font-semibold hover:bg-[#1D8BC9] hover:text-white transition-all">
            Novo Item
          </button>
        </Link>
        <Link to="/profile" className="w-full">
          <button className="bg-gray-200 p-2 w-[240px] rounded-full text-black font-semibold hover:bg-[#1D8BC9] hover:text-white transition-all">
            Perfil
          </button>
        </Link>
        <Link to="/" className="w-full">
          <button className="bg-gray-200 p-2 w-[240px] rounded-full text-black font-semibold hover:bg-[#1D8BC9] hover:text-white transition-all">
            Sair
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default SideBar;
