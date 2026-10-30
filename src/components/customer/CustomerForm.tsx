import { SubmitButton } from "../common/submit-button-component";

const submitForm = async (e: React.SubmitEvent<HTMLFormElement>) => {
  e.preventDefault();

  const formData: FormData = new FormData(e.target);
  const data: Record<string, FormDataEntryValue> = Object.fromEntries(formData.entries());
  data.registrationDate = new Date().toISOString().split('T')[0];

  try {
    const response: Response = await fetch(import.meta.env.VITE_BASE_URL + "/customers", {
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

export const CustomerForm = () => {
  return (
    <>
      <h3 className="text-xl font-bold">New Customer Form</h3>

      <form name="form" onSubmit={submitForm} method="post">

        <input type='text' name="name" placeholder='Name' className="px-2 py-1" />
        <input type='text' name="lastname" placeholder='Lastname' className="px-2 py-1" />
        <input type='tel' name="phone" placeholder='Phone number' className="px-2 py-1" />
        {/* <label htmlFor="registrationDate" className="font-bold pl-2">Registration date:</label>
      <input type='date' name="registrationDate" placeholder='Registration date' className="px-2 py-1" /> */}

        <SubmitButton />
      </form>
    </>
  )
}
