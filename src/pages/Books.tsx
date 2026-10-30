
import { useEffect, useState } from 'react';
import { BookForm } from '../components/book/BookForm'
import type { Book } from '../models/book.interface';
import { BookDashboard } from '../components/book/BookDashboard';
import '../App.css'

export const Books = () => {

    const [books, setBooks] = useState<Book[]>([]);

    // * useEffect expects a void callback function or a function that returns a cleanup function. That's why we define an async function inside as a workaround and invoke it immediately. This is a common pattern for using async functions inside useEffect.
    useEffect(() => {
        const tryFetch = async () => {
            try {
                const response: Response = await fetch(import.meta.env.VITE_BASE_URL + "/books");

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data: { bookList: Book[] } = await response.json(); // reads the request body and returns it as a promise that resolves with the result of parsing the body text as JSON
                setBooks(data.bookList);
            }
            catch (err) {
                console.error(err);
            }
        };

        tryFetch();
    }, []) // Si se pone a vigilar books, se forma un bucle infinito

    return (
        <>
            <h2 className="text-2xl font-bold">Books</h2>

            <BookDashboard books={books} />

            <BookForm />
        </>


    )
}
