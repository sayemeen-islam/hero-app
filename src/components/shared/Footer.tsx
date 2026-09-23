import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="mt-16 bg-[#001931] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="-mt-3">
            <Link href="/" className=" text-md flex items-center font-bold">
              <Image src={logo} alt="Hero App logo" width={40}></Image>
              <span
                className="font-white
              "
              >
                Hero App
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-white/75">
              Discover amazing apps, explore their features, and find the
              perfect applications for your everyday needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold">Quick Links</h3>

            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li>
                <Link href="/" className="link-hover">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/apps" className="link-hover">
                  Apps
                </Link>
              </li>
              <li>
                <Link href="/installation" className="link-hover">
                  Installation
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold">Support</h3>

            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li>
                <a href="#" className="transition hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Download */}
          <div>
            <h3 className="font-semibold">Get the App</h3>

            <p className="mt-4 text-sm leading-6 text-white/75">
              Find and explore your favorite applications in one place.
            </p>

            <button className="mt-4 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-[#632EE3] transition hover:bg-[#D2D2D2]">
              Explore Apps
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-white/20 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-sm text-white/65 md:flex-row">
            <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            <div className="flex gap-5">
              <a href="#" className="transition hover:text-white">
                Facebook
              </a>
              <a href="#" className="transition hover:text-white">
                Instagram
              </a>
              <a href="#" className="transition hover:text-white">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
