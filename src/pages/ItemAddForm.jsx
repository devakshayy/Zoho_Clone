import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ItemAddForm = ({handleAddNewRow}) => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    code: "",
    barcode: "",
    name: "",
    category: "",
    brand: "",
    purchaserate: "",
    openingqty: "",
    salerate: "",
  });

  const validateForm = () => {
     if(formState.barcode && formState.brand && formState.category &&
        formState.code && formState.name && formState.openingqty &&
        formState.purchaserate && formState.salerate
     ){
        return true
     }else {
        false
     }
      
  }

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const timestamp = new Date();
    const formattedDate = timestamp.toLocaleString("en-IN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    const newFormState = {
      ...formState,
      createdAt: formattedDate,
    };
    handleAddNewRow(newFormState);
    navigate("/items");
  };

  return (
    <div className="bg-[#f4f5f6] flex justify-center pt-2 pb-20 px-auto">
      <form name="form" id="form" onSubmit={handleSubmit}>
        <div className="bg-white rounded-md shadow-lg">
          <div className="border-b-[1px] px-3 py-2">
            <a className="itemadd-ul-text-decoration">New Item</a>
          </div>

          <div className="flex gap-20">
            {/* Left Column */}
            <div className="p-3 w-full flex flex-col gap-2">
              {/* Item Code */}
              <div>
                <label
                  htmlFor="code"
                  className="block text-[15px] font-medium text-gray-700"
                >
                  Item Code <span className="text-red-500">*</span>
                </label>
                <input
                  value={formState.code}
                  onChange={handleChange}
                  type="text"
                  id="code"
                  name="code"
                  autoComplete="off"
                  className="mt-1 block w-full p-2 text-xs bg-[#f4f5f6] rounded-md shadow-sm focus:ring-none focus:outline-gray-300"
                />
              </div>
              {/* Barcode */}
              <div>
                <label
                  htmlFor="barcode"
                  className="block text-[15px] font-medium text-gray-700"
                >
                  Item Barcode <span className="text-red-500">*</span>
                </label>
                <input
                  value={formState.barcode}
                  onChange={handleChange}
                  type="text"
                  id="barcode"
                  name="barcode"
                  autoComplete="off"
                  className="mt-1 block w-full p-2 text-xs bg-[#f4f5f6] rounded-md shadow-sm focus:ring-none focus:outline-gray-300"
                />
              </div>
              {/* Item Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-[15px] font-medium text-gray-700"
                >
                  Item Name
                </label>
                <input
                  value={formState.name}
                  onChange={handleChange}
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="off"
                  className="mt-1 block w-full p-2 text-xs bg-[#f4f5f6] rounded-md shadow-sm focus:ring-none focus:outline-gray-300"
                />
              </div>
              {/* Purchase Rate */}
              <div>
                <label
                  htmlFor="purchaserate"
                  className="block text-[15px] font-medium text-gray-700"
                >
                  Purchase Rate
                </label>
                <input
                  value={formState.purchaserate}
                  onChange={handleChange}
                  type="text"
                  id="purchaserate"
                  name="purchaserate"
                  autoComplete="off"
                  className="mt-1 block w-full p-2 text-xs bg-[#f4f5f6] rounded-md shadow-sm focus:ring-none focus:outline-gray-300"
                  placeholder="0.0000"
                />
              </div>
              {/* Sale Rate */}
              <div>
                <label
                  htmlFor="salerate"
                  className="block text-[15px] font-medium text-gray-700"
                >
                  Sale Rate
                </label>
                <input
                  value={formState.salerate}
                  onChange={handleChange}
                  type="text"
                  id="salerate"
                  name="salerate"
                  autoComplete="off"
                  className="mt-1 block w-full p-2 text-xs bg-[#f4f5f6] rounded-md shadow-sm focus:ring-none focus:outline-gray-300"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="p-3 w-full flex flex-col gap-2">
              {/* Brand */}
              <div>
                <label
                  htmlFor="brand"
                  className="block text-[15px] font-medium text-gray-700"
                >
                  Item Brand
                </label>
                <input
                  value={formState.brand}
                  onChange={handleChange}
                  type="text"
                  id="brand"
                  name="brand"
                  autoComplete="off"
                  className="mt-1 block w-full p-2 text-xs bg-[#f4f5f6] rounded-md shadow-sm focus:ring-none focus:outline-gray-300"
                />
              </div>
              {/* Category */}
              <div>
                <label
                  htmlFor="category"
                  className="block text-[15px] font-medium text-gray-700"
                >
                  Item Category
                </label>
                <input
                  value={formState.category}
                  onChange={handleChange}
                  type="text"
                  id="category"
                  name="category"
                  autoComplete="off"
                  className="mt-1 block w-full p-2 text-xs bg-[#f4f5f6] rounded-md shadow-sm focus:ring-none focus:outline-gray-300"
                />
              </div>
              {/* Opening Qty */}
              <div>
                <label
                  htmlFor="openingqty"
                  className="block text-[15px] font-medium text-gray-700"
                >
                  Opening Qty
                </label>
                <input
                  value={formState.openingqty}
                  onChange={handleChange}
                  type="text"
                  id="openingqty"
                  name="openingqty"
                  autoComplete="off"
                  className="mt-1 block w-full p-2 text-xs bg-[#f4f5f6] rounded-md shadow-sm focus:ring-none focus:outline-gray-300"
                />
              </div>
            </div>
          </div>

          <div className="border-t-[1px] flex justify-between px-3 py-2">
            <button
              type="button"
              className="bg-[#f4f5f6] rounded-md p-1 text-xs hover:bg-gray-300"
            >
              Edit Full Form
            </button>
            <button
              onSubmit={handleSubmit}
              type="submit"
              className="bg-[#408dfb] rounded-md p-1 text-xs text-white"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ItemAddForm;