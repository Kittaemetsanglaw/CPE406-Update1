import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/layout/Header";
import TemperatureCard from "./components/layout/TemperatureCard";
import MainPage from "./components/page/MainPage";
import RegisterPage from "./components/page/RegisterPage";
import "./App.css";
import background from "./assets/photo/background.png";

const App = () => {
  const location = useLocation(); // ใช้ useLocation เพื่อตรวจสอบเส้นทาง

  return (
    <div
      className="bg-blue-50 min-h-screen flex flex-col"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* แสดง Header เฉพาะหน้า / และหน้าที่ต้องการ */}
      {location.pathname === "/" && <Header />}

      {/* กำหนด Routes */}
      <Routes>
        <Route path="/" element={<TemperatureCard temperature={36} />} />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
      </Routes>
    </div>
  );
};

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;
