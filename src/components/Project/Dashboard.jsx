import React from "react";
import { data, useLocation } from "react-router-dom";
import Data from "../data.js";
import { useState } from "react";
import cardtemplate from "../../assets/cardtemplate.jpg";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

function Dashboard() {
  const location = useLocation();

  // Safely access the email with optional chaining
  const email = location.state?.email;

  // Provide a fallback value if email is undefined
  const firstLetter = email ? email.charAt(0).toUpperCase() : "";

  const [courseData, setCourseData] = useState(Data);

  const handleLikeToggle = (id) => {
    setCourseData((prevData) =>
      prevData.map((course) =>
        course.id === id ? { ...course, liked: !course.liked } : course
      )
    );
  };

  return (
    <div className="p-2 sm:p-6">
      <nav className="flex item-center justify-between w-full pb-12">
        <div className="h-7 w-7 rounded-full  bg-teal-800 text-center text-white font-bold">
          {firstLetter}
        </div>
        <h1 className="text-2xl font-bold text-teal-800">Courses</h1>
        <h2 className="text-sm font-semibold text-teal-800">All Valuable</h2>
      </nav>

      <div className="h-full w-full md:w-11/12  max-w-[1269px] md:mx-auto">
        <div className="flex items-center custom:justify-between justify-center flex-wrap custom:gap-6 gap-7 ">
          {" "}
          {/* custom is default responsive code */}
          {courseData.map((data) => {
            return (
              <div
                className="w-[320px] flex flex-col bg-white rounded-lg shadow-lg hover:scale-95 transition ease-in-out overflow-hidden"
                key={data.id}
              >
                <Link
                  to={data.url}
                  className="w-full h-[220px] overflow-hidden"
                >
                  <img
                    src={cardtemplate}
                    className="h-full w-full object-cover object-center"
                    alt={data.heading}
                  />
                </Link>

                <div className="flex justify-between items-center p-4">
                  <h1 className="text-xl font-bold text-teal-800 truncate">
                    {data.heading}
                  </h1>
                  <div
                    onClick={() => handleLikeToggle(data.id)}
                    className={`text-sm cursor-pointer ${
                      data.liked ? "text-red-500" : "text-gray-500"
                    }`}
                  >
                    {data.liked ? <FaHeart /> : <FaRegHeart />}
                  </div>
                </div>

                <p className="text-sm text-gray-800 px-4 pb-4 truncate">
                  {data.para}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
