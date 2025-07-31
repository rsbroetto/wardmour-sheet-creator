import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import SheetForm from './SheetForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SheetForm />
  </StrictMode>,
)
