import { getCategoryData } from "@/API/api"
import CategoryForm from "@/components/organisms/category-form"

export default async function editCategory({ params }: { params: { id: string } }) {
    const categoryData = await getCategoryData(params.id)
    
    return (
        <>
            <CategoryForm categoryData={categoryData} />
        </>
    )
}