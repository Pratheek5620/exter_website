"use client"
import Link from "next/link"
import Image from "next/image"

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-20 flex items-center bg-[#334DA0] text-white">
        <Link className="flex items-center justify-center" href="/">
          <Image
            src="/exter_name-logo.png"
            alt="Exter Logo"
            width={150}
            height={150}
            className="mr-2"
          />
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/#what-we-believe-in">
            What We Believe In
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/#why-choose-exter">
            Why Choose exter
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/#contact-us">
            Contact Us
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="w-full bg-gray-50 py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#334DA0]">Privacy Policy</h1>
            <p className="text-lg text-gray-700 mb-12">
              At Exter Energy (Pravit Tech Labs Pvt Ltd), we are committed to protecting your privacy while you help us build a greener, pollution-free earth.
            </p>

            {/* Introduction Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[#334DA0]">Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Welcome to Exter Energy, operated by Pravit Tech Labs Private Limited ("we," "us," or "our"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (exterenergy.com), use our mobile application, or interact with our battery swapping terminals.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By using our Services, you consent to the data practices described in this policy. If you do not agree with any part of this policy, please discontinue use of our platform immediately.
              </p>
            </section>

            {/* Data We Collect Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-[#334DA0]">Data We Collect</h2>
              
              <div className="space-y-6">
                {/* Personal Info */}
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Personal Information</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Name, email address, phone number</li>
                    <li>Shipping/billing address for EV purchases</li>
                  </ul>
                </div>

                {/* Device Data */}
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Device Data</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>IP address, browser type</li>
                    <li>Device identifiers and operating system details</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Location & Battery Telemetry Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-[#334DA0]">Location & Battery Telemetry</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                To provide our core Battery Swapping Service, we collect specialized data:
              </p>
              
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Real-time Location</h3>
                  <p className="text-gray-700">To help you find the nearest swapping station and verify swaps.</p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Battery Health</h3>
                  <p className="text-gray-700">State of charge, temperature, and cycle counts for maintenance.</p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Usage Statistics</h3>
                  <p className="text-gray-700">Distance traveled and energy consumption patterns to optimize our fleet.</p>
                </div>
              </div>
            </section>

            {/* How We Use Your Information Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-[#334DA0]">How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use your data to:
              </p>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="bg-white p-4 rounded-lg border border-gray-200 flex items-start">
                  <span className="text-green-500 mr-3 font-bold">✓</span>
                  <span className="text-gray-700">Process transactions</span>
                </li>
                <li className="bg-white p-4 rounded-lg border border-gray-200 flex items-start">
                  <span className="text-green-500 mr-3 font-bold">✓</span>
                  <span className="text-gray-700">Manage battery swaps</span>
                </li>
                <li className="bg-white p-4 rounded-lg border border-gray-200 flex items-start">
                  <span className="text-green-500 mr-3 font-bold">✓</span>
                  <span className="text-gray-700">Predict maintenance</span>
                </li>
                <li className="bg-white p-4 rounded-lg border border-gray-200 flex items-start">
                  <span className="text-green-500 mr-3 font-bold">✓</span>
                  <span className="text-gray-700">Improve UI/UX</span>
                </li>
                <li className="bg-white p-4 rounded-lg border border-gray-200 flex items-start">
                  <span className="text-green-500 mr-3 font-bold">✓</span>
                  <span className="text-gray-700">Fraud prevention</span>
                </li>
                <li className="bg-white p-4 rounded-lg border border-gray-200 flex items-start">
                  <span className="text-green-500 mr-3 font-bold">✓</span>
                  <span className="text-gray-700">Customer support</span>
                </li>
              </ul>
            </section>

            {/* Data Security Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-[#334DA0]">Data Security</h2>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <p className="text-gray-700 leading-relaxed mb-4">
                  We implement industry-standard security measures including SSL encryption for all data transfers. Your payment information is processed through PCI-DSS compliant gateways.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm italic">
                  However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>
            </section>

            {/* Contact Information Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-[#334DA0]">Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you have any questions regarding this policy or your data rights, please reach out to us:
              </p>
              
              <div className="bg-gray-100 p-8 rounded-lg border border-gray-300 space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
                  <a href="mailto:support@exterenergy.com" className="text-[#334DA0] hover:underline">
                    support@exterenergy.com
                  </a>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Registered Address</h3>
                  <p className="text-gray-700">
                    NO. 638, Aiswarya House, New Extension,<br />
                    Behind Sathya Sai Baba Ashram, Kadugodi,<br />
                    Bengaluru, Karnataka 560067
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#334DA0] text-white py-8 px-4">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl text-center">
          <p className="text-sm">
            © 2024 Exter Energy. All rights reserved.
          </p>
          <p className="text-xs mt-2 opacity-80">
            Operated by Pravit Tech Labs Private Limited
          </p>
        </div>
      </footer>
    </div>
  )
}
