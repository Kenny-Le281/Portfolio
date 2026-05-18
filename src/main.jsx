import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// Bootstrap JS (bundle includes Popper)
import 'bootstrap/dist/js/bootstrap.bundle.min'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
