import React, { useState } from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { Invoice } from '../types/invoice';
import InvoiceListItem from './InvoiceListItem';
import { Box, Button, Menu, MenuItem, Stack, Typography, Paper, styled } from '@mui/material';
import EmptyState from './empty';
import { getInvoiceSummaryText } from '../utils/invoiceListSummary';
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface InvoiceListProps {
    invoices: Invoice[];
    onViewInvoice: (invoice: Invoice) => void;
    handleOpenModal: () => void;
    setFilterStatus: (status: number | null) => void;
}

// Styled components
const MainContainer = styled(Box)(({ theme }) => ({
  maxWidth: '1000px',
  margin: '0 auto',
  padding: theme.spacing(3),
}));

const HeaderContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing(4),
  width: '100%'
}));

const TitleContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});

const ActionContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
});

const PageTitle = styled(Typography)(({ theme }) => ({
  fontSize: '32px',
  fontWeight: 'bold',
  color: theme.palette.text.primary,
}));

const SubTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '14px',
}));

const FilterButton = styled(Button)(({ theme }) => ({
  borderRadius: '24px',
  textTransform: 'none',
  fontWeight: 'bold',
  color: theme.palette.text.primary,
  '&:hover': {
    backgroundColor: 'rgba(124, 93, 250, 0.1)',
  }
}));

const NewInvoiceButton = styled(Button)(({ theme }) => ({
  borderRadius: '24px',
  textTransform: 'none',
  padding: '8px 16px',
  backgroundColor: '#7C5DFA',
  color: 'white',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: '#9277FF',
  },
}));

const ButtonIcon = styled(Box)(({ theme }) => ({
  backgroundColor: 'white',
  borderRadius: '50%',
  width: '32px',
  height: '32px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '8px',
}));

const StyledList = styled(List)(({ theme }) => ({
  padding: 0,
  width: '100%',
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  borderRadius: '8px',
  marginBottom: '16px',
  overflow: 'hidden',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[4],
  },
}));

function InvoiceList({ invoices, onViewInvoice, handleOpenModal, setFilterStatus }: InvoiceListProps) {
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
    <MainContainer>
      <HeaderContainer>
        <TitleContainer>
          <PageTitle>Invoices</PageTitle>
          <SubTitle>{getInvoiceSummaryText(invoices.length)}</SubTitle>
        </TitleContainer>
        
        <ActionContainer>
          <FilterButton 
            variant="text" 
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
          >
            Filter by status
          </FilterButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            PaperProps={{
              style: {
                borderRadius: '8px',
                minWidth: '180px',
                boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
              }
            }}
          >
            <MenuItem onClick={() => handleStatusSelect(null)}>All</MenuItem>
            <MenuItem onClick={() => handleStatusSelect(3)}>Draft</MenuItem>
            <MenuItem onClick={() => handleStatusSelect(1)}>Pending</MenuItem>
            <MenuItem onClick={() => handleStatusSelect(2)}>Paid</MenuItem>
          </Menu>
          
          <NewInvoiceButton 
            variant="contained" 
            onClick={handleOpenModal}
            startIcon={
              <ButtonIcon>
                <AddIcon style={{ color: '#7C5DFA' }} />
              </ButtonIcon>
            }
          >
            New Invoice
          </NewInvoiceButton>
        </ActionContainer>
      </HeaderContainer>

      {invoices.length > 0 ? (
        <StyledList>
          {invoices.map((invoice, index) => (
            <StyledPaper key={invoice.id} elevation={1}>
              <InvoiceListItem
                invoice={invoice}
                onEditInvoice={onViewInvoice}
              />
            </StyledPaper>
          ))}
        </StyledList>
      ) : (
        <EmptyState />
      )}
    </MainContainer>
  );
}

export default InvoiceList;
