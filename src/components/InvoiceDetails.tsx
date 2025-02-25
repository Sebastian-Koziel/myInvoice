import { useState } from 'react';
import { Box, Typography, Button, Grid, Chip, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { Invoice } from '../types/invoice';
import { getInvoiceStatusChip } from '../utils/getInvoiceStatus';

interface InvoiceDetailProps {
  invoice: Invoice;
  onGoBack: ()=> void;
  handleOpenModal: () => void;
  setSelectedInvoice: (invoice: Invoice) => void
  handleDeleteInvoice: (id: number) => void
  handleStatusChange: (id: number) => void
}

function InvoiceDetail({ invoice, onGoBack, handleOpenModal, setSelectedInvoice, handleDeleteInvoice, handleStatusChange }:InvoiceDetailProps){
  
  const [openDialog, setOpenDialog] = useState(false);
  

  const status = getInvoiceStatusChip(invoice.status);

  const onEdit = () =>{
    setSelectedInvoice(invoice);
    handleOpenModal()
  }
  const onDelete = () => setOpenDialog(true);

  const handleConfirmDelete = () => {
    handleDeleteInvoice(invoice.id);
    setOpenDialog(false);
  };

  const onMarkasPaid = () => {
    handleStatusChange(invoice.id);
    
  }

  return (
    <Box p={4}>
      <Button variant="text" onClick={onGoBack}>&larr; Go back</Button>

      <Box display="flex" justifyContent="space-between" alignItems="center" mt={2} p={2} boxShadow={1} borderRadius={2}>
        <Box display="flex" alignItems="center">
          <Typography>Status:</Typography>
          <Chip label={status.label} color={status.color} />
        </Box>
        <Box>
        {invoice.status === 3 &&
          <Button variant="contained" onClick={onEdit} sx={{ mr: 1 }}>Edit</Button>
        }
          <Button variant="contained" onClick={onDelete}color="error" sx={{ mr: 1 }}>Delete</Button>
          {invoice.status === 1 &&
          <Button variant="contained" onClick={onMarkasPaid}color="primary">Mark as Paid</Button>
          }
        </Box>
      </Box>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>Are you sure you want to delete this invoice?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="primary">Cancel</Button>
          <Button onClick={handleConfirmDelete} color="error">Delete</Button>
        </DialogActions>
      </Dialog>

      <Box mt={4} p={4} boxShadow={2} borderRadius={2}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h5" fontWeight="bold">#{invoice.number}</Typography>
            <Typography variant="subtitle1">{invoice.description}</Typography>
          </Grid>
          <Grid item xs={12} sm={6} textAlign="right">
            <Typography>{invoice.address}</Typography>
            <Typography>{invoice.city}</Typography>
            <Typography>{invoice.postCode}</Typography>
            <Typography>{invoice.country}</Typography>
          </Grid>

          <Grid item xs={12} sm={6} mt={2}>
            <Typography variant="body2">Invoice Date</Typography>
            <Typography variant="h6" fontWeight="bold">{invoice.invoiceDate.toDateString()}</Typography>
            <Typography variant="body2" mt={2}>Payment Due</Typography>
            <Typography variant="h6" fontWeight="bold">{new Date(invoice.invoiceDate).toDateString()}</Typography>
          </Grid>

          <Grid item xs={12} sm={6} mt={2} textAlign="right">
            <Typography variant="body2">Bill To</Typography>
            <Typography variant="h6" fontWeight="bold">{invoice.clientName}</Typography>
            <Typography>{invoice.clientAddress}</Typography>
            <Typography>{invoice.clientCity}</Typography>
            <Typography>{invoice.clientPostCode}</Typography>
            <Typography>{invoice.clientCountry}</Typography>
            <Typography variant="body2" mt={2}>Sent to</Typography>
            <Typography fontWeight="bold">{invoice.clientEmail}</Typography>
          </Grid>

          <Grid item xs={12} mt={4}>
            <Box p={2} bgcolor="#f9f9f9" borderRadius={2}>
              <Grid container>
                <Grid item xs={6}><Typography fontWeight="bold">Item Name</Typography></Grid>
                <Grid item xs={2}><Typography fontWeight="bold">QTY.</Typography></Grid>
                <Grid item xs={2}><Typography fontWeight="bold">Price</Typography></Grid>
                <Grid item xs={2}><Typography fontWeight="bold">Total</Typography></Grid>
                {/* TO DO -> add more items later*/}
                <Grid item xs={6}><Typography>Banner Design</Typography></Grid>
                <Grid item xs={2}><Typography>1</Typography></Grid>
                <Grid item xs={2}><Typography>£156.00</Typography></Grid>
                <Grid item xs={2}><Typography>£156.00</Typography></Grid>
                <Grid item xs={6}><Typography>Email Design</Typography></Grid>
                <Grid item xs={2}><Typography>2</Typography></Grid>
                <Grid item xs={2}><Typography>£200.00</Typography></Grid>
                <Grid item xs={2}><Typography>£400.00</Typography></Grid>
              </Grid>
              <Box mt={2} p={2} bgcolor="#333" color="white" borderRadius={2} textAlign="right">
                <Typography variant="h6" fontWeight="bold">Amount Due</Typography>
                <Typography variant="h4" fontWeight="bold">£{invoice.totalAmmount.toFixed(2)}</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default InvoiceDetail;
