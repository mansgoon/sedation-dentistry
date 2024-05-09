import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar.js";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sedation Dentistry Mississauga",
  description: "Our office provides Sedation Dentistry services in Mississauga. Conscious sedation and General Anesthesia (fully unconscious sedation) are available.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.ico" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}