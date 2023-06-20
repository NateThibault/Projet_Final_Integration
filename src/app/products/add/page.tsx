"use client";
import ProductProvider from "@/context/product.provider";
import ProductForm from "@/components/organisms/product-form";

export default function addProduct() {

  return (
    <>
      <ProductProvider>
        <ProductForm />
      </ProductProvider>
    </>
  );
}
