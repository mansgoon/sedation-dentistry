import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar.js";
import Footer from "@/components/footer.js";
import Head from 'next/head';
import { Coupon } from "@/components/coupon.js"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sedation Dentistry Mississauga",
  description: "Our office provides Sedation Dentistry services in Mississauga. Conscious sedation and General Anesthesia (fully unconscious sedation) are available.",
  icons: {
    icon: './favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head >
        <Head>
        </Head>
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <Coupon/>
      </body>
    </html>
  );
}