import { getCategoriesData } from "@/api/api"
import Header from "@/components/atoms/header/header"
import ProductForm from "@/components/organisms/product-form/product-form"

export default async function addProduct() {
  const categoriesData = await getCategoriesData()
  const productData = {
    categoryId: "",
    description: "",
    isSold: false,
    price: "",
    title: "",
    _id: ""
  }

  return (
    <>
      <Header title={"Ajouter un produit"} />
      <ProductForm productData={productData} categoriesData={categoriesData} />
    </>
  )
}