import React from "react";
import { Link } from "react-router-dom";
import HiteshSir from "../../assets/HiteshSir.jpg";
import HarshSir from "../../assets/HarshSir.jpg";
import Sir from "../../assets/Sir.jpg";
import Mam from "../../assets/Mam.jpg";
import Pic from "../../assets/pic.jpg";
import Boy from "../../assets/boy.jpg";


function Home() {
  return (
    <div>
      {/* One */}
      <div className="w-full p-6 h-full flex justify-between flex-col-reverse lg:flex-row items-start flex-wrap">
      <div className="w-full lg:w-1/2 text-teal-800">
        <h1 className="font-extrabold text-[36px] lg:text-[58px] leading-none text-center lg:text-left">
          Advance Learning with Professional Teachers
        </h1>
        <p className="text-[14px] md:text-[16px] py-4 leading-tight">
          Welcome to Learning Hub, where industry-leading professionals with
          over five years of real-world development experience are here to guide
          you on your coding journey. Whether you're a beginner looking to get
          started or an experienced developer aiming to sharpen your skills, our
          expert instructors provide tailored lessons and hands-on learning
          experiences to help you excel. Our courses cover a wide range of
          topics including web development, software engineering, mobile app
          development, and more. We focus on practical, up-to-date techniques
          used by professionals every day, ensuring you gain the skills that are
          directly applicable to the modern tech landscape. Join our community
          of passionate learners and start advancing your career today!
        </p>
        <div className="w-full lg:text-left text-center">
        <Link
          to="/about"
          className="px-8 py-2 font-medium bg-[#126953] rounded text-white hover:shadow-lg "
        >
          About Us
        </Link>
        </div>
      </div>
      <div className="lg:w-1/2 w-full flex items-start justify-evenly lg:justify-center gap-6 px-14">
        <div className="mt-12 flex flex-col gap-5">
          <div >
            <img src={HiteshSir} />
          </div>

          <div>
            <img src={Sir} />
          </div>
        </div>

        <div className=" flex flex-col gap-5">
          <div>
            <img src={HarshSir} />
          </div>

          <div >
            <img src={Mam} />
          </div>
        </div>
      </div>
    </div>

    {/* Two */}
    <div className="h-full w-full p-6 flex items-start justify-between flex-col lg:flex-row">
      <div className="lg:w-1/2 w-full">
        <div className="w-full flex justify-center overflow-hidden">
        <img src={Pic} />
        </div>
        <p className="text-[14px] py-4 text-teal-800 leading-tight " >From Zero to Software Developer in 6 Months. Transform your career and unlock your potential with our intensive software development program. Through hands-on learning and expert mentorship, you'll gain the in-demand skills to launch a rewarding career in tech. Start building your future today.
        </p>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center gap-6 lg:gap-10">
        <h1 className="text-[42px] lg:text-6xl font-bold text-center lg:text-left text-teal-800">Course Category</h1>
        <Link className="bg-teal-800 text-white font-semibold py-3 w-[308px] lg:w-[360px] hover:bg-teal-700 transition ease-in-out hover:scale-95 hover:shadow-none shadow-2xl text-center rounded-xl text-2xl">App Development</Link>
        <Link className="bg-teal-800 text-white font-semibold py-3 w-[308px] lg:w-[360px] hover:bg-teal-700 transition ease-in-out hover:scale-95 hover:shadow-none shadow-2xl text-center rounded-xl text-2xl">Web Development</Link>
        <Link className="bg-teal-800 text-white font-semibold py-3 w-[308px] lg:w-[360px] hover:bg-teal-700 transition ease-in-out hover:scale-95 hover:shadow-none shadow-2xl text-center rounded-xl text-2xl">Machine Learning</Link>
        <Link className="bg-teal-800 text-white font-semibold py-3 w-[308px] lg:w-[360px] hover:bg-teal-700 transition ease-in-out hover:scale-95 hover:shadow-none shadow-2xl text-center rounded-xl text-2xl">Data Science</Link>
      </div>
    </div>

    {/* three */}
    <div className="h-full w-full bg-teal-800 flex items-center justify-evenly px-2">
      <div className="w-[200px] sm:w-1/2 flex text-center gap-4 items-center justify-center flex-col">
        <h1 className="text-2xl leading-none sm:leading-tight md:text-5xl font-bold text-white">Let's start your Journey</h1>
        <Link to='/signup' className="px-7 py-2 bg-white text-teal-700 font-bold rounded-sm">SignUp</Link>
        <p className="sm:text-xs text-[10px] text-white ">Start now with 1 week trail 
        Admission Open from 1 January 2025</p>
      </div>
      <div className="w-1/2 flex items-end justify-center overflow-hidden">
      <img src={Boy} />
      </div>
    </div>
    </div>
  );
}

export default Home;
