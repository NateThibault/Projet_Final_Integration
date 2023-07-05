"use client";

import styles from "./page.module.css";
import Header from "../../components/atoms/header/header";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { useTheme } from '@mui/material/styles';

const Home = () => {
  const t = useTranslations();
  const theme = useTheme();

  return (
    <>
      <Header title={t("accueil.page-title")} />

      <Box className={styles.main}>
        <Typography
          sx={{
            color: "black",
            fontSize: "25px",
            marginTop: "50px",
          }}
        >
          {t("accueil.subTitle")}
        </Typography>

        <Typography
          sx={{
            marginTop: "10px",
            color: "black",
          }}
        >
          {t("accueil.desc")}
        </Typography>

        <Typography
          sx={{
            marginTop: "50px",
            color: "black",
            fontSize: "25px",
          }}
        >
          {t("accueil.team")}
        </Typography>

        <Box
          sx={{
            marginTop: "10px",
            color: "black",
            marginBottom: "100px",
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
  );
};

export default Home;
