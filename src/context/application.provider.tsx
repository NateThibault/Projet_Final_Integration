"use client";

import React, { useState, ReactNode, createContext } from "react";

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

interface ApplicationContextProps {
  title: string;
  setTitle: (val: string) => void;
}

export const ApplicationContext = createContext<ApplicationContextProps>(
  {} as ApplicationContextProps
);

export default function ApplicationProvider({ children }: Props) {
  const [title, setTitle] = useState<string>("");

  return (
    <ApplicationContext.Provider value={{ title, setTitle }}>
      {children}
    </ApplicationContext.Provider>
  );
}
