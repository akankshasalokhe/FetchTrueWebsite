// "use client";

// import Image from "next/image";
// import Link from "next/link";

// export default function ForgotPasswordPage() {
//   return (
//     <div className="min-h-[calc(100vh-100px)] flex items-center justify-center">
//       <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 px-6">

//         {/* LEFT */}
//         <div className="max-w-[420px] mx-auto flex flex-col justify-center">
//           <Image src="/image/logo.png" alt="logo" width={80} height={50} />

//           <h1 className="text-[26px] font-semibold mt-6">Reset Password</h1>
//           <p className="text-sm text-[#6B6969] mt-2 mb-6">
//             Enter your registered number to reset your password
//           </p>

//           <input
//             type="tel"
//             placeholder="+91"
//             className="h-[44px] px-4 border rounded-md mb-6"
//           />

//           <Link
//             href="/ForgotPassword/VerifyOTP"
//             className="h-[44px] bg-[#2164F4] text-white rounded-full flex items-center justify-center"
//           >
//             Send OTP
//           </Link>

//           <p className="text-xs text-center text-[#9E9E9E] mt-10">
//             © 2026 Fetch True. All Rights Reserved.
//           </p>
//         </div>

//         {/* RIGHT */}
//         <div className="hidden lg:block">
//             <img src="/image/resendOTP.png" width={550} height={450} alt="OTP Illustration" className="w-full h-full object-cover" />
//         </div>
//       </div>
//     </div>
//   );
// }


// "use client";

// import Image from "next/image";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { useResetPass } from "@/src/context/ResetPassContext";

// export default function ForgotPasswordPage() {
//   const [mobileNumber, setMobileNumber] = useState("");
//   const [newPassword, setNewPassword] = useState("");

//   const { forgotPassword, loading } = useResetPass();
//   const router = useRouter();

//   const handleSubmit = async () => {
//     if (!mobileNumber || !newPassword) {
//       alert("All fields are required");
//       return;
//     }

//     try {
//       await forgotPassword({
//         mobileNumber,
//         newPassword,
//       });

//       alert("Password reset successfully ✅");
//       router.push("/Login");
//     } catch (err: any) {
//       alert(err.message);
//     }
//   };

//   return (
//     <div className="min-h-[calc(100vh-100px)] flex items-center justify-center">
//       <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 px-6">

//         {/* LEFT */}
//         <div className="max-w-[420px] mx-auto flex flex-col justify-center">
//           <Image src="/image/logo.png" alt="logo" width={80} height={50} />

//           <h1 className="text-[26px] font-semibold mt-6">Reset Password</h1>
//           <p className="text-sm text-[#6B6969] mt-2 mb-6">
//             Enter your registered number to reset your password
//           </p>

//           <input
//             type="tel"
//             placeholder="+91XXXXXXXXXX"
//             value={mobileNumber}
//             onChange={(e) => setMobileNumber(e.target.value)}
//             className="h-[44px] px-4 border rounded-md mb-4"
//           />

//           <input
//             type="password"
//             placeholder="New Password"
//             value={newPassword}
//             onChange={(e) => setNewPassword(e.target.value)}
//             className="h-[44px] px-4 border rounded-md mb-6"
//           />

//           <button
//             onClick={handleSubmit}
//             disabled={loading}
//             className="h-[44px] bg-[#2164F4] text-white rounded-full flex items-center justify-center"
//           >
//             {loading ? "Please wait..." : "Reset Password"}
//           </button>

//           <p className="text-xs text-center text-[#9E9E9E] mt-10">
//             © 2026 Fetch True. All Rights Reserved.
//           </p>
//         </div>

//         {/* RIGHT */}
//         <div className="hidden lg:block">
//           <img
//             src="/image/resendOTP.png"
//             width={550}
//             height={450}
//             alt="OTP Illustration"
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { auth } from "@/src/lib/firebase";

export default function ForgotPasswordPage() {
  const router = useRouter();

  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // ✅ Create reCAPTCHA ONCE
 useEffect(() => {
  if (typeof window === "undefined") return;

  if (!(window as any).recaptchaVerifier) {
    (window as any).recaptchaVerifier = new RecaptchaVerifier(
      auth, // ✅ FIRST
      "recaptcha-container", // ✅ SECOND
      { size: "invisible" } // ✅ THIRD
    );
  }
}, []);


  const sendOTP = async () => {
    if (mobile.length !== 10) {
      setError("Enter valid 10-digit mobile number");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const appVerifier = (window as any).recaptchaVerifier;
      if (!appVerifier) {
        setError("reCAPTCHA not ready. Refresh page.");
        return;
      }

      const confirmationResult = await signInWithPhoneNumber(
        auth,
        `+91${mobile}`,
        appVerifier
      );

      (window as any).confirmationResult = confirmationResult;
      localStorage.setItem("resetMobile", mobile);

      router.push("/ForgotPassword/VerifyOTP");
    } catch (err: any) {
      console.error(err);
      setError("OTP failed. Refresh page and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-100px)] flex items-center justify-center">
      <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 px-6">

        <div className="max-w-[420px] mx-auto flex flex-col justify-center">
          <Image src="/image/logo.png" alt="logo" width={80} height={50} />

          <h1 className="text-[26px] font-semibold mt-6">
            Reset Password
          </h1>

          <p className="text-sm text-[#6B6969] mt-2 mb-6">
            Enter your registered number
          </p>

          <input
            type="tel"
            value={mobile}
            maxLength={10}
            onChange={(e) =>
              setMobile(e.target.value.replace(/\D/g, ""))
            }
            placeholder="10-digit mobile number"
            className="h-[44px] px-4 border rounded-md mb-4"
          />

          {error && (
            <p className="text-sm text-red-500 mb-3">{error}</p>
          )}

          <button
            onClick={sendOTP}
            disabled={loading}
            className="h-[44px] bg-[#2164F4] text-white rounded-full disabled:opacity-60"
          >
            {loading ? "Sending OTP..." : "Send OTP"}
          </button>
        </div>

        <div className="hidden lg:block">
          <img
            src="/image/resendOTP.png"
            alt="OTP"
            className="w-full h-full object-cover"
          />
        </div>

        {/* 🔒 MUST EXIST */}
        <div id="recaptcha-container"></div>
      </div>
    </div>
  );
}



