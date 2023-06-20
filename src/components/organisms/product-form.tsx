"use client";
import { Button, Container, Grid, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext, useEffect } from "react";
import { ApplicationContext } from "@/context/application.provider";
import { ContactContext } from "@/context/contact.provider";

const schema = yup
  .object({
    title: yup.string().min(2).max(50).required(),
    description: yup.string().max(255).required(),
    price: yup.number().required(),
    message: yup.string().required(),
  })
  .required();

interface ProductForm {
  title: string;
  price: number;
  description: string;
}

export default function ProductForm() {
  const applicationContext = useContext(ApplicationContext);
  const contactContext = useContext(ContactContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<ProductForm>({
    defaultValues: {
      title: applicationContext.title,
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  function onFormSubmit(data: ProductForm) {
    applicationContext.setTitle(data.title);
    contactContext.setTitle(data.title);
    contactContext.setPrice(data.price);
    contactContext.setDescription(data.description);
  }

  useEffect(() => {
    applicationContext.setTitle(watch("title"));
  }, [watch("title")]);

  useEffect(() => {
    contactContext.setDescription(watch("description"));
  }, [watch("description")]);

  return (
    <>
      <Container sx={{ backgroundColor: "lightgrey", padding: "20px" }}>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <Grid container rowSpacing={3}>
            <Grid item sm={12}>
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
            <Grid item sm={12}>
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
            <Grid item sm={12}>
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
            <Grid item sm={12}>
              <Button variant="contained" type="submit" disabled={!isValid}>
                Send
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
}
