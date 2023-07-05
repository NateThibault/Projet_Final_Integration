"use client"

import { Typography } from '@mui/material'
import React from 'react'
interface HeaderProps {
  title: string;
}

export default function Header(props: HeaderProps) {

  return (
    <>
      <Typography
        sx={{
          fontSize: "30px",
          margin: "30px auto",
          color: "black",
          textAlign: "center",
        }}
      >
        {props.title}
      </Typography>
    </>
  )
}












