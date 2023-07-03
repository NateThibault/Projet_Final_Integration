"use client"
import * as React from 'react'
import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Alert,
  AlertTitle,
  Snackbar,
} from "@mui/material";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { postProductData, putProductData } from "@/api/api"
import { ProductFormProps, Product } from '@/interface/interface'
import { useTranslations } from 'next-intl'
import { useState } from 'react';



const schema = yup
  .object({
    title: yup.string().min(2, "Le titre doit contenir un minimum de 2 caractères").max(50, "Le titre ne doit pas contenir plus de 50 caractères").required(),
    description: yup.string().max(255, "La description ne doit pas contenir plus de 255 caractères").required("La description est requise"),
    price: yup.number().typeError("Le prix est requis et ne peut contenir que des chiffres").required(),
    categoryId: yup.string().required(),
    isSold: yup.boolean()
  })
  .required()

export default function ProductForm(props: ProductFormProps) {
  const t = useTranslations();
  const [loading, setLoading] = React.useState(false)
  const [category, setCategory] = React.useState(props.productData.categoryId)
  const [isSold, setIsSold] = React.useState(props.productData.isSold)
  const [isSoldDirty, setIsSoldDirty] = React.useState(false)
  const [isCategoryDirty, setIsCategoryDirty] = React.useState(false)
  const [alertMessage, setAlertMessage] = React.useState<string | null>(null);
  const [alertSeverity, setAlertSeverity] = useState<'error' | 'warning' | 'info' | 'success'>('success');
  const [alertOpen, setAlertOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    
    setIsSubmitting(true);
    setLoading(true);
  
    try {
      if (!props.productData._id) {
        await postProductData(formData);
        setAlertSeverity('success');
        setAlertMessage("Produit ajouté avec succès");
        setAlertOpen(true);
  
        setTimeout(() => {
          setAlertMessage(null);
          setAlertOpen(false);
          window.location.href = "/products";
        }, 2500);
      } else {
        await putProductData(props.productData._id, formData);
        setAlertSeverity('success');
        setAlertMessage("Produit modifié avec succès");
        setAlertOpen(true);
  
        setTimeout(() => {
          setAlertMessage(null);
          setAlertOpen(false);
          window.location.href = "/products";
        }, 2500);
      }
    } catch (error) {
      setAlertSeverity('error');
      setAlertMessage("Une erreur est survenue");
      setAlertOpen(true);
    } finally {
      setLoading(false);
    }
  };

  const cancel = () => {
    reset();
    setCategory(props.productData.categoryId);
    setIsCategoryDirty(false);
    setIsSold(props.productData.isSold);
    setIsSoldDirty(false);
  };

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
      {isSubmitting ? (
        <Box sx={{ display: 'flex',justifyContent: 'center',alignItems: 'center',position: 'fixed',top: 0,left: 0,right: 0,bottom: 0,zIndex: 9999, }}>
          <CircularProgress />
        </Box>
      ) : (
        !loading && (
        <Container sx={{ backgroundColor: "lightgrey", padding: "24px", borderRadius: "5px", marginTop: "30px" }}>
          <form onSubmit={handleSubmit(submit)} action="/products">
            <Grid container rowSpacing={3}>
              <Grid item xs={12}>
                <TextField sx={{ backgroundColor: "white", borderRadius: "5px" }}
                  id="title"
                  label={t("produits-form.title")}
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
                  label={t("produits-form.price")}
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
                  <InputLabel id="labelCategories">{t("produits-form.categorie *")}</InputLabel>
                  <Select sx={{ backgroundColor: "white", borderRadius: "5px" }}
                    labelId="labelCategories"
                    id="categoryId"
                    value={category}
                    label="Catégorie"
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
                  label={t("produits-form.description")}
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
                  label={t("produits-form.isSold")}
                  control={<Checkbox disabled={!props.productData._id} checked={isSold} {...register("isSold")} onChange={handleChangeCheckbox} />}
                />
              </Grid>
              <Grid item xs={12} sx={{ textAlign: "right" }}>
                <Button sx={{
                    marginLeft: "20px", width: "100px", backgroundColor: "#F3F3F3", color: "#000000",
                    "&:hover": {
                      backgroundColor: "#ECECEC",
                    },
                  }}
                  variant="contained"
                  onClick={cancel}
                  disabled={!isDirty && !isCategoryDirty && !isSoldDirty}
                  >
                 {t("produits-form.cancel")}
                </Button>
                <Button sx={{ marginLeft: "20px", width: "100px" }}
                  variant="contained"
                  type="submit"
                  disabled={!isValid || !isDirty && !isCategoryDirty && !isSoldDirty}>
                  {t("produits-form.submit")}
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
  )
}
