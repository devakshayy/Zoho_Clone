import React from 'react'
import { SiTicktick } from "react-icons/si";


const Paymentreceived = () => {

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
               <div className='font-medium'>No payments received, yet</div>
               <div className='text-[14px]'>Payments will be added once your customers pay for their invoices.</div>
               <button className="px-4 py-2 text-[16px] rounded-md text-white uppercase bg-[#408DFB]">
                   Go to unpaid invoices
                </button>
                <div className='text-[14px] text-[#408DFB] cursor-pointer'>Import Payments</div>
           </div>
      </div>
      {/* Delivery chellan create div end */}
      <div className='flex flex-col gap-8 items-center bg-[#f9f9fb] pt-[30px] pb-[45px]'>
          <div className='text-xs'>Life cycle of a Customer Payment </div>
          <div> 
            <img src="/customerpaymentworkflow.png" alt="customerpaymentworkflow" />
          </div>
          <div className="w-[800px] border-t-2 flex h-[260px]">
          <div className="w-1/4 h-full "></div>
          <div className="pt-[50px]">
            <div className="text-xs pb-3">In the Payments Received module, you can:</div>
            <ul className="flex flex-col gap-1">
              <li className="flex gap-2 text-[16px] items-center">
                {" "}
                {tick}
                Automatically charge your customer's card for recurring invoices
              </li>
              <li className="flex gap-2 text-[16px] items-center">
                {tick}
                Configure payment gateways to receive online payments{" "}
                <span className='text-[#408DFB] cursor-pointer'>Learn  More</span>
              </li>
              <li className="flex gap-2 text-[16px] items-center">
                {tick}
                Record payments manually
              </li>
              <li className="flex gap-2 text-[16px] items-center">
                {tick}
                Send payment receipts to your customers
              </li>
            </ul>
          </div>
          </div>
     </div>
    </>
   
  )
}

export default Paymentreceived





