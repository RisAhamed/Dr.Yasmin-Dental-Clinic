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
      <section className="bg-[#0A7EA4] py-20 text-white text-center">
        <h1 className="text-4xl font-bold">About Supreme Multi-Speciality Dental Centre</h1>
        <p className="mt-3 text-lg">15+ Years of Trusted Dental Care in Vadapalani, Chennai</p>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <ScrollReveal direction="left">
            <Image
              src="/services/Images/doctor%20images.jpeg"
              alt="Dr. Supriya at Supreme Multi-Speciality Dental Centre Chennai"
              width={700}
              height={900}
              className="rounded-[16px] shadow-xl w-full h-auto object-cover"
            />
          </ScrollReveal>

          <div>
            <h2 className="text-3xl font-bold text-[#1A1A2E]">Meet Our Doctor</h2>
            <p className="text-[#5A5A7A] mt-4">
              Supreme Multi-Speciality Dental Centre has been serving the families of Vadapalani,
              Chennai for over 15 years. Located on Kodambakkam Saidapet Road, near Vadapalani
              Masjid, our clinic is a trusted name in dental healthcare.
            </p>
            <p className="text-[#5A5A7A] mt-4">
              We provide a complete range of dental services — from simple check-ups and cleaning
              to advanced implants and smile makeovers. We are one of very few clinics in Chennai
              to offer true 24/7 emergency dental care, so you&apos;re never left suffering.
            </p>
            <p className="text-[#5A5A7A] mt-4">
              Our approach is rooted in compassion, transparency, and modern dentistry. We use the
              latest equipment and follow strict sterilisation protocols to ensure every
              patient&apos;s safety and comfort.
            </p>

            <div className="bg-[#0A7EA4] rounded-2xl p-6 text-white mt-6">
              <p>
                <strong>Our Mission:</strong> {clinicInfo.mission}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F9FCFF]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#1A1A2E] text-center mb-10">Our Clinic</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal direction="up" delay={0}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/services/Images/clinic%20chair.jpeg"
                  alt="State-of-the-Art Treatment Chair at Supreme Multi-Speciality Dental Centre"
                  width={600}
                  height={400}
                  className="w-full h-[300px] object-cover"
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
                  className="w-full h-[300px] object-cover"
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
