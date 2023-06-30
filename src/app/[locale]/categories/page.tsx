"use client"
import styles from '../../page.module.css'
import React from 'react'
import { Box, Typography } from '@mui/material'
import CategoryGrid from '@/components/organisms/category-grid/categories-grid'
import ButtonAdd from '@/components/atoms/button-add/button-add'
import Header from '@/components/atoms/header/header'
import { useTranslations } from 'next-intl'



const Categories = () => {
  const t = useTranslations();
  return (
    <>
      <Box className={styles.centeredTypo}>
        <Header title={t("categories.page-title")} />
      
      </Box>
      <Box className={styles.centeredGrid}>
        <CategoryGrid />
        <Box className={styles.buttonContainer}>
          <ButtonAdd />
        </Box>
      </Box>
    </>
  )
}


export default Categories