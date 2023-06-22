"use client"

import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef, GridCellParams } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/EditSharp';
import { getCategoriesData } from '../../../API/api';



const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Nom de la Catégorie',
    flex: 1,
    editable: false,
  },
  {
    field: 'delete',
    width: 50,
    renderHeader: (params) => (
      <span>
        <DeleteIcon style={{ color: 'grey' }} />
      </span>
    ),
    renderCell: (params: GridCellParams) => (
      <button style={{ background: 'none', border: 'none' }}>
        <DeleteIcon style={{ color:"grey" }} />
      </button>
    ),
    headerAlign: 'center', 
    align: 'center', 
    filterable: false,
    sortable: false,
  },
  {
    field: 'modify',
    renderHeader: (params) => (
      <span>
        <EditIcon color="primary" style={{ color:"#2196F3" }} />
      </span>
    ),
    width: 50,
    renderCell: (params: GridCellParams) => (
      <button style={{ background: 'none', border: 'none' }}>
        <EditIcon color="primary" style={{ color:"#2196F3" }} />
      </button>
    ),
    headerAlign: 'center', 
    align: 'center', 
    filterable: false,
    sortable: false,
  },
];

const CategoryGrid = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    getCategoriesData()
      .then((data) => {
        setRows(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setRows([]); // Set empty rows on error
      });
  }, []);

  return (
    <div style={{ height: 500, width: '90%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        disableColumnMenu
        disableRowSelectionOnClick
      />
    </div>
  );
};

export default CategoryGrid;


// function handleModifyButtonClick(params: GridCellParams<any, unknown, unknown, import("@mui/x-data-grid").GridTreeNode>): void {
//   throw new Error('Function not implemented.');
// }
// function handleDeleteButtonClick(params: GridCellParams<any, unknown, unknown, import("@mui/x-data-grid").GridTreeNode>): void {
//   throw new Error('Function not implemented.');
// }

