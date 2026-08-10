import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router";
import { useTheme } from "../context/ThemeContext";

const MainContent = () => {
   const {theme} = useTheme()
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-1 flex-col ml-64">
        <Header />
        <main className={`flex-1 flex  justify-center  overflow-auto mt-16 pt-10 ${theme==='dark'?'bg-black text-white':'bg-white text-black'}`}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainContent;
