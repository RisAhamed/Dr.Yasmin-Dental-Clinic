import type { Metadata } from "next";
import { Clock, MapPin, Phone } from "lucide-react";
import Link from "next/link";

import { clinicInfo } from "@/lib/clinic";

export const metadata: Metadata = {
  title: `Contact Us | ${clinicInfo.name}`,
  description: `Contact ${clinicInfo.name} in Vadapalani, Chennai for 24/7 emergency dental care and live clinic directions.`,
  alternates: { canonical: `${clinicInfo.website}/contact` },
};

export default function ContactPage() {
  return (
    <>
      <section className="h-[300px] md:h-[400px]">
        <iframe
          src={clinicInfo.mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Supreme Multi-Speciality Dental Centre on Google Maps"
          className="rounded-lg"
        />
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <article className="bg-[#F9FCFF] rounded-xl md:rounded-2xl p-6 md:p-8 text-center shadow-sm">
            <MapPin size={40} color="#0A7EA4" className="mx-auto mb-4" />
            <h2
              className="font-bold"
              style={{ fontSize: "clamp(16px, 2vw, 20px)", lineHeight: 1.4 }}
            >
              Our Address
            </h2>
            <p
              className="text-[#5A5A7A] mt-3"
              style={{ fontSize: "clamp(13px, 1.5vw, 16px)", lineHeight: 1.6 }}
            >
              1/5, Kodambakkam Saidapet Road, Vadapalani, Chennai – 600026. Near
              Vadapalani Masjid
            </p>
            <Link
              href={clinicInfo.mapsUrl}
              target="_blank"
              className="inline-flex mt-4 text-[#0A7EA4] font-semibold"
              aria-label="View on Google Maps"
            >
              View on Google Maps →
            </Link>
          </article>

          <article className="bg-[#F9FCFF] rounded-xl md:rounded-2xl p-6 md:p-8 text-center shadow-sm">
            <Phone size={40} color="#0A7EA4" className="mx-auto mb-4" />
            <h2
              className="font-bold"
              style={{ fontSize: "clamp(16px, 2vw, 20px)", lineHeight: 1.4 }}
            >
              Call Us Anytime
            </h2>
            <p
              className="text-[#5A5A7A] mt-3"
              style={{ fontSize: "clamp(13px, 1.5vw, 16px)", lineHeight: 1.6 }}
            >
              {clinicInfo.phone}
              <br />
              Available 24 Hours / 7 Days
            </p>
            <Link
              href={`tel:${clinicInfo.phone.replace(/\s+/g, "")}`}
              className="inline-flex mt-4 text-[#0A7EA4] font-semibold"
              aria-label="Call now"
            >
              Call Now →
            </Link>
          </article>

          <article className="bg-[#F9FCFF] rounded-xl md:rounded-2xl p-6 md:p-8 text-center shadow-sm">
            <Clock size={40} color="#0A7EA4" className="mx-auto mb-4" />
            <h2
              className="font-bold"
              style={{ fontSize: "clamp(16px, 2vw, 20px)", lineHeight: 1.4 }}
            >
              Working Hours
            </h2>
            <p
              className="text-[#5A5A7A] mt-3"
              style={{ fontSize: "clamp(13px, 1.5vw, 16px)", lineHeight: 1.6 }}
            >
              Monday – Sunday: Open 24 Hours
              <br />
              No Holidays | Emergency Available Always
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
