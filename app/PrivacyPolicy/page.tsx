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
              Last Updated: March 2026
            </p>
            <p className="text-lg text-gray-700 mb-12">
              Welcome to Exter Energy, a brand owned and operated by Parvit Technologies ("Company", "we", "us", or "our"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy applies to all information collected through our website (<a href="https://exterenergy.com" className="text-[#334DA0] hover:underline">https://exterenergy.com</a>), our mobile application, and our communication channels, including WhatsApp.
            </p>

            {/* 1. Information We Collect */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-[#334DA0]">1. Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We collect personal information that you voluntarily provide to us when you register on the Website, express an interest in obtaining information about us or our products and services, or when you participate in activities on the Website.
              </p>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Personal Identifiers</h3>
                  <p className="text-gray-700">
                    Name, phone number, email address, and billing/shipping address.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Business Details</h3>
                  <p className="text-gray-700">
                    GST number and business name (if applicable for B2B services).
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Technical Data</h3>
                  <p className="text-gray-700">
                    IP address, browser type, and device information.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">WhatsApp Communication Data</h3>
                  <p className="text-gray-700">
                    If you opt-in to our WhatsApp marketing, we collect your mobile number and chat history to provide better service.
                  </p>
                </div>
              </div>
            </section>

            {/* 2. How We Use Your Information */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-[#334DA0]">2. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the information we collect for several purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>To facilitate account creation and logon process.</li>
                <li>To send administrative information to you (e.g., battery swap updates, service alerts).</li>
                <li>To fulfill and manage your orders, payments, and swaps.</li>
                <li>For Marketing and Promotional Communications: We may use your personal information for our marketing purposes, such as sending updates via WhatsApp, email, or SMS, if this is in accordance with your marketing preferences.</li>
              </ul>
            </section>

            {/* 3. WhatsApp Marketing & Communication */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-[#334DA0]">3. WhatsApp Marketing & Communication</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                By providing your phone number and opting in, you agree to receive automated and manual messages from Exter Energy (Parvit Technologies) on WhatsApp.
              </p>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Consent</h3>
                  <p className="text-gray-700">
                    We only send marketing messages to users who have explicitly opted in.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Opt-out</h3>
                  <p className="text-gray-700">
                    You can stop receiving WhatsApp messages at any time by replying with "STOP" or using the unsubscribe link provided in the chat.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Data Sharing</h3>
                  <p className="text-gray-700">
                    We do not sell your WhatsApp contact details to third parties. Data is shared only with Meta (as the platform provider) to facilitate communication.
                  </p>
                </div>
              </div>
            </section>

            {/* 4. Legal Basis for Processing */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-[#334DA0]">4. Legal Basis for Processing (India)</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We process your information based on your consent and in compliance with the Digital Personal Data Protection (DPDP) Act and other applicable Indian laws. For the purpose of business transparency:
              </p>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Legal Entity</h3>
                  <p className="text-gray-700">Parvit Technologies</p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">GSTIN</h3>
                  <p className="text-gray-700 font-mono">29AALCP5358E1Z1</p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Corporate Office</h3>
                  <p className="text-gray-700">
                    1983, S End D Cross Rd, KSRTC Layout,<br />
                    Jayanagara 9th Block, J. P. Nagar,<br />
                    Bengaluru, Karnataka 560078
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Registered Office (Legal)</h3>
                  <p className="text-gray-700">
                    Parvit Technologies (Exter Energy)<br />
                    638, Kadugodi Main Road, Sathya Sai Ashram Whitefield, Kadugodi<br />
                    Bengaluru, Karnataka 560067
                  </p>
                </div>
              </div>
            </section>

            {/* 5. Data Security */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-[#334DA0]">5. Data Security</h2>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <p className="text-gray-700 leading-relaxed">
                  We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
                </p>
              </div>
            </section>

            {/* 6. Your Privacy Rights */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-[#334DA0]">6. Your Privacy Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Depending on your location, you have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Request access to your personal data.</li>
                <li>Request correction of inaccurate data.</li>
                <li>Request deletion of your data (subject to legal obligations).</li>
                <li>Withdraw consent for marketing at any time.</li>
              </ul>
            </section>

            {/* 7. Contact Us */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-[#334DA0]">7. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you have questions or comments about this policy, you may contact our Grievance Officer at:
              </p>

              <div className="bg-gray-100 p-8 rounded-lg border border-gray-300 space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
                  <a href="mailto:support@exterenergy.com" className="text-[#334DA0] hover:underline">
                    support@exterenergy.com
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Phone</h3>
                  <a href="tel:+918904094545" className="text-[#334DA0] hover:underline">
                    +91 8904094545
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Corporate Office</h3>
                  <p className="text-gray-700">
                    1983, S End D Cross Rd, KSRTC Layout,<br />
                    Jayanagara 9th Block, J. P. Nagar,<br />
                    Bengaluru, Karnataka 560078
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Registered Office (Legal)</h3>
                  <p className="text-gray-700">
                    Parvit Technologies (Exter Energy)<br />
                    638, Kadugodi Main Road, Sathya Sai Ashram Whitefield, Kadugodi<br />
                    Bengaluru, Karnataka 560067
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">GSTIN</h3>
                  <p className="text-gray-700 font-mono">29AALCP5358E1Z1</p>
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
            © 2026 Exter Energy. All rights reserved.
          </p>
          <p className="text-xs mt-2 opacity-80">
            Operated by Parvit Technologies
          </p>
        </div>
      </footer>
    </div>
  )
}
