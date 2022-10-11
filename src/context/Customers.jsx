import {useState, useEffect, useContext} from 'react';
import axios from 'axios'
import { Context } from './Context';



function Customers() {
    const [customer, setCustomer] = useState([]);

    //global
     const {addcustomer, setAddcustomer} = useContext(Context)
    useEffect(() => {
        axios(`https://northwind.vercel.app/api/customers`)
        .then((res) => setCustomer(res.data))
        .catch((e) => console.log(e))
    },[]);

    const AddCustomer = (item) =>{
         //customerı yapıya ekleme

         let kisi = customer.find(q => q.id === item.id);
         if(kisi){
            kisi.quantity = kisi.quantity + 1;
            setCustomer([...customer])

         }
         else{
           let newAdd = {
            id: item.id,
            companyName: item.companyName,
            contactName: item.contactName,
           }
           setCustomer([...customer, newAdd])
         }
    }

  return (
    <div>
      {
        customer && customer.map((item,key) => {
            return <>
            <li>{item.companyName}</li>
            <button onClick={() => AddCustomer(item)}>Add Customer</button>
            </>
        })
      }
    </div>
  )
}

export default Customers
