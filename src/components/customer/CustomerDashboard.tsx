
import type { Customer } from "../../models/customer.interface";
import { CustomerCard } from "./CustomerCard";
import "../../App.css";
import type { cardVariants } from "../common/card-component";
import type { VariantProps } from "class-variance-authority";


interface CustomerProp extends VariantProps<typeof cardVariants> {
    customers: Customer[];
}

export const CustomerDashboard = ({customers, variant, size}: CustomerProp) => {
    return (
        <>

            {

                customers.map(customer => (
                    <CustomerCard customer={customer} variant={variant} size={size} key={customer.id}/>
                ))

            }
        


        </>


    )
}