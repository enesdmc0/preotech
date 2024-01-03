"use client";
import { useState } from "react";
import Image from "next/image";
import img1 from "../public/img1.png";
import img2 from "../public/img2.png";
import img3 from "../public/img3.png";
import img4 from "../public/img4.png";

import clsx from "clsx";
import Header from "@/components/Header";
import Modal from "@/components/Modal";

export default function Home() {
  const images = [img1, img2, img3, img4];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(images[0]);
  const [activeModal, setActiveModal] = useState("hakkimizda");

  const handleModal = (value: string) => {
    setIsModalOpen(true);
    setActiveModal(value);
  };

  return (
    <div className="relative h-full flex flex-col bg-[#273747] w-full ">
      {/* header */}
      <Header handleModal={handleModal} />

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
        <Modal
          activeModal={activeModal}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
  );
}
