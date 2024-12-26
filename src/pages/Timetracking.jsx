import videoTumbnail from '/video-thumbnail.png'
import { SiTicktick } from "react-icons/si";

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
       <div className='flex flex-col gap-8 items-center bg-[#f9f9fb] pt-[30px] pb-[45px]'>
            <div className='text-xs'>Life cycle of a Project</div>
            <div> 
              <img src="/projectsworkflow.png" alt="projectsworkflow" />
            </div>
            <div className='flex flex-col items-center gap-4 border-t-[1px]'>
            <div className='text-xs'>Do more than just Project Time Tracking</div>
                  <div className='flex'>
                        {/* project ul div Start */}
                 <div>
                  <ul className="flex flex-col gap-1">
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
                      <span className='text-[#408DFB]'>Learn More</span>
                    </li>
                  </ul>
                 </div>
                 {/* project ul div End */}
                 {/* Track Time and Projects Effortlessly div Start */}
                  <div>
                    <div className="text-xs pb-3">In the Expenses module, you can:</div>
                    <div className="text-[14px]" >
                    Manage your invoices, quotes, track payments
                    and upload expense receipts right from your
                    phone. Or maybe your tablet!
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


