"use client"


import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef, GridCellParams } from "@mui/data-grid";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/EditSharp';
import { getCategoriesData, deleteCategoryData } from '../../../api/api';
import { Box, CircularProgress } from '@mui/material';

const CategoryGrid = () => {
  
  const [rows, setRows] = useState<{ id: string; name: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    setLoading(true);

    getCategoriesData()
      .then((data) => {
        const categoryRows = data.map((category: { _id: any; name: any }) => ({
          id: category._id,
          name: category.name,
        }));
        setRows(categoryRows);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur dans l'extraction des données :", error);
        setRows([]);
        setLoading(false);
      });
  }, []);

  const handleDeleteButtonClick = (params: GridCellParams) => {
    const categoryId = params.id as string; 

    const confirmDelete = window.confirm('Êtes-vous sûr de vouloir supprimer cette catégorie ?');
    if (!confirmDelete) {
      return;
    }

    setLoading(true);

    deleteCategoryData(categoryId)
      .then(() => {
        // Remove the deleted row from the rows state
        setRows((prevRows) => prevRows.filter((row) => row.id !== categoryId));
        setLoading(false);
        window.alert('La catégorie a été supprimée avec succès.');
      })
      .catch((error) => {
        console.error('Erreur lors de la suppression de la catégorie', error);
        setLoading(false);
        window.alert('Erreur lors de la suppression de la catégorie');
      });
  };

  const handleModifyButtonClick = (params: GridCellParams) => {
    const categoryId = params.id as string;

    if (isClient) {
      // Redirect to modify category page
      window.location.href = `/categories/${categoryId}`;
    }
  };

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
        <button style={{ background: 'none', border: 'none' }} onClick={() => handleModifyButtonClick(params)}>
          <EditIcon color="primary" style={{ color: '#2196F3' }} />
        </button>
      ),
      headerAlign: 'center',
      align: 'center',
      filterable: false,
      sortable: false,
    },
  ];

  return (
    <Box sx={{ height: 'auto', maxHeight: '100%', minHeight: '99%', width: '90%'}}>
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

