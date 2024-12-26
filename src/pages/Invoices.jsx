import videoTumbnail from "/video-thumbnail.png";
import { SiTicktick } from "react-icons/si";
import { IoColorPaletteOutline } from "react-icons/io5";
import { MdPayment } from "react-icons/md";
import { PiUserBold } from "react-icons/pi";

const Invoices = () => {
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
      <div className="py-[90px] flex flex-col border-b-[1px] gap-4 items-center  px-40">
        {/* Zoho Video Play button start */}
        <div
          className="pl-[94px] shadow-2xl hover:ring-1 cursor-pointer transition ease-out duration-300 flex flex-col justify-center"
          style={sectionStyle}
        >
          <div className="flex items-center">
            <img
              className="w-10 h-10"
              src="/playbuttonzoho.png"
              alt="playbuttonzoho"
            />
            <div className="border-l-4 text-[15px] font-medium pl-2 border-[#53b05a]">
              <div className="flex items-center gap-1">
                <img className="w-10 h-4" src="/zohologo.png" alt="zohologo" />
                <span className="block">Invoice</span>
              </div>
              Learn how to create your first invoice
            </div>
          </div>
        </div>
        <div>It's time to get paid!</div>
        <div className="text-[14px]">
          We don't want to boast too much, but sending amazing invoices and
          getting paid is easier than ever. Go ahead! Try it yourself.
        </div>
        <button className="px-4 py-2 text-[16px] rounded-md text-white uppercase bg-[#408DFB]">
          New invoice
        </button>
        <div className="text-[#408DFB] cursor-pointer text-[14px]">
          Import Invoices
        </div>
        {/* Zoho Video Play button end */}
      </div>

      {/* Life cycle of Invoice start */}
      <div className="flex flex-col gap-8 items-center bg-[#f9f9fb] pt-[30px] pb-20">
        <div className='text-xs' >Life cycle of an Invoice</div>
        <div>
          <img src="/invoiceworkflow.png" alt="invoiceworkflow" />
        </div>
        <div className="grid grid-cols-3 gap-10 px-36">
          {/* Brand your invoice Start */}
          <div className="flex flex-col gap-1 items-center">
            <IoColorPaletteOutline />
            <div className="text-xs font-medium">Brand Your Invoices</div>
            <div className="text-[14px] text-center">
              Choose your favourite theme from our gallery of templates and
              personalize your invoice to reflect your brand.
            </div>
            <span className="text-blue-500 text-[15px] cursor-pointer">
              Learn More
            </span>
          </div>

          {/* Brand your invoice End */}

          {/* Collect Online Payments Start */}
          <div className="flex flex-col gap-1 items-center">
            <MdPayment />
            <div className="text-xs font-medium">Collect Online Payments</div>
            <div className="text-[14px] text-center">
                   Configure a payment gateway and collect 
                   online payments from your customer with ease.
            </div>
            <span className="text-blue-500 text-[15px] cursor-pointer">
              Learn More
            </span>
          </div>

          {/* Collect Online Payments End */}

          {/* Customer Portal Start */}

          <div className="flex flex-col gap-1 items-center">
            <PiUserBold />
            <div className="text-xs font-medium">Customer Portal</div>
            <div className="text-[14px] text-center">
              Enable Customer Portal for your customers and allow
              them to accept quotes, keep track of invoices and make payments.
            </div>
            <span className="text-blue-500 text-[15px] cursor-pointer">
              Learn More
            </span>
          </div>
          {/* Customer Portalend End */}
        </div>
      </div>

      {/* Life cycle of Invoice start */}
    </>
  );
};

export default Invoices;
