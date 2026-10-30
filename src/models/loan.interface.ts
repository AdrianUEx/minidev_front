// * Loan DTO for operations with DB
export interface Loan {
    id: number,
    loanDate: string,
    predictedReturnDate: string,
    realReturnDate: string, 
    clientId: number,
    state: string,
}