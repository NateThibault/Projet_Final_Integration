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