import React from "react";
import defaultImage from "../../public/deafult-img-photo.svg";
import { FaUser, FaWhatsapp, FaCalendarAlt } from "react-icons/fa"; // Importa os ícones necessários

type CardPostProps = {
  imageUrl: string;
  altText: string;
  title: string;
  description: string;
  lostBy: string;
  phone: string; // Adiciona a definição de tipo para o telefone
  date: string;
  status: string;
  onClick: () => void;
};

const CardPost: React.FC<CardPostProps> = ({
  imageUrl, altText, title, description, lostBy, phone, date, status, onClick
}: CardPostProps) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = defaultImage; // Define uma imagem padrão em caso de erro
  };

  const statusColor =
    status === "ENCONTRADO"
      ? "text-green-600"
      : status === "PERDIDO"
      ? "text-red-500"
      : "text-purple-500";

  return (
    <div onClick={onClick} className="flex flex-col md:flex-row items-center justify-around w-full max-w-[700px] h-auto py-6 md:py-10 rounded-3xl bg-[#ebebeb] mt-5 cursor-pointer shadow-lg">
      <div className="w-full md:w-[30%]">
        <img
          src={imageUrl}
          alt={altText}
          className="w-full h-auto md:rounded-3xl"
          onError={handleImageError} // Trata o erro de carregamento da imagem
        />
      </div>
      <div className="flex flex-col justify-center gap-3 w-full md:w-[70%] px-4 md:px-6">
        <h3 className="text-xl md:text-2xl text-[#1D8BC9] font-bold">{title}</h3>
        <p className="text-base md:text-lg text-black font-semibold max-w-full">{description}</p>
        <div className="flex flex-col md:flex-row gap-2 items-center">
          <p className="text-base text-black font-semibold flex items-center gap-2">
            <FaUser className="text-[#1D8BC9]" />{" "}
            <span className="text-base text-[#1D8BC9] font-semibold">{lostBy}</span>
          </p>
          <p className="text-base text-black font-semibold flex items-center gap-2">
          <a href={`https://wa.me/55${phone}`} target="_blank" className="flex items-center gap-1">
            <FaWhatsapp className="text-[#1D8BC9]" />{" "}
            <span className="text-base text-[#1D8BC9] font-semibold">{phone}</span>
          </a>
          </p>
          <p className="text-base text-black font-semibold flex items-center gap-2">
            <FaCalendarAlt className="text-[#1D8BC9]" />{" "}
            <span className="text-base text-[#1D8BC9] font-semibold">{date}</span>{" "}
          </p>
        </div>
        <span className={`text-base md:text-lg font-extrabold ${statusColor}`}>{status}</span>
      </div>
    </div>
  );
};

export default CardPost;