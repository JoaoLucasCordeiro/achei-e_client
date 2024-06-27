import { useEffect, useState } from 'react';
import CardUser from "../components/CardUser";
import SideBar from "../components/SideBar";
import { AiOutlineWhatsApp } from "react-icons/ai";
import profileImage from "../../public/women.jpg";
import { FaUser } from 'react-icons/fa';

const Profile = () => {
  const [userData, setUserData] = useState({
    nome: '',
    sobrenome: '',
    curso: '',
    telefone: '',
    foto: '',
  });

  useEffect(() => {
    const usuarioId = localStorage.getItem("idUsuario");
    if (usuarioId) {
      fetch(`https://achei-e-ef3b03158fb0.herokuapp.com/achei-e/usuario/${usuarioId}`)
        .then(response => response.json())
        .then(data => {
          const base64Prefix = "data:image/jpeg;base64,";
          const foto = data.foto.startsWith('/9j/') ? base64Prefix + data.foto : data.foto;

          setUserData({
            nome: data.nome,
            sobrenome: data.sobrenome,
            curso: data.curso.replace('_', ' ').toLowerCase(),
            telefone: data.telefone,
            foto,
          });
        })
        .catch(error => {
          console.error("Erro ao buscar dados do usuário:", error);
        });
    }
  }, []);

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
              {userData.foto ? (
                <img
                  src={userData.foto}
                  alt={`${userData.nome} ${userData.sobrenome}`}
                  className="w-[120px] h-[120px] rounded-full"
                />
              ) : (
                <FaUser size={120} className="text-[#1D8BC9]" />
              )}
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl text-[#1D8BC9] font-bold">
                  {`${userData.nome} ${userData.sobrenome}`}
                </h3>
                <p className="text-xl font-semibold">{userData.curso.charAt(0).toUpperCase() + userData.curso.slice(1)}</p>
                <p className="text-xl font-semibold flex items-center gap-2">
                  <AiOutlineWhatsApp size={24} className="text-[#1D8BC9]" />
                  <span className="text-black">{userData.telefone}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-5 mt-10">
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
        </div>
      </div>
    </main>
  );
};

export default Profile;
