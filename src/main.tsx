import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { RouterProvider } from 'react-router/dom'
import { router } from './router/app.router.tsx'

// * Project's root and true entrypoint (as established in index.html). It is the component tree root. App.tsx is the root component of the application as in the first component of the hierarchy.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router}/> {/* RouterProvider must be imported from react-dom and it must physically wrap <Link>, <Outlet> and the rest of the React Router routing elements */}
  </StrictMode>,
)
