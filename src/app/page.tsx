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
          }}
        >
          Description du projet : Le projet consiste à créer un interface
          administrateure liée au back-end et a la base de données réalisés
          durant le court de programmation . 
        </Typography>

        <Typography
          sx={{
            marginTop: "50px",
            marginLeft: "80px",
            marginRight: "80px",
            color: "black",
            fontSize: "25px",
          }}
        >
          {" "}
          Liste des membres de l'équipe :
        </Typography>

        <Box
          sx={{
            marginTop: "30px",
            marginLeft: "80px",
            marginRight: "80px",
            color: "black",marginBottom:"100px"
          }}
        >
          <Typography>Nathan Thibault</Typography>
          <Typography>William Bitton </Typography>
          <Typography>Priscila Carvalho</Typography> 
          <Typography>Mari-Pier Dubois</Typography>
          <Typography>Toufik Dellys</Typography>
        </Box>
      </Box>
    </>
  );
}
