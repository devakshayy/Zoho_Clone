import React from 'react'
import videoTumbnail from '/video-thumbnail.png'
import { SiTicktick } from "react-icons/si";


const Quotes = () => {

  const tick = (
      <>
        <SiTicktick className="text-[14px] text-[#408DFB]" />
      </>
    );
    
  let sectionStyle = {
      width: "400px",
      height: "200px",
      margin: "auto",
      backgroundRepeat: "no-repeat",
      backgroundImage: `url(${videoTumbnail})`,
      backgroundPosition: "center",
    };
  return (
    <>
     <div className='py-[90px] flex flex-col border-b-[1px] gap-4 items-center  px-40'>
         {/* Zoho Video Play button start */}
         <div className='pl-[94px] shadow-2xl hover:ring-1 cursor-pointer transition ease-out duration-300 flex flex-col justify-center'  style={sectionStyle}>
             <div className='flex items-center'>
                 <img className='w-10 h-10' src="/playbuttonzoho.png" alt="playbuttonzoho" />
                 <div className='border-l-4 text-[15px] font-medium pl-2 border-[#53b05a]'>
                    <div className='flex items-center gap-1'>
                      <img className='w-10 h-4' src="/zohologo.png" alt="zohologo" />
                      <span className='block'>Invoice</span>
                    </div>
                     How to create an quote
                 </div>
             </div>
         </div>
         <div>Seal the deal</div>
         <div className='text-[14px]' >With quotes,give your coustomers an offer they can't refuse!</div>
         <button className="px-4 py-2 text-[16px] rounded-md text-white uppercase bg-[#408DFB]">
            Create new quote
          </button>
          <div className='text-[#408DFB] cursor-pointer text-[14px]'>import Quotes</div>
         {/* Zoho Video Play button end */}
     </div>

     {/* The Quotes workflw start */}
     <div className='flex flex-col gap-8 items-center bg-[#f9f9fb] pt-[20px] pb-[45px]'>
          <div>Life cycle of Quote</div>
          <div> 
            <img src="/quotes-workflow.png" alt="quotesworkflow" />
          </div>
          <div className="w-[800px] border-t-2 flex h-[260px]">
          <div className="w-1/4 h-full "></div>
          <div className="pt-[50px]">
            <div className="text-xs pb-3">In the Quotes module, you can:</div>
            <ul className="flex flex-col gap-1">
              <li className="flex gap-2 text-[16px] items-center">
                {" "}
                {tick}
                Customize your quote {" "}<span className='cursor-pointer text-blue-500'>learn More</span>
              </li>
              <li className="flex gap-2 text-[16px] items-center">
                {tick}
                Convert an accepted quote into an invoice
              </li>
              <li className="flex gap-2 text-[16px] items-center">
                {tick}
               Know when an quote has been viewed,accepted,or declined{" "}
                <span className='cursor-pointer text-blue-500' > Learn More</span>
              </li>
            </ul>
          </div>
          </div>
     </div>
     {/* The Quotes workflw start */}
    </>
   
  )
}

export default Quotes

