import { Product } from "@/interface/interface"

export async function getProductData(id: string) {
  const res = await fetch(`https://api-final-qxme.onrender.com/products/${id}`, {
    method: "GET",
    headers: {
      'Cache-Control': 'no-cache'
    }
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export async function putProductData(id: string, formData: Product) {
  const res = await fetch(`https://api-final-qxme.onrender.com/products/${id}`, {
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

export async function postProductData(formData: Product) {
  const res = await fetch(`https://api-final-qxme.onrender.com/products`, {
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

export async function getCategoriesData() {
  const res = await fetch(`https://api-final-qxme.onrender.com/categories`, {
    method: "GET",
    headers: {
      'Cache-Control': 'no-cache'
    }
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}