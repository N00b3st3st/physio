import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuDashboard from "../../component/Menu/Menu";
import AuthProvider from "../../component/Authentication/AuthProvider";
import Login from "../Login/Login";


import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/dist/carousel';
import "bootstrap-icons/font/bootstrap-icons.css";

import { toast, ToastContainer } from "react-toastify";



const App = () => {

  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path={"/"} element={<MenuDashboard option={1}><Login /></MenuDashboard>} />
            {/* Other routes */}
          </Routes>
        </AuthProvider>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;