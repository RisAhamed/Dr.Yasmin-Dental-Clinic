import type { Metadata } from "next";

import AppointmentForm from "@/components/AppointmentForm";
import { clinicInfo } from "@/lib/clinic";

export const metadata: Metadata = {
  title: `Book Appointment | ${clinicInfo.name}`,
  description: `Book a dental appointment with ${clinicInfo.name} in Vadapalani, Chennai.`,
  alternates: { canonical: `${clinicInfo.website}/appointments` },
};

export default function AppointmentsPage() {
  return (
    <>
      <section className="bg-[#0A7EA4] py-16 text-center text-white">
        <h1 className="text-4xl font-bold">Book Your Appointment</h1>
        <p className="mt-3 text-lg">Fill the form below — we&apos;ll confirm within 30 minutes</p>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <AppointmentForm />
          </div>

          <aside className="bg-[#E8F4FD] rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-[#1A1A2E]">Clinic Information</h2>
            <div className="mt-5 space-y-4 text-[#334155]">
              <p>
                📍 122, Arcot Rd, opposite Murugan Temple Arch, Sarvamangala Colony, Vadapalani,
                Chennai – 600026
              </p>
              <p>📞 {clinicInfo.phone} (24/7 Emergency Line)</p>
              <p>✉️ {clinicInfo.email}</p>
              <p>🕐 Open 24 Hours / 7 Days a Week</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
