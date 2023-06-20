"use client";
import React, { useState, ReactNode, createContext } from "react";

interface Props {
  children?: ReactNode;
}

interface productContextProps {
  title: string;
  setTitle: (val: string) => void;
  price: number;
  setPrice: (val: number) => void;
  description: string;
  setDescription: (val: string) => void;
}

export const ProductContext = createContext<productContextProps>(
  {} as productContextProps
);

export default function ContactProvider({ children }: Props) {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number>(0);

  return (
    <ProductContext.Provider value={{ title, setTitle, price, setPrice, description, setDescription }}>
      {children}
    </ProductContext.Provider>
  );
}
