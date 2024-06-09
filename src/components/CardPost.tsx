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
  return (
    <div className="flex items-center justify-around w-[50vw] h-[300px] rounded-3xl bg-[#D9D9D9] mt-5 cursor-pointer py-5">
      {/* imagem do item */}
      <div>
        <img
          src={imageUrl}
          alt={altText}
          className="w-[170px] h-[170px] rounded-3xl"
        />
      </div>
      {/* descrição do item */}
      <div className="flex flex-col gap-3">
        <h3 className="text-2xl text-[#1D8BC9] font-bold">{title}</h3>
        <p className="text-base text-black font-semibold">{description}</p>
        
        <p className="text-base text-black font-semibold">
          Perdido Por: <span  className="text-base text-[#1D8BC9] font-semibold">{lostBy}</span>
        </p>
        <p className="text-base text-black font-semibold">
          Data: <span className="text-base text-[#1D8BC9] font-semibold">{date}</span>{" "}
        </p>
        <span className="text-base font-semibold text-[#FF9900]">{status}</span>
      </div>
    </div>
  )
}

export default CardPost;