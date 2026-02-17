"use client";

export default function HelpCenter() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Illustration */}
        <div className="flex justify-center">
          <img
            src="/image/help.png"
            alt="Help Center"
            className="w-80 max-w-full"
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Help & Center
          </h2>

          {/* Email Section */}
          <div className="mb-5">
            <h3 className="text-sm font-semibold text-gray-800">
              Email Us
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              If you need help or have a question, drop us an email at{" "}
              <a
                href="mailto:info@fetchtrue.com"
                className="text-blue-600 hover:underline"
              >
                info@fetchtrue.com
              </a>
            </p>
          </div>

          {/* Call Section */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-800">
              Call Us
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Our team usually responds within 2 hours. You can reach our
              customer support team anytime at{" "}
              <span className="font-medium text-gray-900">
                +91 8899207770
              </span>
            </p>
          </div>

          {/* Footer Text */}
          <p className="text-blue-600 text-sm font-medium">
            We’re always here to help.
          </p>
        </div>
      </div>
    </div>
  );
}
