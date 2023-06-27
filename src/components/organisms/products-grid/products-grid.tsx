"use client"
import React, { useState, useEffect } from 'react';
import { DataGrid, GridCellParams, GridColDef } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/EditSharp'
import { getProductData, deleteProductData } from '../../../api/api';
import { Box, CircularProgress } from '@mui/material';

const ProductGrid = () => {
  const [rows, setRows] = useState<{ id: string; title: string; description: string; price: number }[]>([]);
  const [loading, setLoading] = useState(true);
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProductData();
        setRows(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product data:', error);
        setRows([]);
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);

  const handleDeleteButtonClick = async (params: GridCellParams) => {
    const productId = params.row.id as string;
  
    const confirmDelete = window.confirm('Are you sure you want to delete this product?');
    if (!confirmDelete) {
      return;
    }
  
    setLoading(true);
  
    try {
      await deleteProductData(productId);
      setRows((prevRows) => prevRows.filter((row) => row.id !== productId));
      setLoading(false);
      window.alert('The product has been deleted successfully.');
    } catch (error) {
      console.error('Error deleting the product:', error);
      setLoading(false);
      window.alert('Error deleting the product');
    }
  };

  const handleModifyButtonClick = (params: GridCellParams) => {
    const productId = params.id as string;
  
    if (isClient) {
      // Redirect to modify product page
      window.location.href = `/products/${productId}`;
    }
  };


  const columns: GridColDef[] = [
    {
      field: 'title',
      headerName: 'Title',
      width: 150,
    },
    {
      field: 'description',
      headerName: 'Description',
      width: 250,
    },
    {
      field: 'price',
      headerName: 'Price',
      type: 'number',
      width: 110,
      headerAlign: 'center',
      align: 'center',
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
    <Box sx={{ height: 'auto', maxHeight: '100%', width: "100%" }}>
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
  )
}

export default ProductGrid;