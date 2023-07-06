import { Product, Category } from "@/interface/interface";

export async function getProductsData(id?: string) {
  const url = id
    ? `https://api-final-qxme.onrender.com/products/${id}`
    : `https://api-final-qxme.onrender.com/products`;

  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Cache-Control": "no-cache",
    },
  });

  if (!res.ok) {
    throw new Error("Échech de la récupération des données");
  }

  const data = await res.json();

  const products = Array.isArray(data)
    ? data.map((product) => ({ ...product, id: product._id }))
    : [];

  return products;
}

export async function getProductData(id: string) {
  const res = await fetch(
    `https://api-final-qxme.onrender.com/products/${id}`,
    {
      method: "GET",
      headers: {
        "Cache-Control": "no-cache",
      },
    }
  );
  if (!res.ok) {
    throw new Error("Échec de la récupération des données");
  }
  return res.json();
}

export async function deleteProductData(productId: string) {
  const res = await fetch(
    `https://api-final-qxme.onrender.com/products/${productId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
      },
    }
  );

  if (!res.ok) {
    throw new Error("Échec lors de la suppression du produit");
  }
}

export async function putProductData(id: string, formData: Product) {
  const res = await fetch(
    `https://api-final-qxme.onrender.com/products/${id}`,
    {
      method: "PUT",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (!res.ok) {
    throw new Error("Échec de la récupération des données");
  }
  return res.json();
}

export async function postProductData(formData: Product) {
  const res = await fetch(`https://api-final-qxme.onrender.com/products`, {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error("Échech de la récupération des données");
  }
  return res.json();
}

export async function getCategoriesData() {
  const res = await fetch(`https://api-final-qxme.onrender.com/categories`, {
    method: "GET",
    headers: {
      "Cache-Control": "no-cache",
    },
  });
  if (!res.ok) {
    throw new Error("Échec de la récupération des données");
  }
  return res.json();
}

export async function getCategoryData(id: string) {
  const res = await fetch(
    `https://api-final-qxme.onrender.com/categories/${id}`,
    {
      method: "GET",
      headers: {
        "Cache-Control": "no-cache",
      },
    }
  );
  if (!res.ok) {
    throw new Error("Échec de la récupération des données");
  }
  return res.json();
}

export async function putCategoryData(id: string, formData: Category) {
  const res = await fetch(
    `https://api-final-qxme.onrender.com/categories/${id}`,
    {
      method: "PUT",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (!res.ok) {
    throw new Error("Échec de la récupération des données");
  }
  return res.json();
}

export async function postCategoryData(formData: Category) {
  const res = await fetch(`https://api-final-qxme.onrender.com/categories/`, {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error("Échec de la récupération des données");
  }
  return res.json();
}

export async function deleteCategoryData(categoryId: string) {
  const res = await fetch(
    `https://api-final-qxme.onrender.com/categories/${categoryId}`,
    { method: "DELETE" }
  );
  if (!res.ok) {
    throw new Error("Échec de la suppression de la catégorie");
  }
}
