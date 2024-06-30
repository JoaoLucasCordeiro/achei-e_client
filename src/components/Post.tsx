import React from "react";
import defaultImage from "../../public/deafult-img-photo.svg";
import SideBar from "./SideBar";

interface PostProps {
  post: {
    item: {
      estado: string;
      categoria: string;
      descricao: string;
      titulo: string;
      data: string;
      foto: string;
    };
    usuario: {
      nome: string;
    };
  };
}

const Post: React.FC<PostProps> = ({ post }: PostProps) => {
//   const imageUrl = post.item.foto ? post.item.foto : defaultImage;

  const statusColor =
    post.item.estado === "ENCONTRADO"
      ? "text-green-600"
      : post.item.estado === "PERDIDO"
      ? "text-red-500"
      : "text-purple-500";

  return (
    <main className="flex">
      <div className="md:w-[20vw] border-r-[1px] border-[#1D8BC9] h-screen">
        <SideBar />
      </div>
      <div className="flex flex-col items-center justify-center md:w-[60vw] h-screen mb-10 overflow-y-auto">
        <div className="sm:w-[50vw] w-[100vw] flex flex-col p-10 bg-[#ebebeb] rounded-2xl shadow-lg">
          <h1 className="text-4xl font-bold text-[#1D8BC9]">{post.item.titulo}</h1>
          <div className="flex items-center justify-center py-5">
            <img src={defaultImage} alt={post.item.titulo} />
          </div>
          <p className="text-base text-black flex flex-wrap">{post.item.descricao}</p>
          <p className="text-base text-black"><span className="text-[#1D8BC9] font-bold">Autor:</span> {post.usuario.nome}</p>
          <p className="text-base text-black"><span className="text-[#1D8BC9] font-bold">Data:</span> {post.item.data}</p>
          <span className={`text-base md:text-lg font-extrabold ${statusColor}`}>{post.item.estado}</span>
        </div>
      </div>
      <div className="hidden md:flex md:w-[20vw] border-l-[1px] border-[#1D8BC9] flex-col items-center">
        <img src="/logo/logo-acheie.svg" alt="Logo do Achei-e" className="w-[150px] h-[150px]" />
        <p className="text-base text-black text-center">
          Olá, esse é o <span className="font-bold">Achei-</span>
          <span className="text-[#1D8BC9] font-bold">e</span> plataforma de
          achados e perdidos voltada para alunos da UPE campus Garanhuns, para
          saber mais, clique no botão abaixo.
        </p>
        <button className="text-base p-1 bg-[#1D8BC9] rounded-3xl text-white px-2 mt-2">
          Saber Mais
        </button>
      </div>
    </main>
  );
};

export default Post;
