import React, { useState } from "react";

const ItemView = ({ itemPreview }) => {
  const [activeTab, setActiveTab] = useState("Overview");
  const tabs = ["Overview", "Sales Information", "History"];
  console.log(activeTab);
  const renderContent = () => {
    switch (activeTab) {
      case "Overview":
        return (
          <>
            {itemPreview.map((item, idx) => (
              <div key={idx} className="flex flex-col">
                <div>
                  <div className="w-2/4 flex justify-between">
                    {" "}
                    {/* first div */}
                    <div className=" text-[#7c8291] text-xs w-1/4 flex flex-col gap-4">
                      <div>Item Code</div>
                      <div>Item Barcode</div>
                      <div>Item Name</div>
                      <div>Item Category</div>
                      <div>Item Brand</div>
                    </div>
                    <div className="text-xs w-2/4 flex flex-col gap-4">
                      <div>{item.code}</div>
                      <div>{item.barcode}</div>
                      <div>{item.name}</div>
                      <div>{item.category}</div>
                      <div>{item.brand}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        );
      case "Sales Information":
        return (
          <>
            {itemPreview.map((item, idx) => (
              <div key={idx} className="flex flex-col">
                <div>
                  <div className="w-2/4 flex justify-between">
                    {" "}
                    {/* first div */}
                    <div className=" text-[#7c8291] text-xs w-1/4 flex flex-col gap-4">
                      <div>Purchase Rate</div>
                      <div>Open Quantity</div>
                      <div>Sale Rate</div>
                    </div>
                    <div className="text-xs w-2/4 flex flex-col gap-4">
                      <div>{item.purchaserate}.00</div>
                      <div>{item.openingqty} Pkt</div>
                      <div>{item.salerate}.00</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        );
      case "History":
        return (
          <>
             <div className="w-2/4 flex justify-between">
                    {/* first div */}
                    <div className=" text-[#7c8291] text-xs w-1/4 flex flex-col gap-4">
                      <div>Created Date :</div>
                    </div>
                    <div className="text-xs w-2/4 flex flex-col gap-4">
                      <div>{itemPreview[0].createdAt }</div>
                    </div>
                  </div>
          </>
        )
    }
  };
  return (
      <div className="h-full bg-[#f9f9fb]">
            <div className="bg-[#f9f9fb]  text-lg justify-center flex flex-col pb-10 px-4 gap-8">
      <div className=" flex flex-col">
        <div className="font-meadium pb-2">{itemPreview[0].name}</div>

        <div className="flex border-b-gray-800 gap-2">
          {tabs.map((tab) => (
            <button
              onClick={() => setActiveTab(tab)}
              key={tab}
              className={`px-4 py-2 text-sm font-medium ${
               activeTab === tab
                 ? "border-b-2 border-blue-500 "
                 : "text-gray-500 hover:text-blue-500"
             }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="py-4">{renderContent()}</div>
      </div>
    </div>
      </div>
  );
};

export default ItemView;

// {itemPreview.map((item,idx) => (
//    <div key={idx} className='flex flex-col'>
//    <div className='py-1 font-medium w-2/4'>{item.name}</div>
//    <div>
//    <div className='w-2/4 flex justify-between' > {/* first div */}
//         <div className=' text-[#7c8291] text-xs w-1/4 flex flex-col gap-4'>
//            <div>Item Code</div>
//            <div>Item Barcode</div>
//            <div>Item Name</div>
//            <div>Item Category</div>
//            <div>Item Brand</div>
//         </div>
//         <div className='text-xs w-2/4 flex flex-col gap-4'>
//            <div>{item.code}</div>
//            <div>{item.barcode}</div>
//            <div>{item.name}</div>
//            <div>{item.category}</div>
//            <div>{item.brand}</div>
//         </div>
//     </div>
//    <div className='mt-2'>{/* Second div */}
//      <div className='text-sm'>Sales Information</div>
//      <div className='w-2/4 flex justify-between' > {/* first div */}
//         <div className='text-[#7c8291] text-xs w-1/4 flex flex-col mt-2 gap-4'>
//            <div>Purchase Rate</div>
//            <div>Open Quantity</div>
//            <div>Sale Rate</div>
//         </div>
//         <div className='text-xs w-2/4 flex flex-col gap-4'>
//            <div>{item.purchaserate}.00</div>
//            <div>{item.openingqty} Pkt</div>
//            <div>{item.salerate}.00</div>
//         </div>
//     </div>
//    </div>
// </div>
// </div>
// ))}

{
  /* {rows.map((row,idx)=> (
            <div key={idx} className='flex flex-col font-semibold justify-between rounded-xl shadow-xl bg-[#ededf7]'>
               <div className='py-2 font-bold border-b-2 text-center'>Item :{" "}{idx+1}</div>
             <div className='flex'>
             <div className=' flex flex-col gap-6 py-8 px-8'>
                <div>Item Code : <span className='text-[#408dfb] font-normal'>{row.code}</span></div>
                 <div>Item Barcode : <span  className='text-[#408dfb] font-normal'>{row.barcode}</span></div>
                 <div>Item Name : <span  className=' text-[#408dfb] font-normal'>{row.name}</span></div>
                 <div>Purchase Rate : <span  className='text-[#408dfb] font-normal'>{row.purchaserate}</span></div>
                 <div>Sale Rate : <span  className='text-[#408dfb] font-normal'>{row.salerate}</span></div>
            </div>
            <div className=' flex flex-col gap-6 py-8 px-8'>
                <div>Item Brand : <span  className='text-[#408dfb] font-normal'>{row.brand}</span></div>
                 <div>Item Category : <span  className='text-[#408dfb] font-normal'>{row.category}</span></div>
                 <div>Opening Qty : <span  className=' text-[#408dfb] font-normal'>{row.openingqty}</span></div>
            </div>
            </div>
             </div>
        ))} */
}
