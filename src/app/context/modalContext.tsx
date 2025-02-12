"use client";

import React, { createContext, useState, useContext } from "react";

interface ModalContextType {
  toggleModal: boolean;
  updateModal: (value: boolean) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toggleModal, setToggleModal] = useState<boolean>(false);

  return (
    <ModalContext.Provider value={{ toggleModal, updateModal: setToggleModal }}>
      {children}
    </ModalContext.Provider>
  );
};

// Custom Hook for easy access to modal state
export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
