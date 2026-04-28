import Link from "next/link";

import { clinicInfo } from "@/lib/clinic";

export default function GoogleMap() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl font-bold text-[#1A1A2E]">Visit Our Clinic</h2>
          <p className="text-[#5A5A7A] mt-4">
            {clinicInfo.addressLine1}, {clinicInfo.addressLine2}
          </p>
          <p className="mt-3">📞 {clinicInfo.phone}</p>
          <p>✉️ {clinicInfo.email}</p>
          <p>🕐 {clinicInfo.hours}</p>
          <Link
            href={clinicInfo.mapsUrl}
            target="_blank"
            className="inline-flex mt-6 border border-[#0A7EA4] text-[#0A7EA4] px-6 py-3 rounded-full font-semibold"
            aria-label="Get directions on Google Maps"
          >
            Get Directions
          </Link>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-md">
          <iframe
            src={clinicInfo.mapEmbedUrl}
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Dr. Yasmin Dental Clinic Location"
          />
        </div>
      </div>
    </section>
  );
}
