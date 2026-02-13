// "use client";

// import { useState } from "react";
// import { Bell, User, Package, Menu, X } from "lucide-react";
// import Link from "next/link";

// export default function Navbar() {
//   const [activeMenu, setActiveMenu] = useState("Home");
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const menuItems = [
//     { label: "Home", href: "/" },
//     { label: "Leads", href: "/leads" },
//     { label: "My Team", href: "/team" },
//     { label: "Offers", href: "/offers" },
//     { label: "Academy", href: "/academy" },
//   ];

//   return (
//     <div className="absolute z-20 w-full flex justify-center mt-10 px-4">
//       <nav
//         className="
//           w-full max-w-[1347px] h-[81px] 
//           bg-[#FFFFFF]/47 backdrop-blur-[65px] 
//           rounded-[45px] px-6 flex items-center justify-between 
//           relative shadow-[inset_0_0_26px_2px_rgba(255,255,255,1)] 
//           border-[2px] border-white/30
//         "
//       >
//         {/* LEFT ICONS */}
//         <div className="flex items-center gap-2 sm:gap-[9.99px] w-auto sm:w-[287px] h-[66px]">
//           <img src="/image/logo.png" alt="Logo" className="w-[96px] h-[66px]" />
//           <div className="hidden sm:flex gap-[9.99px]">
//             {[User, Bell, Package].map((Icon, idx) => (
//               <div
//                 key={idx}
//                 className="w-[49px] h-[49px] bg-white rounded-full border-[1.6px] border-black/5 flex items-center justify-center"
//               >
//                 <Icon className="text-black" size={19.61} />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* CENTER MENU */}
//         <ul className="hidden lg:flex items-center gap-10 text-black font-medium" style={{ fontWeight: 400, fontSize: 20 }}>
//           {menuItems.map((item) => (
//             <li
//               key={item.label}
//               onClick={() => setActiveMenu(item.label)}
//               className="relative cursor-pointer"
//             >
//               <Link
//                 href={item.href}
//                 className={`transition-all ${activeMenu === item.label ? "text-[#2164F4] font-semibold" : "text-black"}`}
//               >
//                 {item.label}
//               </Link>

//               {activeMenu === item.label && (
//                 <span className="absolute left-0 -bottom-2 w-full h-[3px] bg-[#2164F4] rounded-full"></span>
//               )}
//             </li>
//           ))}
//         </ul>

//         {/* MOBILE MENU TOGGLE */}
//         <div className="flex items-center gap-2 lg:hidden">
//           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
//             {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* RIGHT BUTTONS */}
//         <div className="hidden lg:flex items-center gap-4" style={{ fontSize: 20 }}>
//           <button className="w-[135px] h-[40px] rounded-[20px] bg-[#2164F4] text-white font-semibold">
//             Login
//           </button>

//           <button className="w-[135px] h-[40px] rounded-[20px] text-black bg-white font-semibold">
//             Sign Up
//           </button>
//         </div>

//         {/* MOBILE MENU */}
//         {mobileMenuOpen && (
//           <div className="absolute z-100  top-[81px] left-0 w-full bg-white/90 rounded-b-[30px] shadow-lg flex flex-col items-center py-4 lg:hidden">
//             {menuItems.map((item) => (
//               <Link
//                 key={item.label}
//                 href={item.href}
//                 onClick={() => {
//                   setActiveMenu(item.label);
//                   setMobileMenuOpen(false);
//                 }}
//                 className={`my-2 text-[18px] ${activeMenu === item.label ? "text-[#2164F4] font-semibold" : "text-black"}`}
//               >
//                 {item.label}
//               </Link>
//             ))}

//             <div className="flex flex-col gap-2 mt-4 w-[80%]">
//               <button className="w-full h-[40px] rounded-[20px] bg-[#2164F4] text-white font-semibold">
//                 Login
//               </button>
//               <button className="w-full h-[40px] rounded-[20px] bg-white text-black font-semibold">
//                 Sign Up
//               </button>
//             </div>
//           </div>
//         )}
//       </nav>
//     </div>
//   );
// }


"use client";

import Image from "next/image";
import Link from "next/link";
import { Bell, Users, Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  // { label: "Leads", href: "/leads" },
  { label: "Offers", href: "/Offers" },
  { label: "Academy", href: "/Academy" },
  { label: "Account", href: "/account" },
  { label: "Packages", href: "/packages" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full bg-white border-b sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 h-[80px] lg:h-[100px] flex items-center justify-between">

        {/* LEFT */}
        <div className="flex items-center gap-4 lg:gap-6">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/image/logo.png"
              alt="Fetch True"
              width={74}
              height={51}
              className="w-[60px] lg:w-[74px]"
            />
          </Link>

          {/* Search (Desktop only) */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Service name"
              className="w-[229px] h-[40px] pl-10 pr-4 rounded-full border border-[#E5E5E5] text-sm outline-none"
            />
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 text-black"
              width="18"
              height="18"
              fill="none"
            >
              <circle cx="7" cy="7" r="6" stroke="currentColor" />
              <line x1="11" y1="11" x2="15" y2="15" stroke="currentColor" />
            </svg>
          </div>
        </div>

        {/* CENTER NAV (Desktop) */}
        <nav className="hidden lg:flex items-center gap-8 text-[16px] font-medium">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

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
                  <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-[#2164F4] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Login */}
          <Link
            href="/Login"
            className="hidden sm:flex items-center justify-center px-6 w-[108px] h-[36px] bg-[#262627] text-white rounded-full text-sm"
          >
            Login
          </Link>

          {/* User */}
          <div className="w-9 h-9 flex items-center justify-center">
            <Users size={18} />
          </div>

          {/* Notification */}
          <div className="relative w-9 h-9 flex items-center justify-center">
            <Bell size={18} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t shadow-md">
          <div className="px-6 py-4 flex flex-col gap-4 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`${
                  pathname === item.href
                    ? "text-[#2164F4] font-semibold"
                    : "text-[#6B6969]"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile Search */}
            <input
              type="text"
              placeholder="Service name"
              className="w-full h-[40px] px-4 rounded-full border border-[#E5E5E5] text-sm outline-none"
            />

            {/* Mobile Login */}
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="w-full h-[40px] bg-[#262627] text-white rounded-full flex items-center justify-center"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
