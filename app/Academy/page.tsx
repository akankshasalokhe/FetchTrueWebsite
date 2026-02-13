"use client";

export default function AcademyPage() {
  return (
    <div className="p-6 space-y-12">

      {/* ================= HERO ================= */}
      <section className="rounded-2xl bg-gradient-to-r from-indigo-900 to-blue-600 p-10 flex justify-between items-center">
        <div className="text-white space-y-4">
          <span className="bg-white/20 px-3 py-1 rounded-full text-xs">
            Premium Business Education
          </span>
          <h1 className="text-3xl font-bold">
            Unlock Your <br /> Business Potential
          </h1>
          <button className="bg-white text-blue-700 px-5 py-2 rounded-lg font-medium">
            Contact Now
          </button>
        </div>

        <img
          src="/academy-illustration.png"
          className="w-[260px]"
          alt="academy"
        />
      </section>

      {/* ================= SERVICES ================= */}
      <section>
        <h2 className="text-lg font-semibold mb-6">Recommended Services</h2>

        <div className="flex gap-6">

          {/* CARD 1 */}
          <div className="w-[300px] rounded-xl border bg-white shadow-sm">
            <img
              src="/training.jpg"
              className="h-[150px] w-full rounded-t-xl object-cover"
            />
            <div className="p-4 space-y-2">
              <span className="text-xs text-blue-600">Education</span>
              <h3 className="font-semibold">Training Tutorial</h3>
              <p className="text-sm text-gray-500">Step by step learning</p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="w-[300px] rounded-xl border bg-white shadow-sm">
            <img
              src="/webinar.jpg"
              className="h-[150px] w-full rounded-t-xl object-cover"
            />
            <div className="p-4 space-y-2">
              <span className="text-xs text-purple-600">Live</span>
              <h3 className="font-semibold">Live Webinar</h3>
              <p className="text-sm text-gray-500">Industry experts</p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="w-[300px] rounded-xl border bg-white shadow-sm">
            <img
              src="/podcast.jpg"
              className="h-[150px] w-full rounded-t-xl object-cover"
            />
            <div className="p-4 space-y-2">
              <span className="text-xs text-pink-600">Audio</span>
              <h3 className="font-semibold">Podcast</h3>
              <p className="text-sm text-gray-500">Business talks</p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= FOOTER VARIANT – ACADEMY ================= */}
      <section className="rounded-xl border p-6 text-center">
        <h4 className="font-semibold mb-2">Connect With Us</h4>
        <p className="text-sm text-gray-500 mb-4">
          Follow us on social media for latest updates
        </p>
        <div className="flex justify-center gap-4 text-xl">
          <span>📺</span>
          <span>📸</span>
          <span>📘</span>
        </div>
      </section>

    </div>
  );
}
