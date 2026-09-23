"use client"
import InstalledAppCard from '@/components/shared/InstalledAppCard';
import { AppContext } from '@/context/AppContext';
import { TApp } from '@/types/apps.type';
import Link from 'next/link';
import React, { useContext } from 'react';

const InstallationPage = () => {
  const {installedApps,setInstalledApps}=useContext(AppContext)

  
  return (


  <div className='mb-[80px] mt-10 container mx-auto  '>
      <div className='max-w-4xl mx-auto text-center space-y-4'>
      <h2 className='text-4xl font-bold'>Your Installed Apps</h2>
      <p>Explore All Trending Apps on the Market developed by us</p>
    </div>


    {/* data display via card */}
{
  installedApps.length>0 ? (
    <div className='mt-10 grid grid-cols-1 gap-6  '>
      {
      installedApps.map((app:TApp)=>{
        return <InstalledAppCard key={app.id} app={app}></InstalledAppCard>
      })
    }
</div>
  ):(<p className='p-30 text-2xl text-center  bg-slate-100 mt-4 rounded-4xl'>No installed apps found</p>)
}






</div>
  );
};

export default InstallationPage;