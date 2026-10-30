
import type { Loan } from "../../models/loan.interface";
import { LoanCard } from "./LoanCard";
import "../../App.css";
import type { cardVariants } from "../common/card-component";
import type { VariantProps } from "class-variance-authority";


interface Prop extends VariantProps<typeof cardVariants> {
    loans: Loan[];
}

export const LoanDashboard = ({loans, variant, size}: Prop) => {
    return (
        <>
            {
                loans.map(loan => (
                    <LoanCard loan={loan} variant={variant} size={size} key={loan.id}/>
                ))

            }

        </>


    )
}