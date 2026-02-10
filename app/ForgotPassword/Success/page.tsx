"use client";

import Image from "next/image";
import Link from "next/link";

export default function PasswordSuccessPage() {
  return (
    <div className="min-h-[calc(100vh-100px)] flex items-center justify-center">
      <div className="max-w-[500px] text-center px-6">
        {/* <Image
          src="/image/success.png"
          alt="success"
          width={220}
          height={220}
          className="mx-auto mb-6"
        /> */}

        <h1 className="text-[26px] font-semibold text-[#2164F4] mb-4">
          Your Password is Reset
        </h1>

        <Link
          href="/Login"
          className="inline-flex h-[44px] px-8 bg-[#2164F4] text-white rounded-full items-center justify-center"
        >
          Go to Login
        </Link>
      </div>

      <div className="hidden lg:block">
            <img src="/image/success.png" width={300} height={300} alt="OTP Illustration" className="w-full h-full object-cover" />
        </div>
    </div>
  );
}
