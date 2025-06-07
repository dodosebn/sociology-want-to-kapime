import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import '../../styles/GeneralStyle.css'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import MessagesModal from '../../components/dashboard/modals/messages/MessagesModal';

const emailRows = [
  { id: 1, userId: '20394857', firstName: 'Jon', lastName: 'Snow', contact: 'jon.snow@winterfell.com', messages: 12, sentDate: '2023-01-15' },
  { id: 2, userId: '39847103', firstName: 'Cersei', lastName: 'Lannister', contact: 'cersei@casterlyrock.com', messages: 7, sentDate: '2023-03-10' },
  { id: 3, userId: '57492038', firstName: 'Daenerys', lastName: 'Targaryen', contact: 'daenerys@dragonstone.com', messages: 25, sentDate: '2022-12-01' },
];

const smsRows = [
  { id: 4, userId: '88990011', firstName: 'Arya', lastName: 'Stark', contact: '08031234567', messages: 14, sentDate: '2024-02-08' },
  { id: 5, userId: '11223344', firstName: 'Tyrion', lastName: 'Lannister', contact: '08039874563', messages: 18, sentDate: '2023-07-20' },
  { id: 6, userId: '66778899', firstName: 'Bran', lastName: 'Stark', contact: '08051239876', messages: 10, sentDate: '2023-09-11' },
];

const Messages = () => {
  const [messageType, setMessageType] = useState('email');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const currentRows = messageType === 'email' ? emailRows : smsRows;

  const handleViewClick = (row) => {
    setSelectedRow(row);
    setModalOpen(true);
  };

  const getColumns = (type) => [
    { field: 'userId', headerName: 'User ID', width: 120 },
    { field: 'firstName', headerName: 'First Name', width: 120 },
    { field: 'lastName', headerName: 'Last Name', width: 120 },
    {
      field: 'contact',
      headerName: type === 'email' ? 'Email' : 'Phone Number',
      width: 200,
    },
    {
      field: 'messages',
      headerName: 'Messages',
      width: 130,
      sortable: false,
      renderCell: (params) => `${params.value} messages`,
    },
    {
      field: 'sentDate',
      headerName: 'Sent Date',
      width: 130,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 120,
      sortable: false,
      filterable: false,
      renderCell: (params) => (
        <Button
          variant="outlined"
          size="small"
          onClick={() => handleViewClick(params.row)}
        >
          View
        </Button>
      ),
    },
  ];

  return (
    <div style={{ padding: '1rem' }}>
      <div className='pages-title-header' style={{ marginBottom: '1rem' }}>
        <h2 style={{ marginBottom: '0.5rem' }}>Messages</h2>
        <FormControl size="small" style={{ minWidth: 180 }}>
          <InputLabel id="message-type-label">Select Type</InputLabel>
          <Select
            labelId="message-type-label"
            value={messageType}
            onChange={(e) => setMessageType(e.target.value)}
            label="Select Type"
          >
            <MenuItem value="email">Email</MenuItem>
            <MenuItem value="sms">SMS</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <Paper
          elevation={3}
          sx={{
            minWidth: '880px',
            width: '100%',
            '@media (max-width: 768px)': {
              minWidth: '700px',
            },
            '@media (max-width: 400px)': {
              minWidth: '640px',
            },
          }}
        >
          <DataGrid
            rows={currentRows}
            columns={getColumns(messageType)}
            pageSizeOptions={[5]}
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

      <MessagesModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        data={selectedRow}
      />
    </div>
  );
};

export default Messages;
