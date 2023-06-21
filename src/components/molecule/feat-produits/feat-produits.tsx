"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Typography from '@mui/material/Typography';

interface RowData {
  id: number;
  Titre: string;
  Description: string;
  Prix: number;
}

interface ListProduitsProps {
  fileCreationDate: string;
}

const columns: GridColDef[] = [
  {
    field: 'DateCreation',
    headerName: 'Date de création',
    width: 150,
    valueGetter: (params: GridValueGetterParams<RowData, any>) =>
      params.rowIndex + 1,
  },
  {
    field: 'Titre',
    headerName: 'Titre',
    width: 150,
    editable: true,
  },
  {
    field: 'Description',
    headerName: 'Description',
    width: 150,
    editable: true,
  },
  {
    field: 'Prix',
    headerName: 'Prix',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 120,
    renderCell: (params: GridValueGetterParams<RowData, any>) => (
      <div>
        <IconButton color="secondary" size="small">
          <DeleteIcon style={{ color: 'gray' }} />
        </IconButton>
        <IconButton color="primary" size="small">
          <EditIcon />
        </IconButton>
      </div>
    ),
  },
];

const rows: RowData[] = [
  { id: 1, Titre: 'Produit 1', Description: 'Description 1', Prix: 10 },
  { id: 2, Titre: 'Produit 2', Description: 'Description 2', Prix: 20 },
  { id: 3, Titre: 'Produit 3', Description: 'Description 3', Prix: 30 },
  { id: 4, Titre: 'Produit 4', Description: 'Description 4', Prix: 40 },
  { id: 5, Titre: 'Produit 5', Description: 'Description 5', Prix: 50 },
];

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
          maxWidth: '800px',
          width: '100%',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Liste des produits
        </Typography>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </div>
      </Box>
    </Box>
  );
}
