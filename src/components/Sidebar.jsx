import React from "react";
import { Link, NavLink } from "react-router-dom";
import { TbHome } from "react-icons/tb";
import { IoMdAdd } from "react-icons/io";
import { BsStars } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import {links} from "../data/sidebarlinks"

const Sidebar = () => {
  
  return (
    <div
      className="min-h-screen bg-[#21263c] 
                 relative z-10  transition-all duration-300 ease-in-out 
                 flex-shrink-0  pb-10 w-[200px]"
    >
      <Link to="/" className="w-[200px]">
        <div
          className="mt-0 ml-0 h-[48px] px-2  flex text-sm gap-1 justify-start 
                            bg-[#181c2e] items-center rounded-b-lg text-white "
        >
          <svg
            style={{ fill: "white", width: "24px", height: "24px" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
            className="icon icon-xlg app-logo __web-inspector-hide-shortcut__"
          >
            <g opacity=".9">
              <path d="M490.1 400.8h140c16.6 0 30-13.4 30-30v-140c0-16.6-13.4-30-30-30h-140c-16.6 0-30 13.4-30 30v140c0 16.6 13.4 30 30 30zm30-140.1h80v80h-80v-80z"></path>
              <path d="M994.2 0H450.1c-93.8 0-170 76.3-170 170v110.6H169.4C76 280.6 0 356.6 0 450v404.6C0 948 76 1024 169.4 1024h584.7c72.1 0 140-28.1 191-79.1s79.1-118.8 79.1-191V30c0-16.6-13.4-30-30-30zM169.4 340.6H280v180.2H60V450c0-60.3 49.1-109.4 109.4-109.4zM170 964h-.6C109.1 964 60 914.9 60 854.6V580.8h220.1v273.8c0 60.3-49.1 109.4-109.4 109.4h-.7zm794.2-210c0 115.8-94.2 210.1-210.1 210.1H299.9c25-29.5 40.2-67.7 40.2-109.4V170c0-60.7 49.4-110 110-110h514.1v694z"></path>
              <path d="M490.1 580.8h323.5c16.6 0 30-13.4 30-30s-13.4-30-30-30H490.1c-16.6 0-30 13.4-30 30s13.4 30 30 30zm0 180.1h323.5c16.6 0 30-13.4 30-30s-13.4-30-30-30H490.1c-16.6 0-30 13.4-30 30s13.4 30 30 30z"></path>
            </g>
          </svg>
          <span className="text-xs">Invoice</span>
        </div>
      </Link>

      {/* home to advacedbilling div start  */}

      <div className="flex flex-col p-2 gap-2 justify-between items-center">
        <Link
          to="/home"
          className="text-white py-2 px-2 ring-1 ring-[#42496e] rounded-md bg-[#2d324a] 
                          flex justify-between text-xs w-full gap-2 items-center"
        >
          <div className="flex flex-col">
            <div className="flex gap-1 text-[14px] items-center">
              <BsStars className="text-[18px]" />
              Getting Started
            </div>
            <div>
              <div className="w-[130px] h-[3px] bg-[#495569]"></div>
            </div>
          </div>
          <div>
            <MdKeyboardArrowRight className="text-[20px]" />
          </div>
        </Link>

        <Link
          to="/home"
          className="text-white py-2 px-2 rounded-lg focus:bg-[#408dfb] hover:bg-[#181c2e]
                              flex justify-between text-[14px] w-full items-center"
        >
          <div className="flex gap-2 items-center">
            <TbHome />
            Home
          </div>
        </Link>

        {links.map((link, linkIndex) => (
          <Link
            key={linkIndex}
            to={link.link}
            className="group text-white py-2 px-2 rounded-lg focus:bg-[#408dfb] hover:bg-[#181c2e]
                       flex justify-between text-[14px] w-full items-center no-underline"
          >
            <div className="flex gap-1 items-center">
              {link.icon}
              {link.title}
            </div>
            <span>
              <IoMdAdd className="hidden group-hover:inline group-focus:inline text-[#181c2e] bg-white rounded-lg h-2 w-2" />
            </span>
          </Link>
        ))}
        {/* <button className='group text-white py-2 px-2 rounded-lg focus:bg-[#408dfb] hover:bg-[#181c2e]
                              flex justify-between text-xs w-full items-center'>
                 <div className='flex gap-2 items-center'><CiUser />Customers</div>
                <span><IoMdAdd className="hidden group-hover:inline group-focus:inline text-[#181c2e] bg-white rounded-lg h-2 w-2" /></span>
           </button>

           <button className='group text-white py-2 px-2 rounded-lg focus:bg-[#408dfb] hover:bg-[#181c2e]
                              flex justify-between text-xs w-full items-center'>
                 <div className='flex gap-2 items-center'> <TbShoppingBag />items</div>
                <span><IoMdAdd className="hidden group-hover:inline group-focus:inline text-[#181c2e] bg-white rounded-lg h-2 w-2" /></span>
           </button>
        
        */}
      </div>
    </div>
  );
};

export default Sidebar;
