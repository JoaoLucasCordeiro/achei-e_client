import { useState } from "react";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const data = {
      email,
      senha: password,
    };
  
    console.log('Sending data:', data);
  
    try {
      const response = await fetch(
        "https://achei-e-ef3b03158fb0.herokuapp.com/achei-e/login",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      const responseData = await response.json();
  
      console.log('Server response:', responseData);
  
      if (response.ok) {
        toast.success("Login realizado com sucesso!");
        navigate("/home");
      } else {
        toast.error("Algo deu errado. Por favor, tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao tentar fazer login:", error);
      toast.error("Algo deu errado. Por favor, tente novamente.");
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
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-10">
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

          <button type="submit" className="bg-[#1D8BC9] w-[320px] p-3 rounded-full text-xl text-white font-semibold outline-none border-none hover:bg-[#38779c] transition-all duration-300">
            Entrar
          </button>

          <span className="text-[#000000] font-bold">
            Ainda não possui uma conta?
          </span>

          <Link to="/register" className="w-full">
            <button className="bg-[#1D8BC9] w-[320px] p-3 rounded-full text-xl text-white font-semibold outline-none border-none hover:bg-[#38779c] transition-all duration-300">
              Cadastre-se
            </button>
          </Link>
        </form>

        <span className="text-[#000000] font-bold mb-10">Esqueci minha senha</span>

      </div>
      <ToastContainer />
    </main>
  );
};

export default Signin;
