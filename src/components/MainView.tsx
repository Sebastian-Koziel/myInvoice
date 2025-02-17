// components/MainView.tsx
import { useState } from 'react';
import InvoiceList from './InvoiceList';
import InvoiceModal from './InvociceModal';
import { Invoice } from '../types/invoice'; // Import interfejsu Faktura
import InvoiceDetail from './InvoiceDetails';
import { addInvoice, deleteInvoice, editInvoice, getInvoices } from '../services/invoiceService';



function MainView() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [filterStatus, setFilterStatus] = useState<number | null>(null);
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);
  

 const invoices = getInvoices(filterStatus);

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
    const invoiceToAdd:Omit<Invoice, 'id'> = {
    number: newInvoice.number,
    address: newInvoice.address,
    city: newInvoice.city,
    postCode: newInvoice.postCode,
    country: newInvoice.country,
    clientName: newInvoice.clientName,
    clientEmail: newInvoice.clientEmail,
    clientAddress: newInvoice.clientAddress,
    clientCity: newInvoice.clientCity,
    clientPostCode: newInvoice.clientPostCode,
    clientCountry: newInvoice.clientCountry,
    invoiceDate: new Date(),
    paymentTerms: ``,
    description: ``,
    totalAmmount: 0,
    status: 1
    }
    addInvoice(invoiceToAdd)
    handleCloseModal();
  };

  const handleUpdateInvoice = (updatedInvoice: Invoice) => {
    editInvoice(updatedInvoice)
    handleCloseModal();
  };

  const handleDeleteInvoice = (id: number) => {
    deleteInvoice(id);
    setSelectedInvoice(null);
  }


  return (
    <div style={{ padding: '20px' }}>
        
        {!selectedInvoice ? (
        <InvoiceList 
          invoices={invoices} 
          onViewInvoice={handleViewInvoice} 
          handleOpenModal = {handleOpenModal}
          setFilterStatus= {setFilterStatus}
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