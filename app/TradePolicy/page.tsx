"use client"
import Link from "next/link"
import Image from "next/image"

export default function TradePolicy() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#334DA0]">Trade Policy</h1>
            <p className="text-lg text-gray-700 mb-12">
              At Exter Energy, operated by{" "}
              <span className="font-semibold text-gray-800">PRAVIT TECH LABS PRIVATE LIMITED</span>, we aim to provide
              a seamless energy-as-a-service experience. This policy outlines our procedures for service delivery and
              product fulfillment.
            </p>

            {/* 1. Service Delivery */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-[#334DA0]">1. Service Delivery (Battery Swapping)</h2>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Delivery Method</h3>
                  <p className="text-gray-700">
                    Our primary service is battery swapping, which is an on-site, self-service, or technician-assisted
                    process at designated Exter Energy Stations.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Timeline</h3>
                  <p className="text-gray-700">
                    Service is fulfilled instantly upon the user arriving at a station and completing the verification
                    process via the mobile app.
                  </p>
                </div>
              </div>
            </section>

            {/* 2. Equipment & Hardware Sales */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[#334DA0]">2. Equipment & Hardware Sales</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you purchase hardware (such as home chargers or vehicle kits) directly from our website:
              </p>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Processing Time</h3>
                  <p className="text-gray-700">
                    Orders are processed within <span className="font-semibold text-gray-800">48–72 hours</span>.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Shipping</h3>
                  <p className="text-gray-700">
                    We ship across India using registered courier partners. Estimated delivery time is{" "}
                    <span className="font-semibold text-gray-800">5–7 business days</span> depending on the location.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Tracking</h3>
                  <p className="text-gray-700">
                    A tracking ID will be sent to your registered email/phone number once the item is dispatched.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. Cancellations */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-[#334DA0]">3. Cancellations</h2>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Subscriptions</h3>
                  <p className="text-gray-700">
                    Users can cancel their subscription at any time via the app; however, the cancellation will take
                    effect at the end of the current billing cycle.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Hardware Orders</h3>
                  <p className="text-gray-700">
                    Orders can only be cancelled before they are dispatched for shipping.
                  </p>
                </div>
              </div>
            </section>

            {/* 4. Service Disruptions */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-[#334DA0]">4. Service Disruptions</h2>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <p className="text-gray-700 leading-relaxed">
                  While we strive for 100% uptime, service may be temporarily unavailable due to maintenance at
                  specific swapping stations. Users will be notified of such outages via the app.
                </p>
              </div>
            </section>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center justify-center px-4 md:px-6 border-t bg-[#334DA0] text-white">
        <div className="items-center justify-between w-full">
          <p className="text-center text-xs text-gray-200 mb-1">
            © 2026 Exter Energy. All Rights Reserved. | Legal Entity: PRAVIT TECH LABS PRIVATE LIMITED | GSTIN: 29AALCP5358E1Z1
          </p>
          <p className="text-center text-xs text-gray-300 mb-1">
            <span className="font-semibold text-gray-200">Corporate Office:</span> 1983, S End D Cross Rd, KSRTC Layout, Jayanagara 9th Block, J. P. Nagar, Bengaluru, Karnataka 560078
          </p>
          <p className="text-center text-xs text-gray-300 mb-1">
            <span className="font-semibold text-gray-200">Registered Office:</span> PRAVIT TECH LABS PRIVATE LIMITED (Exter Energy), 638, Kadugodi Main Road, Sathya Sai Ashram Whitefield, Kadugodi, Bengaluru, Karnataka 560067
          </p>
          <p className="text-center text-xs text-gray-200">
  Contact: <a href="tel:+918904094545" className="hover:underline">+91 8904094545</a> | <a href="mailto:support@exterenergy.com" className="hover:underline">support@exterenergy.com</a> | <Link href="/PrivacyPolicy" className="hover:underline">Privacy Policy</Link> | <Link href="/TermsandConditions" className="hover:underline">Terms & Conditions</Link> | <Link href="/TradePolicy" className="hover:underline">Trade Policy</Link>
</p>
        </div>
      </footer>
    </div>
  )
}