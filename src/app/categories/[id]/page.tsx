import { getCategoryData } from "@/api/api"
import Header from "@/components/atoms/header/header"
import CategoryForm from "@/components/organisms/category-form/category-form"
import { useTranslations } from "next-intl"

export default async function editCategory({ params }: { params: { id: string } }) {
    const categoryData = await getCategoryData(params.id)
    const t = useTranslations();

    return (
        <>
            <Header title={t("Modifier une catégorie")} />
            <CategoryForm categoryData={categoryData} />
        </>
    )
}