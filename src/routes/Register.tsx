import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
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


  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [curso, setCurso] = useState('');
  const [periodo, setPeriodo] = useState('');
  const [telefone, setTelefone] = useState('');
  const [foto, setFoto] = useState<File | null>(null);

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
  
    console.log('Cadastrando pessoa com esses dados:', data);
  
    try {
      const response = await fetch('https://achei-e-ef3b03158fb0.herokuapp.com/achei-e/cadastro', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      const responseData = await response.json();
      console.log('Dados da pessoa cadastrada:', responseData);

      if (response.ok) {
        toast.success('Usuário criado com sucesso!');
        navigate('/');
      } else {
        toast.error('Algo deu errado. Por favor, tente novamente.');
      }
    } catch (error) {
      console.error('Erro na hora do cadastro:', error);
      toast.error('Algo deu errado. Por favor, tente novamente.');
    }
  };
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFoto(e.target.files[0]);
      console.log('Imagem selecionada:', e.target.files[0]);
    }
  };

  console.log('Estado atual:', { nome, sobrenome, email, senha, curso, periodo, telefone, foto });
  return (
    <main className="flex flex-col items-center justify-center w-full h-screen">
        <ToastContainer />
      <h1 className="mr-[37%] text-5xl font-bold mt-[10rem]">Cadastre-se</h1>

      <div className="flex items-center justify-around w-full">
        <div className="flex flex-col w-[50vw] h-screen gap-10">
          <div className="flex flex-col items-center justify-center mt-10 cursor-pointer">
            <AiFillCamera size={150} />
            <span className="text-2xl font-semibold text-[#1D8BC9]">
              Selecionar Imagem de Perfil
            </span>
            <input type="file" onChange={handleImageChange} />
          </div>

          <div className="flex items-center border-b-[1px] border-[#bdbdbd] w-full">
            <AiOutlineUser size={24} />
            <input
              type="text"
              className="w-full outline-none placeholder:text-gray-300 p-2"
              placeholder="Digite seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div className="flex items-center border-b-[1px] border-[#bdbdbd] w-full">
            <AiOutlineUser size={24} />
            <input
              type="text"
              className="w-full outline-none placeholder:text-gray-300 p-2"
              placeholder="Digite seu sobrenome"
              value={sobrenome}
              onChange={(e) => setSobrenome(e.target.value)}
            />
          </div>

          <div className="flex items-center border-b-[1px] border-[#bdbdbd] w-full">
            <AiOutlineMail size={24} />
            <input
              type="email"
              className="w-full outline-none placeholder:text-gray-300 p-2"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex items-center border-b-[1px] border-[#bdbdbd] w-full">
            <AiOutlineLock size={24} />
            <input
              type="password"
              className="w-full outline-none placeholder:text-gray-300 p-2"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>

          <div className="flex items-center border-b-[1px] border-[#bdbdbd] w-full">
            <AiOutlineBook size={24} />
            <input
              type="text"
              className="w-full outline-none placeholder:text-gray-300 p-2"
              placeholder="Qual o seu curso?"
              value={curso}
              onChange={(e) => setCurso(e.target.value)}
            />
          </div>

          <div className="flex items-center border-b-[1px] border-[#bdbdbd] w-full">
            <AiOutlineBook size={24} />
            <input
              type="text"
              className="w-full outline-none placeholder:text-gray-300 p-2"
              placeholder="Qual o seu período?"
              value={periodo}
              onChange={(e) => setPeriodo(e.target.value)}
            />
          </div>

          <div className="flex items-center border-b-[1px] border-[#bdbdbd] w-full">
            <AiOutlinePhone size={24} />
            <input
              type="tel"
              className="w-full outline-none placeholder:text-gray-300 p-2"
              placeholder="Telefone para contato"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
          </div>

          <button onClick={handleSubmit} className="bg-[#1D8BC9] w-full p-3 rounded-full text-xl text-white font-semibold outline-none border-none hover:bg-[#38779c] transition-all duration-300">
            Cadastrar-se
          </button>
        </div>
      </div>
    </main>
  );
};

export default Register;