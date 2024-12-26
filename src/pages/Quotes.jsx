import React from 'react'
import videoTumbnail from '/video-thumbnail.png'

const Quotes = () => {
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

              {/* second div */}
     <div>
        {/* second div */}
     </div>
    </>
   
  )
}

export default Quotes

