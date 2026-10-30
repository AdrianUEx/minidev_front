import { SubmitButton } from "../common/submit-button-component";

const submitForm = async (e: React.SubmitEvent<HTMLFormElement>) => {
  e.preventDefault();

  const formData: FormData = new FormData(e.target);
  const data: Record<string, FormDataEntryValue> = Object.fromEntries(formData.entries());

  try {
    const response: Response = await fetch(import.meta.env.VITE_BASE_URL + "/books", {
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

export const BookForm = () => {

  return (
    <>
      <h3 className="text-xl font-bold">New Book Form</h3>

      <form name="form" onSubmit={submitForm} method="post">

        <input name="title" type='text' placeholder='Title' maxLength={100} className="px-2 py-1" />
        <label htmlFor="publishDate" className="font-bold pl-2">Publish date:</label>
        <input name="publishDate" type='date' placeholder='Publish date' className="px-2 py-1" />
        <input name="genre" type='text' placeholder='Genre' maxLength={100} className="px-2 py-1" />
        <input name="stock" type='number' placeholder='Stock' className="px-2 py-1" />
        <input name="author" type='number' placeholder='Author' className="px-2 py-1" /> {/** id del autor */}
        <textarea name="description" placeholder='Description' maxLength={200} className="px-2 py-1"></textarea>

        <SubmitButton />
      </form>
    </>
  )
}
