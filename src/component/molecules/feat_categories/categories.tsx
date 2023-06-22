"use client"

import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef, GridCellParams } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/EditSharp';
import { getCategoriesData } from '../../../API/api';
import { Box } from '@mui/material';



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
        const categoryRows = data.map((category: { name: any; }, index: number) => ({
          id: index + 1, // Generate a unique id based on the index
          name: category.name,
          // Add other fields as needed
        }));
        setRows(categoryRows);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setRows([]); // Set empty rows on error
      });
  }, []);

  return (
    <Box sx={{ height: 400, width: '100%' }}>
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
        loading={rows.length === 0} // Show loading state while fetching data
        disableColumnMenu
        disableRowSelectionOnClick
      />
    </Box>
  );
};


export default CategoryGrid;


// function handleModifyButtonClick(params: GridCellParams<any, unknown, unknown, import("@mui/x-data-grid").GridTreeNode>): void {
//   throw new Error('Function not implemented.');
// }
// function handleDeleteButtonClick(params: GridCellParams<any, unknown, unknown, import("@mui/x-data-grid").GridTreeNode>): void {
//   throw new Error('Function not implemented.');
// }

