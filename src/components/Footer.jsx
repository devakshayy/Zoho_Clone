import React from "react";

const Footer = () => {
  return (
    <main className="border-t-2 flex border-dotted ">
      <div className="flex w-1/3 flex-col gap-2 items-center text-center bg-[#f9f9f9] text-sm  px-6 py-8 ">
        <div>
          <img
            className="w-[200px] h-[220px]"
            src="billing_footer_banner-dd3dfcd809.png"
            alt="billing_footer_banner-dd3dfcd809"
          />
        </div>
        <div className="text-xs font-semibold">
          Need a solution for{" "}
          <span className="text-[#119f61] ">advanced billing</span>
        </div>
        <div className="text-xs font-semibold" >need?</div>
        <p className="text-[14px] font-extralight">
          check out our end-to-end billing software built for fast growing
          businesses.
          <span className="text-[#4b93fa] cursor-pointer">learn More</span>
        </p>
      </div>

      <div className="w-2/3 px-6 ">
        <div className="flex gap-20 px-2 py-8 text-[13px]">
          <div className="flex gap-2 flex-col ">
            <h1 className="font-semibold text-[15px]">OTHER ZOHO APPS</h1>
            <a href="">Accounting Software</a>
            <a href="">Ecommerce Software</a>
            <a href="">Expense Reporting</a>
            <a href="">Subscription Billing</a>
            <a href="">Inventory Management</a>
            <a href="">CRM & Other Apps</a>
            <a href=""></a>
          </div>
          <div className="flex gap-2 flex-col ">
            <h1 className="font-semibold text-[15px]">Help & Support</h1>
            <a href="">Contact Support</a>
            <a href="">Knowledge Base</a>
            <a href="">Help Documentation</a>
            <a href="">Webinar</a>
          </div>
          <div className="flex gap-2 flex-col">
            <h1 className="font-semibold text-[15px]">Quick Links</h1>
            <a href="">Mobile apps</a>
            <a href="">Add-ons</a>
            <a href="">What's New?</a>
          </div>
        </div>
         <div className="border-t-2 py-4 px-2" >
             <div className="text-[12px]">© 2024, Zoho Corporation Pvt. Ltd. All Rights Reserved.</div>
         </div>
      </div>
      <div className="w-[165px] p-1 flex justify-center items-center
                      font-semibold text-[14px] bg-white rounded-2xl 
                      gap-1 h-[45px] cursor-pointer ring-1  fixed bottom-4 right-6
                      ring-pink-700
                      ">
         <img className="w-[30px] h-[30px]" src="/virtualassist.png" alt="" />
         Need Assistance?
      </div>
    </main>
  );
};

export default Footer;
