"use client"

import React from 'react'
import styles from '../page.module.css'
import { Box, Typography } from '@mui/material'
import ProductGrid from '@/components/organisms/products-grid/products-grid'
import BoutonAdd from "../../../components/atoms/button-add/my-button-product" 
import Header from '@/components/atoms/header/header'
import { useTranslations } from 'next-intl'

const Products = () => {
  const t = useTranslations();
  return (
    <>
      <Box className={styles.centeredTypo}>
        <Header title={t("Liste des produits")} />
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