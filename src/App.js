import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./uis/SignUp";
import Login from "./uis/Login";
import ProductManagement from "./uis/forAdmin/ProductManagement";
import Homepage from "./uis/Homepage";
import OrderHistoryByDate from "./uis/forAdmin/OrderHistoryByDate";
import EmployeeManagement from "./uis/forAdmin/EmployeeManagement";
import ManagePastOrders from "./uis/forAdmin/ManagePastOrders";
import CashierInputOrders from "./uis/forCashier/CashierInputOrders";
import PrintingShop from "./uis/forTypical Users/PrintingShop";
import TypicalUsersOrdHistory from "./uis/forTypical Users/TypicalUsersOrdHistory";
import PrintersList from "./uis/forAdmin/PrintersList";
import ReportTechnicalIssue from "./uis/technical issue(s)/ReportTechnicalIssue";
import stylesTechnical from "./CssApp.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench } from "@fortawesome/free-solid-svg-icons";
import DebtManagement from "./uis/forAdmin/DebtManagement";
import CheckOut from "./uis/forTypical Users/CheckOut";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const [isAdmin, setIsAdmin] = useState(false);
  const [isCashier, setIsCashier] = useState(false);

  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
    setIsCashier(false);
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <BrowserRouter>
      <Homepage
        isLoggedIn={false}
        isAdmin={false}
        isCashier={false}
        handleLogout={handleLogout}
      />

      <Routes>
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/managePastOrd" element={<ManagePastOrders />} />
        <Route path="/printersList" element={<PrintersList />} />

        <Route path="/printing-shop" element={<PrintingShop />} />
        <Route
          path="/order-history-manage-by-date"
          element={<OrderHistoryByDate />}
        />
        <Route path="/debt-management" element={<DebtManagement />} />
        <Route
          path="/users-order-history"
          element={<TypicalUsersOrdHistory />}
        />
        <Route path="/productsManage" element={<ProductManagement />} />
        <Route path="/employeeManage" element={<EmployeeManagement />} />
        <Route path="/check-out-for-cashier" element={<CashierInputOrders />} />

        <Route path="/checkout" element={<CheckOut />} />
      </Routes>

      <div>
        <div className={stylesTechnical.fixedIcon} onClick={togglePopup}>
          <FontAwesomeIcon icon={faWrench} />
        </div>
        {showPopup && (
          <div className={stylesTechnical.popup}>
            <div className={stylesTechnical.popup__close} onClick={togglePopup}>
              &times;
            </div>

            <ReportTechnicalIssue />
          </div>
        )}
        {showPopup && (
          <div
            className={stylesTechnical.popup__overlay}
            onClick={togglePopup}
          ></div>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
