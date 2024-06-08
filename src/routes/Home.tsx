import CardUser from "../components/CardUser";
import CardPost from "../components/CardPost";
import SideBar from "../components/SideBar";

const Home = () => {
  return (
    <main className="flex">
      <div className="border-r-[1px] border-[#1D8BC9] h-screen w-[20vw]">
        <SideBar />
      </div>
     
      <div className="flex flex-col items-center w-[60vw] h-screen mb-10">
      <h1 className="mr-[55%] text-5xl font-bold mt-[3rem]">Home</h1>
        {/* card post */}
        <CardPost
          imageUrl="public/items/item.jpeg"
          altText="Item perdido"
          title="Garrafa Térmica"
          description="Olá pessoal, eu perdi uma garrafa semelhante a essa na UPE..."
          lostBy="Maria"
          date="10/05/2024"
          status="Item perdido"
        />
        <CardPost
          imageUrl="public/items/item.jpeg"
          altText="Item perdido"
          title="Garrafa Térmica"
          description="Olá pessoal, eu perdi uma garrafa semelhante a essa na UPE..."
          lostBy="Maria"
          date="10/05/2024"
          status="Item perdido"
        />

        <CardPost
          imageUrl="public/items/item.jpeg"
          altText="Item perdido"
          title="Garrafa Térmica"
          description="Olá pessoal, eu perdi uma garrafa semelhante a essa na UPE..."
          lostBy="Maria"
          date="10/05/2024"
          status="Item perdido"
        />
      </div>
      <div className="border-l-[1px] border-[#1D8BC9] h-screen w-[20vw] flex flex-col items-center">
        <h2 className="text-[#1D8BC9] text-xl font-bold text-center mt-[30%] mb-5">
          Essas pessoas podem te ajudar
        </h2>

        <div className="flex flex-col items-center gap-5">
          <CardUser
            imageUrl="public/women.jpg"
            altText="Usuário do Achei-e"
            name="Maria Silva"
            course="Engenharia De Software"
          />

           <CardUser
            imageUrl="public/women.jpg"
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
