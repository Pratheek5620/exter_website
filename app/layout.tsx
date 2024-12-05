import type { Metadata } from "next";
import { Poppins } from 'next/font/google'  
import "./globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "exter",
  description: "exter Battery-swapping technology is a process where electric vehicle (EV) batteries can be quickly and easily swapped out for fully charged ones at battery swapping stations. This technology has several benefits and can play a significant role in reducing carbon emissions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="poppins.className">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
