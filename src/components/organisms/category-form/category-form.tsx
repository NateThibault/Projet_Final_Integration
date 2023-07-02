"use client"

import * as React from 'react';
import { Alert, AlertTitle, Box, Button, CircularProgress, Container, Grid, Snackbar, TextField } from "@mui/material";
import { useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CategoryFormProps, Category } from '@/interface/interface';
import { postCategoryData, putCategoryData, getCategoryData } from '@/api/api'; // Import the getCategoryData function
import { useState, useEffect } from 'react';

const schema = yup
.object({
  name: yup.string().min(2, "Le nom de la catégories doit contenir un minimum de 2 caractères").max(50, "Le nom de la catégorie ne doit pas contenir plus de 50 caractères").required(),
})
.required();

export default function CategoryForm(props: CategoryFormProps) {
  const [loading, setLoading] = React.useState(false);
  const [alertMessage, setAlertMessage] = React.useState<string | null>(null);
  const [alertSeverity, setAlertSeverity] = useState<'error' | 'warning' | 'info' | 'success'>('success');
  const [alertOpen, setAlertOpen] = useState(false);
  const [categoryData, setCategoryData] = useState<Category | null>(null); // Add state for category data
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    reset,
    handleSubmit,
    control,
    formState: { errors, isValid, isDirty },
  } = useForm<Category>({
    defaultValues: {
      name: categoryData?.name || '', // Use categoryData.name as the default value
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const watchName = useWatch({
    control,
    name: "name",
    defaultValue: categoryData?.name || ""
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCategoryData(props.categoryData._id); // Fetch the updated category data
        setCategoryData(data);
      } catch (error) {
        
      }
    };

    fetchData();
  }, [props.categoryData._id]);

  useEffect(() => {
    reset({
      name: categoryData?.name || '', // Update the default value when categoryData changes
    });
  }, [categoryData, reset]);

  const submit = async (formData: Category) => {
    setIsSubmitting(true);
    setLoading(true);

    if (!props.categoryData._id) {
      postCategoryData(formData)
        .then(() => {
          setAlertSeverity('success');
          setAlertMessage("Catégorie ajouté avec succès");
          setAlertOpen(true);

          setTimeout(() => {
            setAlertMessage(null);
            setAlertOpen(false);
            window.location.href = "/categories";
          }, 2500);
        })
        .catch(() => {
          setAlertSeverity('error');
          setAlertMessage("Une erreur est survenue");
          setAlertOpen(true);
          setLoading(false);
        });
    } else {
      putCategoryData(props.categoryData._id, formData)
        .then(() => {
          setAlertSeverity('success');
          setAlertMessage("Catégorie modifié avec succès");
          setAlertOpen(true);

          setTimeout(() => {
            setAlertMessage(null);
            setAlertOpen(false);
            window.location.href = "/categories";
          }, 2500);
        })
        .catch(() => {
          setAlertSeverity('error');
          setAlertMessage("Une erreur est survenue");
          setAlertOpen(true);
          setLoading(false);
        });
    }
  };

  const cancel = () => {
    reset();
  };

  return (
    <>
      {isSubmitting ? (
        <Box sx={{ display: 'flex',justifyContent: 'center',alignItems: 'center',position: 'fixed',top: 0,left: 0,right: 0,bottom: 0,zIndex: 9999, }}>
          <CircularProgress />
        </Box>
      ) : (
        !loading && (
        <Container sx={{ backgroundColor: "lightgrey", padding: "50px", borderRadius: "5px", marginTop: "30px" }}>
          <form onSubmit={handleSubmit(submit)}>
            <Grid container rowSpacing={3}>
              <Grid item xs={12}>
                <TextField
                  sx={{ backgroundColor: "white", borderRadius: "5px" }}
                  id="name"
                  label="Nom de la catégorie"
                  variant="outlined"
                  fullWidth
                  {...register("name")}
                  error={!!errors.name}
                  helperText={errors.name?.message}
                  required
                  InputLabelProps={{
                    shrink: Boolean(watchName)
                  }}
                />
              </Grid>
              <Grid item xs={12} sx={{ textAlign: "right" }}>
                <Button
                  sx={{
                    marginLeft: "20px", width: "100px", backgroundColor: "#F3F3F3", color: "#000000",
                    "&:hover": {
                      backgroundColor: "#ECECEC",
                    },
                  }}
                  variant="contained"
                  onClick={cancel}
                  disabled={!isDirty}
                >
                  Annuler
                </Button>
                <Button
                  sx={{ marginLeft: "20px", width: "100px" }}
                  variant="contained"
                  type="submit"
                  disabled={!isValid || !isDirty}
                  color="primary"
                >
                  Envoyer
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      ))}

      {alertMessage && (
        <Snackbar
          open={alertOpen}
          autoHideDuration={3000}
          onClose={() => setAlertOpen(false)}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert severity={alertSeverity}>
            <AlertTitle>{alertSeverity}</AlertTitle>
            {alertMessage}
          </Alert>
        </Snackbar>
      )}
    </>
  );
}