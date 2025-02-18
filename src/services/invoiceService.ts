import { Invoice } from '../types/invoice';
import { invoiceDummyData } from '../data/invoices';

let invoices: Invoice[] = [...invoiceDummyData];

export const getInvoices = (filter: number | null): Invoice[] => {
  if (filter !== null) {
    return invoices.filter(invoice => invoice.status === filter);
  }
  return invoices;
};

export const addInvoice = (newInvoice: Omit<Invoice, 'id'>): Invoice => {
  const newId = invoices.length > 0 ? Math.max(...invoices.map(inv => inv.id)) + 1 : 1;
  const invoiceWithId: Invoice = { ...newInvoice, id: newId };
  invoices = [...invoices, invoiceWithId];
  return invoiceWithId;
};

export const editInvoice = (updatedInvoice: Invoice) => {
  const index = invoices.findIndex(inv => inv.id === updatedInvoice.id);
    if (index !== -1) {
        invoices[index] = updatedInvoice; 
        return updatedInvoice;
    }
    else {
      throw new Error(`Error changing status: Invoice with id ${updatedInvoice.id} not found.`);
    }
};

export const deleteInvoice = (id: number): Invoice[] => {
  invoices = invoices.filter(inv => inv.id !== id);
  return invoices
};

export const changeStatus = (id: number, newStatus: number): Invoice => {
  const index = invoices.findIndex(inv => inv.id === id);
  if(index === -1){
    throw new Error(`Error changing status: Invoice with id ${id} not found.`); 
  }

  const oldInvoice = invoices[index];
  const updatedInvoice = { ...oldInvoice, status: newStatus }; 

  invoices[index] = updatedInvoice;

  return updatedInvoice;
};

