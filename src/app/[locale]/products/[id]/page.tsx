"use client";

import { getCategoriesData, getProductData } from "@/api/api";
import Header from "@/components/atoms/header/header";
import ProductForm from "@/components/organisms/product-form/product-form";
import { useTranslations } from "next-intl";

export default async function EditProduct({
  params,
}: {
  params: { id: string };
}) {
  const t = useTranslations();
  const productData = await getProductData(params.id);
  const categoriesData = await getCategoriesData();

  return (
    <>
      <Header title={t("produitmodifier.page-title")} />
      <ProductForm productData={productData} categoriesData={categoriesData} />
    </>
  );
}
