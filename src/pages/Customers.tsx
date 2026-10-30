
import { useEffect, useState } from 'react';
import { CustomerDashboard } from '../components/customer/CustomerDashboard'
import { CustomerForm } from '../components/customer/CustomerForm'
import type { Customer } from '../models/customer.interface';
import '../App.css'

export const Customers = () => {

  const [customers, setCustomers] = useState<Customer[]>([]);

  // * useEffect expects a void callback function or a function that returns a cleanup function. That's why we define an async function inside as a workaround and invoke it immediately. This is a common pattern for using async functions inside useEffect.
  useEffect(() => {
    const tryFetch = async () => {
      try {
        const response: Response = await fetch(import.meta.env.VITE_BASE_URL + "/customers");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: { customerList: Customer[] } = await response.json(); // reads the request body and returns it as a promise that resolves with the result of parsing the body text as JSON
        setCustomers(data.customerList);
      }
      catch (err) {
        console.error(err);
      }
    };

    tryFetch();
  }, []) // Si se pone a vigilar customers, se forma un bucle infinito


  return (
    <>
      <h2 className="text-2xl font-bold">Customers</h2>

      <CustomerDashboard customers={customers} />

      <CustomerForm />
    </>


  )
}
