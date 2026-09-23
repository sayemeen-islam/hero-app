"use client"
import { AppContext } from "@/context/AppContext";
import { TApp } from "@/types/apps.type";
import React, { useContext } from "react";

const InstallAppButton = ({app}:{app:TApp}) => {
  const {installedApps,setInstalledApps}=useContext(AppContext)
  const handleInstall=(newApp:TApp)=>{
    
    setInstalledApps([...installedApps,newApp])
    
  }

  
  return (
    <button className="inline-block rounded-xl bg-[#632EE3] px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#9F62F2] hover:shadow-lg" onClick={()=>handleInstall(app)}>
      Install App
    </button>
  );
};

export default InstallAppButton;
