type CardProfileItemProps = {
    imageUrl: string;
    altText: string;
    title: string;
    description: string;
    lostBy: string;
    date: string;
    status: string;
  };
  
  const CardProfileItem = ({ imageUrl, altText, title, description, lostBy, date, status }: CardProfileItemProps) => {
    return (
      <div className="flex items-center justify-around w-[22vw] h-[220px] rounded-3xl bg-[#D9D9D9] cursor-pointer">
        {/* imagem do item */}
        <div>
          <img
            src={imageUrl}
            alt={altText}
            className="w-[180px] h-[180px] rounded-3xl"
          />
        </div>
        {/* descrição do item */}
        <div className="flex flex-col gap-2 w-[180px]">
          <h3 className="text-xl text-[#1D8BC9] font-bold">{title}</h3>
          <p className="text-sm text-black font-semibold">{description}</p>
          
          <p className="text-sm text-black font-semibold">
            Perdido Por: <span  className="text-base text-[#1D8BC9] font-semibold">{lostBy}</span>
          </p>
          <p className="text-sm text-black font-semibold">
            Data: <span className="text-sm text-[#1D8BC9] font-semibold">{date}</span>{" "}
          </p>
          <span className="text-base font-semibold text-[#FF9900]">{status}</span>
        </div>
      </div>
    )
  }
  
  export default CardProfileItem;