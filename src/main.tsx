import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { RouterProvider } from 'react-router/dom'
import { router } from './router/app.router.tsx'

// * Raiz del proyecto. App es el punto de entrada como tal.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router}/> {/* RouterProvider must be imported from react-dom and it must physically wrap <Link>, <Outlet> and the rest of the React Router routing elements */}
  </StrictMode>,
)
