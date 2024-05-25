import SideBar from "../components/SideBar";


const Home = () => {
  return (
    <main className="flex">
      <div>
        <SideBar />
      </div>
      <div className="border-r-[1px] border-[#1D8BC9] h-screen"></div>
      <div></div>
    </main>
  );
};

export default Home;
