import videoTumbnail from '/video-thumbnail.png'
import { SiTicktick } from "react-icons/si";
import { FaApple } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";
import { FaWindows } from "react-icons/fa";
import { BsSmartwatch } from "react-icons/bs";


const Timetracking = () => {
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
                       How to create a project
                   </div>
               </div>
           </div>
           <div>Create your first project.</div>
           <div className='text-[14px]' >Keep track of time you spend on various projects.</div>
           <button className="px-4 py-2 text-[16px] rounded-md text-white uppercase bg-[#408DFB]">
                create new project
            </button>
           {/* Zoho Video Play button end */}
       </div>
  
       {/* The Quotes workflw start */}
       <div className='flex flex-col  gap-8 items-center bg-[#f9f9fb] pt-[30px] pb-[45px]'>
            <div className='text-xs'>Life cycle of a Project</div>
            <div> 
              <img src="/projectsworkflow.png" alt="projectsworkflow" />
            </div>
            <div className='flex border-t-[1px]  flex-col gap-4 px-20 py-10'>
              <div className='flex justify-center'>
                <div className='text-xs'>Do more than just Project Time Tracking</div>
              </div>
                <div className='flex gap-28'>
                       
 {/* project ul div Start */}
<div className="the-ul-container">
<ul className="flex flex-col p-2 w-[400px] justify-center gap-1">
                    <li className="flex gap-2 text-[16px] items-center">
                      {" "}
                      {tick}
                      Log time spent on projects
                    </li>
                    <li className="flex gap-2 text-[16px] items-center">
                      {tick}
                      Invite staff and assign project tasks
                    </li>
                    <li className="flex gap-2 text-[16px] items-center">
                      {tick}
                      Set budget for projects
                    </li>
                    <li className="flex gap-2 text-[16px] items-center">
                      {tick}
                      Manage projects and associated project tasks{" "}
                    </li>
                    <li className='text-[16px]' ><span className='cursor-pointer text-[#408DFB]'>Learn More</span> </li>
                  </ul>
</div>
  {/* project ul div End */}
  
{/* Track Time and Projects Effortlessly div Start */}
  <div className='flex  p-4   gap-2 flex-col'>
                    <div className="text-[16px]">Track Time and Projects Effortlessly</div>
                    <div className="text-[14px]" >
                    Manage your invoices, quotes, track payments
                    and upload expense receipts right from your
                    phone. Or maybe your tablet!
                    </div>
                    <div className='flex items-center text-lg cursor-pointer text-[#6C718A] gap-4'>
                      <BsSmartwatch />
                      <FaApple />
                      <DiAndroid />
                      <FaWindows />
                    </div>
                    <div className='flex  items-center gap-1 text-[#408dfb] text-[13px] border-t-[1px] py-2'>
                        <img className='w-3 h-3' src="/chromelogo.png" alt="chromelogo" />
                         <span className='cursor-pointer'>Try out our Google Chrome Extension!</span>
                    </div>
                  </div>
{/* Track Time and Projects Effortlessly div End */}
                </div>
            </div>
       </div>
       {/* The Quotes workflw start */}
      </>
     
    )
}

export default Timetracking


