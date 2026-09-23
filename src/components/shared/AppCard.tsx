import { TApp } from '@/types/apps.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type TAppCardProps={
  app:TApp
}

const AppCard = ({app}:TAppCardProps) => {
 
  return (

<div className="group w-full max-w-md rounded-2xl border border-[#E5E0F8] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#9F62F2] hover:shadow-xl">
  {/* Top Section */}
  <div className="flex gap-4">
    {/* App Image */}
    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl">
      <Image
        src={app.image}
        alt={app.title}
        fill
        className="object-cover"
        sizes="80px"
      />
    </div>

    {/* App Info */}
    <div className="min-w-0 flex-1">
      <h2 className="truncate text-xl font-bold text-[#222222]">
        {app.title}
      </h2>

      <p className="mt-1 truncate text-sm text-[#777777]">
        {app.companyName}
      </p>

      {/* Rating */}
      <div className="mt-2 flex items-center gap-2">
        <span className="font-semibold text-[#333333]">
          {app.ratingAvg}
        </span>

        <span className="text-[#FB434C]">★</span>

        <span className="text-sm text-[#999999]">
          ({app.reviews})
        </span>
      </div>
    </div>
  </div>

  {/* Description */}
  <p className="mt-5 line-clamp-2 text-sm leading-6 text-[#666666]">
    {app.description}
  </p>

  {/* App Stats */}
  <div className="mt-5 grid grid-cols-3 divide-x divide-[#E5E0F8] rounded-xl bg-[#F8F6FF] py-3 text-center">
    <div>
      <p className="text-sm font-semibold text-[#222222]">
        {app.downloads}
      </p>
      <p className="text-xs text-[#888888]">
        Downloads
      </p>
    </div>

    <div>
      <p className="text-sm font-semibold text-[#222222]">
        {app.size} MB
      </p>
      <p className="text-xs text-[#888888]">
        Size
      </p>
    </div>

    <div>
      <p className="text-sm font-semibold text-[#222222]">
        {app.ratingAvg} ★
      </p>
      <p className="text-xs text-[#888888]">
        Rating
      </p>
    </div>
  </div>

  {/* Button */}
  <Link
    href={`/apps/${app.id}`}
    className="mt-5 block w-full rounded-xl bg-[#632EE3] py-3 text-center font-semibold text-white transition-all duration-300 hover:bg-[#9F62F2] hover:shadow-lg"
  >
    View Details
  </Link>
</div>

  );
};

export default AppCard;