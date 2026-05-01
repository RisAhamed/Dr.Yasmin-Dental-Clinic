import type { Metadata } from "next";
import Image from "next/image";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { clinicInfo } from "@/lib/clinic";

export const metadata: Metadata = {
  title: `About Us | ${clinicInfo.name}`,
  description: `Learn about ${clinicInfo.name} and our trusted 24/7 dental care in Vadapalani, Chennai.`,
  alternates: { canonical: `${clinicInfo.website}/about` },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#0A7EA4] py-12 md:py-16 lg:py-20 text-white text-center px-4">
        <h1
          className="font-bold"
          style={{ fontSize: "clamp(24px, 3.5vw, 40px)", lineHeight: 1.3 }}
        >
          About Supreme Multi-Speciality Dental Centre
        </h1>
        <p
          className="mt-3"
          style={{ fontSize: "clamp(14px, 1.5vw, 18px)", lineHeight: 1.6 }}
        >
          15+ Years of Trusted Dental Care in Vadapalani, Chennai
        </p>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          <ScrollReveal direction="left">
            <Image
              src="/services/Images/doctor%20images.jpeg"
              alt="Dr. Supriya at Supreme Multi-Speciality Dental Centre Chennai"
              width={700}
              height={900}
              className="rounded-2xl shadow-xl w-full object-cover"
              style={{ aspectRatio: "4 / 5" }}
            />
          </ScrollReveal>

          <div>
            <h2
              className="font-bold text-[#1A1A2E]"
              style={{ fontSize: "clamp(22px, 3.5vw, 32px)", lineHeight: 1.4 }}
            >
              Meet Our Doctor
            </h2>
            <p className="text-[#5A5A7A] mt-4" style={{ fontSize: "clamp(14px, 1.5vw, 16px)", lineHeight: 1.7 }}>
              Supreme Multi-Speciality Dental Centre has been serving the families of Vadapalani,
              Chennai for over 15 years. Located on Kodambakkam Saidapet Road, near Vadapalani
              Masjid, our clinic is a trusted name in dental healthcare.
            </p>
            <p className="text-[#5A5A7A] mt-4" style={{ fontSize: "clamp(14px, 1.5vw, 16px)", lineHeight: 1.7 }}>
              We provide a complete range of dental services — from simple check-ups and cleaning
              to advanced implants and smile makeovers. We are one of very few clinics in Chennai
              to offer true 24/7 emergency dental care, so you&apos;re never left suffering.
            </p>
            <p className="text-[#5A5A7A] mt-4" style={{ fontSize: "clamp(14px, 1.5vw, 16px)", lineHeight: 1.7 }}>
              Our approach is rooted in compassion, transparency, and modern dentistry. We use the
              latest equipment and follow strict sterilisation protocols to ensure every
              patient&apos;s safety and comfort.
            </p>

            <div className="bg-[#0A7EA4] rounded-2xl p-5 md:p-6 text-white mt-6">
              <p style={{ fontSize: "clamp(14px, 1.5vw, 16px)", lineHeight: 1.6 }}>
                <strong>Our Mission:</strong> {clinicInfo.mission}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-[#F9FCFF]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2
            className="font-bold text-[#1A1A2E] text-center mb-8 md:mb-10"
            style={{ fontSize: "clamp(22px, 3.5vw, 32px)", lineHeight: 1.4 }}
          >
            Our Clinic
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <ScrollReveal direction="up" delay={0}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/services/Images/clinic%20chair.jpeg"
                  alt="State-of-the-Art Treatment Chair at Supreme Multi-Speciality Dental Centre"
                  width={600}
                  height={400}
                  className="w-full h-[200px] md:h-[250px] object-cover"
                />
                <div className="p-4 text-center">
                  <p className="text-[#1A1A2E] font-semibold">State-of-the-Art Treatment Chair</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={150}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/services/Images/clinic%20chair-2.jpeg"
                  alt="Modern Dental Equipment at Supreme Multi-Speciality Dental Centre"
                  width={600}
                  height={400}
                  className="w-full h-[200px] md:h-[250px] object-cover"
                />
                <div className="p-4 text-center">
                  <p className="text-[#1A1A2E] font-semibold">State-of-the-Art Treatment Chair</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
