"use client";

import { TrendingUp, Calendar, Wallet, RotateCcw } from "lucide-react";

export default function EarningsPage() {
  return (
    <div className="p-6 bg-white min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-lg font-semibold text-gray-800">
          My Earning
        </h1>

        <button className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-gray-50">
          <RotateCcw className="w-4 h-4 text-gray-600" />
        </button>
      </div>

      {/* Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl p-4 text-white flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
            <Wallet className="w-5 h-5" />
          </div>

          <div>
            <p className="text-sm font-medium">My Earnings</p>
            <p className="text-xs text-blue-100">
              ● Weekly Auto Withdraw
            </p>
          </div>
        </div>

        <div className="text-right">
          <p className="text-lg font-semibold">₹ 0.0</p>
          <p className="text-xs text-green-200">▲ 10% this week</p>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {/* Total Earnings */}
        <div className="bg-white border rounded-xl p-4 shadow-sm">
          <div className="flex items-start justify-between">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full">
              + 0%
            </span>
          </div>

          <p className="text-lg font-semibold mt-3">₹ 0.0</p>
          <p className="text-xs text-gray-500">Total Earnings</p>
        </div>

        {/* Monthly Earnings */}
        <div className="bg-white border rounded-xl p-4 shadow-sm">
          <div className="flex items-start justify-between">
            <Calendar className="w-5 h-5 text-blue-600" />
            <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full">
              + 0%
            </span>
          </div>

          <p className="text-lg font-semibold mt-3">₹ 0.0</p>
          <p className="text-xs text-gray-500">Monthly Earnings</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-6">
        <p className="text-sm font-medium text-gray-700 mb-3">
          Earnings Breakdown
        </p>

        <div className="flex gap-3">
          <button className="px-4 py-1.5 rounded-full border border-blue-600 text-blue-600 text-xs font-medium">
            Self Earning
          </button>

          <button className="px-4 py-1.5 rounded-full border text-gray-500 text-xs font-medium hover:bg-gray-50">
            Team Build
          </button>

          <button className="px-4 py-1.5 rounded-full border text-gray-500 text-xs font-medium hover:bg-gray-50">
            Team Revenue
          </button>
        </div>
      </div>

      {/* Empty State */}
      <div className="flex flex-col items-center justify-center text-center mt-20">
        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
          <Wallet className="w-5 h-5 text-blue-600" />
        </div>

        <p className="text-sm font-semibold text-gray-800">
          No Transactions Yet
        </p>

        <p className="text-xs text-gray-500 mt-1 leading-relaxed">
          Start earning by referring members <br />
          to grow together
        </p>
      </div>
    </div>
  );
}
