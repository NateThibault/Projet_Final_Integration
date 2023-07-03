"use client"
import Header from "@/components/atoms/header/header"
import CategoryForm from "@/components/organisms/category-form/category-form"
import { useTranslations } from "next-intl"

export default async function AddCategory() {
  const t = useTranslations();
   
  const categoryData = {
    categoryId: "",
    name: "",
    _id: ""
  }
 
  return (
    <>
      <Header title={t("categorieajouter.page-title")} />
      <CategoryForm categoryData={categoryData} />
    </>
  )
}
