"use client";
import { Button, Container, Grid, TextField, TextareaAutosize } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { ProductContext } from "@/context/product.provider";

const schema = yup
  .object({
    title: yup.string().min(2).max(50).required(),
    description: yup.string().max(255).required(),
    price: yup.number().required(),
  })
  .required();

interface ProductForm {
  title: string;
  price: number;
  description: string;
}

export default function ProductForm() {
  const productContext = useContext(ProductContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm<ProductForm>({
    defaultValues: {
      title: productContext.title,
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  function onFormSubmit(data: ProductForm) {
    productContext.setTitle(data.title);
    productContext.setPrice(data.price);
    productContext.setDescription(data.description);
  }

  return (
    <>
      <Container sx={{ backgroundColor: "lightgrey", padding: "20px", borderRadius: "10px", marginTop: "30px" }}>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <Grid container rowSpacing={3}>
            <Grid item xs={12}>
              <TextField
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
              <TextField
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
              <TextField
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
            <Grid item xs={12} align="right" >
              <Button variant="contained" type="submit" disabled={!isValid} sx={{ marginRight: "20px", width: "80px" }}>
                Send
              </Button>
              <Button variant="contained" type="reset" value="reset" disabled={!isDirty}>
                Cancel
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
}
