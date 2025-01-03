import React, { useRef, useState } from "react";
import { RiAddLine } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";


const ItemAdd = () => {

    const [maintainStockChek, setMaintainStockChek] = useState(false);
    const [fixedAssetChek, setfixedAssetChek] = useState(false);
    const [isFocus, setIsFocus] = useState(false);
    const [groupInputValue ,setGroupInputValue] = useState('');
    const [isHoverd, setIsHovered] = useState(false);
    const inputRef = useRef("");
    
    console.log(groupInputValue)
    const groupSuggestions = [
        "Fresh Meat",
        "Consumables",
        "Products",
        "Raw Material",
        "Service",
    ]

    const maintainStockChekHandle = () => {
        setMaintainStockChek(!maintainStockChek);
    }

    const fixedAssetChekHandle = () => {    
         setfixedAssetChek(!fixedAssetChek);
    }

    console.log(maintainStockChek);
    console.log(fixedAssetChek);
  return (
    <div className="bg-[#f4f5f6] flex justify-center pt-2 pb-20 px-auto">
       <form name="form" id="form" >
       <div className="bg-white  w-[500px] rounded-md shadow-lg">
        <div className="border-b-[1px] px-3 py-2">
            <a className="itemadd-ul-text-decoration" >
              New Item
            </a>
        </div>
         
         <div className="p-3 flex flex-col gap-2">
            {/* Create Varient Checkbox */}
            <div className="flex items-center">
                <input
                  type="checkbox"
                  id="taxInclusive"
                  name="taxInclusive"
                  className="h-3 w-3 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <label
                  htmlFor="taxInclusive"
                  className="ml-2 block text-[16px] font-medium text-gray-700"
                >
                  Create varient
                </label>
              </div>
             {/* item code input box */}
             <div >
                <label
                  id="itemCode"
                  htmlFor="itemCode"
                  className="block text-[15px] font-medium text-gray-700"
                >
                  Item Code <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    id="itemCode"
                    name="itemCode"
                    className="mt-1 block w-full p-2 text-xs bg-[#f4f5f6] rounded-md shadow-sm focus:ring-none focus:outline-gray-300"
                />

              </div>        
              {/* item Name input box */}
              <div >
                <label
                  id="itemName"
                  htmlFor="itemName"
                  className="block text-[15px] font-medium text-gray-700"
                >
                  Item Name 
                </label>
                <input
                    type="text"
                    id="itemName"
                    name="itemName"
                    className="mt-1 block w-full p-2 text-xs bg-[#f4f5f6] rounded-md shadow-sm focus:ring-none focus:outline-gray-300"
                />
              </div>
              {/* item Group input box */}
              <div className="relative" >
                <label
                  id="itemGroup"
                  htmlFor="itemGroup"
                  className="block text-[15px] font-medium text-gray-700"
                >
                  Item Group <span className="text-red-500">*</span>
                </label>
                <input
                    ref={inputRef}
                    value={groupInputValue}
                    onChange={(e) => setGroupInputValue(e.target.value)}
                    type="text"
                    id="itemGroup"
                    name="itemGode"
                    onFocus={() => setIsFocus(true)}
                    autoComplete="off"
                    onBlur={() => {
                        if(!isHoverd){
                            setIsFocus(false);
                        }
                    }}
                    className="mt-1 block  w-full p-2 text-xs bg-[#f4f5f6] rounded-md shadow-sm focus:ring-none focus:outline-gray-300"
                    
                />
                 {isFocus && (
                  <div 
                   onMouseEnter={() => {setIsHovered(true);}}
                   onMouseLeave={() => {setIsHovered(false);}}
                   className="shadow-lg mt-1 text-[13px] flex flex-col gap-1 p-1 rounded-md w-full absolute bg-white">
                    {groupSuggestions.map((groupSuggestion,index) => {
                           const isMatch = groupSuggestion.toLowerCase().indexOf(groupInputValue.toLowerCase()) > -1
                           return (
                              <div key={index}>
                                  {isMatch && (
                                     <div 
                                       onClick={() => {
                                          setGroupInputValue(groupSuggestion);
                                          inputRef.current.focus();
                                          setIsFocus(() => !isFocus)
                                          
                                       }}
                                       className="p-2  cursor-pointer rounded-md hover:shadow-sm  hover:bg-[#f4f5f6]" >
                                       {groupSuggestion}
                                     </div>
                                  )}
                              </div>
                           )
                    })}
                    <div  className="p-2 font-semibold flex items-center gap-1 text-[#408DFB]  cursor-pointer rounded-md hover:shadow-sm  hover:bg-[#f4f5f6]">
                       <RiAddLine className="text-[18px]"  /> Create a new Item Group
                    </div>
                    <div  className="p-2 font-semibold flex items-center gap-1 text-[#408DFB] cursor-pointer rounded-md hover:shadow-sm  hover:bg-[#f4f5f6]">
                    <BiSearch className="text-[18px]" /> Advanced Search
                    </div>
                   </div>
                 )}
              </div>
              {/*Unit of measue input box */}
              <div >
                <label
                  id="unitMeasure"
                  htmlFor="defaultUnitOfMeasure"
                  className="block text-[15px] font-medium text-gray-700"
                >
                  Default Unit of Measure <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    id="unitMeasure"
                    name="unitMeasure"
                    className="mt-1 block w-full p-2 text-xs bg-[#f4f5f6] rounded-md shadow-sm focus:ring-none focus:outline-gray-300"
                    placeholder="Nos"
                />
              </div>

              {!fixedAssetChek && (
                     <div className="flex items-center">
                     {/* Maintain Stock Checkbox */}
                     <input
                       onClick={maintainStockChekHandle}
                       type="checkbox"
                       id="maintainStock"
                       name="maintianStock"
                       className="h-3 w-3 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                     />
                     <label
                       htmlFor="taxInclusive"
                       className="ml-2 block text-[16px] font-medium text-gray-700"
                     >
                       Maintain Stock
                     </label>
                   </div>
              )}
              
              {maintainStockChek && (
                   <div >
                   {/*Openning stock input box */}
                  <label
                    id="openingStock"
                    htmlFor="openingStock"
                    className="block text-[15px] font-medium text-gray-700"
                  >
                    Opening Stock
                  </label>
                  <input
                      type="text"
                      id="openingStock"
                      name="openingStock"
                      className="mt-1 block w-full p-2 text-xs bg-[#f4f5f6] rounded-md shadow-sm focus:ring-none focus:outline-gray-300"
                      placeholder="0.0000"
                  />
                </div>
              )}
             

              {/* Standard Selling Rate input box */}
              <div >
                <label
                  id="standardSellingRate"
                  htmlFor="standardSellingRate"
                  className="block text-[15px] font-medium text-gray-700"
                >
                  Standard Selling Rate
                </label>
                <input
                    type="text"
                    id="standardSellingRate"
                    name="standardSellingRate"
                    className="mt-1 block w-full p-2 text-xs bg-[#f4f5f6] rounded-md shadow-sm focus:ring-none focus:outline-gray-300"
                />
              </div>
                {/* Is Fixed Checkbox */}

                <div className="flex items-center">
                <input
                  onClick={fixedAssetChekHandle}
                  type="checkbox"
                  id="isFixedAsset"
                  name="isFixedAsset"
                  className="h-3 w-3 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <label
                  htmlFor="taxInclusive"
                  className="ml-2 block text-[16px] font-medium text-gray-700"
                >
                  Is Fixed Asset
                </label>
              </div>
              
              {fixedAssetChek && (
                  <div >
                  {/* Asset Category input box */}
                  <label
                    id="assetCategory"
                    htmlFor="assetCategory"
                    className="block text-[15px] font-medium text-gray-700"
                  >
                    Asset Category <span className="text-red-500">*</span>
                  </label>
                  <input
                      type="text"
                      id="assetCategory"
                      name="assetCategory"
                      className="mt-1 block w-full p-2 text-xs bg-[#f4f5f6] rounded-md shadow-sm focus:ring-none focus:outline-gray-300"
                  />
                </div>
              )}
         </div>
          {/* Edit and Save Button */}
         <div className="border-t-[1px] flex justify-between px-3 py-2">
                 <button 
                     className="bg-[#f4f5f6] rounded-md p-1 text-xs hover:bg-gray-300">
                        Edit Full Form
                 </button>
                 <button type="submit" className="bg-[#408dfb] rounded-md p-1 text-xs text-white">Save</button>
         </div>
      </div>
       </form>
    </div>
  );
};

export default ItemAdd;


