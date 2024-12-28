import React from 'react'

const ItemView = ({rows}) => {
  return (
    <div className="bg-[#f9f9fb]  text-lg justify-center flex flex-col gap-8 px-32 py-10">
        {/* {rows.map((row,idx)=> (
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
        ))} */}
    </div>
  )
}

export default ItemView

