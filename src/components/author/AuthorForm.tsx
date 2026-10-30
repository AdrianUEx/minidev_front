import { SubmitButton } from "../common/submit-button-component";

const submitForm = async (e: React.SubmitEvent<HTMLFormElement>) => {
  e.preventDefault();

  const formData: FormData = new FormData(e.target);
  const data: Record<string, FormDataEntryValue> = Object.fromEntries(formData.entries());

  try {
    const response: Response = await fetch(import.meta.env.VITE_BASE_URL + "/authors", {
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

export const AuthorForm = () => {

  return (
    <>
      <h3 className="text-xl font-bold">New Author Form</h3>

      <form id="formEnvio" name="form" onSubmit={submitForm} method="post">

        <input id="name" type='text' name="name" placeholder='Name' className="px-2 py-1" />
        <input id="lastname" type='text' name="lastname" placeholder='Lastname' className="px-2 py-1" />
        <input id="birthdate" type='date' name="birthDate" placeholder='Birthdate' className="px-2 py-1" />
        <input id="nationality" type='text' name="nationality" placeholder='Nationality' className="px-2 py-1" />
        <textarea id="biography" name="biography" placeholder='Biography' maxLength={200} className="px-2 py-1" ></textarea>

        <SubmitButton />
      </form>
    </>
  )
}
