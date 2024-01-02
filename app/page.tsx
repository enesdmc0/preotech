"use client";
import { useState } from "react";
import Image from "next/image";
import img1 from "../public/img1.png";
import img2 from "../public/img2.png";
import img3 from "../public/img3.png";
import img4 from "../public/img4.png";
import imgHakkimizda from "../public/img5.jpeg";
import imgKabiliyetlerimiz from "../public/img6.jpeg";
import imgIletisim from "../public/img7.png";
import clsx from "clsx";
import { IconX } from "@tabler/icons-react";

export default function Home() {
  const images = [img1, img2, img3, img4];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(images[0]);
  const [activeModal, setActiveModal] = useState("hakkimizda");

  const headerData = {
    Hakkımızda: "hakkimizda",
    Kabiliyetlerimiz: "kabiliyetlerimiz",
    İletişim: "iletisim",
  };

  
  const modalData: any = {
    hakkimizda:
      " Bünyesinde Makina, Havacılık ve Tasarım mühendisleri ile savunma sanayisi özel ihtiyaçlarına yönelik çözümler sağlamak amacıyla kurulan PreoTech hızlı ve müşteri odaklı çözümleri ile savunma ve otomotiv sektörüne yönelik hizmet vermektedir.",
    kabiliyetlerimiz:
      " Mekanik imalat , sistem tasarımı konularında uzmanlaşan Preotech CFD, FEM analizleri yanısıra Mekanik tasarım ve imalat konusunda çalışmakta olup, tedarikçi sistem yapısı ile birden fazla ihtiyaca hızlı çözüm sağlayabilmektedir.",
    iletisim: {
      adres:
        "PREOTECH TEKNOLOJİ LİMİTED ŞİRKETİ ŞEHİT OSMAN AVCI MAH. MALAZGİRT 1071 CAD. 1 RELAX GÖKSU SITESI NO: 51 D İÇ KAPI NO: 203 Ankara /  Etimesgut",
      telefon: "Telefon: 0 312 395 90 83",
      mail: "Email: akin@preotech.com",
    },
  };

  const handleModal = (value: string) => {
    setIsModalOpen(true);
    setActiveModal(value);
  };

  return (
    <div className="relative h-full flex flex-col bg-[#273747] w-full ">
      {/* header */}
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

      {/* section */}
      <div className="w-full h-full p-10  gap-10 flex">
        {images.map((image, index) => (
          <Image
            onClick={() => setActiveImage(image)}
            key={index}
            src={image}
            alt="logo"
            className={clsx(
              " overflow-hidden cursor-pointer transition-all duration-700 object-cover rounded-3xl",
              activeImage === image ? "flex-[3]  " : "flex-1 "
            )}
          />
        ))}
      </div>
      {isModalOpen && (
        <div className="absolute top-0 left-0 h-full w-full  bg-black/70 p-10 flex items-start justify-start">
          <div className="w-full h-full  flex border border-white/70 rounded-md">
            <Image
              src={
                activeModal === "hakkimizda"
                  ? imgHakkimizda
                  : activeModal === "kabiliyetlerimiz"
                  ? imgKabiliyetlerimiz
                  : imgIletisim
              }
              alt="logo"
              className="object-cover hidden md:block aspect-square rounded-md flex-1"
            />
            <div className="relative flex-1  flex items-center justify-center p-10 text-white font-bold text-sm md:text-xl">
              <p>
                {" "}
                {activeModal === "iletisim" ? (
                  <div className="space-y-7">
                    <p>{modalData[activeModal].adres}</p>
                    <p>{modalData[activeModal].telefon}</p>
                    <p>{modalData[activeModal].mail}</p>
                  </div>
                ) : (
                  modalData[activeModal]
                )}
              </p>
              <button
                className="absolute top-5 right-5 border border-white hover:opacity-70 rounded-md transition-all duration-500"
                onClick={() => setIsModalOpen(!isModalOpen)}
              >
                <IconX size={30} color="white" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
