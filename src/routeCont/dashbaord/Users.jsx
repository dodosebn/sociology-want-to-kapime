import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';


const columns = [
  {
    field: 'number',
    headerName: 'No.',
    width: 70,
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
    renderCell: (params) => {
      const allRowIds = params.api.getSortedRowIds ? params.api.getSortedRowIds() : params.api.getRowModels().keys();
      const rowIndex = [...allRowIds].indexOf(params.id);
      return rowIndex + 1;
    },
  },  
  { field: 'userId', headerName: 'User ID', width: 120 },
  { field: 'firstName', headerName: 'First Name', width: 120 },
  { field: 'lastName', headerName: 'Last Name', width: 120 },
  { field: 'email', headerName: 'Email', width: 200 },
  {
    field: 'submissions',
    headerName: 'Submissions',
    type: 'number',
    width: 110,
  },
  {
    field: 'joinedDate',
    headerName: 'Joined Date',
    width: 130,
  },
];


const rows = [
  {
    id: 1,
    userId: '20394857',
    firstName: 'Jon',
    lastName: 'Snow',
    email: 'jon.snow@winterfell.com',
    submissions: 12,
    joinedDate: '2023-01-15',
  },
  {
    id: 2,
    userId: '39847103',
    firstName: 'Cersei',
    lastName: 'Lannister',
    email: 'cersei@casterlyrock.com',
    submissions: 7,
    joinedDate: '2023-03-10',
  },
  {
    id: 3,
    userId: '57492038',
    firstName: 'Daenerys',
    lastName: 'Targaryen',
    email: 'daenerys@dragonstone.com',
    submissions: 25,
    joinedDate: '2022-12-01',
  },
  {
    id: 4,
    userId: '12938476',
    firstName: 'Arya',
    lastName: 'Stark',
    email: 'arya@winterfell.com',
    submissions: 14,
    joinedDate: '2024-02-08',
  },
  {
    id: 5,
    userId: '98745632',
    firstName: 'Tyrion',
    lastName: 'Lannister',
    email: 'tyrion@kingslanding.com',
    submissions: 18,
    joinedDate: '2023-07-20',
  },
];

const Users = () => {
  return (
    <div style={{ padding: '1rem' }}>
      <h2 style={{ marginBottom: '1rem' }}>Users</h2>
      <div style={{ overflowX: 'auto' }}>
        <Paper
          elevation={3}
          sx={{
            minWidth: '780px',
            width: '100%',
            '@media (max-width: 768px)': {
              minWidth: '660px',
            },
            '@media (max-width: 400px)': {
              minWidth: '600px',
            },
          }}
        >
          <DataGrid
            rows={rows}
            columns={columns}
            pageSizeOptions={[5, 10]}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            checkboxSelection
            sx={{
              border: 0,
              fontSize: '14px',
            }}
          />
        </Paper>
      </div>
    </div>
  );
};

export default Users;
