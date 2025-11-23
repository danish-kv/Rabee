import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ConnectGrow from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ConnectGrow />
  </StrictMode>,
)