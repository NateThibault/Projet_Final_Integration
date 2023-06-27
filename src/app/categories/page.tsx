"use client"

import React from 'react'
import styles from '../page.module.css'
import { Box, Typography } from '@mui/material'
import CategoryGrid from '@/components/organisms/category-grid/categories-grid'
import BoutonAdd from '@/components/atoms/my-button/my-button'


const Categories = () => {
  return (
    <>
      <Box className={styles.centeredTypo}>
        <Typography variant="h4" fontWeight="500">
          Liste des catégories
        </Typography>
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