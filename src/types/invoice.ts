// src/types/invoice.ts
export interface Invoice{
    id: number;
    number: string;

    address: string;
    city: string;
    postCode: string;
    country: string;

    clientName: string;
    clientEmail: string;
    clientAddress: string;
    clientCity: string;
    clientPostCode: string;
    clientCountry: string;

    invoiceDate: Date;
    paymentTerms: string;

    description: string;

    totalAmmount: number;

    status: number;
  }