"use client";
import styles from "../page.module.css";
import React from "react";
import { Box } from "@mui/material";
import ProductGrid from "@/components/organisms/products-grid/products-grid";
import BoutonAdd from "../../../components/atoms/button-add/my-button-product";
import Header from "@/components/atoms/header/header";
import { useTranslations } from "next-intl";

const Products = () => {
  const t = useTranslations();
  return (
    <>
      <Box className={styles.centeredTypo}>
        <Header title={t("produits.page-title")} />
      </Box>
      <Box className={styles.centeredGrid}>
        <ProductGrid />
        <Box className={styles.buttonContainer}>
          <BoutonAdd />
        </Box>
      </Box>
    </>
  );
};

export default Products;
