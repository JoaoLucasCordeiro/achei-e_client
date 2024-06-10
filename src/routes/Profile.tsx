import CardUser from "../components/CardUser";
import SideBar from "../components/SideBar";
import { AiOutlineWhatsApp } from "react-icons/ai";

// images
import profileImage from "../../public/women.jpg";

const Profile = () => {
  return (
    <main className="flex">
      <div className="border-r-[1px] border-[#1D8BC9] h-screen w-[20vw]">
        <SideBar />
      </div>

      <div className="flex flex-col items-center w-[60vw] h-screen">
        <h1 className="mr-[55%] text-5xl font-bold mt-[3rem]">Perfil</h1>

        <div className="flex items-center justify-around w-full">
          <div className="flex flex-col w-[50vw] h-screen gap-5">
            <div className="flex items-center gap-10 ml-[8%] mt-10">
              <img
                src={profileImage}
                alt="Usuário"
                className="w-[200px] h-[200px] rounded-full"
              />
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl text-[#1D8BC9] font-bold">
                  Maria Silva
                </h3>
                <p className="text-xl font-semibold">Engenharia De Software</p>
                <p className="text-xl font-semibold flex items-center gap-2">
                  <AiOutlineWhatsApp size={24} className="text-[#1D8BC9]" />
                  <span className="text-black">(87) 98113-2735</span>
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-5">
              <button className="bg-[#D9D9D9] hover:bg-[#1D8BC9] hover:text-white rounded-3xl p-1 w-[120px] font-bold text-[#5B5B5B] transition-all duration-300">
                Perdidos
              </button>
              <button className="bg-[#D9D9D9] hover:bg-[#1D8BC9] hover:text-white rounded-3xl p-1 w-[120px] font-bold text-[#5B5B5B] transition-all duration-300">
                Achados
              </button>
              <button className="bg-[#D9D9D9] hover:bg-[#1D8BC9] hover:text-white rounded-3xl p-1 w-[120px] font-bold text-[#5B5B5B] transition-all duration-300">
                Editar Perfil
              </button>
            </div>

            <div className="flex items-center flex-wrap gap-2 justify-center">
              <h1 className="text-3xl text-[#1D8BC9] font-bold text-center mt-4">Nenhum post</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="border-l-[1px] border-[#1D8BC9] h-screen w-[20vw] flex flex-col items-center">
        <h2 className="text-[#1D8BC9] text-xl font-bold text-center mt-[30%] mb-5">
          Essas pessoas podem te ajudar
        </h2>

        <div className="flex flex-col items-center gap-5">
          <CardUser
            imageUrl={profileImage}
            altText="Usuário do Achei-e"
            name="Maria Silva"
            course="Engenharia De Software"
          />

          <CardUser
            imageUrl={profileImage}
            altText="Usuário do Achei-e"
            name="Maria Silva"
            course="Engenharia De Software"
          />
        </div>
      </div>
    </main>
  );
};

export default Profile;
