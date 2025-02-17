export const getInvoiceSummaryText = (count: number): string => {
  if (count === 0) return 'No invoices';
  if (count === 1) return 'There is only one invoice';
  return `There are ${count} total invoices`;
};