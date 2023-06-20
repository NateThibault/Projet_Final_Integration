import ProductForm from "@/components/organisms/product-form";
import getData from "@/API/api";

export default async function EditProduct({ params }: { params: { id: string } }) {
  const data = await getData(params.id)

  return (
    <>
      <ProductForm data={data} />
    </>
  );
}
