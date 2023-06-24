"use client"

import React from 'react';
import { useTranslations } from 'next-intl';
interface HeaderProps{
  title: string;
}

export default function Header(props: HeaderProps) {

  return (
    <>
      <div className="container">
        <h2>{props.title}</h2>
      </div>
    </>
    );
    }


        
       






