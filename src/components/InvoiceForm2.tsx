// components/InvoiceForm.jsx
import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Invoice } from '../types/invoice';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

interface InvoiceFormProps {
    onCloseModal: () => void;
    onAddInvoice: (newInvoice: any) => void;
    onUpdateInvoice: (updatedInvoce: any) => void;
    editingInvoice: Invoice | null;
  }

function InvoiceForm({ onCloseModal, onAddInvoice, onUpdateInvoice, editingInvoice }:InvoiceFormProps) {
  const [formValues, setFormValues] = useState({
    number: '',

    address: '',
    city: '',
    postCode: '',
    country: '',

    clientName: '',
    clientEmail: '',
    clientAddress: '',
    clientCity: '',
    clientPostCode: '',
    clientCountry: '',

    invoiceDate: '',
    paymentTerms: '',

    description: '',

    totalAmmount: 0,
  });

  useEffect(() => {
    if (editingInvoice) {
      setFormValues(editingInvoice as any);
    } else {
      setFormValues({
        number: '',

    address: '',
    city: '',
    postCode: '',
    country: '',

    clientName: '',
    clientEmail: '',
    clientAddress: '',
    clientCity: '',
    clientPostCode: '',
    clientCountry: '',

    invoiceDate: '',
    paymentTerms: '',

    description: '',

    totalAmmount: 0,
      });
    }
  }, [editingInvoice]);


  const handleChange = (e:any) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    if (editingInvoice) {
      onUpdateInvoice({ ...formValues, id: editingInvoice.id});
    } else {
      onAddInvoice(formValues);
    }
  };

  const handleCancel = () => {
    onCloseModal();
  };
  

  return (
    <form onSubmit={handleSubmit}>
        <Typography variant="h6">Bill From</Typography>
      <TextField fullWidth label="Street Address" name="address" value={formValues.address || ''} onChange={handleChange} required />
      <Grid container spacing={2}>
        <Grid size={4}><TextField fullWidth label="City" name="city" value={formValues.city || ''} onChange={handleChange} required /></Grid>
        <Grid size={4}><TextField fullWidth label="Post Code" name="postCode" value={formValues.postCode || ''} onChange={handleChange} required /></Grid>
        <Grid size={4}><TextField fullWidth label="Country" name="country" value={formValues.country || ''} onChange={handleChange} required /></Grid>
      </Grid>
      <Typography variant="h6">Bill To</Typography>
      <TextField fullWidth label="Client's Name" name="clientName" value={formValues.clientName || ''} onChange={handleChange} required />
      <TextField fullWidth label="Client's Email" name="clientEmail" value={formValues.clientEmail || ''} onChange={handleChange} required />
      <TextField fullWidth label="Street Address" name="clientAddress" value={formValues.clientAddress || ''} onChange={handleChange} required />
      <Grid container spacing={2}>
        <Grid size={4}><TextField fullWidth label="City" name="clientCity" value={formValues.clientCity || ''} onChange={handleChange} required /></Grid>
        <Grid size={4}><TextField fullWidth label="Post Code" name="clientPostCode" value={formValues.clientPostCode || ''} onChange={handleChange} required /></Grid>
        <Grid size={4}><TextField fullWidth label="Country" name="clientCountry" value={formValues.clientCountry || ''} onChange={handleChange} required /></Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid size={6}><TextField fullWidth label="Invoice Date" name="invoiceDate" type="date" value={formValues.invoiceDate || ''} onChange={handleChange} required /></Grid>
        <Grid size={6}><TextField fullWidth label="Payment Terms" name="paymentTerms" value={formValues.paymentTerms || ''} onChange={handleChange} required /></Grid>
      </Grid>
      <TextField fullWidth label="Project Description" name="description" value={formValues.description || ''} onChange={handleChange} required />
      <Button variant="contained" color="primary" onClick={handleCancel}>Cancel</Button>
      <Button type="submit" variant="contained" color="primary">Submit</Button>
            
    </form>
  );
}

export default InvoiceForm;