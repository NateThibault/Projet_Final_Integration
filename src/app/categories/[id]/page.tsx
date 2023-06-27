import { getCategoryData } from "@/api/api"
import Header from "@/components/atoms/header/header"
import CategoryForm from "@/components/organisms/category-form/category-form"

export default async function editCategory({ params }: { params: { id: string } }) {
    const categoryData = await getCategoryData(params.id)

    return (
        <>
            <Header title={"Modifier une catégorie"} />
            <CategoryForm categoryData={categoryData} />
        </>
    )
}