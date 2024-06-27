import { useState } from "react";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import ModalForm from "@/components/ModalForm";
import ProductListContainer from "@/components/ProductListContainer";
import Modal from "react-modal";

const inter = Inter({ subsets: ["latin"] });
Modal.setAppElement('#__next');

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenModal() {
    setIsOpen(true);    
  }

  function handleCloseModal() {
    setIsOpen(false);
  }
  
  return (
    <main className={`bg-blue-50 min-h-screen flex flex-col items-center ${inter.className}`}>
      <Header />
      <ProductListContainer handleOpenModal={handleOpenModal}/>
      <ModalForm 
        isModalOpen={isOpen} 
        onRequestClose={handleCloseModal}
      />
    </main>
  );
}
