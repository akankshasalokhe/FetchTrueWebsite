"use client";

import Image from "next/image";
import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-[calc(100vh-100px)] flex items-center justify-center">
      <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 px-6">

        {/* LEFT */}
        <div className="max-w-[420px] mx-auto flex flex-col justify-center">
          <Image src="/image/logo.png" alt="logo" width={80} height={50} />

          <h1 className="text-[26px] font-semibold mt-6">Reset Password</h1>
          <p className="text-sm text-[#6B6969] mt-2 mb-6">
            Enter your registered number to reset your password
          </p>

          <input
            type="tel"
            placeholder="+91"
            className="h-[44px] px-4 border rounded-md mb-6"
          />

          <Link
            href="/ForgotPassword/VerifyOTP"
            className="h-[44px] bg-[#2164F4] text-white rounded-full flex items-center justify-center"
          >
            Send OTP
          </Link>

          <p className="text-xs text-center text-[#9E9E9E] mt-10">
            © 2026 Fetch True. All Rights Reserved.
          </p>
        </div>

        {/* RIGHT */}
        <div className="hidden lg:block">
            <img src="/image/resendOTP.png" width={550} height={450} alt="OTP Illustration" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}
