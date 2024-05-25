import SideBar from "../components/SideBar";


const Home = () => {
  return (
    <main className="flex">
      <div className="border-r-[1px] border-[#1D8BC9] h-screen w-[20vw]">
        <SideBar />
      </div>
      <div className="flexflex-col items-center justify-center w-[60vw] h-screen">
       <h1 className="text-[#1D8BC9] text-6xl font-bold text-center mt-[30%]">Haverá posts em breve...</h1>
      </div>
      <div className="border-l-[1px] border-[#1D8BC9] h-screen w-[20vw]">
        <h2 className="text-[#1D8BC9] text-xl font-bold text-center mt-[30%]">Em breve</h2>
      </div>
    </main>
  );
};

export default Home;
