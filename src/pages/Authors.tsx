
import { useEffect, useState } from "react";
import { AuthorDashboard } from "../components/author/AuthorDashboard"
import { AuthorForm } from "../components/author/AuthorForm"
import type { Author } from "../models/author.interface";
import '../App.css'

export const Authors = () => {

    const [authors, setAuthors] = useState<Author[]>([]);

    // * useEffect expects a void callback function or a function that returns a cleanup function. That's why we define an async function inside as a workaround and invoke it immediately. This is a common pattern for using async functions inside useEffect.
    useEffect(() => {
        const tryFetch = async () => {
            try {
                const response: Response = await fetch(import.meta.env.VITE_BASE_URL + "/authors");

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data: { authorList: Author[] } = await response.json(); // reads the request body and returns it as a promise that resolves with the result of parsing the body text as JSON
                setAuthors(data.authorList);
            }
            catch (err) {
                console.error(err);
            }
        };

        tryFetch();
    }, []) // Si se pone a vigilar authors, se forma un bucle infinito

    return (
        <>
            <h2 className="text-2xl font-bold">Authors</h2>

            <AuthorDashboard authors={authors} />

            <AuthorForm />
        </>


    )
}
