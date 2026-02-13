// "use client";

// import Image from "next/image";
// import Link from "next/link";

// export default function VerifyOtpPage() {
//   return (
//     <div className="min-h-[calc(100vh-100px)] flex items-center justify-center">
//       <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 px-6">

//         <div className="max-w-[420px] mx-auto flex flex-col justify-center">
//           <Image src="/image/logo.png" alt="logo" width={80} height={50} />

//           <h1 className="text-[26px] font-semibold mt-6">
//             Verify Number With OTP
//           </h1>
//           <p className="text-sm text-[#6B6969] mt-2 mb-6">
//             We’ve sent a 6 digit code to +91 9146487241
//           </p>

//           <div className="flex gap-3 mb-6">
//             {Array.from({ length: 6 }).map((_, i) => (
//               <input
//                 key={i}
//                 maxLength={1}
//                 className="w-12 h-12 text-center border rounded-md"
//               />
//             ))}
//           </div>

//           <Link
//             href="/ForgotPassword/NewPassword"
//             className="h-[44px] bg-[#2164F4] text-white rounded-full flex items-center justify-center"
//           >
//             Verify OTP
//           </Link>

//           <p className="text-xs text-center text-[#9E9E9E] mt-10">
//             Didn't receive? <span className="text-[#2164F4]">Resend OTP</span> 
//           </p>
//         </div>

//         <div className="hidden lg:block">
//             <img src="/image/resendOTP.png" width={550} height={450} alt="OTP Illustration" className="w-full h-full object-cover" />
//         </div>
//       </div>
//     </div>
//   );
// }


// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function VerifyOtpPage() {
//   const [otp, setOtp] = useState("");
//   const router = useRouter();

//   const verifyOtp = async () => {
//     try {
//       await window.confirmationResult.confirm(otp);
//       router.push("/ForgotPassword/NewPassword");
//     } catch {
//       alert("Invalid OTP");
//     }
//   };

//   return (
//     <>
//       <input
//         value={otp}
//         onChange={(e) => setOtp(e.target.value)}
//         placeholder="Enter OTP"
//       />

//       <button onClick={verifyOtp}>Verify OTP</button>
//     </>
//   );
// }


"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function VerifyOtpPage() {
  const router = useRouter();

  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mobile, setMobile] = useState("");

  useEffect(() => {
    const savedMobile = localStorage.getItem("resetMobile");
    if (!savedMobile) {
      router.replace("/ForgotPassword");
      return;
    }
    setMobile(savedMobile);
  }, [router]);

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto focus next
    if (value && index < 5) {
      const nextInput = document.getElementById(
        `otp-${index + 1}`
      ) as HTMLInputElement;
      nextInput?.focus();
    }
  };

  const verifyOtp = async () => {
    const code = otp.join("");

    if (code.length !== 6) {
      setError("Please enter complete 6-digit OTP");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const confirmationResult = (window as any).confirmationResult;

      if (!confirmationResult) {
        setError("OTP session expired. Please resend OTP.");
        return;
      }

      await confirmationResult.confirm(code);

      router.push("/ForgotPassword/NewPassword");
    } catch (err: any) {
      console.error("OTP Verify Error:", err);
      setError("Invalid or expired OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-100px)] flex items-center justify-center">
      <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 px-6">

        {/* LEFT */}
        <div className="max-w-[420px] mx-auto flex flex-col justify-center">
          <Image src="/image/logo.png" alt="logo" width={80} height={50} />

          <h1 className="text-[26px] font-semibold mt-6">
            Verify Number With OTP
          </h1>

          <p className="text-sm text-[#6B6969] mt-2 mb-6">
            We’ve sent a 6 digit code to +91 {mobile}
          </p>

          <div className="flex gap-3 mb-4">
            {otp.map((digit, i) => (
              <input
                key={i}
                id={`otp-${i}`}
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e.target.value, i)}
                className="w-12 h-12 text-center border rounded-md text-lg"
              />
            ))}
          </div>

          {error && (
            <p className="text-sm text-red-500 mb-3">{error}</p>
          )}

          <button
            onClick={verifyOtp}
            disabled={loading}
            className="h-[44px] bg-[#2164F4] text-white rounded-full
                       flex items-center justify-center
                       disabled:opacity-60"
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>

          <p className="text-xs text-center text-[#9E9E9E] mt-10">
            Didn&apos;t receive?{" "}
            <span className="text-[#2164F4] cursor-pointer">
              Resend OTP
            </span>
          </p>
        </div>

        {/* RIGHT */}
        <div className="hidden lg:block">
          <img
            src="/image/resendOTP.png"
            alt="OTP Illustration"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
