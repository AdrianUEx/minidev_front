import type { Author } from "../../models/author.interface"
import { AuthorCard } from "./AuthorCard";
import "../../App.css";
import type { cardVariants } from "../common/card-component";
import type { VariantProps } from "class-variance-authority";

interface AuthorProp extends VariantProps<typeof cardVariants> {
    authors: Author[];
}

export const AuthorDashboard = ({authors, variant, size}: AuthorProp) => {
    return (
        <>
            {
                authors.map(author => (
                    <AuthorCard author={author} variant={variant} size={size} key={author.id}/>
                ))

            }

        </>


    )
}