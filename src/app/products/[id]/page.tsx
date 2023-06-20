import ProductProvider from "@/context/product.provider";
import ProductForm from "@/components/organisms/product-form";
import getData from "@/app/API/api";

export default async function EditProduct({ params }: { params: { id: number } }) {
  const data = await getData(params.id)

  return (
    <>
      <ProductProvider>
        <ProductForm data={data} />
      </ProductProvider>
    </>
  );
}
