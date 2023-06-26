"use client"

import { Typography } from '@mui/material';
import React from 'react';
interface HeaderProps{
  title: string;
}

export default function Header(props: HeaderProps) {

  return (
    <>
     <Typography sx={{fontSize:"30px",fontFamily:"serif", marginTop:"10px", marginBottom:"50px"}}>{props.title}</Typography>
    </>
    );
    }


        
       






