import ListItem from '@mui/material/ListItem';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Invoice } from '../types/invoice';
import { getInvoiceStatusChip } from '../utils/getInvoiceStatus';

interface InvoiceItemProps {
    invoice: Invoice;
    onEditInvoice: (faktura: Invoice) => void;
}

function InvoiceListItem({ invoice, onEditInvoice }: InvoiceItemProps) {
    const status = getInvoiceStatusChip(invoice.status);

    return (
        <ListItem
            divider
            style={{ padding: '16px' }}
        >
            
                <Grid container alignItems="center" spacing={2}>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="subtitle1" color="primary" fontWeight="bold">
                            #{invoice.number}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Due {invoice.invoiceDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {invoice.clientName}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} style={{ textAlign: 'right' }}>
                        <Typography variant="h6" fontWeight="bold">
                            £ {invoice.totalAmmount.toFixed(2)}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={3} style={{ textAlign: 'right' }}>
                        <Chip label={status.label} color={status.color} />
                    </Grid>
                    <Grid item xs={1} style={{ textAlign: 'right' }}>
                        <IconButton edge="end"   onClick={(event) => {
                            event.stopPropagation(); // Prevent ListItem's onClick from also firing
                            onEditInvoice(invoice); // Call the correct onEditInvoice prop with invoice data
                            }} aria-label="details">
                            <ArrowForwardIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            
        </ListItem>
    );
}

export default InvoiceListItem;