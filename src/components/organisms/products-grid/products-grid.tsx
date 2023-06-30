"use client"

import styles from "../../../../src/app/page.module.css";
import React, { useState, useEffect } from 'react';
import { DataGrid, GridCellParams, GridColDef } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/EditSharp';
import { deleteProductData, getProductsData } from '../../../api/api';
import { Box, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Snackbar } from '@mui/material';
import { Alert, AlertTitle } from '@mui/material';

const ProductGrid = () => {
  const [rows, setRows] = useState<{ id: string; title: string; description: string; price: number }[]>([]);
  const [loading, setLoading] = useState(true);
  const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);
  const [deleteProductId, setDeleteProductId] = useState<string | null>(null);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState<'error' | 'warning' | 'info' | 'success'>('success');
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProductsData();
        setRows(data);
        setLoading(false);
      } catch (error) {
        console.error('Échec de la récupération des données :', error);
        setRows([]);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDeleteButtonClick = (params: GridCellParams) => {
    const productId = params.row.id as string;
    setDeleteProductId(productId);
    setConfirmDeleteOpen(true);
  };

  const handleDeleteConfirm = async () => {
    setConfirmDeleteOpen(false);
    setLoading(true);

    try {
      await deleteProductData(deleteProductId!);
      setRows((prevRows) => prevRows.filter((row) => row.id !== deleteProductId));
      setLoading(false);
      setAlertSeverity('success');
      setAlertMessage('Le produit a bien été supprimé');
      setAlertOpen(true);
    } catch (error) {
      console.error('Erreur lors de la suppression du produit:', error);
      setLoading(false);
      setAlertSeverity('error');
      setAlertMessage('Erreur lors de la suppression du produit');
      setAlertOpen(true);
    }
  };

  const handleModifyButtonClick = (params: GridCellParams) => {
    const productId = params.id as string;
    window.location.href = `/products/${productId}`;
  };

  const columns: GridColDef[] = [
    {
      field: 'title',
      headerName: 'Titre',
      width: 100,
      flex: 1,
    },
    {
      field: 'description',
      headerName: 'Description',
      width: 250,
      flex: 1,
    },
    {
      field: 'price',
      headerName: 'Prix',
      type: 'number',
      width: 110,
      headerAlign: 'center',
      align: 'center',
      flex: 1,
    },
    {
      field: 'delete',
      width: 50,
      headerName: '',
      renderCell: (params: GridCellParams) => (
        <Button onClick={() => handleDeleteButtonClick(params)} className={styles.buttonGrid}>
          <DeleteIcon style={{ color: 'grey' }} />
        </Button>
      ),
      headerAlign: 'center',
      align: 'center',
      filterable: false,
      sortable: false,
      minWidth: 50,
    },
    {
      field: 'modify',
      headerName: '',
      width: 50,
      renderCell: (params: GridCellParams) => (
        <Button onClick={() => handleModifyButtonClick(params)} className={styles.buttonGrid}>
          <EditIcon style={{ color: '#2196F3' }} />
        </Button>
      ),
      headerAlign: 'center',
      align: 'center',
      filterable: false,
      sortable: false,
      minWidth: 50,
    },
  ];

  return (
    <Box sx={{ height: 'auto', maxHeight: '100%', width: '100%' }}>
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <CircularProgress />
        </Box>
      ) : (
        <DataGrid
          rows={rows}
          columns={columns}
          autoHeight
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

      <Dialog
        open={confirmDeleteOpen}
        onClose={() => setConfirmDeleteOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Êtes-vous sûr de vouloir supprimer ce produit ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setConfirmDeleteOpen(false)}>Annuler</Button>
          <Button onClick={handleDeleteConfirm} color="error" autoFocus>
            Supprimer
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={alertOpen}
        autoHideDuration={3000}
        onClose={() => setAlertOpen(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity={alertSeverity}>
          <AlertTitle>{alertSeverity}</AlertTitle>
          {alertMessage}
        </Alert>
      </Snackbar>
      
    </Box>
  );
};

export default ProductGrid;
