import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Root from "./Root";

function App() {
  return (
    <div className="bg-[#e9eefb] overflow-y-hidden">
      <div className="min-h-screen max-w-7xl mx-auto grid items-center">
        <div className="relative w-full h-[500px] xl:h-3/5  border  bg-white  rounded-xl overflow-y-auto mx-auto p-10">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navigate to="/root" />} />
              <Route path="/:id/*" element={<Root />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
