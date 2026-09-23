import { getAllApps } from "@/lib/apps";
import { TApp, TRating } from "@/types/apps.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type TAppDetailsPage = {
  params: {
    id: string;
  };
};

const AppDetailsPage = async ({ params }: TAppDetailsPage) => {
  const { id } = await params;
  const allApps = await getAllApps();

  const app = allApps.find((app: TApp) => id === String(app.id));

  return (
    <div className="mb-[60px]">
      <main className="min-h-screen bg-[#F8F7FC]">
        {" "}
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          {" "}
          {/* Back Button */}{" "}
          <Link
            href="/apps"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-[#632EE3] transition hover:text-[#9F62F2]"
          >
            {" "}
            ← Back to Apps{" "}
          </Link>{" "}
          {/* Main App Card */}{" "}
          <section className="rounded-3xl border border-[#E5E0F8] bg-white p-6 shadow-sm sm:p-8">
            {" "}
            <div className="flex flex-col gap-8 md:flex-row md:items-center">
              {" "}
              {/* App Image */}{" "}
              <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-3xl border border-[#E5E0F8] shadow-sm">
                {" "}
                <Image
                  src={app.image}
                  alt={app.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="128px"
                />{" "}
              </div>{" "}
              {/* App Information */}{" "}
              <div className="flex-1">
                {" "}
                <p className="mb-2 text-sm font-medium text-[#9F62F2]">
                  {" "}
                  Application{" "}
                </p>{" "}
                <h1 className="text-3xl font-bold text-[#222222] sm:text-4xl">
                  {" "}
                  {app.title}{" "}
                </h1>{" "}
                <p className="mt-2 text-base text-[#777777]">
                  {" "}
                  Developed by{" "}
                  <span className="font-medium text-[#632EE3]">
                    {" "}
                    {app.companyName}{" "}
                  </span>{" "}
                </p>{" "}
                {/* Rating */}{" "}
                <div className="mt-5 flex flex-wrap items-center gap-4">
                  {" "}
                  <div className="flex items-center gap-2">
                    {" "}
                    <span className="text-2xl font-bold text-[#222222]">
                      {" "}
                      {app.ratingAvg}{" "}
                    </span>{" "}
                    <span className="text-xl text-[#FB434C]">★</span>{" "}
                  </div>{" "}
                  <div className="h-5 w-px bg-[#D2D2D2]" />{" "}
                  <span className="text-sm text-[#777777]">
                    {" "}
                    {app.reviews} reviews{" "}
                  </span>{" "}
                  <div className="h-5 w-px bg-[#D2D2D2]" />{" "}
                  <span className="text-sm text-[#777777]">
                    {" "}
                    {app.downloads} downloads{" "}
                  </span>{" "}
                </div>{" "}
                {/* Action */}{" "}
                <div className="mt-6">
                  {" "}
                  <Link
                    href={`/apps/${app.id}/download`}
                    className="inline-block rounded-xl bg-[#632EE3] px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#9F62F2] hover:shadow-lg"
                  >
                    {" "}
                    Install App{" "}
                  </Link>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </section>{" "}
          {/* Stats */}{" "}
          <section className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {" "}
            <div className="rounded-2xl border border-[#E5E0F8] bg-white p-5 text-center shadow-sm">
              {" "}
              <p className="text-2xl font-bold text-[#632EE3]">
                {" "}
                {app.downloads}{" "}
              </p>{" "}
              <p className="mt-1 text-sm text-[#777777]"> Downloads </p>{" "}
            </div>{" "}
            <div className="rounded-2xl border border-[#E5E0F8] bg-white p-5 text-center shadow-sm">
              {" "}
              <p className="text-2xl font-bold text-[#632EE3]">
                {" "}
                {app.size} MB{" "}
              </p>{" "}
              <p className="mt-1 text-sm text-[#777777]"> App Size </p>{" "}
            </div>{" "}
            <div className="rounded-2xl border border-[#E5E0F8] bg-white p-5 text-center shadow-sm">
              {" "}
              <p className="text-2xl font-bold text-[#FB434C]">
                {" "}
                {app.ratingAvg}{" "}
              </p>{" "}
              <p className="mt-1 text-sm text-[#777777]"> Rating </p>{" "}
            </div>{" "}
            <div className="rounded-2xl border border-[#E5E0F8] bg-white p-5 text-center shadow-sm">
              {" "}
              <p className="text-2xl font-bold text-[#47BCFF]">
                {" "}
                {app.reviews}{" "}
              </p>{" "}
              <p className="mt-1 text-sm text-[#777777]"> Reviews </p>{" "}
            </div>{" "}
          </section>{" "}
          {/* About App */}{" "}
          <section className="mt-6 rounded-3xl border border-[#E5E0F8] bg-white p-6 shadow-sm sm:p-8">
            {" "}
            <h2 className="text-2xl font-bold text-[#222222]">
              {" "}
              About this app{" "}
            </h2>{" "}
            <p className="mt-4 max-w-4xl text-sm leading-7 text-[#666666] sm:text-base">
              {" "}
              {app.description}{" "}
            </p>{" "}
          </section>{" "}
          {/* Ratings */}{" "}
          <section className="mt-6 rounded-3xl border border-[#E5E0F8] bg-white p-6 shadow-sm sm:p-8">
            {" "}
            <h2 className="text-2xl font-bold text-[#222222]">
              {" "}
              Ratings & Reviews{" "}
            </h2>{" "}
            <div className="mt-6 grid gap-8 md:grid-cols-[180px_1fr]">
              {" "}
              {/* Average Rating */}{" "}
              <div className="text-center">
                {" "}
                <p className="text-5xl font-bold text-[#222222]">
                  {" "}
                  {app.ratingAvg}{" "}
                </p>{" "}
                <div className="mt-2 text-xl tracking-wide text-[#FB434C]">
                  {" "}
                  ★★★★★{" "}
                </div>{" "}
                <p className="mt-2 text-sm text-[#888888]">
                  {" "}
                  {app.reviews} reviews{" "}
                </p>{" "}
              </div>{" "}
              {/* Rating Bars */}{" "}
              <div className="space-y-3">
                {" "}
                {app.ratings
                  .slice()
                  .reverse()
                  .map((rating: TRating) => {
                    const totalRatings = app.ratings.reduce(
                      (sum: number, item: TRating) => sum + item.count,
                      0,
                    );
                    const percentage = (rating.count / totalRatings) * 100;
                    return (
                      <div
                        key={app.ratings.name}
                        className="flex items-center gap-3"
                      >
                        {" "}
                        <span className="w-12 text-sm text-[#666666]">
                          {" "}
                          {app.ratings.name}{" "}
                        </span>{" "}
                        <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#EAE7F5]">
                          {" "}
                          <div
                            className="h-full rounded-full bg-[#632EE3]"
                            style={{ width: `${percentage}%` }}
                          />{" "}
                        </div>{" "}
                        <span className="w-20 text-right text-xs text-[#888888]">
                          {" "}
                          {rating.count.toLocaleString()}{" "}
                        </span>{" "}
                      </div>
                    );
                  })}
              </div>{" "}
            </div>{" "}
          </section>{" "}
        </div>{" "}
      </main>
    </div>
  );
};

export default AppDetailsPage;
