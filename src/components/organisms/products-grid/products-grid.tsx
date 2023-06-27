"use client"
import * as React from 'react'
import Box from '@mui/material/Box'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { RowData, ListProduitsProps } from '@/interface/interface'

const columns: GridColDef[] = [
  {
    field: 'DateCreation',
    headerName: 'Date de création',
    width: 150,
    valueGetter: (params: GridValueGetterParams<RowData, any>) =>
      params.rowNode,
    flex: 1,
  },
  {
    field: 'Titre',
    headerName: 'Titre',
    width: 150,
    editable: false,
    flex: 1,
  },
  {
    field: 'Description',
    headerName: 'Description',
    width: 150,
    editable: false,
    flex: 1,
  },
  {
    field: 'Prix',
    headerName: 'Prix',
    type: 'number',
    width: 110,
    editable: false,
    headerAlign: 'center',
    align: 'center',
    flex: 1,
  },
  {
    field: 'actions',
    headerName: '',
    width: 120,
    flex: 1,
    headerAlign: 'right',
    renderCell: () => (
      <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
        <IconButton color="secondary" size="small">
          <DeleteIcon style={{ color: 'gray' }} />
        </IconButton>
        <IconButton color="primary" size="small">
          <EditIcon />
        </IconButton>
      </div>
    )
  },
]


const rows: RowData[] = [
  { id: 1, Titre: 'Produit 1', Description: 'Description 1', Prix: 10 },
  { id: 2, Titre: 'Produit 2', Description: 'Description 2', Prix: 20 },
  { id: 3, Titre: 'Produit 3', Description: 'Description 3', Prix: 30 },
  { id: 4, Titre: 'Produit 4', Description: 'Description 4', Prix: 40 },
  { id: 5, Titre: 'Produit 5', Description: 'Description 5', Prix: 50 },
]

export default function ListProduits({ fileCreationDate }: ListProduitsProps) {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        background: 'white',
      }}
    >
      <Box
        sx={{
          maxWidth: '100%',
          width: '90%',
          height: '100%',
        }}
      >
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Liste des produits
        </Typography>
        <div style={{ height: '100%', width: '100%', position: 'relative' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            checkboxSelection
            disableColumnMenu
            disableRowSelectionOnClick
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            pageSizeOptions={[10, 25, 50]}
          />
          <Button
            variant="contained"
            color="primary"
            style={{ position: 'absolute', bottom: -50, right: 16, marginTop: '16px' }}
          >
            Ajouter
          </Button>
        </div>
      </Box>
    </Box>
  )
}