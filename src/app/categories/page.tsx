"use client"

import React from 'react';
import styles from '../page.module.css';
import { Typography } from '@mui/material';
import CategoryGrid from '@/components/molecules/feat_categories/categories';

const Categories = () => {
    return (
      <main className={styles.main}>
        <div className={styles.centeredTypo}>  
            <Typography variant="h4" fontWeight="500">
               Liste des catégories
            </Typography>
        </div>
        <div className={styles.centeredGrid}>  
          <CategoryGrid />
        </div>
      </main>
    );
};
  

export default Categories;