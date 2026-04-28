import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Navbar from "@/components/Navbar";
import { clinicInfo } from "@/lib/clinic";

const siteUrl = "https://dr-yasmin-dental-clinic.vercel.app";

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
    "Dr. Yasmin Dental Clinic in Vadapalani, Chennai — affordable dental care including teeth cleaning, root canal, implants, whitening & more. Book your appointment today.",
  keywords: [
    "dental clinic Chennai",
    "dentist Vadapalani",
    "teeth cleaning Chennai",
    "root canal Chennai",
    "dental implants Vadapalani",
    "best dentist Arcot Road",
  ],
  alternates: { canonical: siteUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Dr. Yasmin Dental Clinic Chennai",
    description: "Expert dental care in Vadapalani, Chennai. Affordable treatments.",
    url: siteUrl,
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
      <head>
        <meta
          name="description"
          content="Dr. Yasmin Dental Clinic in Vadapalani, Chennai — affordable dental care including teeth cleaning, root canal, implants, whitening & more. Book your appointment today."
        />
        <meta
          name="keywords"
          content="dental clinic Chennai, dentist Vadapalani, teeth cleaning Chennai, root canal Chennai, dental implants Vadapalani, best dentist Arcot Road"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="google-site-verification"
          content="V7z08_4Lx_HcCK5zFX-MNmttJoKh8ilPhFiTwoX_BXw"
        />
        <link rel="canonical" href="https://dr-yasmin-dental-clinic.vercel.app" />
        <meta property="og:title" content="Dr. Yasmin Dental Clinic Chennai" />
        <meta
          property="og:description"
          content="Expert dental care in Vadapalani, Chennai. Affordable treatments."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dr-yasmin-dental-clinic.vercel.app" />
      </head>
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
