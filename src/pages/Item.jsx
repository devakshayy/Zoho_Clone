import React from 'react'
import { MdAddCard } from "react-icons/md";
import { RiExpandUpDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";



const Item = () => {
  return (
    <>
     <div className='bg-[#f9f9fb] p-2 border-b-[1px] text-[12px] font-semibold flex gap-40 justify-between items-center'>
         <div className='flex w-1/2 items-center justify-between'>
             <div className='flex gap-2 items-center'>
              <MdAddCard className='text-[14px] text-[#408dfb] cursor-pointer' />
               <input type="checkbox" id="item-checkbox" className='cursor-pointer'/>
               <div className='flex items-center gap-1'>
                 NAME
                 <RiExpandUpDownLine  />
               </div>
             </div>
            <div>
              DESCRIPTION
            </div>
         </div>





         <div className='flex w-1/2 items-center justify-between'>
             <div className='flex items-center gap-4'>
                <span>RATE</span>
                <span>USAGE UNIT</span>
             </div>
             <CiSearch />
         </div>

     </div>
    </>
   
  )
}

export default Item




