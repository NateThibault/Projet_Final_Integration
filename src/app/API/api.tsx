export default async function getData(id: number) {
    const res = await fetch(`https://api.example.com/${id}`)
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }