import AppCard from '@/components/shared/AppCard';
import { getAllApps } from '@/lib/apps';
import { TApp } from '@/types/apps.type';
import React from 'react';

const AppsPage = async() => {
const data=await getAllApps()
  
  
  return (
<div className='mb-[80px] mt-10 container mx-auto'>
      <div className='max-w-4xl mx-auto text-center space-y-4'>
      <h2 className='text-4xl font-bold'>Our All Applications</h2>
      <p>Explore All Apps on the Market developed by us. We code for Millions</p>
    </div>


    {/* data display via card */}
<div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
      {
      data.map((app:TApp)=>{
        return <AppCard key={app.id} app={app}></AppCard>
      })
    }
</div>
</div>
  );
};

export default AppsPage;