import { type VariantProps } from "class-variance-authority";
import { type Customer } from "../../models/customer.interface"
import { CardComponent, cardVariants } from "../common/card-component";
import { CardInfo } from "../common/card-info-component";

interface Prop extends VariantProps<typeof cardVariants> {
    customer: Customer;
}

export const CustomerCard = ({customer, variant, size}: Prop) => {

  return (
    <CardComponent variant={variant} size={size}>
      <CardInfo property="Name" value={customer.name} />
      <CardInfo property="Lastname" value={customer.lastname} />
      <CardInfo property="Phone" value={customer.phone} />
      <CardInfo property="Registration Date" value={customer.registrationDate} />
    </CardComponent>
  )
}
