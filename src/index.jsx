import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './navbar.jsx'
import Homecont from './content.jsx'
import Foot from './footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <header>
        <Navbar style={{width: '100%'}}/>
      </header>

      <section>
          <Homecont/>
      </section>

      <Foot />
  </StrictMode>,
)
