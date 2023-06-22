"use client";
import * as React from 'react';
import { Button, Checkbox, Container, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { postProductData } from "@/API/api";

const schema = yup
  .object({
    title: yup.string().min(2).max(50).required(),
    description: yup.string().max(255).required(),
    price: yup.number().required(),
    categoryId: yup.string().required(),
    isSold: yup.boolean()
  })
  .required();

interface ProductForm {
  title: string;
  price: number;
  description: string;
  categoryId: string;
  isSold: boolean;
}

interface ProductFormProps {
  productData: ApiProduct;
  categoriesData: Categories
}

interface ApiProduct {
    _id: string
    title: string;
    categoryId: string;
    description: string;
    isSold: boolean;
    price: number;
}

interface Categories {
  map(arg0: (category: Categories) => void): React.ReactNode;
  _id: string;
  name: string;
}

export default function ProductForm(props: ProductFormProps) {
  // console.log(props.categoriesData)
  // props.categoriesData.map((result) => {console.log("result     " + result.name)})
  const [category, setCategory] = React.useState('')
  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  }

  const {
    register,
    reset,
    formState: { errors, isValid, isDirty },
  } = useForm<ProductForm>({
    defaultValues: {
      title: props.productData.title,
      price: props.productData.price,
      description: props.productData.description,
      categoryId: props.productData.categoryId,
      isSold: props.productData.isSold,
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  return (
    <>
      <Container sx={{ backgroundColor: "lightgrey", padding: "24px", borderRadius: "5px", marginTop: "30px" }}>
        <form>
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
              <FormControl fullWidth required>
                <InputLabel id="labelCategories">Catégorie</InputLabel>
                <Select {...register("categoryId")} sx={{ backgroundColor: "white", borderRadius: "5px" }}
                  labelId="labelCategories"
                  id="categoryId"
                  value={category}
                  label="Catégorie *"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={"637bc5cc85b7540a4240605c"}>Casse-têtes</MenuItem>
                  {/* {props.categoriesData.map((result: Categories) => {
                    <MenuItem value={result._id}>{result.name}</MenuItem>
                  })} */}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel sx={{ color: "black" }} id="isSold" control={<Checkbox />} label="Is the product sold ?" />
            </Grid>
            <Grid item xs={12} sx={{ textAlign: "right" }} >
              <Button variant="contained" onClick={() => { reset() }} disabled={!isDirty} sx={{ marginLeft: "20px", width: "100px" }}>
                Annuler
              </Button>
              <Button variant="contained" type="button" disabled={!isValid} sx={{ marginLeft: "20px", width: "100px" }} onClick={() => { postProductData(body) }}>
                Ajouter
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
}
