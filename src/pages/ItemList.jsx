import React from "react";
import { MdOutlineDelete } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";



const ItemList = ({rows,deleteRow,handleEditRow}) => {
  return (
    <>
      <div className="bg-[#f9f9fb] p-2 text-xs flex gap-40 items-center">
        <table className="table-auto w-full border-collapse">
          <thead className="border-b-[1px]">
            <tr className="bg-[#373C54] text-white">
              <th className="p-2 text-left">Code</th>
              <th className="p-2 text-left">Barcode</th>
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Category</th>
              <th className="p-2 text-left">Brand</th>
              <th className="p-2 text-left">Purchase Rate</th>
              <th className="p-2 text-left">Open Qty</th>
              <th className="p-2 text-left">Sale Rate</th>
              <th className="p-2 text-center">Action</th>
            </tr>
          </thead>
          <tbody>

            {rows.map((row,idx) => {
              return <tr key={idx}  className="odd:bg-white even:bg-gray-100">
              <td className="p-2">{row.code}</td>
              <td className="p-2">{row.barcode}</td>
              <td className="p-2">{row.name}</td>
              <td className="p-2">{row.category}</td>
              <td className="p-2">{row.brand}</td>
              <td className="p-2">{row.purchaserate}.00</td>
              <td className="p-2">{row.openingqty}</td>
              <td className="p-2">{row.salerate}</td>
              <td className="p-2 flex justify-evenly">
                < MdOutlineDelete onClick={() => deleteRow(idx)} className="text-sm cursor-pointer" />
                < FaRegEye onClick={() => handleEditRow(idx)} className="text-sm cursor-pointer" />
              </td>
            </tr>
            })}
            {/* <tr className="odd:bg-white even:bg-gray-100">
              <td className="p-2 text-center">
                <input type="checkbox" id="item1" name="item1" />
              </td>
              <td className="p-2">###1</td>
              <td className="p-2">3343</td>
              <td className="p-2">Detol</td>
              <td className="p-2">Antiseptics</td>
              <td className="p-2">DETTOL</td>
              <td className="p-2">40</td>
              <td className="p-2">200</td>
              <td className="p-2">48</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-100">
              <td className="p-2 text-center">
                <input type="checkbox" id="item2" name="item2" />
              </td>
              <td className="p-2">###2</td>
              <td className="p-2">4444</td>
              <td className="p-2">Lux Soap</td>
              <td className="p-2">Bath/Beauty</td>
              <td className="p-2">LUX</td>
              <td className="p-2">20</td>
              <td className="p-2">100</td>
              <td className="p-2">28</td>
            </tr>
            
            </tr> */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ItemList;

{
  /* <div className='flex w-full items-center justify-around'>
           <input type="checkbox" id="item-checkbox" className='cursor-pointer'/>
           <div>Code</div>
           <div>Barcode</div>
           <div>Name</div>
           <div>Category</div>
           <div>Brand</div>
           <div>Purchase Rate</div>
           <div>Open Qty</div>
           <div>Sale Rate</div>
         </div> */
}
