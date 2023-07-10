"use client";
import { getCategoryData } from "@/api/api";
import Header from "@/components/atoms/header/header";
import CategoryForm from "@/components/organisms/category-form/category-form";
import { useTranslations } from "next-intl";

export default async function EditCategory({
  params,
}: {
  params: { id: string };
}) {
  const t = useTranslations();
  const categoryData = await getCategoryData(params.id);

  return (
    <>
      <Header title={t("categoriesmodifier.page-title")} />
      <CategoryForm categoryData={categoryData} />
    </>
  );
}
