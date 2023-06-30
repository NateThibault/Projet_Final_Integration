"use client"

import { getCategoriesData, getProductData } from "@/api/api"
import Header from "@/components/atoms/header/header"
import ProductForm from "@/components/organisms/product-form/product-form"


export default async function editProduct({ params }: { params: { id: string } }) {
  const productData = await getProductData(params.id)
  const categoriesData = await getCategoriesData()
 

  return (
    <>
      <Header title={"Modifier un produit"} />
      <ProductForm productData={productData} categoriesData={categoriesData} />
    </>
  )
}
