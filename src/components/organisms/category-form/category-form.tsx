"use client"

import * as React from 'react'
import { Box, Button, CircularProgress, Container, Grid, TextField } from "@mui/material"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { CategoryFormProps, Category } from '@/interface/interface'
import { postCategoryData, putCategoryData } from '@/api/api'

const schema = yup
  .object({
    name: yup.string().min(2, "Le nom de la catégories doit contenir un minimum de 2 caractères").max(50, "Le nom de la catégorie ne doit pas contenir plus de 50 caractères").required(),
  })
  .required()

export default function CategoryForm(props: CategoryFormProps) {
  const [loading, setLoading] = React.useState(false)

  const submit = async (formData: Category) => {
    setLoading(true)

    if (!props.categoryData._id) {
      postCategoryData(formData)
        .then(() => {
          alert("Catégorie ajoutée avec succès")
          window.location.href = "/categories"
        })
        .catch(() => {
          alert("Une erreur est survenue")
          setLoading(false)
        })
    } else {
      putCategoryData(props.categoryData._id, formData)
        .then(() => {
          alert("Catégorie modifiée avec succès")
          window.location.href = "/categories"
        })
        .catch(() => {
          alert("Une erreur est survenue")
          setLoading(false)
        })
    }
  }

  const cancel = () => {
    reset()
  }

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm<Category>({
    defaultValues: {
      name: props.categoryData.name,
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
        <Container sx={{ backgroundColor: "lightgrey", padding: "50px", borderRadius: "5px", marginTop: "30px" }}>
          <form onSubmit={handleSubmit(submit)}>
            <Grid container rowSpacing={3}>
              <Grid item xs={12}>
                <TextField sx={{ backgroundColor: "white", borderRadius: "5px" }}
                  id="name"
                  label="Nom de la catégorie"
                  variant="outlined"
                  fullWidth
                  {...register("name")}
                  error={!!errors.name}
                  helperText={errors.name?.message}
                  required
                />
              </Grid>
              <Grid item xs={12} sx={{ textAlign: "right" }} >
                <Button
                  sx={{
                    marginLeft: "20px", width: "100px", backgroundColor: "#F3F3F3", color: "#000000",
                    "&:hover": {
                      backgroundColor: "#ECECEC",
                    },
                  }}
                  variant="contained"
                  onClick={cancel}
                  disabled={!isDirty}>
                  Annuler
                </Button>
                <Button
                  sx={{ marginLeft: "20px", width: "100px" }}
                  variant="contained"
                  type="submit"
                  disabled={!isValid || !isDirty}
                  color="primary">
                  Envoyer
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      )}
    </>
  )
}