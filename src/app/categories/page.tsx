"use client"

<<<<<<< HEAD
import React from 'react';
import styles from '../page.module.css';
import { Typography } from '@mui/material';
import CategoryGrid from '@/components/molecules/feat_categories/categories';
import BoutonAdd from '@/components/molecules/feat_categories/boutonAdd';
import { useTranslations } from 'next-intl';
=======
import React from 'react'
import styles from '../page.module.css'
import { Box, Typography } from '@mui/material'
import CategoryGrid from '@/components/organisms/category-grid/categories-grid'
import BoutonAdd from '@/components/atoms/my-button/my-button'

>>>>>>> 1b0e44dcdadeebc39573e8aecaf3445980633b43

const Categories = () => {
  const t = useTranslations();
  return (
    <>
      <Box className={styles.centeredTypo}>
        <Typography variant="h4" fontWeight="500">
          Liste des catégories
        </Typography>
<<<<<<< HEAD
        
      </div>
      <div className={styles.centeredGrid}>
=======
      </Box>
      <Box className={styles.centeredGrid}>
>>>>>>> 1b0e44dcdadeebc39573e8aecaf3445980633b43
        <CategoryGrid />
        <Box className={styles.buttonContainer}>
          <BoutonAdd />
        </Box>
      </Box>
    </>
  )
}


export default Categories