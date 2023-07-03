import { Button } from "@mui/material"
import { useTranslations } from "next-intl"

const BoutonAdd = () => {
  const t = useTranslations()
  const handleAddClick = () => {
    window.location.href ="/products/add"
  }

  return (
    <Button
      variant="contained"
      onClick={handleAddClick}
      sx={{ width: '100px' }}
    >
     {t("my-buton-product.add")}
    </Button>
  )
}

export default BoutonAdd