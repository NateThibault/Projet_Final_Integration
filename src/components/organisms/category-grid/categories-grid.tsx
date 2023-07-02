"use client"

import styles from "../../../../src/app/[locale]/page.module.css"
import React, { useEffect, useState } from 'react'
import { DataGrid, GridColDef, GridCellParams } from '@mui/x-data-grid'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/EditSharp'
import { getCategoriesData, deleteCategoryData } from '../../../api/api'
import {Box, Button, CircularProgress} from '@mui/material'
import { useTranslations } from 'next-intl'

const CategoryGrid = () => {
  const t = useTranslations()
  
  const [rows, setRows] = useState<{ id: string; name: string }[]>([])
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    setLoading(true)

    getCategoriesData()
      .then((data) => {
        const categoryRows = data.map((category: { _id: any; name: any }) => ({
          id: category._id,
          name: category.name,
        }))
        setRows(categoryRows)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Erreur dans l\'extraction des données :', error)
        setRows([])
        setLoading(false)
      })
  }, [])

  const handleDeleteButtonClick = (params: GridCellParams) => {

    const categoryId = params.id as string
  
    const confirmDelete = window.confirm('Êtes-vous sûr de vouloir supprimer cette catégorie ?')
    if (!confirmDelete) {
      return
    }
  
    setLoading(true)
  
    deleteCategoryData(categoryId)
      .then(() => {
        setRows((prevRows) => prevRows.filter((row) => row.id !== categoryId))
        setLoading(false)
        window.alert('La catégorie a été supprimée avec succès.')
      })
      .catch((error) => {
        console.error('Erreur lors de la suppression de la catégorie', error)
        setLoading(false)
        window.alert('Erreur lors de la suppression de la catégorie')
      })
  }

  const handleModifyButtonClick = (params: GridCellParams) => {
    const categoryId = params.id as string
    window.location.href = `/categories/${categoryId}`
  }

  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: t("categories-grid.name"),
      flex: 1,
      editable: false,
    },
    {
      field: 'delete',
      width: 50,
      headerName: '',
      renderCell: (params: GridCellParams) => (
        <Button
          onClick={() => handleDeleteButtonClick(params)}
          className={styles.buttonGrid}
        >
          <DeleteIcon style={{ color: 'grey' }} />
        </Button>
      ),
      headerAlign: 'center',
      align: 'center',
      filterable: false,
      sortable: false,
    },
    {
      field: 'modify',
      headerName: '',
      width: 50,
      renderCell: (params: GridCellParams) => (
        <Button
          onClick={() => handleModifyButtonClick(params)}
          className={styles.buttonGrid}
        >
          {t("categories-grid.add")}
          <EditIcon style={{ color: '#2196F3' }} />
        </Button>
      ),
      headerAlign: 'center',
      align: 'center',
      filterable: false,
      sortable: false,
    },
  ]

  return (
    <Box sx={{ height: 'auto', maxHeight: '100%', width: "100%"}}>
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <CircularProgress />
        </Box>
      ) : (
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[10, 25, 50]}
          loading={loading}
          disableColumnMenu
          disableRowSelectionOnClick
        />
      )}  {/* {t("produits-grid.rowsPerPage")} */}
    </Box>
  )

  
}

export default CategoryGrid

