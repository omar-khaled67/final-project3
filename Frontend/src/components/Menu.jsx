import React, { useState } from 'react';
import { FaBox, FaUsers, FaHome, FaSignOutAlt, FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/userRedux";
import { persistor } from "../redux/store";

function Menu() {
  const [activeLink, setActiveLink] = useState("/admin");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    persistor.purge().then(() => {
      navigate("/"); // العودة للصفحة الرئيسية بعد logout
    });
  };

  const handleActiveLink = (link) => {
    setActiveLink(link);
  }

  return (
    <div className='p-[20px] w-[350px] bg-gray-100 shadow-lg min-h-screen'>
      <ul className='flex flex-col items-start justify-start mt-[20px] pl-[20px]'>
        <Link to="/admin" onClick={() => handleActiveLink("/admin")}>
          <li className={`flex items-center text-[20px] cursor-pointer mt-[20px] transition-colors duration-100 font-semibold
            ${activeLink === "/admin" ? "bg-red-300 p-[10px] text-white" : ""}`}>
            <FaHome className={`mr-[15px] ${activeLink === "/admin" ? "text-red-50" : "text-red-500"}`} /> Home
          </li>
        </Link>

        <hr className='w-full border-gray-300 my-[20px]' />

        <Link to="/admin/donors" onClick={() => handleActiveLink("/admin/donors")}>
          <li className={`flex items-center text-[20px] cursor-pointer mt-[20px] font-semibold
            ${activeLink === "/admin/donors" ? "bg-red-300 p-[10px] text-white" : ""}`}>
            <FaBox className={`mr-[15px] ${activeLink === "/admin/donors" ? "text-red-50" : "text-red-500"}`} /> Donors
          </li>
        </Link>

        <Link to="/admin/prospects" onClick={() => handleActiveLink("/admin/prospects")}>
          <li className={`flex items-center text-[20px] cursor-pointer mt-[20px] font-semibold
            ${activeLink === "/admin/prospects" ? "bg-red-300 p-[10px] text-white" : ""}`}>
            <FaUsers className={`mr-[15px] ${activeLink === "/admin/prospects" ? "text-red-50" : "text-red-500"}`} /> Prospects
          </li>
        </Link>

        <hr className='w-full border-gray-300 my-[20px]' />

        <button
          onClick={handleLogout}
          className="flex items-center text-[20px] cursor-pointer mt-[30px] font-semibold text-red-600 
            hover:bg-red-200 w-full p-[10px] rounded transition"
        >
          <FaSignOutAlt className="mr-[15px]" /> Logout
        </button>

        <button
          onClick={() => navigate('/')}
          className="flex items-center text-[20px] cursor-pointer mt-[30px] font-semibold text-red-600 
            hover:bg-red-200 w-full p-[10px] rounded transition"
        >
          <FaArrowLeft className="mr-[15px]" /> Back to Home
        </button>

      </ul>
    </div>
  )
}

export default Menu;
