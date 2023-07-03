import { Button } from "@mui/material"
import { useTranslations } from "next-intl"

const ButtonAdd = () => {
  const t = useTranslations()
  const handleAddClick = () => {
    window.location.href ="/categories/add"
  }

  return (
    <Button
      variant="contained"
      onClick={handleAddClick}
      sx={{ width: '100px' }}
    >
      {t("buton-add.add")}
    </Button>
  )
}

export default ButtonAdd