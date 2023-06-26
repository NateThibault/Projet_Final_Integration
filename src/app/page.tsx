"use client"

import styles from './page.module.css'
import Header from "../components/molecules/header/header";
import { Box } from '@mui/material';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';


export default function Home() {
  return (
    <>
    
    <Box className={styles.main} sx={{background:"white"}}>
   
      <Box
       sx={{ marginLeft:"80px"}}>
     <Header title={"Home"}></Header>
      
      </Box>
     <Grid
          container
          justifyContent="center"
          style={{ minHeight: 'calc(20vh - 64px)',color:"black"}} 
        >
          <Grid item>
            <Typography variant="h2" align="center">
            </Typography>
          </Grid>
       
         <h2>Tp3 integration</h2>
     </Grid>
     <Typography sx={{ marginLeft:"80px", marginRight:"80px",color:"black"}}>
     <ul>
          <li>Coordinateur/Architecte de la solution : </li>
          <li>Chef de projet (Dev Lead): </li>
          <li>Designer  : </li>
          <li>Developpeur : </li>
          <li>Devops: </li>
        </ul>
        </Typography>
       
     <Typography sx={{marginTop:"30px", marginLeft:"80px", marginRight:"80px",textAlign:"justify",color:"black"}}>Description du projet :
Le projet consiste à améliorer l'expérience utilisateur en ajoutant une interface conviviale et attrayante aux données provenant du backend d'une application ou d'une API. L'objectif principal est de rendre les informations plus accessibles, intuitives et esthétiquement agréables pour les utilisateurs finaux.
Le projet se déroulera en plusieurs étapes :
Analyse des données backend : L'équipe chargée du projet examinera les données backend disponibles et comprendra leur structure, leur format et leur importance pour l'interface utilisateur.
Conception de l'interface utilisateur : Sur la base de l'analyse des données backend, une équipe de conception travaillera à la création d'une interface utilisateur adaptée. Cela inclura la conception des différentes vues, des tableaux de données, des graphiques, des formulaires de saisie, etc. L'objectif est de présenter les informations de manière claire et organisée.
Développement du frontend : L'équipe de développement se chargera de convertir la conception de l'interface utilisateur en code HTML/CSS. Ils utiliseront les meilleures pratiques de développement web pour créer des interfaces réactives, adaptées aux différents appareils et navigateurs.
Intégration avec le backend : Une fois le frontend développé, il sera intégré au backend existant. Cela peut nécessiter des modifications mineures ou majeures du code backend pour fournir les données nécessaires à l'interface utilisateur.
Personnalisation avec CSS : L'équipe de développement utilisera des feuilles de style CSS pour améliorer l'apparence de l'interface utilisateur. Cela comprendra le choix des couleurs, des polices, des animations, des transitions, etc. afin de rendre l'interface attrayante et cohérente avec la charte graphique de l'application ou du site web.
Tests et itérations : Une fois l'interface utilisateur et le CSS mis en place, des tests rigoureux seront effectués pour s'assurer de la compatibilité avec différents navigateurs et appareils. Des itérations supplémentaires seront effectuées pour corriger les problèmes de compatibilité ou d'esthétique.
Déploiement et documentation : Une fois le développement terminé, l'interface utilisateur améliorée sera déployée sur le site web ou l'application. Une documentation claire et complète sera également créée pour faciliter la maintenance future et les éventuelles améliorations.
Ce projet vise à transformer les données backend en une interface utilisateur intuitive et visuellement attrayante. En améliorant l'expérience utilisateur, il contribuera à rendre l'application ou le site web plus convivial et à faciliter la compréhension et l'interaction avec les données.
.</Typography> 



    </Box>
    </>
  );
}




