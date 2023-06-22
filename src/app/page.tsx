import React from 'react';
import styles from './page.module.css';
import CategoryGrid from '@/component/molecules/feat_categories/categories';

const Home = () => {
  return (
    <main className={styles.main}>
      <CategoryGrid />
    </main>
  );
};

export default Home;
