import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Navbar from "@/components/Navbar";
import { clinicInfo } from "@/lib/clinic";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Yasmin Dental Clinic | 24/7 Dentist in Vadapalani, Chennai",
  description:
    "Dr. Yasmin Dental Clinic — Expert dental care in Vadapalani, Chennai. Open 24 hours, 7 days a week. Services include general dentistry, cosmetic dentistry, root canal, dental implants, teeth whitening and emergency dental care.",
  keywords: [
    "dental clinic Vadapalani",
    "dentist Chennai",
    "24/7 dental clinic Chennai",
    "root canal Chennai",
    "teeth whitening Vadapalani",
    "dental implants Chennai",
    "emergency dentist Chennai open now",
    "best dentist Arcot Road Chennai",
    "Dr Yasmin dental clinic",
    "paediatric dentist Chennai",
  ],
  alternates: { canonical: clinicInfo.website },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Dr. Yasmin Dental Clinic | 24/7 Dentist in Vadapalani Chennai",
    description: "Comprehensive dental care open 24/7 in Vadapalani, Chennai.",
    url: clinicInfo.website,
    siteName: clinicInfo.name,
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[#1A1A2E]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingButtons />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              name: clinicInfo.name,
              image: `${clinicInfo.website}/og-image.jpg`,
              url: clinicInfo.website,
              telephone: clinicInfo.phone,
              address: {
                "@type": "PostalAddress",
                streetAddress: clinicInfo.addressLine1,
                addressLocality: "Vadapalani",
                addressRegion: "Tamil Nadu",
                postalCode: "600026",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: clinicInfo.latitude,
                longitude: clinicInfo.longitude,
              },
              openingHours: "Mo-Su 00:00-24:00",
              hasMap: `https://maps.google.com/?q=${clinicInfo.latitude},${clinicInfo.longitude}`,
              sameAs: [
                "https://www.facebook.com/dryasmindental",
                "https://www.instagram.com/dryasmindental",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
