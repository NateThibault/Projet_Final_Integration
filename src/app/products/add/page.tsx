import ProductForm from "@/components/organisms/product-form";

export default function addProduct() {
  const data = {
    product: {
      categoryId: "",
    createdAt: "",
    description: "",
    imageUrl: "",
    isSold: false,
    price: 0,
    title: "",
    updatedAt: "",
    userId: "",
    _id: ""
    }
  }

  return (
    <>
      <ProductForm data={data} />
    </>
  );
}
