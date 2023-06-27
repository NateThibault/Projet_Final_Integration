import { Button } from "@mui/material";

const BoutonAdd = () => {
  const handleAddClick = () => {
    window.location.href ="/categories/add";
  };

  return (
    <Button variant="contained" size="large" onClick={handleAddClick}>
      Ajouter
    </Button>
  );
};

export default BoutonAdd;