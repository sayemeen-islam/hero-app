import Banner from "@/components/homepage/Banner";
import TrendingApps from "@/components/homepage/TrendingApps";
import TrendingSkeleton from "@/components/homepage/TrendingSkeleton";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (

<div>
  <Banner></Banner>
  <Suspense fallback={<TrendingSkeleton />}>
  <TrendingApps />
</Suspense>
</div>

  );
}
