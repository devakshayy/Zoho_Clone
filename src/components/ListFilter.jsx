import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { FaAngleDown } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";



const ListFilter = () => {
  return (
    <div className="h-[70px] px-4 bg-white border-b-2  flex items-center justify-between">
      <div>
        <Menu>
          <MenuButton className='ml-5 font-semibold flex text-md items-center gap-1' >
            All Customers <FaAngleDown className="text-xs text-[#408dfb]" />
            </MenuButton>

          <MenuItems className="w-[250px] flex flex-col gap-1 p-1 rounded-sm shadow-2xl ring-1 ring-[#ededf4] bg-white" anchor="bottom">
            <MenuItem>
              <a className="dropdown-list-items" href="/settings">
                All Customers
              </a>
            </MenuItem>
            <MenuItem>
              <a className="dropdown-list-items" href="/support">
                Active Customers
              </a>
            </MenuItem>
            <MenuItem>
              <a className="dropdown-list-items" href="/license">
                 CRM Customers
              </a>
            </MenuItem>
            <MenuItem>
              <a className="dropdown-list-items" href="/license">
                 Duplicate Customers
              </a>
            </MenuItem>
            <MenuItem>
              <a className="dropdown-list-items" href="/license">
                 Inactive Customers
              </a>
            </MenuItem>
            <MenuItem>
              <a className="dropdown-list-items" href="/license">
                 Customer Portal Enabled
              </a>
            </MenuItem>
            <MenuItem>
              <a className="dropdown-list-items" href="/license">
                 Customer Portal Disabled
              </a>
            </MenuItem>
            <MenuItem>
              <a className="dropdown-list-items" href="/license">
                 Overdue Customers
              </a>
            </MenuItem>
            <MenuItem>
              <a className="dropdown-list-items" href="/license">
                 Unpaid Customers
              </a>
            </MenuItem>
            <MenuItem className="border-t-2 border-[#f4f4f8] flex items-center gap-1 mt-1" >
              <a className="block text-[14px] px-4 py-1  data-[focus]:text-[#408DFB]" href="/license">
               <div className="bg-[#408DFB] p-[1px] rounded-full">
                 <FaPlus  className=" text-white rounded-sm" />
               </div>
               New Custom View
              </a>
          </MenuItem>
          </MenuItems>
        </Menu>
      </div>

      <div>{/* the last  logo  container */}</div>
    </div>
  );
};

export default ListFilter;
