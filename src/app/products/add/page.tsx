"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext, useEffect } from "react";
import { ApplicationContext } from "@/context/application.provider";
import ProductProvider from "@/context/contact.provider";
import ProductForm from "@/components/organisms/product-form";

const schema = yup
  .object({
    title: yup.string().min(2).max(20).required(),
    price: yup.number().required(),
    description: yup.string().max(255).required(),
  })
  .required();

interface ProductForm {
  title: string;
  price: number;
  description: string;
}

export default function addProduct() {
  const applicationContext = useContext(ApplicationContext);

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
  }

  useEffect(() => {
    applicationContext.setTitle(watch("title"));
  }, [watch("title")]);


  return (
    <>
      <ProductProvider>
        <ProductForm />
      </ProductProvider>
    </>
  );
}
