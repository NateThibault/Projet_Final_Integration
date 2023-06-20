export default async function getData(id: string) {
  const res = await fetch(`https://example.com/products/${id}`, { method: "GET"})
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}