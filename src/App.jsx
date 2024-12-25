import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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
import Item from "./pages/Item";
import ConfigureFeatureList from "./pages/ConfigureFeatureList";
import Customers from "./pages/Customers";
import Header from "./components/Header";
import ListFilter from "./components/ListFilter";
import ItemAdd from "./pages/ItemAdd";

// important at the bottom don't forget to implemnt in the last

function AppContent() {

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
        <div className="w-[200px]  fixed h-full bg-gray-800 text-white">
          <Sidebar />
        </div>

        {/* Right-side content */}

        <div className="flex flex-col ml-[200px] w-full h-screen">
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
              <Route path="/items" element={<Item />} />
              <Route path="/new" element={ <ItemAdd/> }/>
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