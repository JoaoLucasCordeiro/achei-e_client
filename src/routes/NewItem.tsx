import CardUser from "../components/CardUser";
import SideBar from "../components/SideBar";
import {
  AiOutlineCalendar,
  AiOutlineWarning,
  AiOutlineFileText,
  AiOutlineEdit,
  AiFillCamera,
} from "react-icons/ai";
import profileImage from "../../public/women.jpg";
import { ChangeEvent, FormEvent, useState } from "react";

interface Item {
  estado: string;
  categoria: string;
  descricao: string;
  titulo: string;
  data: string;
  foto: string | null;
}

const NewItem = () => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [item, setItem] = useState<Item>({
    estado: "",
    categoria: "",
    descricao: "",
    titulo: "",
    data: "",
    foto: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setItem({
      ...item,
      [name]: value,
    });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {  
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        const base64WithoutPrefix = base64String.replace(
          /^data:image\/[a-z]+;base64,/,
          ""
        );
        setItem({
          ...item,
          foto: base64WithoutPrefix,
        });
        setPreviewImage(base64String); // Atualiza a imagem de pré-visualização  
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const usuarioId = localStorage.getItem("idUsuario");   
    const url = `https://achei-e-ef3b03158fb0.herokuapp.com/achei-e/novo-post/${usuarioId}`;

    const data = {
      tipo: item.estado, // assuming estado maps to tipo
      item: {
        estado: item.estado,
        categoria: item.categoria,
        descricao: item.descricao,
        titulo: item.titulo,
        data: item.data,
        foto: item.foto,
      },
    };

    console.log("Enviando dados:", data);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      console.log("Resposta recebida:", responseData);

      if (response.ok) {
        alert("Item criado com sucesso!");
      } else {
        alert("Falha ao criar o item.");
      }
    } catch (error) {
      console.error("Erro ao criar o item:", error);
      alert("Erro ao criar o item. Por favor, tente novamente.");
    }
  };

  return (
    <main className="flex">
      <div className="md:w-[20vw] border-r-[1px] border-[#1D8BC9] h-screen">
        <SideBar />
      </div>

      <div className="flex flex-col items-center w-full h-screen">
        <h1 className="sm:mr-[55%] mr-0 text-5xl font-bold mt-[3rem]">Novo Item</h1>

        <div className="flex flex-col items-center justify-around w-full">
          <div className="flex flex-col sm:w-[50vw] w-screen h-screen gap-5 px-8">
            <div className="flex flex-col items-center justify-center mt-10 cursor-pointer">
              <div className="flex flex-col items-center justify-center gap-5">
                {!previewImage ? (
                  <AiFillCamera size={150} />
                ) : (
                  <img
                    src={previewImage}
                    alt="Imagem Selecionada"
                    className="w-[200px] h-[200px] rounded-xl"
                  />
                )}
              </div>

              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="text-base text-black
              file:mr-5 file:py-1 file:px-3 file:border-[1px]
              file:text-base file:font-medium file:outline-none file:border-none
              file:rounded-[5px]
              file:bg-[#1D8BC9] file:text-white file:cursor-pointer
              hover:file:bg-[#4ea6d9] file:transition-all file:duration-300"
              />
            </div>

            <div className="flex items-center border-b-[1px] border-[#bdbdbd] w-full">
              <AiOutlineWarning size={24} />
              <select
                name="estado"
                className="w-full outline-none placeholder:text-gray-300 p-2 bg-transparent"
                value={item.estado}
                onChange={handleChange}
              >
                <option value="">Estado do item</option>
                <option value="ENCONTRADO">Achado</option>
                <option value="PERDIDO">Perdido</option>
                <option value="DEVOLVIDO">Devolvido</option>
              </select>
            </div>

            <div className="flex items-center border-b-[1px] border-[#bdbdbd] w-full">
              <AiOutlineEdit size={24} />
              <input
                type="text"
                name="titulo"
                className="w-full outline-none placeholder:text-gray-300 p-2 bg-transparent"
                placeholder="Título"
                value={item.titulo}
                onChange={handleChange}
              />
            </div>

            <div className="flex items-center border-b-[1px] border-[#bdbdbd] w-full">
              <AiOutlineEdit size={24} />
              <select
                name="categoria"
                className="w-full outline-none placeholder:text-gray-300 p-2 bg-transparent"
                value={item.categoria}
                onChange={handleChange}
              >
                <option value="">Selecione a categoria</option>
                <option value="ELETRONICO">Eletrônico</option>
                <option value="VESTUARIO">Vestuário</option>
                <option value="CHAVES">Chaves</option>
                <option value="DOCUMENTOS">Documentos</option>
                <option value="CARTEIRA">Carteira</option>
                <option value="OCULOS">Óculos</option>
                <option value="BOLSA_MOCHILA">Bolsa/Mochila</option>
                <option value="ACESSORIOS">Acessórios</option>
                <option value="LIVROS">Livros</option>
                <option value="BRINQUEDOS">Brinquedos</option>
                <option value="INSTRUMENTOS_MUSICAIS">
                  Instrumentos Musicais
                </option>
                <option value="INSTRUMENTOS_DE_ESCRITA">
                  Instrumentos de Escrita
                </option>
                <option value="ITENS_DE_ESPORTE">Itens de Esporte</option>
                <option value="FERRAMENTAS">Ferramentas</option>
                <option value="EQUIPAMENTOS_FOTOGRAFICOS">
                  Equipamentos Fotográficos
                </option>
                <option value="APARELHOS_DE_COZINHA">
                  Aparelhos de Cozinha
                </option>
                <option value="ARTIGOS_DE_PAPELARIA">
                  Artigos de Papelaria
                </option>
                <option value="PRODUTOS_DE_BELEZA">Produtos de Beleza</option>
                <option value="OUTROS">Outros</option>
              </select>
            </div>

            <div className="flex items-center border-b-[1px] border-[#bdbdbd] w-full">
              <AiOutlineFileText size={24} />
              <input
                type="text"
                name="descricao"
                className="w-full outline-none placeholder:text-gray-300 p-2 bg-transparent"
                placeholder="Descrição"
                value={item.descricao}
                onChange={handleChange}
              />
            </div>

            <div className="flex items-center border-b-[1px] border-[#bdbdbd] w-full">
              <AiOutlineCalendar size={24} />
              <input
                type="text"
                name="data"
                className="w-full outline-none placeholder:text-gray-300 p-2 bg-transparent"
                placeholder="Data"
                value={item.data}
                onChange={handleChange}
              />
            </div>

            <button
              className="bg-[#1D8BC9] w-full p-3 rounded-full text-xl text-white font-semibold outline-none border-none hover:bg-[#38779c] transition-all duration-300"
              onClick={handleSubmit}
            >
              Publicar
            </button>
          </div>
        </div>
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

export default NewItem;
