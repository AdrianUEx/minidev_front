import { SubmitButton } from "../common/submit-button-component";

const submitForm = async (e: React.SubmitEvent<HTMLFormElement>) => {
  e.preventDefault();

  const formData: FormData = new FormData(e.target);
  const data: Record<string, FormDataEntryValue> = Object.fromEntries(formData.entries());
  data.loanDate = new Date().toISOString().split('T')[0];

  try {
    const response: Response = await fetch(import.meta.env.VITE_BASE_URL + "/loans", {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();

  } catch (error) {
    console.error("Error al enviar el formulario: ", error);
  }

}

export const LoanForm = () => {
  return (
    <>
      <h3 className="text-xl font-bold">New Loan Form</h3>
      <form name="form" onSubmit={submitForm} method="post">

        {/* loan date not needed because it is Date.now() */}

        <label htmlFor="predReturnDate" className="font-bold pl-2">Predicted return date:</label>
        <input id="predReturnDate" type='date' name="predictedReturnDate" placeholder='Predicted return date' className="px-2 py-1" />

        <input id="customerId" type='number' name="customerId" placeholder='Customer Id' className="px-2 py-1" />


        {/* TODO: investigar cómo seleccionar los libros (¿carrito con LocalStorage?) */}

        <SubmitButton />
      </form>
    </>
  )
}
