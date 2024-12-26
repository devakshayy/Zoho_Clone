import React from 'react'
import { SiTicktick } from "react-icons/si";


const DeliveryChellans = () => {

   const tick = (
        <>
          <SiTicktick className="text-[14px] text-[#408DFB]" />
        </>
      );

  return (
    <>
      {/* Delivery chellan create div start */}
      <div className='px-[20px] border-b-[1px] py-[75px]'>
           <div className='flex flex-col gap-3 pt-4 items-center'>
               <div className='font-medium'>Deliver Goods effectively</div>
               <div className='text-[14px]'>Create, customize and print professional Delivery Chellans</div>
               <button className="px-4 py-2 text-[16px] rounded-md text-white uppercase bg-[#408DFB]">
                   Create Delivery challan
                </button>
           </div>
      </div>
      {/* Delivery chellan create div end */}
      <div className='flex flex-col gap-8 items-center bg-[#f9f9fb] pt-[20px] pb-[45px]'>
          <div>Life cycle of Quote</div>
          <div> 
            <img src="/deliverychallanworkflow.png" alt="deliverychallanworkflow" />
          </div>
          <div className="w-[800px] border-t-2 flex h-[260px]">
          <div className="w-1/4 h-full "></div>
          <div className="pt-[50px]">
            <div className="text-xs pb-3">In the Delivery Challan module, you can:</div>
            <ul className="flex flex-col gap-1">
              <li className="flex gap-2 text-[16px] items-center">
                {" "}
                {tick}
                Create delivery challans to accompany your goods when they are in transit.
              </li>
              <li className="flex gap-2 text-[16px] items-center">
                {tick}
                Convert a delivery challan into an invoice to charge your customers.
              </li>
              <li className="flex gap-2 text-[16px] items-center">
                {tick}
                Mark your delivery challan as returned or record partial returns.
              </li>
            </ul>
          </div>
          </div>
     </div>
    </>
   
  )
}

export default DeliveryChellans






