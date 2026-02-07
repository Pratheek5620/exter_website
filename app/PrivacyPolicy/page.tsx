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
            <p className="text-lg text-gray-700 mb-2">
              Last Updated: [Date]
            </p>
            <p className="text-lg text-gray-700 mb-12">
              Exter Energy respects your privacy and is committed to protecting your personal data.
            </p>

            {/* 1. Introduction */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[#334DA0]">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                Exter Energy ("Exter", "we", "us", "our") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, process, disclose, and safeguard your personal information when you use our website, applications, and battery swapping services.
              </p>
            </section>

            {/* 2. Scope */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[#334DA0]">2. Scope</h2>
              <p className="text-gray-700 leading-relaxed">
                This policy applies to information collected through our website, mobile applications, battery swapping services, customer support interactions, and partner interfaces.
              </p>
            </section>

            {/* 3. Information We Collect */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-[#334DA0]">3. Information We Collect</h2>
              
              <div className="space-y-6">
                {/* Personal Information */}
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Personal Information</h3>
                  <p className="text-gray-700">
                    Name, phone number, email address, address, account details.
                  </p>
                </div>

                {/* Sensitive Information */}
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Sensitive Information</h3>
                  <p className="text-gray-700">
                    Payment details, location data related to battery swapping, identity verification data where required.
                  </p>
                </div>

                {/* Usage Data */}
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Usage Data</h3>
                  <p className="text-gray-700">
                    Device information, IP address, app usage patterns, analytics data.
                  </p>
                </div>
              </div>
            </section>

            {/* 4. Use of Information */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-[#334DA0]">4. Use of Information</h2>
              <p className="text-gray-700 leading-relaxed">
                We use information to provide services, manage accounts, process payments, improve our platform, communicate updates, and send marketing communications with consent.
              </p>
            </section>

            {/* 5. Sharing of Information */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-[#334DA0]">5. Sharing of Information</h2>
              <p className="text-gray-700 leading-relaxed">
                Information may be shared with service providers, payment processors, analytics partners, or legal authorities when required by law. All third parties are bound by confidentiality obligations.
              </p>
            </section>

            {/* 6. Cookies & Tracking */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-[#334DA0]">6. Cookies & Tracking</h2>
              <p className="text-gray-700 leading-relaxed">
                We use cookies and similar technologies to improve user experience and analyze traffic. You may control cookies through browser settings.
              </p>
            </section>

            {/* 7. Data Security */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-[#334DA0]">7. Data Security</h2>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <p className="text-gray-700 leading-relaxed">
                  We use reasonable technical and organizational measures to protect personal data. However, no system is completely secure.
                </p>
              </div>
            </section>

            {/* 8. Data Retention */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-[#334DA0]">8. Data Retention</h2>
              <p className="text-gray-700 leading-relaxed">
                Personal information is retained only as long as necessary for legal and operational purposes.
              </p>
            </section>

            {/* 9. User Rights */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-[#334DA0]">9. User Rights</h2>
              <p className="text-gray-700 leading-relaxed">
                You may request access, correction, deletion, restriction, or portability of your data and withdraw consent where applicable.
              </p>
            </section>

            {/* 10. Children's Privacy */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-[#334DA0]">10. Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Our services are not intended for minors. We do not knowingly collect data from children.
              </p>
            </section>

            {/* 11. International Transfers */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-[#334DA0]">11. International Transfers</h2>
              <p className="text-gray-700 leading-relaxed">
                Data transfers outside India are protected using appropriate safeguards in compliance with applicable laws.
              </p>
            </section>

            {/* 12. Policy Updates */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-[#334DA0]">12. Policy Updates</h2>
              <p className="text-gray-700 leading-relaxed">
                This policy may be updated periodically. Updates will be published on our website.
              </p>
            </section>

            {/* 13. Contact Information */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-[#334DA0]">13. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                For questions or concerns, contact:
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
