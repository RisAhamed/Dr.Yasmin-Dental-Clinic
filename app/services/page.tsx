import type { Metadata } from "next";

import ServiceCards from "@/components/ServiceCards";
import { clinicInfo } from "@/lib/clinic";
import { getAllServices } from "@/lib/services";

export const metadata: Metadata = {
  title: "Dental Services in Vadapalani Chennai | Supreme Multi-Speciality Dental Centre",
  description:
    "Explore all 18 dental services at Supreme Multi-Speciality Dental Centre, Vadapalani — general dentistry, root canal, implants, whitening, orthodontics and 24/7 emergency dental care in Chennai.",
  alternates: { canonical: `${clinicInfo.website}/services` },
};

export default function ServicesPage() {
  const services = getAllServices();
  const schema = services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: service.title,
    description: service.fullDesc,
    url: `${clinicInfo.website}/services#${service.slug}`,
  }));

  return (
    <section className="py-16 bg-[#F9FCFF]">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h1 className="text-4xl font-bold text-[#1A1A2E]">Our Dental Services</h1>
        <p className="text-[#5A5A7A] mt-3">
          Comprehensive care under one roof — from routine to advanced
        </p>
      </div>
      <ServiceCards services={services} mode="full" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </section>
  );
}
