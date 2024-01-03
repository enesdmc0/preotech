import React from 'react'
import Image from 'next/image'
import imgHakkimizda from "../public/img5.jpeg";
import imgKabiliyetlerimiz from "../public/img6.jpeg";
import imgIletisim from "../public/img8.jpeg";
import { IconX } from "@tabler/icons-react";

interface Props {
    activeModal:string;
    setIsModalOpen:any;
    isModalOpen:boolean;
}

const Modal: React.FC<Props> = ({activeModal, setIsModalOpen, isModalOpen}) => {
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
  return (
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
  )
}

export default Modal