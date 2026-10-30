import { Link, Outlet } from 'react-router'
import './App.css'



// * application entrypoint
export function App() {

  return (
    <>
      <div className='underHeader bg-[#fff5ee]'>
        <aside className="pl-3.5 bg-white">
          
          <div className="mt-4 mr-2 flex flex-col gap-2">
            <Link to="/authors" className="w-30 mt-1 rounded-4xl hover:bg-blue-500 hover:text-white hover:rounded-4xl transition font-medium"><span className="mx-3 rounded">Authors</span></Link>
            <Link to="/books" className="w-30 mt-1 rounded-4xl hover:bg-blue-500 hover:text-white hover:rounded-4xl transition font-medium"><span className="mx-3 rounded">Books</span></Link>
            <Link to="/customers" className="w-30 mt-1 rounded-4xl hover:bg-blue-500 hover:text-white hover:rounded-4xl transition font-medium"><span className="mx-3 rounded">Customers</span></Link> {/** <Link> is used with elements without state control. It's to be used "freely" */}
            <Link to="/loans" className="w-30 mt-1 rounded-4xl hover:bg-blue-500 hover:text-white hover:rounded-4xl transition font-medium"><span className="mx-3 rounded">Loans</span></Link>
          </div>

        </aside>

        <main className="ml-4 mt-3 ">
          <Outlet /> {/** <Outlet> is used when 'children' property is used in createBrowserRouter, because it is used to render the child routes */}
        </main>

      </div>

    </>
  )
}

