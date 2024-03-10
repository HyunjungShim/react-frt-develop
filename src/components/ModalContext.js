// ModalContext.js
import React, { createContext, useContext, useState } from "react";
const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState({
    modal01: false,
    modal02: false,
    modal03: false,
    modal04: false,
  });

  const toggleModal = (modalId) => {
    setIsModalOpen((prevState) => ({
      ...prevState,
      [modalId]: !prevState[modalId],
    }));
  };

  return (
    <ModalContext.Provider value={{ isModalOpen, toggleModal }}>
      {children}
    </ModalContext.Provider>
  );
};
