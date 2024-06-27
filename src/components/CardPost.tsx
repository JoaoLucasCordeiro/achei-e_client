type CardPostProps = {
  imageUrl: string;
  altText: string;
  title: string;
  description: string;
  lostBy: string;
  date: string;
  status: string;
};

const CardPost = ({ imageUrl, altText, title, description, lostBy, date, status }: CardPostProps) => {
  console.log("imageUrl:", imageUrl); // Adicione este log para depurar a URL da imagem

  const statusColor = status === "ENCONTRADO" ? "text-green-600" 
                    : status === "PERDIDO" ? "text-red-500" 
                    : "text-purple-500"; 

  return (
    <div className="flex items-center justify-around w-auto min-w-[535px] h-auto min-h-[350px] py-10 rounded-3xl bg-[#ebebeb] mt-5 cursor-pointer shadow-lg">
      {/* imagem do item */}
      <div>
        <img
          src={imageUrl}
          alt={altText}
          className="w-[170px] h-[170px] rounded-3xl"
        />
      </div>
      {/* descrição do item */}
      <div className="flex flex-col gap-3 w-[50%]">
        <h3 className="text-2xl text-[#1D8BC9] font-bold">{title}</h3>
        <p className="text-base text-black font-semibold max-w-[280px]">{description}</p>
        
        <p className="text-base text-black font-semibold">
         Autor: <span className="text-base text-[#1D8BC9] font-semibold">{lostBy}</span>
        </p>
        <p className="text-base text-black font-semibold">
          Data: <span className="text-base text-[#1D8BC9] font-semibold">{date}</span>{" "}
        </p>
        <span className={`text-base font-extrabold ${statusColor}`}>{status}</span>
      </div>
    </div>
  )
}

export default CardPost;