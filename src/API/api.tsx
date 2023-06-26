import { ProductForm } from "@/interface/interface"

export async function getProductData(id: string) {
  const res = await fetch(`https://api-final-qxme.onrender.com/products/${id}`, { method: "GET" })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export async function putProductData(id: string, formData: ProductForm) {
  const res = await fetch(`https://api-final-qxme.onrender.com/products/${id}`, { method: "PUT", body: JSON.stringify(formData) })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export async function postProductData(formData: any) {
  console.log(formData)
  console.log(JSON.stringify(formData))
  const res = await fetch(`https://api-final-qxme.onrender.com/products`, { method: "POST", body: formData })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export async function getCategoriesData() {
  const res = await fetch(`https://api-final-qxme.onrender.com/categories`, { method: "GET" })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}