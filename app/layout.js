import "./globals.css";
import { Fraunces, Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Revi's Group Tuitions | Std V-X Tuitions in Kalyan (W), Since 2008",
  description:
    "Revi's Group Tuitions, Khadakpada, Kalyan (West) — Std V to X, State Board & CBSE. 20+ years of teaching experience, small batches, consistently 100% SSC results. Call 93210 16779.",
  keywords: [
    "Revi's Group Tuitions",
    "tuition classes Kalyan",
    "SSC tuition Khadakpada",
    "Std 5th to 10th tuition Kalyan West",
    "CBSE tuition Kalyan",
    "State Board tuition Kalyan",
  ],
  openGraph: {
    title: "Revi's Group Tuitions | Std V-X, Kalyan (W), Since 2008",
    description:
      "20+ years of teaching experience. Small batches. Consistently 100% SSC results. Std V to X, State Board & CBSE.",
    images: ["/images/family.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body style={{ fontFamily: "var(--font-inter)" }} className="bg-white text-[#1C2430]">
        <NavBar />
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
