"use client";

import styles from "./page.module.css";
import Header from "../components/molecules/header/header";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Box className={styles.main}>
        <Box sx={{ marginLeft: "80px" }}>
          <Header title={"Home"}></Header>
        </Box>
        <Grid
          container
          justifyContent="center"
          style={{ minHeight: "calc(20vh - 64px)", color: "black" }}
        >
          <Grid item>
            <Typography variant="h2" align="center"></Typography>
          </Grid>

          <Header title={"TP3 INTEGRATION"} />
        </Grid>
        <Typography
          sx={{
            marginLeft: "80px",
            marginRight: "80px",
            color: "black",
            fontSize: "25px",
            fontFamily:"serif",
          }}
        >
          Description du projet :
        </Typography>

        <Typography
          sx={{
            marginTop: "10px",
            marginLeft: "80px",
            marginRight: "80px",
            textAlign: "justify",
            color: "black",
            fontSize:"18px",
            fontFamily:"serif", 

          }}
        >
          Le projet consiste à créer une interface
          administrateure liée au back-end et a la base de données réalisés
          durant le cours de programmation . 
        </Typography>

        <Typography
          sx={{
            marginTop: "50px",
            marginLeft: "80px",
            marginRight: "80px",
            color: "black",
            fontSize: "25px",
            fontFamily:"serif",
          }}
        >
          {" "}
          Liste des membres de l'équipe :
        </Typography>

        <Typography
          sx={{
            marginTop: "30px",
            marginLeft: "80px",
            marginRight: "80px",
            color: "black",
            fontSize: "18px",
            fontFamily:"serif",
          }}
        >
          <Box >- Nathan Thibault</Box>
          <Box >- William Bitton </Box>
          <Box >- Priscila Carvalho</Box> 
          <Box >- Marie-Pier Dubois</Box>
          <Box >- Toufik Dellys</Box>
        </Typography>
      </Box>
    </>
  );
}

export default Home;
