"use client"
import * as React from 'react'
import { Box, Button, Checkbox, CircularProgress, Container, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { postProductData, putProductData } from "@/api/api"
import { ProductFormProps, Product } from '@/interface/interface'

const schema = yup
  .object({
    title: yup.string().min(2).max(50).required(),
    description: yup.string().max(255).required(),
    price: yup.number().required(),
    categoryId: yup.string().required(),
    isSold: yup.boolean()
  })
  .required()

export default function ProductForm(props: ProductFormProps) {
  const [loading, setLoading] = React.useState(false)
  const [category, setCategory] = React.useState(props.productData.categoryId)
  const [isSold, setIsSold] = React.useState(props.productData.isSold)
  const [isSoldDirty, setIsSoldDirty] = React.useState(false)
  const [isCategoryDirty, setIsCategoryDirty] = React.useState(false)
  const handleChangeCategoryId = (event: SelectChangeEvent) => {
    setCategory(event.target.value)
    if (event.target.value == props.productData.categoryId) {
      setIsCategoryDirty(false)
    } else {
      setIsCategoryDirty(true)
    }
  }
  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsSold(event.target.checked)
    if (event.target.checked == props.productData.isSold) {
      setIsSoldDirty(false)
    } else {
      setIsSoldDirty(true)
    }
  }
  const submit = async (formData: Product) => {
    setLoading(true)
    if (!props.productData._id) {
      postProductData(formData)
        .then(() => {
          alert("Produit ajouté avec succès")
          window.location.href = "/products"
        })
        .catch(() => {
          alert("Une erreur est survenue")
          setLoading(false)
        })
    } else {
      putProductData(props.productData._id, formData)
        .then(() => {
          alert("Produit modifié avec succès")
          window.location.href = "/products"
        })
        .catch(() => {
          alert("Une erreur est survenue")
          setLoading(false)
        })
    }
  }
  const cancel = () => {
    reset()
    setCategory(props.productData.categoryId)
    setIsCategoryDirty(false)
    setIsSold(props.productData.isSold)
    setIsSoldDirty(false)
  }
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm<Product>({
    defaultValues: {
      title: props.productData.title,
      price: props.productData.price,
      description: props.productData.description,
      categoryId: props.productData.categoryId,
      isSold: props.productData.isSold
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  })

  return (
    <>
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <CircularProgress />
        </Box>
      ) : (
        <Container sx={{ backgroundColor: "lightgrey", padding: "24px", borderRadius: "5px", marginTop: "30px" }}>
          <form onSubmit={handleSubmit(submit)} action="/products">
            <Grid container rowSpacing={3}>
              <Grid item xs={12}>
                <TextField sx={{ backgroundColor: "white", borderRadius: "5px" }}
                  id="title"
                  label="Title"
                  variant="outlined"
                  fullWidth
                  {...register("title")}
                  error={!!errors.title}
                  helperText={errors.title?.message}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField sx={{ backgroundColor: "white", borderRadius: "5px" }}
                  id="price"
                  label="Price"
                  variant="outlined"
                  fullWidth
                  {...register("price")}
                  error={!!errors.price}
                  helperText={errors.price?.message}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth required>
                  <InputLabel id="labelCategories">Catégorie</InputLabel>
                  <Select sx={{ backgroundColor: "white", borderRadius: "5px" }}
                    labelId="labelCategories"
                    id="categoryId"
                    value={category}
                    label="Catégorie *"
                    {...register("categoryId")}
                    onChange={handleChangeCategoryId}
                  >
                    {props.categoriesData.map((result) => (
                      <MenuItem key={result._id} value={result._id}>{result.name}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField sx={{ backgroundColor: "white", borderRadius: "5px" }}
                  multiline={true}
                  rows={4}
                  id="description"
                  label="Description"
                  variant="outlined"
                  fullWidth
                  {...register("description")}
                  error={!!errors.description}
                  helperText={errors.description?.message}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel sx={{ color: "black" }}
                  id="isSold"
                  label="Est-ce que le produit est vendu ?"
                  control={<Checkbox disabled={!props.productData._id} checked={isSold} {...register("isSold")} onChange={handleChangeCheckbox} />}
                />
              </Grid>
              <Grid item xs={12} sx={{ textAlign: "right" }}>
                <Button sx={{ marginLeft: "20px", width: "100px" }}
                  variant="contained"
                  onClick={cancel}
                  disabled={!isDirty && !isCategoryDirty && !isSoldDirty}>
                  Annuler
                </Button>
                <Button sx={{ marginLeft: "20px", width: "100px" }}
                  variant="contained"
                  type="submit"
                  disabled={!isValid || !isDirty && !isCategoryDirty && !isSoldDirty}>
                  Valider
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      )}
    </>
  )
}
