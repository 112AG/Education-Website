import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from 'react-toastify';
import { useNavigate, useOutletContext } from "react-router-dom"; 


function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
    const { setOpen } = useOutletContext();  // Access setOpen from the context passed in App.jsx
    const navigate = useNavigate();
  function handleClick () {
    setShowPassword(!showPassword);
  }

  const [formData, setFormData] = useState({
    firstname: '', lastname: '', email: '', password: '',
  })

  function handleChange (e) {
    setFormData((formData) => ({
      ...formData,
      [e.target.name] : e.target.value
    }))
  }

  function handleFormClick (e) {
    e.stopPropagation();
    e.preventDefault();
    console.log(formData);
        if (formData.email && formData.password) { // (!data.email || !data.password)
          toast.success('Welcome back');
          navigate('/dashboard', { state: { email: formData.email, password: formData.password } });
          setOpen(true)
        } else {
          toast.error("Fill the Login Page");
          setOpen(false)
        }
    setFormData({
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    });
  
  }

  return (
    <div className="w-screen flex items-center justify-center mt-4">
      <div className="w-[420px] p-3 bg-teal-800 rounded pb-12">
        <h1 className="font-bold text-4xl text-white mb-6 text-center">
          Account SignUp
        </h1>
        <form  onSubmit={handleFormClick} className=" flex flex-col gap-4">
          <div className="flex gap-2 items-center justify-between">
            <div className="flex flex-col">
              <label className="text-white text-xs" htmlFor="firstname">
                First Name <span className="text-red-500">*</span>
              </label>
              <input 
              className="py-2 rounded"
              type="text" 
              id="firstname" 
              value={formData.firstname}
              name="firstname"
              onChange={handleChange}
              />
            </div>

            <div className="flex flex-col">
              <label className="text-white text-xs" htmlFor="lastname">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input 
              className="py-2 rounded" 
              type="text" 
              id="lastname" 
              value={formData.lastname}
              name="lastname"
              onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-white text-xs" htmlFor="email">
              Enter your Email <span className="text-red-500">*</span>
            </label>
            <input 
            type="email" 
            id="email"
            className="py-2 rounded" 
            value={formData.email}
            name="email"
            onChange={handleChange}
            />
          </div>
          <div className="flex flex-col ">
            <label className="text-white text-xs" htmlFor="password">
              Enter your Password <span className="text-red-500">*</span>
            </label>
            <input 
            type={showPassword ? 'text' : 'password'} 
            id="password"
            value={formData.password}
            name="password"
            onChange={handleChange}
            className="py-2 rounded" 
            />
            <div onClick={handleClick} className="text-white text-xs cursor-pointer text-right">
              {showPassword ? 'Hide Password' : 'Show Password'}
            </div>
          </div>
          <button className="bg-white w-
          full py-2 rounded text-teal-700 text-xl font-bold ">
            SignUp
          </button>
          <Link to='/login' className="w-full text-center text-white text-xs
          ">
            Already SignUp : LogIn 
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
