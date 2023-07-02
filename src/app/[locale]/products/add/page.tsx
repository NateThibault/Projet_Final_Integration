import { getCategoriesData } from "@/api/api"
import Header from "@/components/atoms/header/header"
import ProductForm from "@/components/organisms/product-form/product-form"
import { useTranslations } from "next-intl"
import React from "react"

export default async function AddProduct() {
  const categoriesData = await getCategoriesData() 
  const t = useTranslations();
  const productData = {
    categoryId: "",
    description: "",
    isSold: false,
    price: 0,
    title: "",
    _id: ""
  }

  return (
    <>
      <Header title={t("produitajouter.page-title")} />
      <ProductForm productData={productData} categoriesData={categoriesData} />
    </>
  )
}