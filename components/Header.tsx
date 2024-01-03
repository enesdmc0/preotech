import React from "react";
import Image from "next/image";

interface Props {
  handleModal:any;
}

const Header: React.FC<Props> = ({handleModal}) => {
  const headerData = {
    Hakkımızda: "hakkimizda",
    Kabiliyetlerimiz: "kabiliyetlerimiz",
    İletişim: "iletisim",
  };

  return (
    <div className="flex items-center justify-between px-5 md:px-10 py-5 bg-[#273747] border-b border-b-white ">
      <Image
        src="/preotech-logo.png"
        className="hidden md:block"
        alt="logo"
        width={150}
        height={150}
      />
      <Image
        src="/preotech-logo.png"
        className="block md:hidden"
        alt="logo"
        width={100}
        height={100}
      />
      <div className="space-x-3 md:space-x-10">
        {Object.entries(headerData).map(([key, value], index) => (
          <button
            key={index}
            onClick={() => handleModal(value)}
            className="text-white hover:opacity-70 transition-all duration-500 font-semibold text-xs sm:text-sm md:text-md"
          >
            {key}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Header;
