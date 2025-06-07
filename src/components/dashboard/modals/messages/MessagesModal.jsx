import React from 'react';
import './MessagesModal.css';
import { Modal, Box, Typography, Button } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 380,
  bgcolor: 'background.paper',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

const MessagesModal = ({ open, onClose, data }) => {
  if (!data) return null;

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Typography variant="h6" gutterBottom>
          User Message Info
        </Typography>
        <Typography><strong>User ID:</strong> {data.userId}</Typography>
        <Typography><strong>Name:</strong> {data.firstName} {data.lastName}</Typography>
        <Typography><strong>Contact:</strong> {data.contact}</Typography>
        <Typography><strong>Messages:</strong> {data.messages}</Typography>
        <Typography><strong>Sent Date:</strong> {data.sentDate}</Typography>
        <Button variant="contained" onClick={onClose} sx={{ mt: 2 }}>Close</Button>
      </Box>
    </Modal>
  );
};

export default MessagesModal;
