"use client"

import styles from "../../../../src/app/[locale]/page.module.css"
import React, { useEffect, useState } from 'react'
import { DataGrid, GridColDef, GridCellParams } from '@mui/x-data-grid'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/EditSharp'
import { getCategoriesData, deleteCategoryData } from '../../../api/api'
import { Box, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Snackbar } from '@mui/material';
import { Alert, AlertTitle } from '@mui/material';
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'

const CategoryGrid = () => {

  const t = useTranslations()
  const [rows, setRows] = useState<{ id: string; name: string }[]>([])
  const [loading, setLoading] = useState(true)
  const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);
  const [deleteCategoryId, setDeleteCategoryId] = useState('');
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState<'success' | 'error' | 'warning' | 'info'>('success');
  const [alertMessage, setAlertMessage] = useState('');
  const router = useRouter();

  useEffect(() => {
    setLoading(true)

    getCategoriesData()
      .then((data) => {
        const categoryRows = data.map((category: { _id: any; name: any }) => ({
          id: category._id,
          name: category.name,
        }))
        setRows(categoryRows)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Erreur dans l\'extraction des données :', error)
        setRows([])
        setLoading(false)
      })
  }, [])

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
        setAlertMessage(t("alertMessageDelete.deleteCategorySuccess"));
        setAlertOpen(true);
      })
      .catch((error) => {
        setLoading(false);
        setAlertSeverity("error");
        setAlertMessage(t("alertError.error"));
        setAlertOpen(true);
      });

    setConfirmDeleteOpen(false);
  };

  const handleModifyButtonClick = (params: GridCellParams) => {
    const categoryId = params.id as string;
    router.push(`/categories/${categoryId}`);
  };

  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: t("categories-grid.name"),
      flex: 1,
      editable: false,
    },
    {
      field: 'delete',
      width: 50,
      headerName: '',
      renderCell: (params: GridCellParams) => (
        <Button
          onClick={() => handleDeleteButtonClick(params)}
          className={styles.buttonGrid}
        >
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
  ]

  return (
    <Box sx={{ height: 'auto', maxHeight: '100%', width: "100%"}}>
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
      <Dialog open={confirmDeleteOpen} onClose={() => setConfirmDeleteOpen(false)}>
        <DialogTitle>{t("confirmAction.confirmTitle")}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {t("confirmAction.confirmMessage")}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setConfirmDeleteOpen(false)}>
            {t("confirmAction.confirmCancel")}
          </Button>
          <Button onClick={handleDeleteConfirm} color="error" autoFocus>
            {t("confirmAction.confirmDelete")}
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
  )
}

export default CategoryGrid

