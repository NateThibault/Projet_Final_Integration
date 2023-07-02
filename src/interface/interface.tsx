export interface Product {
    title: string
    price: number
    description: string
    categoryId: string
    isSold: boolean
}

export interface ProductFormProps {
    productData: ApiProduct
    categoriesData: Categories[]
}

export interface ApiProduct {
    categoryId: string
    description: string
    isSold: boolean
    price: number
    title: string
    _id: string
}

export interface Categories {
    map(arg0: (result: Categories) => void): React.ReactNode
    _id: string
    name: string
}

export interface Category {
    name: string;
}

export interface CategoryFormProps {
    categoryData: ApiCategories
}

export interface ApiCategories {
    _id: string;
    name: string;
}

export interface RowData {
    id: number
    Titre: string
    Description: string
    Prix: number
  }
  
  export interface ListProduitsProps {
    fileCreationDate: string
  }