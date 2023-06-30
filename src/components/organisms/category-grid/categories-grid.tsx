"use client"

import styles from "../../../../src/app/page.module.css";
import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef, GridCellParams } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/EditSharp';
import { getCategoriesData, deleteCategoryData } from '../../../api/api';
import { Box, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Snackbar } from '@mui/material';
import { Alert, AlertTitle } from '@mui/material';

const CategoryGrid = () => {
  const [rows, setRows] = useState<{ id: string; name: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);
  const [deleteCategoryId, setDeleteCategoryId] = useState('');
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState<'success' | 'error' | 'warning' | 'info'>('success');
  const [alertMessage, setAlertMessage] = useState('');

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
    setDeleteCategoryId(categoryId);
    setConfirmDeleteOpen(true);
  };

  const handleDeleteConfirm = () => {
    setLoading(true);

    deleteCategoryData(deleteCategoryId)
      .then(() => {
        setRows((prevRows) => prevRows.filter((row) => row.id !== deleteCategoryId));
        setLoading(false);
        setAlertSeverity("success");
        setAlertMessage("La catégorie a été supprimée avec succès.");
        setAlertOpen(true);
      })
      .catch((error) => {
        console.error("Erreur lors de la suppression de la catégorie", error);
        setLoading(false);
        setAlertSeverity("error");
        setAlertMessage("Erreur lors de la suppression de la catégorie");
        setAlertOpen(true);
      });

    setConfirmDeleteOpen(false);
  };

  const handleModifyButtonClick = (params: GridCellParams) => {
    const categoryId = params.id as string;
    window.location.href = `/categories/${categoryId}`;
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
      <Dialog open={confirmDeleteOpen} onClose={() => setConfirmDeleteOpen(false)}>
        <DialogTitle>Confirmation de suppression</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Êtes-vous sûr de vouloir supprimer cette catégorie ?
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

export default CategoryGrid;