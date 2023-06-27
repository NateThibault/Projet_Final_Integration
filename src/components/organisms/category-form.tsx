"use client";

import * as React from 'react'
import { Box, Button, CircularProgress, Container, Grid, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CategoryFormProps, Category } from '@/app/interface/interface';
import { postCategoryData, putCategoryData } from '@/api/api';

const schema = yup
  .object({
    name: yup.string().min(2).max(50).required(),
  })
  .required();

export default function CategoryForm(props: CategoryFormProps) {
  const [loading, setLoading] = React.useState(false)
  const [response, setResponse] = React.useState("Une erreur est survenue")
  
  const submit = async (formData: Category) => {
    setLoading(true);
    let response = "";
  
    if (!props.categoryData._id) {
      postCategoryData(formData)
        .then(() => {
          response = "Catégorie ajoutée avec succès";
          alert(response);
          window.location.href = "/categories";
        })
        .catch(() => {
          response = "Une erreur est survenue";
          alert(response);
          setLoading(false);
        });
    } else {
      try {
        await putCategoryData(props.categoryData._id, formData);
        response = "Catégorie modifiée avec succès";
        alert(response);
        window.location.href = "/categories";
      } catch (error) {
        response = "Une erreur est survenue";
        alert(response);
        setLoading(false);
      }
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
                sx={{ marginLeft: "20px", width: "100px", backgroundColor: "#F3F3F3", color: "#000000",
                "&:hover": {
                  backgroundColor: "#ECECEC",
                }, }}
                variant="contained"
                onClick={cancel}
                disabled={!isDirty}>
                Annuler
              </Button>
              <Button 
                sx={{ marginLeft: "20px", width: "100px" }}
                variant="contained"
                type="submit"
                disabled={!isValid}
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
