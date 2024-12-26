import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { ToastContainer } from 'react-toastify';


function App() {
  const [open, setOpen] = useState(false);  
 
  return (
    <div>
    <Header open={open} />
    <Outlet context={{ setOpen }} />
    <Footer />
    <ToastContainer />
    </div>
  )
}

export default App
