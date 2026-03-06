"use client"
import Link from "next/link"
import Image from "next/image"

export default function TermsAndConditions() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#334DA0]">Terms & Conditions</h1>
            <p className="text-lg text-gray-700 mb-2">
              Last Updated: March 2026
            </p>
            <p className="text-lg text-gray-700 mb-12">
              Welcome to Exter Energy. This website and our associated services are owned and operated by PRAVIT TECH LABS PRIVATE LIMITED (hereinafter referred to as "the Company"). By accessing our website or using our battery swapping services, you agree to comply with and be bound by the following terms and conditions.
            </p>

            {/* 1. Legal Entity */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-[#334DA0]">1. Legal Entity</h2>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <p className="text-gray-700 leading-relaxed">
                  All transactions, agreements, and service contracts are entered into with{" "}
                  <span className="font-semibold text-gray-800">PRAVIT TECH LABS PRIVATE LIMITED</span>, a company
                  incorporated under the laws of India, with its registered office at:
                </p>
                <p className="text-gray-700 mt-3">
                  638, Kadugodi Main Road, Sathya Sai Ashram Whitefield, Kadugodi,<br />
                  Bengaluru, Karnataka 560067
                </p>
              </div>
            </section>

            {/* 2. Eligibility */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-[#334DA0]">2. Eligibility</h2>
              <p className="text-gray-700 leading-relaxed">
                To use our services, you must be at least <span className="font-semibold text-gray-800">18 years of age</span> and possess a valid driving license for the vehicle being serviced.
              </p>
            </section>

            {/* 3. Service Description */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-[#334DA0]">3. Service Description</h2>
              <p className="text-gray-700 leading-relaxed">
                Exter Energy provides electric vehicle battery swapping solutions and related EV infrastructure services. The availability of fully charged batteries is subject to station-specific inventory.
              </p>
            </section>

            {/* 4. Payments and Subscriptions */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-[#334DA0]">4. Payments and Subscriptions</h2>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Authorized Payments</h3>
                  <p className="text-gray-700">
                    All payments must be made through our authorized payment gateways or the Exter Energy mobile app.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Pricing Changes</h3>
                  <p className="text-gray-700">
                    We reserve the right to change our subscription models or swap fees with prior notice to active users.
                  </p>
                </div>
              </div>
            </section>

            {/* 5. Intellectual Property */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-[#334DA0]">5. Intellectual Property</h2>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <p className="text-gray-700 leading-relaxed">
                  The brand name "Exter Energy," logos, and website content are the intellectual property of{" "}
                  <span className="font-semibold text-gray-800">PRAVIT TECH LABS PRIVATE LIMITED</span>. Unauthorized
                  use is strictly prohibited.
                </p>
              </div>
            </section>

            {/* 6. Limitation of Liability */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-[#334DA0]">6. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                The Company shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our battery swapping services.
              </p>
            </section>

            {/* 7. Governing Law */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-[#334DA0]">7. Governing Law</h2>
              <div className="bg-gray-100 p-8 rounded-lg border border-gray-300 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  These terms shall be governed by and construed in accordance with the laws of India. Any disputes
                  shall be subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka.
                </p>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Registered Office</h3>
                  <p className="text-gray-700">
                    PRAVIT TECH LABS PRIVATE LIMITED<br />
                    638, Kadugodi Main Road, Sathya Sai Ashram Whitefield, Kadugodi,<br />
                    Bengaluru, Karnataka 560067
                  </p>
                </div>
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
              </div>
            </section>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center justify-center px-4 md:px-6 border-t bg-[#334DA0] text-white">
        <div className="items-center justify-between w-full">
          <p className="text-center text-xs text-gray-200 mb-1">
            © 2026 Exter Energy. All Rights Reserved. | Legal Entity: Pravit Tech Labs Private Limited | GSTIN: 29AALCP5358E1Z1
          </p>
          <p className="text-center text-xs text-gray-300 mb-1">
            <span className="font-semibold text-gray-200">Corporate Office:</span> 1983, S End D Cross Rd, KSRTC Layout, Jayanagara 9th Block, J. P. Nagar, Bengaluru, Karnataka 560078
          </p>
          <p className="text-center text-xs text-gray-300 mb-1">
            <span className="font-semibold text-gray-200">Registered Office:</span> Pravit Tech Labs Private Limited (Exter Energy), 638, Kadugodi Main Road, Sathya Sai Ashram Whitefield, Kadugodi, Bengaluru, Karnataka 560067
          </p>
          <p className="text-center text-xs text-gray-200">
  Contact: <a href="tel:+918904094545" className="hover:underline">+91 8904094545</a> | <a href="mailto:support@exterenergy.com" className="hover:underline">support@exterenergy.com</a> | <Link href="/PrivacyPolicy" className="hover:underline">Privacy Policy</Link> | <Link href="/TermsandConditions" className="hover:underline">Terms & Conditions</Link> | <Link href="/TradePolicy" className="hover:underline">Trade Policy</Link>
</p>
        </div>
      </footer>
    </div>
  )
}