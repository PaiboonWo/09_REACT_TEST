import React, { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Login/Login";
import TEST_IP from './TEST_IP_ADDRESS/Show_IP_address';

// process.env.NODE_ENV = 'production';


const App = () => {
  
  return (
    <StrictMode>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/TEST_IP" element={<TEST_IP />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
};
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);

export default App;
