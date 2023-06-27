import { getCategoriesData } from "@/api/api"
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
      <ProductForm productData={productData} categoriesData={categoriesData} />
    </>
  )
}
