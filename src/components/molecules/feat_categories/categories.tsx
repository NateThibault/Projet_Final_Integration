"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'categoryName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.categoryName || ''}`,
  },
];

const rows = [
  { id: 1, categoryName: 'Snow'},
  { id: 2, categoryName: 'Lannister'},
  { id: 3, categoryName: 'Lannister'},
  { id: 4, categoryName: 'Stark'},
  { id: 5, categoryName: 'Targaryen'},
  { id: 6, categoryName: 'Melisandre'},
  { id: 7, categoryName: 'Clifford'},
  { id: 8, categoryName: 'Frances'},
  { id: 9, categoryName: 'Roxie'},
];

export default function DataGridDemo() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}