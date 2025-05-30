<<<<<<< HEAD

=======
// import { StrictMode } from 'react'
// import { BrowserRouter } from 'react-router-dom'
>>>>>>> 0a0fdf658f1121e7ad5ecc0c2dcabcff0482c5fe
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
