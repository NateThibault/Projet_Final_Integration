import CategoryForm from "@/components/organisms/category-form";

export default async function addCategory() {
  const categoryData = {
    categoryId: "",
    name: "",
    _id: ""
  }

  return (
    <>
        <CategoryForm categoryData={categoryData} />
    </>
  );
}
