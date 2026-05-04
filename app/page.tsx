import Link from "next/link";
import { Clock, Sparkles, Stethoscope } from "lucide-react";

import GoogleMap from "@/components/GoogleMap";
import HeroSlider from "@/components/HeroSlider";
import SectionDivider from "@/components/SectionDivider";
import ServiceCards from "@/components/ServiceCards";

import StatsCounter from "@/components/StatsCounter";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import WhyChooseUs from "@/components/WhyChooseUs";
import ClinicGallery from "@/components/ClinicGallery";
import { getHomepageServices } from "@/lib/services";

const quickCards: Array<{
  title: string;
  text: string;
  icon: typeof Stethoscope;
  link: string;
  linkText: string;
  emergency?: boolean;
}> = [
  {
    title: "General Dentistry",
    text: "Routine check-ups, X-rays, fillings, extractions & professional cleaning.",
    icon: Stethoscope,
    link: "/services#general-checkup",
    linkText: "Learn More →",
  },
  {
    title: "Cosmetic Dentistry",
    text: "Teeth whitening, veneers, smile makeovers & invisible aligners.",
    icon: Sparkles,
    link: "/services#teeth-whitening",
    linkText: "Learn More →",
  },
  {
    title: "Emergency Dental Care",
    text: "Immediate relief for toothaches, broken teeth & dental trauma — any hour.",
    icon: Clock,
    link: "/contact",
    linkText: "Call Now →",
    emergency: true,
  },
];

export default function HomePage() {
  const homepageServices = getHomepageServices();
  return (
    <>
      <HeroSlider />

      <section className="py-8 md:py-12 bg-[#E8F4FD]">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {quickCards.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.title}
                className="bg-white rounded-xl md:rounded-2xl shadow-md p-6 md:p-8 text-center hover:shadow-xl border-t-4 border-[#0A7EA4]"
              >
                <div className="relative inline-flex">
                  <Icon size={40} color={card.emergency ? "#e11d48" : "#0A7EA4"} />
                  {card.emergency && (
                    <span className="absolute -top-2 -right-3 text-xs bg-red-600 text-white px-2 py-0.5 rounded-full">
                      24/7
                    </span>
                  )}
                </div>
                <h2
                  className="mt-4 font-bold"
                  style={{ fontSize: "clamp(16px, 2vw, 20px)", lineHeight: 1.3 }}
                >
                  {card.title}
                </h2>
                <p
                  className="mt-3 text-[#5A5A7A]"
                  style={{ fontSize: "clamp(13px, 1.5vw, 15px)", lineHeight: 1.6 }}
                >
                  {card.text}
                </p>
                <Link
                  href={card.link}
                  className={`inline-flex mt-4 font-semibold min-h-[44px] flex items-center ${
                    card.emergency ? "text-red-600" : "text-[#0A7EA4]"
                  }`}
                  aria-label={card.title}
                >
                  {card.linkText}
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <SectionDivider />

      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h2
            className="font-bold"
            style={{ fontSize: "clamp(22px, 3.5vw, 36px)", lineHeight: 1.4 }}
          >
            Our Dental Services
          </h2>
          <p
            className="text-[#5A5A7A] mt-3"
            style={{ fontSize: "clamp(14px, 1.5vw, 18px)", lineHeight: 1.6 }}
          >
            Expert care for every dental need — from routine to advanced
          </p>
        </div>
        <div className="mt-8 md:mt-12">
          <ServiceCards services={homepageServices} mode="preview" />
        </div>
        <div className="text-center mt-8 md:mt-10">
          <Link
            href="/services"
            className="bg-[#0A7EA4] hover:bg-[#085f80] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 min-h-[44px] inline-flex items-center"
            aria-label="View all 18 services"
          >
            View All 18 Services →
          </Link>
        </div>
      </section>

      <ClinicGallery />

      <WhyChooseUs />
      <StatsCounter />
      <TestimonialsCarousel />
      <GoogleMap />
    </>
  );
}
