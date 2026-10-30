import type { VariantProps } from "class-variance-authority";
import type { Loan } from "../../models/loan.interface"
import { CardComponent, cardVariants } from "../common/card-component";
import { CardInfo } from "../common/card-info-component";

interface Prop extends VariantProps<typeof cardVariants> {
  loan: Loan;
}

export const LoanCard = ({ loan, variant, size }: Prop) => {

  return (
    <CardComponent variant={variant} size={size}>
      <CardInfo property="Loan date" value={loan.loanDate} />
      <CardInfo property="Predicted return date" value={loan.predictedReturnDate} />
      <CardInfo property="Real return date" value={loan.realReturnDate} />
      <CardInfo property="Loan state" value={loan.state} />
    </CardComponent>

  )
}
