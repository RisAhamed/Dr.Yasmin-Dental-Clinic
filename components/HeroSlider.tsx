"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

import { clinicInfo } from "@/lib/clinic";

type SlideCta = {
  label: string;
  href: string;
  primary: boolean;
  external?: boolean;
};

type Slide = {
  image: string;
  heading: string;
  subtext: string;
  ctas: SlideCta[];
};

const slides: Slide[] = [
  {
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1400&q=80",
    heading: "Welcome to Supreme Multi-Speciality Dental Centre",
    subtext: "Comprehensive Dental Care — Open 24 Hours, 7 Days a Week",
    ctas: [
      { label: "Get Directions →", href: clinicInfo.mapsUrl, primary: true, external: true },
      { label: "Our Services", href: "/services", primary: false },
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1400&q=80",
    heading: "Your Perfect Smile Starts Here",
    subtext: "Advanced Cosmetic & Restorative Dentistry in Vadapalani",
    ctas: [{ label: "Explore Services →", href: "/services", primary: true }],
  },
  {
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1400&q=80",
    heading: "Trusted by Thousands of Chennai Families",
    subtext: "Gentle, Affordable & Expert Dental Treatment for All Ages",
    ctas: [
      { label: "Get Directions →", href: clinicInfo.mapsUrl, primary: true, external: true },
      { label: "View Testimonials", href: "/#testimonials", primary: false },
    ],
  },
  {
    image: "/services/Images/Supreme%202.jpg.jpeg",
    heading: "Step Inside Our Clinic",
    subtext: "Modern infrastructure with advanced equipment for your comfort",
    ctas: [
      { label: "View Gallery →", href: "/#clinic-gallery", primary: true },
      { label: "About Us", href: "/about", primary: false },
    ],
  },
  {
    image: "/services/Images/Supreme%203.jpg.jpeg",
    heading: "Premium Dental Care in Vadapalani",
    subtext: "State-of-the-art facility designed for your relaxation",
    ctas: [
      { label: "Get Directions →", href: clinicInfo.mapsUrl, primary: true, external: true },
      { label: "Our Services", href: "/services", primary: false },
    ],
  },
] as const;

export default function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, []);

  const goPrev = () => setActive((prev) => (prev - 1 + slides.length) % slides.length);
  const goNext = () => setActive((prev) => (prev + 1) % slides.length);
  const slide = slides[active];

  return (
    <section className="relative min-h-[85vh] md:min-h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.image}
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.2 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt={slide.heading}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 min-h-[85vh] md:min-h-screen flex items-center justify-center px-6 text-center">
        <motion.div
          key={slide.heading}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <h1 className="text-white font-bold text-4xl md:text-6xl">{slide.heading}</h1>
          <p className="text-gray-200 text-lg md:text-2xl mt-4">{slide.subtext}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {slide.ctas.map((cta) => (
              <Link
                key={cta.label}
                href={cta.href}
                target={cta.external ? "_blank" : undefined}
                className={
                  cta.primary
                    ? "bg-[#0A7EA4] hover:bg-[#085f80] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
                    : "border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
                }
                aria-label={cta.label}
              >
                {cta.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="hidden md:flex absolute inset-y-0 left-4 items-center">
        <button
          type="button"
          onClick={goPrev}
          className="p-3 rounded-full bg-white/20 text-white hover:bg-white/30"
          aria-label="Previous slide"
        >
          <ChevronLeft />
        </button>
      </div>
      <div className="hidden md:flex absolute inset-y-0 right-4 items-center">
        <button
          type="button"
          onClick={goNext}
          className="p-3 rounded-full bg-white/20 text-white hover:bg-white/30"
          aria-label="Next slide"
        >
          <ChevronRight />
        </button>
      </div>

      <div className="absolute z-10 bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {slides.map((item, index) => (
          <button
            key={item.image}
            type="button"
            onClick={() => setActive(index)}
            className={`w-3 h-3 rounded-full ${active === index ? "bg-white" : "bg-white/40"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
