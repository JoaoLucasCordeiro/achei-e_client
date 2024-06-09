type CardUserProps = {
    imageUrl: string;
    altText: string;
    name: string;
    course: string;
  };
  
  const CardUser = ({ imageUrl, altText, name, course }: CardUserProps) => {
    return (
      <div className="flex flex-col items-center justify-center bg-[#D9D9D9] w-[240px] rounded-3xl p-4 cursor-pointer">
        <div className="flex items-center gap-2 w-full">
          <img
            src={imageUrl}
            alt={altText}
            className="w-[70px] h-[70px] rounded-full"
          />
          <div className="flex flex-col">
            <h3 className="text-base text-[#1D8BC9] font-bold">
              {name}
            </h3>
            <p className="text-base text-black">{course}</p>
          </div>
        </div>
      </div>
    )
  }
  
  export default CardUser;