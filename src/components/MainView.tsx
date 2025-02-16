// components/MainView.tsx
import { useState } from 'react';
import InvoiceList from './InvoiceList';
import InvoiceModal from './InvociceModal';
import { Invoice } from '../types/invoice'; // Import interfejsu Faktura
import InvoiceDetail from './InvoiceDetails';
import { invoiceDummyData } from '../data/invoices';



function MainView() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [invoices, setInvoices] = useState<Invoice[]>(invoiceDummyData);
  

  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);  
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddInvoice = (newInvoice: Omit<Invoice, 'id'>) => {
    const nowaFakturaZId: Invoice = { ...newInvoice, id: invoices.length + 1 } as Invoice;
    setInvoices([...invoices, nowaFakturaZId]);
    handleCloseModal();
  };

  const handleEditInvoice = (invoiceForEdit: Invoice) => {
    console.log(`gonna edit`)
    //setEditingInvoice(invoiceForEdit);
    //setIsModalOpen(true);
  };

  const handleViewInvoice = (invoice: Invoice) => {
    setSelectedInvoice(invoice);
  };

  const handleUpdateInvoice = (zaktualizowanaFaktura: Invoice) => {
    // Logika aktualizacji faktury w stanie
    const zaktualizowaneFaktury = invoices.map(faktura =>
      faktura.id === zaktualizowanaFaktura.id ? zaktualizowanaFaktura : faktura
    );
    setInvoices(zaktualizowaneFaktury);
    handleCloseModal();
  };


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