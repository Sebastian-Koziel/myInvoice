import { Invoice } from '../types/invoice';
import { invoiceDummyData } from '../data/invoices';

let invoices: Invoice[] = [...invoiceDummyData];

export const getInvoices = (): Invoice[] => {
  return invoices;
};

export const addInvoice = (newInvoice: Omit<Invoice, 'id'>): Invoice => {
  const newId = invoices.length > 0 ? Math.max(...invoices.map(inv => inv.id)) + 1 : 1;
  const invoiceWithId: Invoice = { ...newInvoice, id: newId };
  invoices = [...invoices, invoiceWithId];
  return invoiceWithId;
};

export const editInvoice = (updatedInvoice: Invoice): Invoice | null => {
  const index = invoices.findIndex(inv => inv.id === updatedInvoice.id);
  if (index !== -1) {
    invoices[index] = updatedInvoice;
    return updatedInvoice;
  }
  return null;
};

export const deleteInvoice = (id: number): Invoice[] => {
  const initialLength = invoices.length;
  invoices = invoices.filter(inv => inv.id !== id);
  return invoices
};

export const updateInvoiceStatus = (id: number, status: number): Invoice | null => {
  const index = invoices.findIndex(inv => inv.id === id);
  if (index !== -1) {
    invoices[index] = { ...invoices[index], status };
    return invoices[index];
  }
  return null;
};
