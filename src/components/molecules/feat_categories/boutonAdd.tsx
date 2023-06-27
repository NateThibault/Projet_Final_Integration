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
      sx={{ width: '10%',height:"6vh", borderRadius:"1vh" }} // Adjust the width value as per your requirement
    >
      Ajouter
    </Button>
  );
};

export default BoutonAdd;