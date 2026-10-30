import type { Book } from "../../models/book.interface";
import { BookCard } from "./BookCard";
import "../../App.css";
import type { cardVariants } from "../common/card-component";
import type { VariantProps } from "class-variance-authority";


interface BookProp extends VariantProps<typeof cardVariants> {
    books: Book[];
}

export const BookDashboard = ({books, variant, size}: BookProp) => {
    return (
        <>
            {
                books.map(book => (
                    <BookCard book={book} variant={variant} size={size} key={book.id}/>
                ))

            }

        </>


    )
}