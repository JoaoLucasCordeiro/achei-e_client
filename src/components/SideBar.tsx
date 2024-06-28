import { Link, useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('idUsuario');
    navigate('/'); // Redireciona para a página de login
  };

  return (
    <nav className="flex flex-col items-center justify-center px-20">
      <img
        src="/logo/logo-acheie.svg"
        alt="Logo Achei-e"
        className="w-[200px]"
      />
      <div className="flex flex-col items-center justify-center gap-5">
        <Link to="/home" className="w-full">
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
        <button
          onClick={handleLogout}
          className="bg-gray-200 p-2 w-[240px] rounded-full text-black font-semibold hover:bg-[#1D8BC9] hover:text-white transition-all"
        >
          Sair
        </button>
      </div>
    </nav>
  );
};

export default SideBar;
