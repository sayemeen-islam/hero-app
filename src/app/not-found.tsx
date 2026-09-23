import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <main className="min-h-screen bg-[#f8f8fa] flex items-center justify-center px-6">
      {" "}
      <div className="w-full max-w-xl text-center">
        {" "}
        {/* Decorative Icon */}{" "}
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-[#632EE3]/10">
          {" "}
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#632EE3] via-[#9F62F2] to-[#47BCFF] rotate-12" />{" "}
        </div>{" "}
        {/* 404 */}{" "}
        <h1 className="text-[100px] md:text-[140px] leading-none font-black tracking-tighter bg-gradient-to-r from-[#632EE3] via-[#9F62F2] to-[#47BCFF] bg-clip-text text-transparent">
          {" "}
          404{" "}
        </h1>{" "}
        {/* Heading */}{" "}
        <h2 className="mt-6 text-3xl md:text-4xl font-bold text-[#1f1f23]">
          {" "}
          Page not found{" "}
        </h2>{" "}
        {/* Description */}{" "}
        <p className="mx-auto mt-4 max-w-md text-base md:text-lg leading-relaxed text-[#777]">
          {" "}
          Oops! The page you&apos;re looking for doesn&apos;t exist or may have
          been moved.{" "}
        </p>{" "}
        {/* Buttons */}{" "}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          {" "}
          <Link
            href="/"
            className="rounded-xl px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            style={{ background: "linear-gradient(135deg, #632EE3, #9F62F2)" }}
          >
            {" "}
            Back to Home{" "}
          </Link>{" "}

        </div>{" "}
        {/* Accent Line */}{" "}
        <div className="mx-auto mt-12 flex w-32 items-center gap-2">
          {" "}
          <span className="h-1 flex-1 rounded-full bg-[#632EE3]" />{" "}
          <span className="h-1 w-4 rounded-full bg-[#47BCFF]" />{" "}
          <span className="h-1 w-4 rounded-full bg-[#FB434C]" />{" "}
          <span className="h-1 flex-1 rounded-full bg-[#9F62F2]" />{" "}
        </div>{" "}
        <p className="mt-5 text-sm text-[#D2D2D2]">
          {" "}
          Something went wrong? Let&apos;s get you back on track.{" "}
        </p>{" "}
      </div>{" "}
    </main>
  );
};

export default NotFoundPage;
