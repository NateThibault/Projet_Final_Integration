import ProductForm from "@/components/organisms/put-product/put-product"
import { getCategoriesData, getProductData } from "@/API/api"

export default async function editProduct({ params }: { params: { id: string } }) {
  const productData = await getProductData(params.id)
  const categoriesData = await getCategoriesData()

  return (
    <>
      <ProductForm productData={productData} categoriesData={categoriesData} />
    </>
  )
}
