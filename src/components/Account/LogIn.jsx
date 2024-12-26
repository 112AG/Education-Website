import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { useNavigate, useOutletContext } from "react-router-dom"; 

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { setOpen } = useOutletContext();  // Access setOpen from the context passed in App.jsx
  const navigate = useNavigate();

  function handleClick () {
    setShowPassword(!showPassword);
  }

  const [data, setData] = useState({
    email : '',
    password : '',
  })

  function handleChange (e) {
    setData((data) => ( {
      ...data, 
       [e.target.name] : e.target.value,
    }))
  }

  function handleFormClick(e) {
    e.stopPropagation();
    e.preventDefault();
  
    if (data.email && data.password) { // (!data.email || !data.password)
      toast.success('Welcome back');
      navigate('/dashboard', { state: { email: data.email, password: data.password } });
      setOpen(true)
    } else {
      toast.error("Fill the Login Page");
      setOpen(false)
    }
  
    setData({
      email: '',
      password: ''
    });
  }

  return (
    <div className="w-screen flex items-center justify-center mt-4">
      <div className="w-[380px] p-3 bg-teal-800 rounded pb-6">
        <h1 className="font-bold text-4xl text-white mb-6 text-center">
          Account Login
        </h1>
        <form onSubmit={handleFormClick} className=" flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="text-white text-xs" htmlFor="email">
              Enter your Email <span className="text-red-300">*</span>
            </label>
            <input type="email" name="email" value={data.email} id="email" className="py-2 rounded" onChange={handleChange} />
          </div>

          <div className="flex flex-col ">
            <label className="text-white text-xs" htmlFor="password">
              Enter your Password <span className="text-red-300">*</span>
            </label>
            <input type={showPassword ? 'text' : 'password'} name="password" value={data.password} id="password" onChange={handleChange} className="py-2 rounded" />
            <div onClick={handleClick} className="text-white text-xs cursor-pointer text-right">
              {showPassword ? 'Hide Password' : 'Show Password'}
            </div>
          </div>
          <button  className="bg-white w-full py-2 rounded text-teal-700 text-xl font-bold ">
            Login
          </button>
          <Link to='/signup' className="w-full text-center text-white text-xs
          ">
            new Account : SignUp 
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
