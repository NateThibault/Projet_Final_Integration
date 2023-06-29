import { Button } from "@mui/material"

const ButtonAdd = () => {
  const handleAddClick = () => {
    window.location.href ="/categories/add"
  }

  return (
    <Button
      variant="contained"
      onClick={handleAddClick}
      sx={{ width: '100px' }}
    >
      Ajouter
    </Button>
  )
}

export default ButtonAdd