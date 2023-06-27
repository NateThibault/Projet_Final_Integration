import { getCategoriesData, getProductData } from "@/api/api"
import ProductForm from "@/components/organisms/product-form/product-form"

export default async function editProduct({ params }: { params: { id: string } }) {
  const productData = await getProductData(params.id)
  const categoriesData = await getCategoriesData()

  return (
    <>
      <ProductForm productData={productData} categoriesData={categoriesData} />
    </>
  )
}
