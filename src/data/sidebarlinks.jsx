import { TbShoppingBag } from "react-icons/tb";
import { CiUser } from "react-icons/ci";
import { TbFileInvoice } from "react-icons/tb";
import { HiOutlineTruck } from "react-icons/hi2";
import { MdOutlineGetApp } from "react-icons/md";
import { TbInvoice } from "react-icons/tb";
import { PiTimerBold } from "react-icons/pi";
import { BiBarChartAlt } from "react-icons/bi";
import { FaHornbill } from "react-icons/fa6";
import { IoIosSwitch } from "react-icons/io";

const size = "h-3 w-3"

export const links = [
        {
          
            title: 'Customers',
            link: '/customers',
            icon: <CiUser className={size} /> ,
        },
        {
            title: 'Items',
            link: '/items',
            icon: <TbShoppingBag className={size}  /> ,
        },
        {
            title: 'Quotes',
            link: '/quotes',
            icon: <TbFileInvoice className={size}  />,
        },
        {
            title: 'Delivery Chellans',
            link: '/deliverychellans',
            icon: <HiOutlineTruck className={size}  />,
        },
        {
            title: 'Invoices',
            link: '/invoices',
            icon: <TbFileInvoice className={size}  />,
        },
        {
            title: 'Payments Received',
            link: '/paymentsreceived',
            icon: <MdOutlineGetApp className={size}  />,
        },
        {
            title: 'Expenses',
            link: '/expenses',
            icon: <TbInvoice className={size}  />,
        },
        {
            title: 'Time Tracking',
            link: '/timetracking',
            icon: <PiTimerBold className={size}  />,
        },
        {
            title: 'Reports',
            link: '/reports',
            icon: <BiBarChartAlt className={size}  />,
        },
        {
            title: 'Advanced Billing',
            link: '/advancedbilling',
            icon: <FaHornbill className={size}  />,
        },
        {
            title: 'Configure Feature List',
            link: '/configurefeaturelist',
            icon: <IoIosSwitch className={size}  />,
        },
  ];

