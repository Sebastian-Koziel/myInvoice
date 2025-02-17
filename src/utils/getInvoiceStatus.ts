import { ChipProps } from '@mui/material';

export const getInvoiceStatusChip = (statusCode: number): { label: string, color: ChipProps['color'] } => {
    switch (statusCode) {
        case 1:
            return { label: 'Pending', color: 'warning' };
        case 2:
            return { label: 'Paid', color: 'success' };
        case 3:
            return { label: 'Draft', color: 'default' };
        default:
            return { label: 'Unknown', color: 'default' };
    }
};