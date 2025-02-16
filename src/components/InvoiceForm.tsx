// components/InvoiceForm.jsx

import { Invoice } from '../types/invoice';
import {SubmitHandler, useForm} from 'react-hook-form';
import {z} from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';


const schema = z.object({
   
    number: z.string(),
    address: z.string(),
    city: z.string(),
    postCode: z.string(),
    country: z.string(),

    clientName: z.string(),
    clientEmail: z.string(),
    clientAddress: z.string(),
    clientCity: z.string(),
    clientPostCode: z.string(),
    clientCountry: z.string(),

    invoiceDate: z.string(),
    paymentTerms: z.string(),

    description: z.string(),

    totalAmmount: z.number()
})

type FormFields = z.infer<typeof schema>;


interface InvoiceFormProps {
    onCloseModal: () => void;
    onAddInvoice: (newInvoice: any) => void;
    onUpdateInvoice: (updatedInvoce: any) => void;
    selectedInvoice: Invoice | null;
  }

function InvoiceForm({ onCloseModal, selectedInvoice }:InvoiceFormProps) {
  
  const { register, handleSubmit, formState:{errors} } = useForm<FormFields>(
    {defaultValues: selectedInvoice ? selectedInvoice : {
      
    },
    resolver: zodResolver(schema)}
  );

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  }

  return (
   <form onSubmit={handleSubmit(onSubmit)}>
    Bill From
    <input 
    {...register("address")}
    type="text"
    placeholder='Street Addres'
    />
    {errors.address && <div className='text-red-500'>{errors.address.message}</div>}

    <input
    {...register("city")} 
    type="text"
    placeholder='City'
    />
    {errors.city && <div>{errors.city.message}</div>}

    <input
    {...register("postCode")} 
    type="text"
    placeholder='Post Code'
    />
    {errors.postCode && <div>{errors.postCode.message}</div>}

    <input
    {...register("country")} 
    type="text"
    placeholder='Country'
    />
    {errors.country && <div>{errors.country.message}</div>}

    Bill to

    <input
    {...register("clientName")} 
    type="text"
    placeholder='Client`s Name'
    />
    {errors.clientName && <div>{errors.clientName.message}</div>}

    <input
    {...register("clientEmail")} 
    type="text"
    placeholder='Client`s Email'
    />
    {errors.clientEmail && <div>{errors.clientEmail.message}</div>}

    <input
    {...register("clientAddress")} 
    type="text"
    placeholder='Street Address'
    />
    {errors.clientAddress && <div>{errors.clientAddress.message}</div>}

    <input
    {...register("clientCity")} 
    type="text"
    placeholder='City'
    />
    {errors.clientCity && <div>{errors.clientCity.message}</div>}

    <input
    {...register("clientPostCode")} 
    type="text"
    placeholder='Post Code'
    />
    {errors.clientPostCode && <div>{errors.clientPostCode.message}</div>}

    <input
    {...register("clientCountry")} 
    type="text"
    placeholder='Country'
    />
    {errors.clientCountry && <div>{errors.clientCountry.message}</div>}

    <button type="button" onClick={onCloseModal}>Cancel</button>
    <button type="submit">Submit</button>
   </form> 
    
   
  );
}

export default InvoiceForm;