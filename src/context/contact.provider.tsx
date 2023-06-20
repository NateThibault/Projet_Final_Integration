"use client";

import React, { useState, ReactNode, createContext } from "react";

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

interface ContactContextProps {
  title: string;
  setTitle: (val: string) => void;
  price: number;
  setPrice: (val: number) => void;
  description: string;
  setDescription: (val: string) => void;
}

export const ContactContext = createContext<ContactContextProps>(
  {} as ContactContextProps
);

export default function ContactProvider({ children }: Props) {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number>(0);

  return (
    <ContactContext.Provider value={{ title, setTitle, price, setPrice, description, setDescription }}>
      {children}
    </ContactContext.Provider>
  );
}
