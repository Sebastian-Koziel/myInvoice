import React, { useState } from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { Invoice } from '../types/invoice';
import InvoiceListItem from './InvoiceListItem';
import { Box, Button, Menu, MenuItem, Stack, Typography } from '@mui/material';
import EmptyState from './empty';
import { getInvoiceSummaryText } from '../utils/invoiceListSummary';

interface InvoiceListProps {
    invoices: Invoice[];
    onViewInvoice: (invoice: Invoice) => void;
    handleOpenModal: () => void;
    setFilterStatus: (status: number | null) => void;
}

function InvoiceList({ invoices, onViewInvoice, handleOpenModal,setFilterStatus }: InvoiceListProps) {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleStatusSelect = (status: number | null) => {
    setFilterStatus(status);
    handleClose();
  };


  return (
    <>
    <Box>
        <Stack direction={'row'}>
        invoices
            <Typography>
              
             {getInvoiceSummaryText(invoices.length)}
                </Typography>
                <Button variant="outlined" onClick={handleClick}>
            Filter by status
          </Button>
                <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => handleStatusSelect(null)}>All</MenuItem>
            <MenuItem onClick={() => handleStatusSelect(3)}>Draft</MenuItem>
            <MenuItem onClick={() => handleStatusSelect(1)}>Pending</MenuItem>
            <MenuItem onClick={() => handleStatusSelect(2)}>Paid</MenuItem>
          </Menu>
                <Button variant="contained" color="primary" onClick={handleOpenModal}>
                New Invoice
                </Button>
            </Stack>
        </Box>
        {invoices.length > 0 ? (
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
        ) : (
          <EmptyState/>
        )}
        </>
  );
}

export default InvoiceList;