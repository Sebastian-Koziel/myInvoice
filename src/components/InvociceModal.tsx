// components/InvoiceModal.jsx

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InvoiceForm from './InvoiceForm';
import { Invoice } from '../types/invoice';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface InvoiceModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAddInvoice: (newInvoice: Omit<Invoice, 'id'>) => void;
    onUpdateInvoice: (updatedInvoce: Invoice) => void;
    selectedInvoice: Invoice | null;
  }

function InvoiceModal({ isOpen, onClose, onAddInvoice, onUpdateInvoice, selectedInvoice } : InvoiceModalProps) {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          
        </Typography>
        <InvoiceForm
          onCloseModal={onClose}
          onAddInvoice={onAddInvoice}
          onUpdateInvoice={onUpdateInvoice}
          selectedInvoice={selectedInvoice}
        />
      </Box>
    </Modal>
  );
}

export default InvoiceModal;