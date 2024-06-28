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
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    // Função para carregar posts
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://achei-e-ef3b03158fb0.herokuapp.com/achei-e/posts?page=${currentPage}`);
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        if (data.length === 0) {
          setHasMore(false); // Não há mais posts para carregar
        } else {
          setPosts([...posts, ...data]); // Adiciona novos posts à lista existente
          setCurrentPage(currentPage + 1); // Incrementa a página atual
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts(); // Carrega os posts ao montar o componente

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    if (scrollHeight - scrollTop === clientHeight && !loading && hasMore) {
      fetchPosts(); // Carrega mais posts quando o usuário chega ao fim da lista
    }
  };

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://achei-e-ef3b03158fb0.herokuapp.com/achei-e/posts?page=${currentPage}`);
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      const data = await response.json();
      if (data.length === 0) {
        setHasMore(false); // Não há mais posts para carregar
      } else {
        setPosts([...posts, ...data]); // Adiciona novos posts à lista existente
        setCurrentPage(currentPage + 1); // Incrementa a página atual
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex">
      <div className="md:w-[20vw] border-r-[1px] border-[#1D8BC9] h-screen">
        <SideBar />
      </div>

      <div
        className="flex flex-col items-center md:w-[60vw] h-screen mb-10 overflow-y-auto"
        onScroll={handleScroll}
      >
        <h1 className="mr-[65%] text-5xl font-bold mt-[3rem]">Home</h1>
        {posts.map((post) => {
          let imageUrl = post.item.foto ? post.item.foto : defaultImage;
          if (imageUrl.startsWith('/9j/')) {
            imageUrl = `data:image/jpeg;base64,${imageUrl}`;
          }
          return (
            <CardPost
              key={post.item.descricao}
              imageUrl={imageUrl}
              altText={post.item.titulo}
              title={post.item.titulo}
              description={post.item.descricao}
              lostBy={post.usuario.nome}
              date={post.dataCriacao}
              status={post.item.estado}
            />
          );
        })}
        {loading && <p>Carregando...</p>}
        {!hasMore && <p>Não há mais posts para carregar.</p>}
      </div>

      <div className="hidden md:flex md:w-[20vw] border-l-[1px] border-[#1D8BC9] h-screen flex-col items-center">
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

export default Home;
