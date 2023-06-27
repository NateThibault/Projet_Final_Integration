"use client"

import React from 'react'
import styles from '../page.module.css'
import { Box, Typography } from '@mui/material'
import ProductGrid from '@/components/organisms/products-grid/products-grid'
import BoutonAdd from '@/components/atoms/my-button/my-button-product'


const Products = () => {
  return (
    <>
      <Box className={styles.centeredTypo}>
        <Typography variant="h4" fontWeight="500">
          Liste des produits
        </Typography>
      </Box>
      <Box className={styles.centeredGrid}>
        <ProductGrid />
        <Box className={styles.buttonContainer}>
          <BoutonAdd />
        </Box>
      </Box>
    </>
  )
}


export default Products