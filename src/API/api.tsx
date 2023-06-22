export async function getProductData(id: string) {
    const res = await fetch(`https://api-final-qxme.onrender.com/products/${id}`, { method: "GET"})
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }
  
export async function putProductData(id: string, form: string) {
const res = await fetch(`https://api-final-qxme.onrender.com/products/${id}`, { method: "PUT", body: JSON.stringify(form)})
if (!res.ok) {
    throw new Error('Failed to fetch data')
}
return res.json()
}
  
export async function postProductData(form: string) {
const res = await fetch(`https://api-final-qxme.onrender.com/products/add`, { method: "POST", body: JSON.stringify(form)})
if (!res.ok) {
    throw new Error('Failed to fetch data')
}
return res.json()
}
  
export async function getCategoriesData() {
const res = await fetch(`https://api-final-qxme.onrender.com/categories`, { method: "GET"})
if (!res.ok) {
    throw new Error('Failed to fetch data')
}
return res.json()
}