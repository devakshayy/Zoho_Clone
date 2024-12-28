import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Quotes from "./pages/Quotes";
import DeliveryChellans from "./pages/DeliveryChellans";
import Invoices from "./pages/Invoices";
import Paymentreceived from "./pages/Paymentreceived";
import Expenses from "./pages/Expenses";
import Timetracking from "./pages/Timetracking";
import Reports from "./pages/Reports";
import Advancedbilling from "./pages/Advancedbilling";
import ItemList from "./pages/ItemList";
import ConfigureFeatureList from "./pages/ConfigureFeatureList";
import Customers from "./pages/Customers";
import Header from "./components/Header";
import ListFilter from "./components/ListFilter";
import ItemAddForm from "./pages/ItemAddForm";
import AddCus from "./pages/AddCus";
import ItemView from "./pages/ItemView";

// important at the bottom don't forget to implemnt in the last

function AppContent() {
  const navigate = useNavigate();
  const [sidesShow, setSideShow] = useState(false);
  const [rowToEdit, setRowToEdit] = useState(null);
  const [rows, setRows] = useState([{
    code: "##11",
    barcode: "123422123",
    name: "Lux",
    category: "Beauty",
    brand: "LUX",
    purchaserate: "35",
    openingqty: "1000",
    salerate:"40",
}]);
  
  const handleAddNewRow = (newRow) => {
    setRows([...rows, newRow])
  }

  const handleDeleteRow = (targetIdx) => {
     setRows(rows.filter((__,idx) => idx !== targetIdx))
  }
  
  const handleEditRow = (idx) => {
      setRowToEdit(idx);
      navigate("/itemview")
  }

  const location = useLocation();
  
  const excludedRoutes = [
         "/",
         "/home",
         "/timetracking",
         "/reports",
         "/advancedbilling",
         "/configurefeaturelist"
  ];

  const shouldShowListFilter = !excludedRoutes.includes(location.pathname);

  return (
      <div className="flex h-screen bg-gray-200 text-gray-800 overflow-hidden">

        {/* Sidebar */}
        <div 
          className={`${
            !sidesShow ? "w-[200px]" : "w-[70px]"
          } fixed min-h-screen overflow-auto bg-gray-800 text-white transition-width duration-300`}
        >
          <Sidebar sidesShow={sidesShow} setSideShow={setSideShow} />
        </div>

        {/* Right-side content */}

        <div 
           className={`flex flex-col ${
            !sidesShow ? "ml-[200px]" : "ml-[70px]"
          } w-full h-screen transition-margin duration-300`}
        >
          {/* Header */}
          <div>
            <Header />
          </div>
          {shouldShowListFilter &&   <ListFilter location={location} /> }
         

          <div className="flex-1 overflow-auto bg-white">
            <Routes>
              {/* Dashboard */}
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />

              {/* Pages */}
              <Route path="/customers" element={<Customers />} />
              <Route path="/items" element={<ItemList rows={rows} deleteRow={handleDeleteRow} handleEditRow={handleEditRow} />} />
              <Route path="/newitem" element={ <AddCus /> }/>
              <Route path="/new" element={ <ItemAddForm handleAddNewRow={handleAddNewRow} /> }/>
              <Route path="/itemview" element={ <ItemView rows={rows} /> } />
              <Route path="/quotes" element={<Quotes />} />
              <Route path="/deliverychellans" element={<DeliveryChellans />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/paymentsreceived" element={<Paymentreceived />} />
              <Route path="/expenses" element={<Expenses />} />
              <Route path="/timetracking" element={<Timetracking />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/advancedbilling" element={<Advancedbilling />} />
              <Route path="/configurefeaturelist" element={<ConfigureFeatureList />} />
            </Routes>
          </div>
        </div>
      </div>
  );
}

function App () {
  return (
     <BrowserRouter>
        <AppContent/>
     </BrowserRouter>
  )
}
export default App;


// don't forget to add  overflow-auto in the sidebar component
// and adjust the padding and the scroll styiling !!!!!!!!!!! 