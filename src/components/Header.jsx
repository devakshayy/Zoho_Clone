import React, { useState } from "react";
import { PiClockClockwiseLight } from "react-icons/pi";
import { GoSearch } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import { VscBell } from "react-icons/vsc";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { IoApps } from "react-icons/io5";
import { Tooltip } from "react-tooltip";
import { SiZorin } from "react-icons/si";


const Header = () => {
  const [show, setShow] = useState(false);

  const iconChangeHandle = () => {
    setShow((show) => !show);
  }
  
  return (
    <div className="flex mt-0 ml-0 p-2 justify-between  items-center h-[48px] border border-b-1 border-[#e5e6ef] bg-[#f7f7fe]">
      <div className="flex gap-2 items-center text-black">
        <div className="flex items-center gap-4">
          <PiClockClockwiseLight />
          <div className="relative">
            <input
              type="text"
              placeholder="Search in Customers ( / )"
              className="pl-8 bg-[#ededf7] rounded-md
                       outline-none hover:border border-[#e5e6ef] hover:border-blue-300 
                       placeholder:text-xs w-[350px]  hover:w-[400px] focus:w-[400px]
                       hover:ease-out duration-300 text-xs py-[7px]"
            />
            <GoSearch className="absolute top-1/2 left-1  transform -translate-y-1/2" />
          </div>
        </div>
      </div>
      <div className="flex gap-4 items-center text-black">
        <div className="flex items-center text-xs gap-1">
          company
          <IoIosArrowDown />
        </div>
        <div className="text-white bg-[#408dfb] p-1 rounded-sm">
          <GoPlus />
        </div>
        <VscBell />
        <a id="my-anchor-element-id">
          <IoSettingsOutline />
        </a>
        <Tooltip
          anchorSelect="#my-anchor-element-id"
          content={
            <div className="w-10 h-auto  text-white text-xs rounded">
              settings
            </div>
          }
        />
        <HiOutlineUserCircle className="w-7 h-7" />
         {show? <SiZorin
                    className="transform transition-all duration-300"
                    onMouseLeave={iconChangeHandle} /> 
               :
          <IoApps 
                className="transform transition-all duration-300" 
                onMouseEnter={iconChangeHandle} />}

      </div>
    </div>
  );
};

export default Header;
