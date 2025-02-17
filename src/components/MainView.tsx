// components/MainView.tsx
import { useState } from 'react';
import InvoiceList from './InvoiceList';
import InvoiceModal from './InvociceModal';
import { Invoice } from '../types/invoice'; // Import interfejsu Faktura
import InvoiceDetail from './InvoiceDetails';
import { addInvoice, deleteInvoice, editInvoice, getInvoices } from '../services/invoiceService';



function MainView() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [invoices, setInvoices] = useState<Invoice[]>(getInvoices);
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);  
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleViewInvoice = (invoice: Invoice) => {
    setSelectedInvoice(invoice);
  };


  const handleAddInvoice = (newInvoice: Omit<Invoice, 'id'>) => {
    addInvoice(newInvoice)
    handleCloseModal();
  };

  const handleUpdateInvoice = (updatedInvoice: Invoice) => {
    editInvoice(updatedInvoice)
    handleCloseModal();
  };

  const handleDeleteInvoice = (id: number) => {
    setInvoices(deleteInvoice(id));
    setSelectedInvoice(null);
  }


  return (
    <div style={{ padding: '20px' }}>
        
        {!selectedInvoice ? (
        <InvoiceList 
          invoices={invoices} 
          onViewInvoice={handleViewInvoice} 
          handleOpenModal = {handleOpenModal}
        />
      ) : (
        <InvoiceDetail
          invoice={selectedInvoice}
          onGoBack={() => setSelectedInvoice(null)}
          handleOpenModal = {handleOpenModal}
          setSelectedInvoice = {setSelectedInvoice}
          handleDeleteInvoice = {handleDeleteInvoice}
          />
      )}
      
      <InvoiceModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onAddInvoice={handleAddInvoice}
        onUpdateInvoice={handleUpdateInvoice}
        selectedInvoice = {selectedInvoice}
      />
    </div>
  );
}

export default MainView;