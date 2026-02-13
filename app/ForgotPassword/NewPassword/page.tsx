"use client";

import Image from "next/image";
import Link from "next/link";
import { Eye } from "lucide-react";

export default function NewPasswordPage() {
  return (
    <div className="min-h-[calc(100vh-100px)] flex items-center justify-center">
      <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 px-6">

        <div className="max-w-[420px] mx-auto flex flex-col justify-center">
          <Image src="/image/logo.png" alt="logo" width={80} height={50} />

          <h1 className="text-[26px] font-semibold mt-6">
            You are Verified, Create New Password
          </h1>

          <div className="relative mt-6 mb-4">
            <input
              type="password"
              placeholder="New Password"
              className="h-[44px] w-full px-4 pr-10 border rounded-md"
            />
            <Eye size={18} className="absolute right-3 top-1/2 -translate-y-1/2" />
          </div>

          <div className="relative mb-6">
            <input
              type="password"
              placeholder="Confirm Password"
              className="h-[44px] w-full px-4 pr-10 border rounded-md"
            />
            <Eye size={18} className="absolute right-3 top-1/2 -translate-y-1/2" />
          </div>

          <Link
            href="/ForgotPassword/Success"
            className="h-[44px] bg-[#2164F4] text-white rounded-full flex items-center justify-center"
          >
            Reset Password
          </Link>
        </div>

        <div className="hidden lg:block">
            <img src="/image/success.png" width={550} height={450} alt="OTP Illustration" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}
