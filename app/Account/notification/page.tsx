"use client";

import { useState } from "react";

export default function NotificationSettings() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [alertType, setAlertType] = useState<"sound" | "silent">("sound");

  return (
    <div className="w-full mx-auto p-6 pt-25 ">
      {/* Notification Toggle */}
      <div className="flex items-center justify-between border border-[#E6E6E6] rounded-lg mb-6 p-2">
        <span className="text-lg font-medium  text-gray-800">Allow notifications</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only"
            checked={notificationsEnabled}
            onChange={() => setNotificationsEnabled(!notificationsEnabled)}
          />
          <div
            className={`w-11 h-6 bg-gray-300 rounded-full peer-focus:ring-2 peer-focus:ring-blue-500 
              peer-checked:bg-blue-600 transition-colors`}
          ></div>
          <div
            className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full shadow transform 
              transition-transform ${notificationsEnabled ? "translate-x-5" : ""}`}
          ></div>
        </label>
      </div>

      {/* Alert Options */}
      <div className="text-gray-700">
        <p className="mb-2 font-medium">Alerts</p>
        <div className="flex gap-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="alert"
              value="sound"
              checked={alertType === "sound"}
              onChange={() => setAlertType("sound")}
              className="accent-blue-600"
              disabled={!notificationsEnabled}
            />
            Allow sound & vibration
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="alert"
              value="silent"
              checked={alertType === "silent"}
              onChange={() => setAlertType("silent")}
              className="accent-blue-600"
              disabled={!notificationsEnabled}
            />
            Silent
          </label>
        </div>
      </div>
    </div>
  );
}
