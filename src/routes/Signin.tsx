import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai';

const Signin = () => {
  return (
    <main className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14">
      <img src="/logo/logo-acheie.svg" alt="Logo Achei-e" className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6" />

      <div className="flex flex-col gap-10 items-center justify-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6">
        
        <div className="flex items-center border-b-[1px] border-[#bdbdbd] w-full">
          <AiOutlineMail className='text-2xl'/>
          <input
            type="text"
            className="w-full outline-none placeholder:text-gray-300 p-2"
            placeholder="Digite seu email"
          />
        </div>

        <div className="flex items-center border-b-[1px] border-[#bdbdbd] w-full">
          <AiOutlineLock className='text-2xl'/>
          <input
            type="text"
            className="w-full outline-none placeholder:text-gray-300 p-2"
            placeholder="Digite sua senha"
          />
        </div>

        <span className="text-[#00000] font-bold">Esqueci minha senha</span>  
    
        <div className="flex flex-col items-center justify-center gap-5 w-full">
          <button className="bg-[#1D8BC9] w-full p-3 rounded-full text-xl text-white font-semibold outline-none border-none">Entrar</button>
          <span className="text-[#00000] font-bold">Ainda não possui uma conta?</span>
          <button className="bg-[#1D8BC9] w-full p-3 rounded-full text-xl text-white font-semibold outline-none border-none">Cadastre-se</button>
        </div>
      </div>
    </main>
  );
};

export default Signin;