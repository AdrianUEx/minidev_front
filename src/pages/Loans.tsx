import { useEffect, useState } from 'react';
import { LoanForm } from '../components/loan/LoanForm'
import type { Loan } from '../models/loan.interface';
import { LoanDashboard } from '../components/loan/LoanDashboard';
import '../App.css'


export const Loans = () => {

    const [loans, setLoans] = useState<Loan[]>([]);

    // * useEffect expects a void callback function or a function that returns a cleanup function. That's why we define an async function inside as a workaround and invoke it immediately. This is a common pattern for using async functions inside useEffect.
    useEffect(() => {
        const tryFetch = async() => {
            try {
                const response: Response = await fetch(import.meta.env.VITE_BASE_URL + "/loans");

                if(!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data: { loanList: Loan[] } = await response.json(); // reads the request body and returns it as a promise that resolves with the result of parsing the body text as JSON
                setLoans(data.loanList);
            }
            catch (err) {
                console.error(err);
            }
        };

        tryFetch();

    }, []) // Si se pone a vigilar loans, se forma un bucle infinito

    return (
        <>
            <h2 className="text-2xl font-bold">Loans</h2>

            <LoanDashboard loans={loans} />

            <LoanForm />
        </>


    )
}
