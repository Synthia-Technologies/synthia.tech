import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header style={{width: '100%'}}/>
  </StrictMode>,
)
