"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

interface GalleryImage {
  src: string;
  alt: string;
  label: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: "/services/Images/Supreme%202.jpg.jpeg",
    alt: "Supreme Multi-Speciality Dental Centre exterior view",
    label: "Clinic Entrance",
  },
  {
    src: "/services/Images/Supreme%203.jpg.jpeg",
    alt: "Supreme Multi-Speciality Dental Centre interior",
    label: "Reception Area",
  },
  {
    src: "/services/Images/clinic%20chair.jpeg",
    alt: "State-of-the-art dental treatment chair",
    label: "Treatment Room",
  },
  {
    src: "/services/Images/clinic%20chair-2.jpeg",
    alt: "Modern dental equipment and chair",
    label: "Treatment Room 2",
  },
  {
    src: "/services/Images/doctor%20images.jpeg",
    alt: "Dr. Supriya at Supreme Multi-Speciality Dental Centre",
    label: "Our Team",
  },
];

export default function ClinicGallery() {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="clinic-gallery" className="py-12 md:py-16 lg:py-20 bg-[#F9FCFF]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2
            className="font-bold text-[#1A1A2E]"
            style={{ fontSize: "clamp(22px, 3.5vw, 36px)", lineHeight: 1.4 }}
          >
            Step Inside Our Clinic
          </h2>
          <p
            className="text-[#5A5A7A] mt-3 max-w-2xl mx-auto"
            style={{ fontSize: "clamp(14px, 1.5vw, 18px)", lineHeight: 1.6 }}
          >
            Modern infrastructure, advanced equipment, and a warm environment
            designed for your comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => {
            const isLarge = index === 0;
            return (
              <motion.div
                key={image.src}
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`relative group overflow-hidden rounded-xl md:rounded-2xl ${
                  isLarge ? "md:row-span-2" : ""
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={isLarge ? 800 : 400}
                  className={`w-full h-full object-cover transition-transform duration-300 ${
                    hoveredIndex === index ? "scale-104" : ""
                  }`}
                  style={
                    isLarge
                      ? { aspectRatio: "1 / 2", objectFit: "cover" }
                      : { aspectRatio: "4 / 3", objectFit: "cover" }
                  }
                />
                <div
                  className={`absolute inset-0 bg-black/25 transition-opacity duration-300 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                />
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <span
                    className="text-white font-semibold"
                    style={{ fontSize: "clamp(14px, 2vw, 18px)" }}
                  >
                    {image.label}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}