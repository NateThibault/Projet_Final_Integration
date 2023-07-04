"use client";

import styles from "../../../app/[locale]/page.module.css";
import React, { useState, useEffect } from "react";
import { DataGrid, GridCellParams, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/EditSharp";
import { deleteProductData, getProductsData } from "../../../api/api";
import { Box, Button, CircularProgress } from "@mui/material";
import { useTranslations } from "next-intl";

const ProductGrid = () => {
  const t = useTranslations();
  const [rows, setRows] = useState<
    { id: string; title: string; description: string; price: number }[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProductsData();
        setRows(data);
        setLoading(false);
      } catch (error) {
        console.error("Échec de la récupération des données :", error);
        setRows([]);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDeleteButtonClick = async (params: GridCellParams) => {
    const productId = params.row.id as string;

    const confirmDelete = window.confirm(t("produits-grid.confirmDelete"));

    if (!confirmDelete) {
      return;
    }

    setLoading(true);

    try {
      await deleteProductData(productId);
      setRows((prevRows) => prevRows.filter((row) => row.id !== productId));
      setLoading(false);
      window.alert(t("produits-grid.delete"));
    } catch (error) {
      console.error("Erreur lors de la supression du produit:", error);
      setLoading(false);
      window.alert(t("produits-grid.DeleteError"));
    }
  };

  const handleModifyButtonClick = (params: GridCellParams) => {
    const productId = params.id as string;
    window.location.href = `/products/${productId}`;
  };

  const columns: GridColDef[] = [
    {
      field: "title",
      headerName: t("produits-grid.title"),
      width: 100,
      flex: 1,
    },
    {
      field: "description",
      headerName: t("produits-grid.description"),
      width: 250,
      flex: 1,
    },
    {
      field: "price",
      headerName: t("produits-grid.price"),
      type: "number",
      width: 110,
      headerAlign: "center",
      align: "center",
      flex: 1,
    },
    {
      field: "delete",
      width: 50,
      headerName: "",
      renderCell: (params: GridCellParams) => (
        <Button
          onClick={() => handleDeleteButtonClick(params)}
          className={styles.buttonGrid}
        >
          
          <DeleteIcon style={{ color: 'grey' }} />
        </Button>
      ),
      headerAlign: "center",
      align: "center",
      filterable: false,
      sortable: false,
      minWidth: 50,
    },
    {
      field: "modify",
      headerName: "",
      width: 50,
      renderCell: (params: GridCellParams) => (
        <Button
          onClick={() => handleModifyButtonClick(params)}
          className={styles.buttonGrid}
        >
          <EditIcon style={{ color: "#2196F3" }} />
        </Button>
      ),
      headerAlign: "center",
      align: "center",
      filterable: false,
      sortable: false,
      minWidth: 50,
    },
  ];
  return (
    <Box sx={{ height: "auto", maxHeight: "100%", width: "100%" }}>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
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
    
    </Box>
  );
};

export default ProductGrid;
