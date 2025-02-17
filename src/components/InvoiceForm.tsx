// components/InvoiceForm.jsx

import { Invoice } from '../types/invoice';
import {SubmitHandler, useForm} from 'react-hook-form';
import {z} from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';


const schema = z.object({
   
  number: z.string().min(1, { message: "Invoice number cannot be empty" }),
  address: z.string().min(1, { message: "Address cannot be empty" }),
  city: z.string().min(1, { message: "City cannot be empty" }),
  postCode: z.string().min(1, { message: "Post code cannot be empty" }),
  country: z.string().min(1, { message: "Country cannot be empty" }),

  clientName: z.string().min(1, { message: "Client name cannot be empty" }),
  clientEmail: z.string().email({ message: "Invalid email format" }),
  clientAddress: z.string().min(1, { message: "Client address cannot be empty" }),
  clientCity: z.string().min(1, { message: "Client city cannot be empty" }),
  clientPostCode: z.string().min(1, { message: "Client post code cannot be empty" }),
  clientCountry: z.string().min(1, { message: "Client country cannot be empty" }),

  //invoiceDate: z.string().min(1, { message: "Invoice date cannot be empty" }),
  //paymentTerms: z.string().min(1, { message: "Payment terms cannot be empty" }),

  //description: z.string().min(1, { message: "Description cannot be empty" }),

  //totalAmmount: z.string().min(1, { message: "Ammount cannot be empty" }),
})

type FormFields = z.infer<typeof schema>;


interface InvoiceFormProps {
    onCloseModal: () => void;
    onAddInvoice: (newInvoice: any) => void;
    onUpdateInvoice: (updatedInvoce: any) => void;
    selectedInvoice: Invoice | null;
  }

function InvoiceForm({ onCloseModal, selectedInvoice, onUpdateInvoice, onAddInvoice }:InvoiceFormProps) {
  
  const { register, handleSubmit, formState:{errors} } = useForm<FormFields>(
    {defaultValues: selectedInvoice ? selectedInvoice : {
    number: '',
    address: '',
    city: '',
    postCode: '',
    country: '',

    clientName: '',
    clientEmail: '',
    clientAddress: '',
    clientCity: '',
    clientPostCode: '',
    clientCountry: '',

    //invoiceDate: '',
    //paymentTerms: '',

    //description:'',

    //totalAmmount:'',
    },
    resolver: zodResolver(schema)}
  );

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    if(selectedInvoice){
      onUpdateInvoice(data);
    }
    else {
      onAddInvoice(data);
    }
  }

  return (
   <form onSubmit={handleSubmit(onSubmit)}>
    Bill From
    <input 
    {...register("number")}
    type="text"
    placeholder='Number'
    />
    {errors.number && <div className='text-red-500'>{errors.number.message}</div>}
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