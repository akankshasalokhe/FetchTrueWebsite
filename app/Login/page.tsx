"use client";

import Image from "next/image";
import Link from "next/link";
import { Eye } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-[calc(100vh-100px)] flex items-center justify-center bg-white">
      <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-10 px-6">

        {/* LEFT – LOGIN FORM */}
        <div className="flex flex-col justify-center max-w-[450px] mx-auto w-full">
          {/* Logo */}
          <Image
            src="/image/logo.png"
            alt="Fetch True"
            width={101}
            height={69}
            className="mb-6"
          />

          <h1 className="text-[28px] font-semibold mb-1">Welcome Back</h1>
          <p className="text-sm text-[#6B6969] mb-6">
            Login to access all your services from one secure platform
          </p>

          {/* Email */}
          <label className="text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder="user@gmail.com"
            className="h-[44px] px-4 rounded-md border border-[#E5E5E5] mb-4 outline-none"
          />

          {/* Password */}
          <label className="text-sm font-medium mb-1">Password</label>
          <div className="relative mb-2">
            <input
              type="password"
              placeholder="123"
              className="h-[44px] w-full px-4 pr-10 rounded-md border border-[#E5E5E5] outline-none"
            />
            <Eye
              size={18}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B6969] cursor-pointer"
            />
          </div>

          <div className="flex justify-end mb-5">
            <Link
              href="/ForgotPassword"
              className="text-sm text-[#2164F4]"
            >
              Forgot Password ?
            </Link>
          </div>

          {/* Login Button */}
          <button className="h-[44px] rounded-full bg-[#2164F4] text-white font-medium mb-4">
            Login
          </button>

          <p className="text-sm text-center text-[#6B6969]">
            Don’t Have an Account ?
            <Link href="/SignUp" className="text-[#2164F4] ml-1">
              Sign Up
            </Link>
          </p>

          <p className="text-xs text-center text-[#9E9E9E] mt-10">
            © 2026 Fetch True. All Rights Reserved.
          </p>
        </div>

        {/* RIGHT – INFO SECTION */}
        <div className="hidden lg:flex items-center justify-start bg-[#2563EB] rounded-[20px] relative overflow-hidden">
          <div className="ps-10 -mt-70 text-white max-w-[609px]">
            <h2 className="text-[26px] font-semibold mb-3">
              One Platform Multiple Services
            </h2>
            <p className="text-sm leading-6">
              Frustrated searching for multiple services? <br />
              Try Fetch True — one click, all services in one place. <br />
              Just grab your phone and you are done.
            </p>
          </div>

          {/* Mobile Mockup */}
          <Image
            src="/image/signupMockup.png"
            alt="App Preview"
            width={480}
            height={351}
            className="absolute bottom-6 right-6"
          />
        </div>

      </div>
    </div>
  );
}
