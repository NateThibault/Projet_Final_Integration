"use client"
import Header from "@/components/atoms/header/header"
import CategoryForm from "@/components/organisms/category-form/category-form"


export default async function addCategory() {
   
  const categoryData = {
    categoryId: "",
    name: "",
    _id: ""
  }
 
  return (
    <>
      <Header title={"Ajouter une catégorie"} />
      <CategoryForm categoryData={categoryData} />
    </>
  )
}
