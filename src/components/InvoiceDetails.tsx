import React from 'react';
import { Box, Typography, Button, Grid, Chip } from '@mui/material';
import { Invoice } from '../types/invoice';

interface InvoiceDetailProps {
  invoice: Invoice;
  onGoBack: ()=> void;
}

const InvoiceDetail: React.FC<InvoiceDetailProps> = ({ invoice, onGoBack }) => {
  const getStatusColor = (status: number) => {
    switch (status) {
      case 1:
        return 'warning';
      case 2:
        return 'success';
      default:
        return 'default';
    }
  };

  return (
    <Box p={4}>
      <Button variant="text" onClick={onGoBack}>&larr; Go back</Button>

      <Box display="flex" justifyContent="space-between" alignItems="center" mt={2} p={2} boxShadow={1} borderRadius={2}>
        <Box display="flex" alignItems="center">
          <Typography>Status:</Typography>
          <Chip label={invoice.status === 1 ? 'Pending' : 'Paid'} color={getStatusColor(invoice.status)} sx={{ ml: 1 }} />
        </Box>
        <Box>
          <Button variant="contained" sx={{ mr: 1 }}>Edit</Button>
          <Button variant="contained" color="error" sx={{ mr: 1 }}>Delete</Button>
          <Button variant="contained" color="primary">Mark as Paid</Button>
        </Box>
      </Box>

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
                {/* Hardcoded example items */}
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
