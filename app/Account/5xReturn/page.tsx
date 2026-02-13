// "use client";

// import ProgressCircle from "@/src/components/Account/FiveXReturn/Progress";
// import StatCard from "@/src/components/Account/FiveXReturn/StatCard";

// export default function FiveXReturnPage() {
//   return (
//     <div className="p-6 bg-white min-h-screen">
//       <h1 className="text-lg font-semibold text-gray-800 mb-6">
//         5x Return
//       </h1>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {/* LEFT SECTION */}
//         <div className="space-y-4">
//           {/* Package Banner */}
//           <div className="bg-gradient-to-r from-[#2E3ECD] to-[#4D9EFE] text-white border-[#E6E6E6] rounded-[8px] p-4 flex items-center gap-3 shadow-sm">
//             <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
//               📦
//             </div>
//             <div >
//               <p className="font-medium text-[#FFFFFF]">Package</p>
//               <p className="text-sm text-[#FFFFFF]">
//                 You haven't activated a package yet
//               </p>
//             </div>
//           </div>

//           {/* Stats */}
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//             <StatCard
//               icon="🏅"
//               value="1X"
//               label="Current Level"
//             />
//             <StatCard
//               icon="💰"
//               value="₹ 0.0 / 500000"
//               label="Total Earnings"
//             />
//             <StatCard
//               icon="👥"
//               value="0 / 900"
//               label="Total Leads"
//             />
//           </div>
//         </div>

//         {/* RIGHT SECTION */}
//         <div className="border-[#E6E6E6] rounded-lg p-6 shadow-sm">
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             <ProgressCircle
//               icon="👤"
//               value="0"
//               total="900"
//               label="Lead Progress"
//               percentage={0}
//             />
//             <ProgressCircle
//               icon="₹"
//               value="0"
//               total="₹500000"
//               label="Earning Progress"
//               percentage={0}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import ProgressCircle from "@/src/components/Account/FiveXReturn/Progress";
import StatCard from "@/src/components/Account/FiveXReturn/StatCard";

import { useFiveX } from "@/src/context/FiveXContext";
import { useLeads } from "@/src/context/LeadsContext";
import { useWallet } from "@/src/context/WalletContext";

export default function FiveXReturnPage() {
  const { config, loading: configLoading } = useFiveX();
  const { leads, loading: leadsLoading } = useLeads();
  const { wallet, loading: walletLoading } = useWallet();

  const isPackageActive = wallet?.userId?.packageActive ?? false;



  if (configLoading || leadsLoading || walletLoading) {
    return <div className="p-6">Loading FiveX data...</div>;
  }

  if (!config) {
    return <div className="p-6 text-red-500">FiveX config not found</div>;
  }

  /* ================= CALCULATIONS ================= */

  const totalLeads = leads.length;
  const totalLeadTarget = config.leadcount;

  const totalEarnings = wallet?.selfEarnings || 0;
  const earningTarget = config.fixearning;

  const leadPercentage =
    totalLeadTarget > 0 ? (totalLeads / totalLeadTarget) * 100 : 0;

  const earningPercentage =
    earningTarget > 0 ? (totalEarnings / earningTarget) * 100 : 0;

  /* Example Level Logic */
  const currentLevel =
    leadPercentage >= 100
      ? "5X"
      : leadPercentage >= 75
      ? "4X"
      : leadPercentage >= 50
      ? "3X"
      : leadPercentage >= 25
      ? "2X"
      : "1X";

  return (
    <div className="p-6 bg-white min-h-screen">
      <h1 className="text-lg font-semibold text-gray-800 mb-6">
        5x Return
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* LEFT SECTION */}
        <div className="space-y-4">
          {/* Package Banner */}
          {isPackageActive ? (
  <div className="bg-gradient-to-r from-[#2E3ECD] to-[#4D9EFE] text-white rounded-[8px] p-4 flex items-center gap-3 shadow-sm">
    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
      📦
    </div>
    <div>
      <p className="font-medium">Package</p>
      <p className="text-sm">
        Active for {config.months} months
      </p>
    </div>
  </div>
) : (
  <div className="bg-gradient-to-r from-[#2E3ECD] to-[#4D9EFE] text-white rounded-[8px] p-4 flex items-center gap-3 shadow-sm">
    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
      📦
    </div>
    <div>
      <p className="font-medium">Package</p>
      <p className="text-sm">
        You haven’t activated a package yet
      </p>
    </div>
  </div>
)}



          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <StatCard icon="🏅" value={currentLevel} label="Current Level" />

            <StatCard
              icon="💰"
              value={`₹ ${totalEarnings.toLocaleString()} / ${earningTarget}`}
              label="Total Earnings"
            />

            <StatCard
              icon="👥"
              value={`${totalLeads} / ${totalLeadTarget}`}
              label="Total Leads"
            />
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="border rounded-lg p-6 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ProgressCircle
              icon="👤"
              value={totalLeads.toString()}
              total={totalLeadTarget.toString()}
              label="Lead Progress"
              percentage={leadPercentage}
            />

            <ProgressCircle
              icon="₹"
              value={totalEarnings.toLocaleString()}
              total={`₹${earningTarget}`}
              label="Earning Progress"
              percentage={earningPercentage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
