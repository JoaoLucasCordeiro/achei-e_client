import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import {
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineLock,
  AiOutlinePhone,
  AiOutlineBook,
  AiFillCamera,
} from "react-icons/ai";

const Register = () => {
  const navigate = useNavigate();

  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [curso, setCurso] = useState("");
  const [periodo, setPeriodo] = useState("");
  const [telefone, setTelefone] = useState("");
  const [foto, setFoto] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      nome,
      sobrenome,
      email,
      senha,
      curso,
      periodo,
      telefone,
      foto,
    };

    console.log("Cadastrando pessoa com esses dados:", data);

    try {
      const response = await fetch(
        "https://achei-e-ef3b03158fb0.herokuapp.com/achei-e/cadastro",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const responseData = await response.json();
      console.log("Dados da pessoa cadastrada:", responseData);

      if (response.ok) {
        toast.success("Usuário criado com sucesso!");
        navigate("/");
      } else {
        toast.error("Algo deu errado. Por favor, tente novamente.");
      }
    } catch (error) {
      console.error("Erro na hora do cadastro:", error);
      toast.error("Algo deu errado. Por favor, tente novamente.");
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        const base64WithoutPrefix = base64String.replace(
          /^data:image\/[a-z]+;base64,/,
          ""
        );
        setFoto(base64WithoutPrefix);
        setPreviewImage(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  console.log("Estado atual:", {
    nome,
    sobrenome,
    email,
    senha,
    curso,
    periodo,
    telefone,
    foto,
  });
  return (
    <main className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14">
      <ToastContainer />
      <h1 className="sm:mr-[37%] mr-0 text-5xl font-bold sm:mt-[3rem] mt-5">Cadastre-se</h1>

      <div className="flex items-center justify-center w-full">
        <div className="flex flex-col sm:w-[50vw] w-full h-screen gap-10 px-8">
          <div className="flex flex-col items-center justify-center mt-10 cursor-pointer">
            <div className="flex flex-col items-center justify-center">
              {previewImage ? (
                <img
                  src={previewImage}
                  alt="Preview"
                  className="w-[160px] h-[160px] rounded-full"
                />
              ) : (
                <AiFillCamera size={150} />
              )}
            </div>

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="text-base text-black
              file:mr-5 file:py-1 file:px-3 file:border-[1px]
              file:text-base file:font-medium file:outline-none file:border-none
              file:rounded-[5px]
              file:bg-[#1D8BC9] file:text-white file:cursor-pointer
              hover:file:bg-[#4ea6d9] file:transition-all file:duration-300"
            />
          </div>

          <div className="flex items-center border-b-[1px] border-[#bdbdbd] w-full">
            <AiOutlineUser size={24} />
            <input
              type="text"
               className="w-full outline-none placeholder:text-gray-300 p-2 bg-transparent"
              placeholder="Digite seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div className="flex items-center border-b-[1px] border-[#bdbdbd] w-full">
            <AiOutlineUser size={24} />
            <input
              type="text"
              className="w-full outline-none placeholder:text-gray-300 p-2 bg-transparent"
              placeholder="Digite seu sobrenome"
              value={sobrenome}
              onChange={(e) => setSobrenome(e.target.value)}
            />
          </div>

          <div className="flex items-center border-b-[1px] border-[#bdbdbd] w-full">
            <AiOutlineMail size={24} />
            <input
              type="email"
             className="w-full outline-none placeholder:text-gray-300 p-2 bg-transparent"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex items-center border-b-[1px] border-[#bdbdbd] w-full">
            <AiOutlineLock size={24} />
            <input
              type="password"
              className="w-full outline-none placeholder:text-gray-300 p-2 bg-transparent"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>

          <div className="flex items-center border-b-[1px] border-[#bdbdbd] w-full">
            <AiOutlineBook size={24} />
            <select
              className="w-full outline-none bg-transparent placeholder:text-gray-300 p-2"
              value={curso}
              onChange={(e) => setCurso(e.target.value)}
            >
              <option value="">Selecione o seu curso</option>
              <option value="ENGENHARIA_DE_SOFTWARE">Engenharia de Software</option>
              <option value="LICENCIATURA_EM_COMPUTACAO">Licenciatura em Computação</option>
              <option value="MEDICINA">Medicina</option>
              <option value="PSICOLOGIA">Psicologia</option>
              <option value="LICENCIATURA_EM_HISTORIA">Licenciatura em História</option>
              <option value="LICENCIATURA_EM_GEOGRAFIA">Licenciatura em Geografia</option>
              <option value="LICENCIATURA_EM_CIENCIAS_BIOLOGICAS">Licenciatura em Ciências Biológicas</option>
              <option value="LICENCIATURA_EM_LETRAS">Licenciatura em Letras</option>
              <option value="LICENCIATURA_EM_PEDAGOGIA">Licenciatura em Pedagogia</option>
              <option value="LICENCIATURA_EM_MATEMATICA">Licenciatura em Matemática</option>
            </select>
          </div>

          <div className="flex items-center border-b-[1px] border-[#bdbdbd] w-full">
  <AiOutlineBook size={24} />
  <select
    className="w-full outline-none bg-transparent placeholder:text-gray-300 p-2"
    value={periodo}
    onChange={(e) => setPeriodo(e.target.value)}
  >
    <option value="">Selecione o seu período</option>
    <option value="PRIMEIRO">Primeiro</option>
    <option value="SEGUNDO">Segundo</option>
    <option value="TERCEIRO">Terceiro</option>
    <option value="QUARTO">Quarto</option>
    <option value="QUINTO">Quinto</option>
    <option value="SEXTO">Sexto</option>
    <option value="SETIMO">Sétimo</option>
    <option value="OITAVO">Oitavo</option>
    <option value="NONO">Nono</option>
    <option value="DECIMO">Décimo</option>
  </select>
</div>

          <div className="flex items-center border-b-[1px] border-[#bdbdbd] w-full">
            <AiOutlinePhone size={24} />
            <input
              type="tel"
              className="w-full outline-none bg-transparent placeholder:text-gray-300 p-2"
              placeholder="Telefone para contato"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
          </div>

          <button
            onClick={handleSubmit}
            className="bg-[#1D8BC9] w-full p-3 rounded-full text-xl text-white font-semibold outline-none border-none hover:bg-[#38779c] transition-all duration-300"
          >
            Cadastrar-se
          </button>
        </div>
      </div>
    </main>
  );
};

export default Register;
