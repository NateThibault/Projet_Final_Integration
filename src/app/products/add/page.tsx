import { getCategoriesData } from "@/API/api"
import ProductForm from "@/components/organisms/post-product/post-product"

export default async function addProduct() {
  const categoriesData = await getCategoriesData()
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
      <ProductForm productData={productData} categoriesData={categoriesData} />
    </>
  )
}
