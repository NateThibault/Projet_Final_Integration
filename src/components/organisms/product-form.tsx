"use client";
import { Button, Container, Grid, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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

interface ProductFormProps {
  data: ApiProduct;
}

interface ApiProduct {
  product: {
    categoryId: string;
    createdAt: string;
    description: string;
    imageUrl: string;
    isSold: boolean;
    price: number;
    title: string;
    updatedAt: string;
    userId: string;
    _id: string
  }
}

export default function ProductForm(props: ProductFormProps) {
  const {
    register,
    reset,
    formState: { errors, isValid, isDirty },
  } = useForm<ProductForm>({
    defaultValues: {
      title: props.data.product.title,
      price: props.data.product.price,
      description: props.data.product.description
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
            <Grid item xs={12} sx={{ textAlign: "right" }} >
              <Button variant="contained" onClick={() => { reset() }} disabled={!isDirty} sx={{ marginRight: "20px", width: "100px" }}>
                Cancel
              </Button>
              <Button variant="contained" type="submit" disabled={!isValid} sx={{ width: "100px" }}>
                Send
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
}
