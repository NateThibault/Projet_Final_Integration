"use client"

import React from 'react';
import styles from '../page.module.css';
import { Typography } from '@mui/material';
import CategoryGrid from '@/components/molecules/feat_categories/categories';
import BoutonAdd from '@/components/molecules/feat_categories/boutonAdd';
import Header from '@/components/atoms/header/header';


const Categories = () => {
  return (
    <main className={styles.main}>
      <div className={styles.centeredTypo}>
        <Header title={"Liste des catégories"} />
      </div>
      <div className={styles.centeredGrid}>
        <CategoryGrid />
        <div className={styles.buttonContainer}>
          <BoutonAdd />
        </div>
      </div>
     
    </main>
  );
};
  

export default Categories;