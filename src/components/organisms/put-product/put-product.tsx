"use client"
import * as React from 'react'
import { Box, Button, Checkbox, CircularProgress, Container, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { putProductData } from "@/API/api"
import { ProductFormProps, ProductForm } from '@/interface/interface'

const schema = yup
  .object({
    title: yup.string().min(2).max(50).required(),
    description: yup.string().max(255).required(),
    price: yup.number().required(),
    categoryId: yup.string().min(1).required(),
    isSold: yup.boolean()
  })
  .required()

export default function ProductForm(props: ProductFormProps) {
  const [loading, setLoading] = React.useState(false)
  const [response, setResponse] = React.useState("Une erreur est survenue")
  const [category, setCategory] = React.useState(props.productData.categoryId)
  const [isSold, setIsSold] = React.useState(props.productData.isSold)
  const [isSoldDirty, setIsSoldDirty] = React.useState(false)
  const [isCategoryDirty, setIsCategoryDirty] = React.useState(false)
  const handleChangeCategoryId = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string)
    setIsCategoryDirty(true)
  }
  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsSold(event.target.checked)
    setIsSoldDirty(true)
  }
  const submit = async () => {
    setLoading(true)
    try {
      const formData = getValues()
      await putProductData(props.productData._id, formData)
      setResponse("Produit modifié avec succès")
      alert(response)
      window.location.href = "/products"
    } catch (error) {
      setResponse("Une erreur est survenue")
      alert(response)
      setLoading(false)
    }
  }
  const {
    register,
    reset,
    getValues,
    formState: { errors, isValid, isDirty },
  } = useForm<ProductForm>({
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
          <Grid container rowSpacing={3}>
            <Grid item xs={12}>
              <TextField sx={{ backgroundColor: "white", borderRadius: "5px" }}
                id="title"
                label="Titre"
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
                label="Prix"
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
                <Select {...register("categoryId")} sx={{ backgroundColor: "white", borderRadius: "5px" }}
                  labelId="labelCategories"
                  id="categoryId"
                  value={category}
                  label="Catégorie *"
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
              <FormControlLabel sx={{ color: "black" }} id="isSold" control={<Checkbox checked={isSold} {...register("isSold")} onChange={handleChangeCheckbox} />} label="Est-ce que le produit est vendu ?" />
            </Grid>
            <Grid item xs={12} sx={{ textAlign: "right" }} >
              <Button variant="contained" onClick={() => { reset(), setCategory(props.productData.categoryId), setIsCategoryDirty(false), setIsSold(props.productData.isSold), setIsSoldDirty(false) }} disabled={!isDirty && !isCategoryDirty && !isSoldDirty} sx={{ marginLeft: "20px", width: "100px" }}>
                Annuler
              </Button>
              <Button variant="contained" type="button" disabled={!isValid || !isDirty && !isCategoryDirty && !isSoldDirty} sx={{ marginLeft: "20px", width: "100px" }} onClick={submit}>
                Modifier
              </Button>
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  )
}
