"use client"

import styles from "./page.module.css"
import Header from "../../components/atoms/header/header"
import { Box } from "@mui/material"
import { Typography } from "@mui/material"
import { useTranslations } from "next-intl"

const Home = () => {
  const t = useTranslations();
  return (
  <>
      <Header 
      title={t("accueil.page-title")} />
  
      <Box className={styles.main}>
        <Typography
          sx={{
            color: "black",
            fontSize: "25px",
          }}
        >
          Description du projet :
        </Typography>

        <Typography
          sx={{
            marginTop: "10px",
            color: "black",
          }}
        >
          Le projet consiste à créer une interface
          administrateur liée au back-end et à la base de données réalisés
          durant le court de programmation.
        </Typography>

        <Typography
          sx={{
            marginTop: "50px",
            color: "black",
            fontSize: "25px",
          }}
        >
          Liste des membres de l'équipe :
        </Typography>

        <Box
          sx={{
            marginTop: "10px",
            color: "black", marginBottom: "100px"
          }}
        >
          <Typography>Nathan Thibault</Typography>
          <Typography>William Bitton</Typography>
          <Typography>Priscila Carvalho</Typography>
          <Typography>Marie-Pier Dubois</Typography>
          <Typography>Toufik Dellys</Typography>
        </Box>
      </Box>
    </>
  )
}

export default Home

