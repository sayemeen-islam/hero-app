import { TApp } from '@/types/apps.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const InstalledAppCard = ({app}:{app:TApp}) => {
  return (
      <div className="group w-full rounded-2xl border border-[#E5E0F8] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#9F62F2] hover:shadow-xl">
  <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
    
    {/* App Image */}
    <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl">
      <Image
        src={app.image}
        alt={app.title}
        fill
        className="object-cover"
        sizes="96px"
      />
    </div>

    {/* App Info */}
    <div className="min-w-0 flex-1">
      <h2 className="truncate text-xl font-bold text-[#222222]">
        {app.title}
      </h2>

      <p className="mt-1 text-sm text-[#777777]">
        {app.companyName}
      </p>

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

    {/* Stats */}
    <div className="flex gap-6 text-center sm:border-l sm:border-[#E5E0F8] sm:pl-6">
      <div>
        <p className="font-semibold text-[#632EE3]">
          {app.downloads}
        </p>
        <p className="text-xs text-[#888888]">
          Downloads
        </p>
      </div>

      <div>
        <p className="font-semibold text-[#632EE3]">
          {app.size} MB
        </p>
        <p className="text-xs text-[#888888]">
          Size
        </p>
      </div>
    </div>

    {/* Button */}
    <Link
      href={`/apps/${app.id}`}
      className="rounded-xl bg-[#632EE3] px-6 py-3 text-center font-semibold text-white transition-all duration-300 hover:bg-[#9F62F2] hover:shadow-lg"
    >
      View Details
    </Link>

  </div>
</div>
  );
};

export default InstalledAppCard;