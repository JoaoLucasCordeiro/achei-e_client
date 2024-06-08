import CardUser from "../components/CardUser";
import CardPost from "../components/CardPost";
import SideBar from "../components/SideBar";
import {
  AiOutlineCalendar,
  AiOutlineWarning,
  AiOutlineFileText,
  AiOutlineEdit,
  AiFillCamera,
  AiOutlineDollar,
} from "react-icons/ai";

const NewItem = () => {
  return (
    <main className="flex">
      <div className="border-r-[1px] border-[#1D8BC9] h-screen w-[20vw]">
        <SideBar />
      </div>

      <div className="flex flex-col items-center w-[60vw] h-screen">

        <h1 className="mr-[55%] text-5xl font-bold mt-[3rem]">Novo Item</h1>

        <div className="flex items-center justify-around w-full">

        <div className="flex flex-col w-[50vw] h-screen gap-5">

          <div className="flex flex-col items-center justify-center mt-10 cursor-pointer">
            <AiFillCamera size={150} />
            <span className="text-2xl font-semibold text-[#1D8BC9]">Selecionar Imagem</span>
          </div>
          
          <div className="flex items-center border-b-[1px] border-[#bdbdbd] w-full">
            <AiOutlineEdit size={24} />
            <input
              type="text"
              className="w-full outline-none placeholder:text-gray-300 p-2"
              placeholder="Nome do item"
            />
          </div>

          <div className="flex items-center border-b-[1px] border-[#bdbdbd] w-full">
            <AiOutlineFileText size={24} />
            <input
              type="test"
              className="w-full outline-none placeholder:text-gray-300 p-2"
              placeholder="Descrição"
            />
          </div>

          <div className="flex items-center border-b-[1px] border-[#bdbdbd] w-full">
            <AiOutlineCalendar size={24} />
            <input
              type="test"
              className="w-full outline-none placeholder:text-gray-300 p-2"
              placeholder="Data"
            />
          </div>

          <div className="flex items-center border-b-[1px] border-[#bdbdbd] w-full">
            <AiOutlineWarning size={24} />
            <select className="w-full outline-none placeholder:text-gray-300 p-2">
              <option value="">Item achado ou perdido?</option>
              <option value="achado">Achado</option>
              <option value="perdido">Perdido</option>
            </select>
          </div>

          <div className="flex items-center border-b-[1px] border-[#bdbdbd] w-full">
            {/* algum icone que remeta a dinheiro */}
            <AiOutlineDollar size={24} />
            <select className="w-full outline-none placeholder:text-gray-300 p-2">
              <option value="">Recompensa?</option>
              <option value="sim">Sim</option>
              <option value="nao">Não</option>
            </select>
          </div>

          <div className="flex items-center border-b-[1px] border-[#bdbdbd] w-full">
            <AiOutlineDollar size={24} />{" "}
            <input
              type="number"
              className="w-full outline-none placeholder:text-gray-300 p-2"
              placeholder="Valor da recompensa"
            />{" "}
          </div>

          <button className="bg-[#1D8BC9] w-full p-3 rounded-full text-xl text-white font-semibold outline-none border-none hover:bg-[#38779c] transition-all duration-300">
              Publicar
            </button>
        </div>
      </div>
      </div>

      

      <div className="border-l-[1px] border-[#1D8BC9] h-screen w-[20vw] flex flex-col items-center">
        <h2 className="text-[#1D8BC9] text-xl font-bold text-center mt-[30%] mb-5">
          Essas pessoas podem te ajudar
        </h2>

        <div className="flex flex-col items-center gap-5">
          <CardUser
            imageUrl="public/women.jpg"
            altText="Usuário do Achei-e"
            name="Maria Silva"
            course="Engenharia De Software"
          />

          <CardUser
            imageUrl="public/women.jpg"
            altText="Usuário do Achei-e"
            name="Maria Silva"
            course="Engenharia De Software"
          />
        </div>
      </div>
    </main>
  );
};

export default NewItem;
