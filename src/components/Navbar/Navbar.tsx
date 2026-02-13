"use client";

import Image from "next/image";
import Link from "next/link";
import { Bell, Users, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams, usePathname } from "next/navigation";
import { useUser } from "@/src/context/UserContext";

export default function Navbar() {
  const { userId } = useParams<{ userId: string }>();
  const { user, fetchUser } = useUser();

  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (userId && user?.userId !== userId) {
      fetchUser(userId);
    }
  }, [userId, user, fetchUser]);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Offers", href: "/Offers" },
    { label: "Academy", href: "/Academy" },
    {
      label: "Account",
      href: "/Account"
    },
    { label: "Packages", href: "/packages" },
  ];

  return (
    <header className="w-full bg-white border-b sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 h-[80px] lg:h-[100px] flex items-center justify-between">

        {/* LEFT */}
        <div className="flex items-center gap-4 lg:gap-6">
          <Link href="/">
            <Image
              src="/image/logo.png"
              alt="Fetch True"
              width={74}
              height={51}
              className="w-[60px] lg:w-[74px]"
            />
          </Link>

          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Service name"
              className="w-[229px] h-[40px] pl-10 pr-4 rounded-full border border-[#E5E5E5] text-sm outline-none"
            />
          </div>
        </div>

        {/* CENTER */}
        <nav className="hidden lg:flex items-center gap-8 text-[16px] font-medium">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative ${
                  isActive
                    ? "text-[#2164F4] font-semibold"
                    : "text-[#6B6969]"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-[#2164F4]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            href="/Login"
            className="hidden sm:flex items-center justify-center px-6 w-[108px] h-[36px] bg-[#262627] text-white rounded-full text-sm"
          >
            Login
          </Link>

          <Users size={18} className="cursor-pointer" />
          <Bell size={18} className="cursor-pointer" />

          <button className="lg:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}
