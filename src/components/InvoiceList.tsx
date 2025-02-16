// components/InvoiceList.tsx
import React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { Invoice } from '../types/invoice'; // Import interfejsu Faktura
import InvoiceListItem from './InvoiceListItem';
import { Box, Button, Stack, Typography } from '@mui/material';

interface InvoiceListProps {
    invoices: Invoice[];
    onViewInvoice: (invoice: Invoice) => void;
    handleOpenModal: () => void;
}

function InvoiceList({ invoices, onViewInvoice, handleOpenModal }: InvoiceListProps) {
  return (
    <>
    <Box>
            <Stack direction={'row'}>
                <Typography>
                    Invoices, there are {invoices.length} total invoices
                </Typography>
                <Button variant="outlined" /* onClick={...filtrowanie} - do implementacji filtrowania */ >
                Filtruj Faktury
                </Button>
                <Button variant="contained" color="primary" onClick={handleOpenModal}>
                New Invoice
                </Button>
            </Stack>
        </Box>

    <List>
            {invoices.map((invoice, index) => (
                <React.Fragment key={invoice.id}>
                    <InvoiceListItem // Używamy komponentu InvoiceItem tutaj!
                        invoice={invoice}
                        onEditInvoice={onViewInvoice}
                    />
                    {index !== invoices.length - 1 && <Divider />}
                </React.Fragment>
            ))}
        </List>
        </>
  );
}

export default InvoiceList;