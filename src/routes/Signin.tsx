import { useState } from 'react';
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const users = [
    { email: 'lucas@email.com', password: 'senha1' },
    { email: 'pedro@email.com', password: 'senha2' },
    { email: 'matheus@email.com', password: 'senha3' },
  ];

  const handleLogin = () => {
    if (!email || !password) {
      toast.warn('Por favor, preencha todos os campos.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      navigate('/Home');
    } else {
      toast.error('Usuário ou senha estão incorretos.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <main className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14">
      <img
        src="/logo/logo-acheie.svg"
        alt="Logo Achei-e"
        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6"
      />

      <div className="flex flex-col gap-10 items-center justify-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6">
        <div className="flex items-center border-b-[1px] border-[#bdbdbd] w-full">
          <AiOutlineMail className="text-2xl" />
          <input
            type="text"
            className="w-full outline-none placeholder:text-gray-300 p-2"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex items-center border-b-[1px] border-[#bdbdbd] w-full">
          <AiOutlineLock className="text-2xl" />
          <input
            type="password"
            className="w-full outline-none placeholder:text-gray-300 p-2"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <span className="text-[#000000] font-bold">Esqueci minha senha</span>

        <div className="flex flex-col items-center justify-center gap-5 w-full">
          <button
            className="bg-[#1D8BC9] w-full p-3 rounded-full text-xl text-white font-semibold outline-none border-none hover:bg-[#38779c] transition-all duration-300"
            onClick={handleLogin}
          >
            Entrar
          </button>

          <span className="text-[#000000] font-bold">
            Ainda não possui uma conta?
          </span>

          <Link to="/register" className="w-full">
            <button className="bg-[#1D8BC9] w-full p-3 rounded-full text-xl text-white font-semibold outline-none border-none hover:bg-[#38779c] transition-all duration-300">
              Cadastre-se
            </button>
          </Link>
        </div>
      </div>
      <ToastContainer />
    </main>
  );
};

export default Signin;
