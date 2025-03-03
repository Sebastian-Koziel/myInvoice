import { Box, Typography, Chip, styled, ListItem, Grid } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Invoice } from '../types/invoice';
import { getInvoiceStatusChip } from '../utils/getInvoiceStatus';

interface InvoiceItemProps {
  invoice: Invoice;
  onEditInvoice: (faktura: Invoice) => void;
}

const StyledListItem = styled(ListItem)(({ theme }) => ({
  padding: '24px',
  borderRadius: '8px',
  cursor: 'pointer',
  marginBottom: '16px',
  transition: 'box-shadow 0.3s ease',
  backgroundColor: 'white',
  '&:hover': {
    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.05)',
  }
}));

const InvoiceId = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: '16px',
  color: theme.palette.text.primary,
  '& span': {
    color: '#7E88C3',
  }
}));

const DateText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '14px',
  marginTop: '8px',
}));

const ClientText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '14px',
  marginTop: '8px',
}));

const AmountText = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: '18px',
  textAlign: 'right',
}));

const StatusChipStyled = styled(Chip)<{ statuscolor: string }>(({ theme, statuscolor }) => ({
  borderRadius: '6px',
  padding: '6px 0',
  fontWeight: 'bold',
  backgroundColor: `rgba(${statuscolor}, 0.1)`,
  color: `rgb(${statuscolor})`,
  '& .MuiChip-label': {
    padding: '0 12px',
  }
}));

const ArrowIcon = styled(ArrowForwardIosIcon)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '16px',
}));

function InvoiceListItem({ invoice, onEditInvoice }: InvoiceItemProps) {
  const status = getInvoiceStatusChip(invoice.status);
  
  // RGB values for status colors
  const statusColors = {
    paid: '51, 214, 159',     // Green for Paid
    pending: '255, 143, 0',   // Orange for Pending
    draft: '55, 59, 83'       // Dark grey for Draft
  };
  
  const getStatusColor = (statusName: string) => {
    switch(statusName.toLowerCase()) {
      case 'paid': return statusColors.paid;
      case 'pending': return statusColors.pending;
      case 'draft': return statusColors.draft;
      default: return statusColors.draft;
    }
  };

  const formatDate = (date: Date) => {
    return `Due ${date.getDate()} ${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}`;
  };

  return (
    <StyledListItem
      onClick={() => onEditInvoice(invoice)}
      disableGutters
    >
      <Grid container alignItems="center" spacing={2}>
        <Grid item xs={12} sm={2}>
          <InvoiceId>
            <span>#</span>{invoice.number}
          </InvoiceId>
        </Grid>
        
        <Grid item xs={12} sm={2}>
          <DateText>
            {formatDate(invoice.invoiceDate)}
          </DateText>
        </Grid>
        
        <Grid item xs={12} sm={3}>
          <ClientText>
            {invoice.clientName}
          </ClientText>
        </Grid>
        
        <Grid item xs={12} sm={2}>
          <AmountText>
            £ {invoice.totalAmmount.toFixed(2)}
          </AmountText>
        </Grid>
        
        <Grid item xs={12} sm={2} sx={{ textAlign: 'right' }}>
          <StatusChipStyled 
            label={status.label} 
            statuscolor={getStatusColor(status.label)}
          />
        </Grid>
        
        <Grid item xs={12} sm={1} sx={{ textAlign: 'right' }}>
          <ArrowIcon />
        </Grid>
      </Grid>
    </StyledListItem>
  );
}

export default InvoiceListItem;
