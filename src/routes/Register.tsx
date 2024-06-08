import CardUser from "../components/CardUser";
import SideBar from "../components/SideBar";
import {
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineLock,
  AiOutlinePhone,
  AiOutlineBook,
  AiOutlineEdit,
  AiFillCamera,
} from "react-icons/ai";

const Register = () => {
  return (
    <main className="flex flex-col items-center justify-center w-full h-screen">
      <h1 className="mr-[37%] text-5xl font-bold mt-[10rem]">Cadastre-se</h1>

      <div className="flex items-center justify-around w-full">
        <div className="flex flex-col w-[50vw] h-screen gap-10">
          <div className="flex flex-col items-center justify-center mt-10 cursor-pointer">
            <AiFillCamera size={150} />
            <span className="text-2xl font-semibold text-[#1D8BC9]">
              Selecionar Imagem de Perfil
            </span>
          </div>

          <div className="flex items-center border-b-[1px] border-[#bdbdbd] w-full">
            <AiOutlineUser size={24} />
            <input
              type="text"
              className="w-full outline-none placeholder:text-gray-300 p-2"
              placeholder="Digite seu nome"
            />
          </div>

          <div className="flex items-center border-b-[1px] border-[#bdbdbd] w-full">
            <AiOutlineMail size={24} />
            <input
              type="email"
              className="w-full outline-none placeholder:text-gray-300 p-2"
              placeholder="Digite seu email"
            />
          </div>

          <div className="flex items-center border-b-[1px] border-[#bdbdbd] w-full">
            <AiOutlineLock size={24} />
            <input
              type="password"
              className="w-full outline-none placeholder:text-gray-300 p-2"
              placeholder="Digite sua senha"
            />
          </div>

          <div className="flex items-center border-b-[1px] border-[#bdbdbd] w-full">
            <AiOutlinePhone size={24} />
            <input
              type="tel"
              className="w-full outline-none placeholder:text-gray-300 p-2"
              placeholder="Telefone para contato"
            />
          </div>

          <div className="flex items-center border-b-[1px] border-[#bdbdbd] w-full">
            <AiOutlineBook size={24} />
            <input
              type="text"
              className="w-full outline-none placeholder:text-gray-300 p-2"
              placeholder="Qual o seu curso?"
            />
          </div>

          <button className="bg-[#1D8BC9] w-full p-3 rounded-full text-xl text-white font-semibold outline-none border-none hover:bg-[#38779c] transition-all duration-300">
            Cadastrar-se
          </button>
        </div>
      </div>
    </main>
  );
};

export default Register;