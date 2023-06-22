"use client"

import React from 'react';
import styles from '../page.module.css';
import CategoryGrid from '@/component/molecules/feat_categories/categories';
import { Typography } from '@mui/material';

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