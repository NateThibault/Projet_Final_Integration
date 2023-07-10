import { Button } from "@mui/material"
import { useTranslations } from "next-intl"
import  { useRouter } from "next/navigation"	

const ButtonAdd = () => {

  const t = useTranslations()
  const router = useRouter()

  const handleAddClick = () => {
    router.push("/categories/add")
  }

  return (
    <Button
      variant="contained"
      onClick={handleAddClick}
      sx={{ width: '100px' }}
    >
      {t("buttonAddCategory.add")}
    </Button>
  )
}

export default ButtonAdd