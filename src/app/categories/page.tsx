"use client"

import React from 'react'
import styles from '../page.module.css'
import { Box, Typography } from '@mui/material'
import CategoryGrid from '@/components/organisms/category-grid/categories-grid'
import BoutonAdd from '@/components/atoms/my-button/my-button'
import Header from '@/components/atoms/header/header'


const Categories = () => {
  return (
    <>
      <Box className={styles.centeredTypo}>
        <Header title={"Liste des catégories"} />
      </Box>
      <Box className={styles.centeredGrid}>
        <CategoryGrid />
        <Box className={styles.buttonContainer}>
          <BoutonAdd />
        </Box>
      </Box>
    </>
  )
}


export default Categories