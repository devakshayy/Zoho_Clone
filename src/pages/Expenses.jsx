import videoTumbnail from '/video-thumbnail.png'
import { SiTicktick } from "react-icons/si";

const Expenses = () => {
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
                       How to record and manage expenses
                   </div>
               </div>
           </div>
           <div>Time To Manage Your Expenses!</div>
           <div className='text-[14px]' >Create and manage expenses that are part of your organization’s operating costs.</div>
           <button className="px-4 py-2 text-[16px] rounded-md text-white uppercase bg-[#408DFB]">
               Record expense
            </button>
            <div className='text-[#408DFB] cursor-pointer text-[14px]'>Import Expenses</div>
           {/* Zoho Video Play button end */}
       </div>
  
       {/* The Quotes workflw start */}
       <div className='flex flex-col gap-8 items-center bg-[#f9f9fb] pt-[30px] pb-[45px]'>
            <div className='text-xs'>Life cycle of an Expense</div>
            <div> 
              <img src="/expenseworkflow.png" alt="expenseworkflow" />
            </div>
            <div className="w-[800px] border-t-2 flex h-[260px]">
            <div className="w-1/4 h-full "></div>
            <div className="pt-[50px]">
              <div className="text-xs pb-3">In the Expenses module, you can:</div>
              <ul className="flex flex-col gap-1">
                <li className="flex gap-2 text-[16px] items-center">
                  {" "}
                  {tick}
                  Record a single expense or record expenses in bulk.
                </li>
                <li className="flex gap-2 text-[16px] items-center">
                  {tick}
                  Set mileage rates and record expenses based on the distance travelled.
                </li>
                <li className="flex gap-2 text-[16px] items-center">
                  {tick}
                  Convert an expense into an invoice to get it reimbursed.
                </li>
              </ul>
            </div>
            </div>
       </div>
       {/* The Quotes workflw start */}
      </>
     
    )
}

export default Expenses







