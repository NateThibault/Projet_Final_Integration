"use client"

import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef, GridCellParams } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/EditSharp';
import { getCategoriesData, deleteCategoryData } from '../../../API/api';
import { Box, CircularProgress } from '@mui/material';

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
      <button style={{ background: 'none', border: 'none' }} onClick={() => handleDeleteButtonClick(params)}>
        <DeleteIcon style={{ color: 'grey' }} />
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
        <EditIcon color="primary" style={{ color: '#2196F3' }} />
      </span>
    ),
    width: 50,
    renderCell: (params: GridCellParams) => (
      <button style={{ background: 'none', border: 'none' }}>
        <EditIcon color="primary" style={{ color: '#2196F3' }} />
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getCategoriesData()
      .then((data) => {
        const categoryRows = data.map((category: { _id: any; name: any }, index: number) => ({
          id: category._id,
          name: category.name,
        }));
        setRows(categoryRows);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setRows([]);
        setLoading(false);
      });
  }, []);

  const handleDeleteButtonClick = (params: GridCellParams) => {
    const categoryId = params.id as string; // Assuming the id is a string

    setLoading(true);

    deleteCategoryData(categoryId)
      .then(() => {
        // Remove the deleted row from the rows state
        setRows((prevRows) => prevRows.filter((row) => row.id !== categoryId));
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error deleting category:', error);
        setLoading(false);
      });
  };

  return (
    <Box sx={{ height: 'auto', maxHeight: '100%', minHeight: '99%', width: '90%' }}>
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
      )}
    </Box>
  );
};

export default CategoryGrid;



