import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { FaAngleDown } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { HiDotsVertical } from "react-icons/hi";
import { MdOutlineQuestionMark } from "react-icons/md";





const ListFilter = ({location}) => {

  const path = location.pathname;
  const  dropdownHeading = path.split("/").pop();;

  return (
    <div className="h-[70px] py-4 pl-4 pr-8  bg-white border-b-2  flex items-center justify-between">
      <div>
        <Menu>
          <MenuButton className='font-semibold text-[20px] py-2 flex text-md items-center gap-1' >
            All <span className="capitalize">{dropdownHeading}</span> <FaAngleDown className="text-xs text-[#408dfb]" />
            </MenuButton>

          <MenuItems className="w-[250px] flex flex-col gap-[2px] p-1 rounded-sm shadow-2xl ring-1 ring-[#ededf4] bg-white" anchor="bottom start">
            <MenuItem >
              <a className="dropdown-list-items" href="">
                All Customers
              </a>
            </MenuItem>
            <MenuItem>
              <a className="dropdown-list-items" href="">
                Active Customers
              </a>
            </MenuItem>
            <MenuItem>
              <a className="dropdown-list-items" href="">
                 CRM Customers
              </a>
            </MenuItem>
            <MenuItem>
              <a className="dropdown-list-items" href="">
                 Duplicate Customers
              </a>
            </MenuItem>
            <MenuItem>
              <a className="dropdown-list-items" href="">
                 Inactive Customers
              </a>
            </MenuItem>
            <MenuItem>
              <a className="dropdown-list-items" href="">
                 Customer Portal Enabled
              </a>
            </MenuItem>
            <MenuItem>
              <a className="dropdown-list-items" href="">
                 Customer Portal Disabled
              </a>
            </MenuItem>
            <MenuItem>
              <a className="dropdown-list-items" href="">
                 Overdue Customers
              </a>
            </MenuItem>
            <MenuItem>
              <a className="dropdown-list-items" href="">
                 Unpaid Customers
              </a>
            </MenuItem>
            <MenuItem className="border-t-2 border-[#f4f4f8] flex items-center gap-1 mt-1" >
              <a className="block text-[14px] px-4 py-1  data-[focus]:text-[#408DFB]" href="/license">
               <div className="bg-[#408DFB] flex justify-center items-center p-[3px] text-[10px] rounded-full">
                 <FaPlus  className=" text-white  rounded-sm" />
               </div>
               New Custom View
              </a>
          </MenuItem>
          </MenuItems>
        </Menu>
      </div>

      <div className=" flex items-center justify-between gap-2 ">
          <button className="flex px-2 text-[15px] text-white py-[5px]  items-center justify-center bg-[#408DFB] rounded-sm ">
             <FaPlus />New
           </button>
           <button className="flex items-center justify-center p-[4px]  ring-1 rounded-sm  bg-[#f5f5f5]" >
             <HiDotsVertical />
           </button>
      </div>
      <button className="flex absolute text-white right-0 items-center justify-center py-[6px] px-[2px] rounded-l-sm bg-[#fc8f31]" >
             <MdOutlineQuestionMark />
      </button>      
       
    </div>
  );
};

export default ListFilter;
