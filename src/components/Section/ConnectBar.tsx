"use client";

import { Phone, Mail, Share2 } from "lucide-react";
import Link from "next/link";

interface ConnectBarProps {
  title: string;
  phoneLink?: string;
  emailLink?: string;
  checkoutLink: string;
  shareLink: string;
}

export default function ConnectBar({
  title,
  phoneLink,
  emailLink,
  checkoutLink,
  shareLink,
}: ConnectBarProps) {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-6 md:py-10">

      <div className="bg-white rounded-[6px] shadow-sm px-4 sm:px-6 py-4
                      flex flex-col sm:flex-row
                      sm:items-center sm:justify-between
                      gap-4">

        {/* Left Section */}
        <div>
          <p className="text-[14px] text-[#6B7280]">Connect With</p>
          <h3 className="text-[18px] font-medium text-[#4B2E1E]">
            {title}
          </h3>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3 sm:gap-4 flex-wrap">

          {/* Phone */}
          {phoneLink && (
            <Link href={phoneLink} className="text-green-500">
              <Phone size={20} />
            </Link>
          )}

          {/* Email */}
          {emailLink && (
            <Link href={emailLink} className="text-blue-500">
              <Mail size={20} />
            </Link>
          )}

          {/* Checkout */}
          <Link
            href={checkoutLink}
            className="bg-green-500 hover:bg-green-600 text-white
                       px-4 sm:px-5 py-2 rounded
                       flex items-center gap-2 text-[14px]"
          >
            Check out
          </Link>

          {/* Share */}
          <Link
            href={shareLink}
            className="bg-blue-600 hover:bg-blue-700 text-white
                       px-4 sm:px-5 py-2 rounded
                       flex items-center gap-2 text-[14px]"
          >
            <Share2 size={16} />
            Share
          </Link>

        </div>
      </div>
    </div>
  );
}
