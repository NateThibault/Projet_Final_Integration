"use client"

import React from 'react'
import styles from '../page.module.css'
import { Box } from '@mui/material'
import ProductGrid from '@/components/organisms/products-grid/products-grid'
import BoutonAdd from "../../components/atoms/button-add/my-button-product" 
import Header from '@/components/atoms/header/header'

const Products = () => {
  return (
    <>
      <Box className={styles.centeredTypo}>
        <Header title={"Liste des produits"} />
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