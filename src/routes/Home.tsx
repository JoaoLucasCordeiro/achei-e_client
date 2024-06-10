import CardUser from "../components/CardUser";
import CardPost from "../components/CardPost";
import SideBar from "../components/SideBar";
import { useEffect, useState } from "react";

// imagem default em caso de não ter foto do item
import defaultImage from "../../public/deafult-img-photo.svg";
import profileImage from "../../public/women.jpg";


interface User {
  nome: string;
  sobrenome: string;
  curso: string;
  periodo: string;
  telefone: string;
  foto: string;
}

interface Item {
  estado: string;
  categoria: string;
  descricao: string;
  titulo: string;
  data: string;
  foto: string;
}

interface Post {
  tipo: string;
  dataCriacao: string;
  dataRemocao: string;
  usuario: User;
  item: Item;
  comentarios: string[];
}

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("https://achei-e-ef3b03158fb0.herokuapp.com/achei-e/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <main className="flex">
      <div className="border-r-[1px] border-[#1D8BC9] h-screen w-[20vw]">
        <SideBar />
      </div>

      <div className="flex flex-col items-center w-[60vw] h-screen mb-10">
        <h1 className="mr-[65%] text-5xl font-bold mt-[3rem]">Home</h1>
        {posts.map((post) => (
          <CardPost
            imageUrl={post.item.foto ? post.item.foto : defaultImage}
            altText={post.item.titulo}
            title={post.item.titulo}
            description={post.item.descricao}
            lostBy={post.usuario.nome}
            date={post.dataCriacao}
            status={post.item.estado}
          />
        ))}
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

export default Home;
