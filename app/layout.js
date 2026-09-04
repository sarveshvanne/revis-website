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
  metadataBase: new URL("https://www.revisgrouptuitions.com"),

  title: {
    default: "Revi's Group Tuitions | Std V-X Tuitions in Kalyan West",
    template: "%s | Revi's Group Tuitions",
  },

  description:
    "Revi's Group Tuitions in Khadakpada, Kalyan West - Std V to X tuition classes for State Board and CBSE students. Small batches, personal attention and 20+ years of teaching experience.",

  keywords: [
    "Revi's Group Tuitions",
    "tuition classes in Kalyan",
    "tuition classes in Kalyan West",
    "tuition classes Khadakpada",
    "SSC tuition Kalyan",
    "Std 5th to 10th tuition Kalyan",
    "CBSE tuition Kalyan",
    "State Board tuition Kalyan",
    "SSC classes Khadakpada",
    "school tuition classes Kalyan West",
  ],

  authors: [{ name: "Revi's Group Tuitions" }],
  creator: "Revi's Group Tuitions",
  publisher: "Revi's Group Tuitions",

  alternates: {
    canonical: "https://www.revisgrouptuitions.com",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.revisgrouptuitions.com",
    siteName: "Revi's Group Tuitions",
    title: "Revi's Group Tuitions | Std V-X Tuitions in Kalyan West",
    description:
      "Std V to X tuition classes in Kalyan West for State Board and CBSE students. Small batches, personal attention and 20+ years of teaching experience.",
    images: [
      {
        url: "/images/family.jpg",
        width: 1200,
        height: 630,
        alt: "Revi's Group Tuitions - Kalyan West",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Revi's Group Tuitions | Kalyan West",
    description:
      "Std V to X tuition classes for State Board and CBSE students in Kalyan West.",
    images: ["/images/family.jpg"],
  },

  category: "Education",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": ["EducationalOrganization", "LocalBusiness"],

  name: "Revi's Group Tuitions",

  url: "https://www.revisgrouptuitions.com",

  description:
    "Revi's Group Tuitions in Khadakpada, Kalyan West provides tuition classes for Std V to X students following State Board and CBSE curricula.",

  telephone: ["+91-9321016779", "+91-9833661297"],

  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Shop No. 6/8, Sai Sankul Phase 1, Near Sai Sagar Hotel, Sai Chowk",
    addressLocality: "Kalyan West",
    addressRegion: "Maharashtra",
    postalCode: "421301",
    addressCountry: "IN",
  },

  areaServed: {
    "@type": "City",
    name: "Kalyan",
  },

  sameAs: ["https://www.revisgrouptuitions.com"],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        <NavBar />
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}