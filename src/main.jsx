import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, RouterProvider} from 'react-router'
import router from './Routes/Routes.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Declarative */}
    {/* <BrowserRouter>
      <Routes>
        <Route path='/secret' element={<App />} />
      </Routes>
    </BrowserRouter> */}

    <RouterProvider router={router} />
    
  </StrictMode>,
)
