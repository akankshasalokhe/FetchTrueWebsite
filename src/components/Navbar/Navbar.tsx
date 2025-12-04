"use client";

import { useState } from "react";
import { Bell, User, Package, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Leads", href: "/leads" },
    { label: "My Team", href: "/team" },
    { label: "Offers", href: "/offers" },
    { label: "Academy", href: "/academy" },
  ];

  return (
    <div className="absolute z-20 w-full flex justify-center mt-10 px-4">
      <nav
        className="
          w-full max-w-[1347px] h-[81px] 
          bg-[#FFFFFF]/47 backdrop-blur-[65px] 
          rounded-[45px] px-6 flex items-center justify-between 
          relative shadow-[inset_0_0_26px_2px_rgba(255,255,255,1)] 
          border-[2px] border-white/30
        "
      >
        {/* LEFT ICONS */}
        <div className="flex items-center gap-2 sm:gap-[9.99px] w-auto sm:w-[287px] h-[66px]">
          <img src="/image/logo.png" alt="Logo" className="w-[96px] h-[66px]" />
          <div className="hidden sm:flex gap-[9.99px]">
            {[User, Bell, Package].map((Icon, idx) => (
              <div
                key={idx}
                className="w-[49px] h-[49px] bg-white rounded-full border-[1.6px] border-black/5 flex items-center justify-center"
              >
                <Icon className="text-black" size={19.61} />
              </div>
            ))}
          </div>
        </div>

        {/* CENTER MENU */}
        <ul className="hidden lg:flex items-center gap-10 text-black font-medium" style={{ fontWeight: 400, fontSize: 20 }}>
          {menuItems.map((item) => (
            <li
              key={item.label}
              onClick={() => setActiveMenu(item.label)}
              className="relative cursor-pointer"
            >
              <Link
                href={item.href}
                className={`transition-all ${activeMenu === item.label ? "text-[#2164F4] font-semibold" : "text-black"}`}
              >
                {item.label}
              </Link>

              {activeMenu === item.label && (
                <span className="absolute left-0 -bottom-2 w-full h-[3px] bg-[#2164F4] rounded-full"></span>
              )}
            </li>
          ))}
        </ul>

        {/* MOBILE MENU TOGGLE */}
        <div className="flex items-center gap-2 lg:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* RIGHT BUTTONS */}
        <div className="hidden lg:flex items-center gap-4" style={{ fontSize: 20 }}>
          <button className="w-[135px] h-[40px] rounded-[20px] bg-[#2164F4] text-white font-semibold">
            Login
          </button>

          <button className="w-[135px] h-[40px] rounded-[20px] text-black bg-white font-semibold">
            Sign Up
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="absolute z-100  top-[81px] left-0 w-full bg-white/90 rounded-b-[30px] shadow-lg flex flex-col items-center py-4 lg:hidden">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => {
                  setActiveMenu(item.label);
                  setMobileMenuOpen(false);
                }}
                className={`my-2 text-[18px] ${activeMenu === item.label ? "text-[#2164F4] font-semibold" : "text-black"}`}
              >
                {item.label}
              </Link>
            ))}

            <div className="flex flex-col gap-2 mt-4 w-[80%]">
              <button className="w-full h-[40px] rounded-[20px] bg-[#2164F4] text-white font-semibold">
                Login
              </button>
              <button className="w-full h-[40px] rounded-[20px] bg-white text-black font-semibold">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
