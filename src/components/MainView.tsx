// components/MainView.tsx
import { useEffect, useState } from 'react';
import InvoiceList from './InvoiceList';
import InvoiceModal from './InvoiceModal';
import { Invoice } from '../types/invoice';
import InvoiceDetail from './InvoiceDetails';
import { addInvoice, changeStatus, deleteInvoice, editInvoice, getInvoices } from '../services/invoiceService';



function MainView() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [filterStatus, setFilterStatus] = useState<number | null>(null);
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  
  useEffect(() => {
    setInvoices(getInvoices(filterStatus));
  }, [filterStatus]);

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
    //TO DO -> consider moving to service
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
    status: newInvoice.status
    }
    addInvoice(invoiceToAdd)
    handleCloseModal();
    setInvoices(getInvoices(filterStatus));
  };

  const handleUpdateInvoice = (updatedInvoice: Invoice) => {
    let newInvoice = editInvoice(updatedInvoice);
    if(!newInvoice){throw new Error()}
    setSelectedInvoice(newInvoice);
    handleCloseModal();
    setInvoices(getInvoices(filterStatus));
  };

  const handleDeleteInvoice = (id: number) => {
    deleteInvoice(id);
    setSelectedInvoice(null);
    setInvoices(getInvoices(filterStatus));
  }

  const handleStatusChange = (id: number) => {
    let changedInvoice = changeStatus(id, 2);
    if(changedInvoice){
    setInvoices(getInvoices(filterStatus));
    setSelectedInvoice(changedInvoice)
    }
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
          handleStatusChange = {handleStatusChange}
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