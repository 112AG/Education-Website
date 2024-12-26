import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import App from './App.jsx';
import Home from './components/Project/Home.jsx';
import About from './components/Project/About.jsx';
import Contact from './components/Project/Contact.jsx';
import LogIn from './components/Account/LogIn.jsx';
import SignUp from './components/Account/SignUp.jsx';
import Dashboard from './components/Project/Dashboard.jsx';

// Create the router using createBrowserRouter and createRoutesFromElements
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />  {/* Default Route */}
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="login" element={<LogIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path='dashboard' element={<Dashboard />} />
    </Route>
  )
);

// Render the app with the router provider
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
