import { Button } from "@mui/material";

const BoutonAdd = () => {
  const handleAddClick = () => {
    window.location.href ="/categories/add";
  };

  return (
    <Button
      variant="contained"
      size="large"
      onClick={handleAddClick}
      sx={{ height:"6vh", borderRadius:"1vh" }}
    >
      Ajouter
    </Button>
  );
};

export default BoutonAdd;