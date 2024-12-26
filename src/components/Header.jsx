import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { SlMenu } from "react-icons/sl";
import { RxCross2 } from "react-icons/rx";
import logo from "../assets/Logo.png";

const Header = ({ open }) => {
  const [menu, setMenu] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const handleMenu = () => {
    setMenu((prevMenu) => !prevMenu);
  };
  const handleLogOut = () => {
    setMenu(false);
    setIsLogged(false);
  };

  useEffect(() => {
    setIsLogged(open);
  }, [open]);

  return (
    <div className="relative shadow-lg">
      <div className="flex items-center justify-between px-5 py-5">
        <img src={logo} alt="Logo" className="h-14 p-0" />

        <ul className="hidden md:flex items-center font-medium gap-6 text-base translate-x-2/4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-teal-600 underline" : "text-teal-800"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-teal-600 underline" : "text-teal-800"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-teal-600 underline" : "text-teal-800"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-4">
          {!isLogged && (
            <Link
              to="/login"
              className="px-6 py-1.5 rounded font-medium bg-teal-700 text-white hover:bg-teal-800 hover:shadow-lg transition-all"
            >
              Login
            </Link>
          )}
          {!isLogged && (
            <Link
              to="/signup"
              className="px-6 py-1.5 rounded font-medium bg-teal-700 text-white hover:bg-teal-800 hover:shadow-lg transition-all"
            >
              Sign Up
            </Link>
          )}
          {isLogged && (
            <Link
              to="/dashboard"
              className="px-6 py-1.5 rounded font-medium bg-teal-700 text-white hover:bg-teal-800 hover:shadow-lg transition-all"
            >
              Dashboard
            </Link>
          )}
          {isLogged && (
            <Link
              to="/"
              onClick={handleLogOut}
              className="px-6 py-1.5 rounded font-medium bg-teal-700 text-white hover:bg-teal-800 hover:shadow-lg transition-all"
            >
              LogOut
            </Link>
          )}
        </div>

        <button
          onClick={handleMenu}
          className="md:hidden text-2xl text-teal-800"
          aria-label="Toggle menu"
        >
          {menu ? <RxCross2 /> : <SlMenu />}
        </button>
      </div>

      {menu && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50">
          <ul className="flex flex-col py-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block px-5 py-2 ${
                    isActive ? "text-teal-600 bg-teal-50" : "text-teal-800"
                  }`
                }
                onClick={handleMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block px-5 py-2 ${
                    isActive ? "text-teal-600 bg-teal-50" : "text-teal-800"
                  }`
                }
                onClick={handleMenu}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block px-5 py-2 ${
                    isActive ? "text-teal-600 bg-teal-50" : "text-teal-800"
                  }`
                }
                onClick={handleMenu}
              >
                Contact
              </NavLink>
            </li>
            {!isLogged && (
              <li className="flex flex-col gap-2 px-5 pt-4">
                <Link
                  to="/login"
                  className="px-6 py-1.5 rounded font-medium bg-teal-700 text-white text-center hover:bg-teal-800 hover:shadow-lg transition-all"
                  onClick={handleMenu}
                >
                  Login
                </Link>
              </li>
            )}
            {!isLogged && 
              <li className="flex flex-col gap-2 px-5 pt-4">
                <Link
                  to="/signup"
                  className="px-6 py-1.5 rounded font-medium bg-teal-700 text-white text-center hover:bg-teal-800 hover:shadow-lg transition-all"
                  onClick={handleMenu}
                >
                  Sign Up
                </Link>
              </li>
            }
            {isLogged && (
              <li className="flex flex-col gap-2 px-5 pt-4">
                <Link
                  to="/dashboard"
                  className="px-6 py-1.5 rounded font-medium bg-teal-700 text-white text-center hover:bg-teal-800 hover:shadow-lg transition-all"
                  onClick={handleMenu}
                >
                  Dashboard
                </Link>
              </li>
            )}
            {isLogged && (
              <li className="flex flex-col gap-2 px-5 pt-4">
                <Link
                  to="/"
                  className="px-6 py-1.5 rounded font-medium bg-teal-700 text-white text-center hover:bg-teal-800 hover:shadow-lg transition-all"
                  onClick={handleLogOut}
                >
                  LogOut
                </Link>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
