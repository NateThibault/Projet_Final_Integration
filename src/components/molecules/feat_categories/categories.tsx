"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridCellParams } from '@mui/x-data-grid';
import DeleteSharpIcon from '@mui/icons-material/Delete';
import EditRoundedIcon from '@mui/icons-material/EditSharp';



const columns: GridColDef[] = [

  {
    field: 'lastName',
    headerName: 'Nom de la Catégorie',
    width: 200,
    editable: false,
  },
  {
    field: 'delete',
    headerName: <DeleteSharpIcon />,
    width: 100,
    renderCell: (params: GridCellParams) => (
      <button><DeleteSharpIcon /></button>
    ),
  },
  {
    field: 'modify',
    headerName: <EditRoundedIcon color="primary"/>,
    width: 100,
    renderCell: (params: GridCellParams) => (
      <button><EditRoundedIcon color="primary"/></button>
    ),
  },
  
];

const rows = [
  { id: 1, lastName: 'Casse-têtes'},
  { id: 2, lastName: 'Jeux de cartes'},
  { id: 3, lastName: 'Jeux de plein air'},
  { id: 4, lastName: 'Loisirs créatifs'},
  { id: 5, lastName: 'Jeux musicaux'},
  { id: 6, lastName: 'Jeux 1er âge'},
  { id: 7, lastName: 'Livres éducatifs'},
  { id: 8, lastName: 'Jeux d’imitation'},
  { id: 9, lastName: 'Puzzles'},
  { id: 10, lastName: "Jeux de société" },
  { id: 11, lastName: "Jeux de construction" },
  { id: 12, lastName: "Jeux de rôle" },
  { id: 13, lastName: "Jeux de stratégie" },
  { id: 14, lastName: "Jeux de société classiques" },
  { id: 15, lastName: "Jeux de réflexion" },
  { id: 16, lastName: "Jeux vidéo" },
  { id: 17, lastName: "Jeux de plein air" },
  { id: 18, lastName: "Jeux de cartes" },
  { id: 19, lastName: "Jeux d'énigmes" },
  { id: 20, lastName: "Loisirs créatifs" },
  { id: 21, lastName: "Jeux musicaux" },
  { id: 22, lastName: "Jeux 1er âge" },
  { id: 23, lastName: "Livres éducatifs" },
  { id: 24, lastName: "Jeux d’imitation" },
  { id: 25, lastName: "Puzzles" },
  { id: 26, lastName: "Sports et plein air" },
  { id: 27, lastName: "Jeux électroniques" },
  { id: 28, lastName: "Jeux de mots" },
  { id: 29, lastName: "Jouets en bois" },
  { id: 30, lastName: "Jouets éducatifs" },
  { id: 31, lastName: "Jouets interactifs" },
  { id: 32, lastName: "Jouets sensoriels" },
  { id: 33, lastName: "Jeux électroniques" },
  { id: 34, lastName: "Jeux de société" },
  { id: 35, lastName: "Jeux de construction" },
  { id: 36, lastName: "Jeux de rôle" },
  { id: 37, lastName: "Jeux de stratégie" },
  { id: 38, lastName: "Jeux de société classiques" },
  { id: 39, lastName: "Jeux de réflexion" },
  { id: 40, lastName: "Jeux vidéo" },
  { id: 41, lastName: "Jeux de plein air" },
  { id: 42, lastName: "Jeux de cartes" },
  { id: 43, lastName: "Jeux d'énigmes" },
  { id: 44, lastName: "Loisirs créatifs" },
  { id: 45, lastName: "Jeux musicaux" },
  { id: 46, lastName: "Jeux 1er âge" },
  { id: 47, lastName: "Livres éducatifs" },
  { id: 48, lastName: "Jeux d’imitation" },
  { id: 49, lastName: "Puzzles" },
  { id: 50, lastName: "Sports et plein air" },
  { id: 51, lastName: "Jeux électroniques" },
  { id: 52, lastName: "Jeux de mots" },
  { id: 53, lastName: "Jouets en bois" },
  { id: 54, lastName: "Jouets éducatifs" },
  { id: 55, lastName: "Jouets interactifs" },
  { id: 56, lastName: "Jouets sensoriels" },
  { id: 57, lastName: "Jeux électroniques" },
  { id: 58, lastName: "Jeux de société" },
  { id: 59, lastName: "Jeux de construction" }
];

export default function DataGridDemo() {

  return (
    <Box sx={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        disableColumnMenu
        disableRowSelectionOnClick
      />
    </Box>
  );
}

function handleModifyButtonClick(params: GridCellParams<any, unknown, unknown, import("@mui/x-data-grid").GridTreeNode>): void {
  throw new Error('Function not implemented.');
}
function handleDeleteButtonClick(params: GridCellParams<any, unknown, unknown, import("@mui/x-data-grid").GridTreeNode>): void {
  throw new Error('Function not implemented.');
}

