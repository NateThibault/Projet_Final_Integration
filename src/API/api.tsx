import { Category } from "@/app/interface/interface"

export async function getCategoryData(id: string) {
    const res = await fetch(`https://api-final-qxme.onrender.com/categories/${id}`, { method: "GET"})
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

export async function putCategoryData(id: string, formData: Category) {
    const res = await fetch(`https://api-final-qxme.onrender.com/categories/${id}`, {
        method: "PUT",
        body: JSON.stringify(formData),
        headers: {
        "Content-Type": "application/json"
        }
    })
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

export async function postCategoryData(formData: Category) {
    console.log(formData)
    console.log(JSON.stringify(formData))
    const res = await fetch(`https://api-final-qxme.onrender.com/categories/`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            "Content-Type": "application/json"
        }
    })
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

