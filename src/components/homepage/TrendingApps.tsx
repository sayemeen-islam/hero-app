import { TApp } from '@/types/apps.type';
import React from 'react';
import AppCard from '../shared/AppCard';
import { getAllApps } from '@/lib/apps';



const TrendingApps = async() => {
  const data=await getAllApps()
  
  
  return (
<div className='my-[80px] container mx-auto'>
      <div className='max-w-4xl mx-auto text-center space-y-4'>
      <h2 className='text-3xl font-semibold'>Trending Apps</h2>
      <p>Explore All Trending Apps on the Market developed by us</p>
    </div>


    {/* data display via card */}
<div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
      {
      data.slice(0,8).map((app:TApp)=>{
        return <AppCard key={app.id} app={app}></AppCard>
      })
    }
</div>
</div>
  );
};

export default TrendingApps;