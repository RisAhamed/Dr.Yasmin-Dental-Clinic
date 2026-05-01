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
    <section id="clinic-gallery" className="py-20 bg-[#F9FCFF]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E]">
            Step Inside Our Clinic
          </h2>
          <p className="text-[#5A5A7A] mt-3 max-w-2xl mx-auto">
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
                className={`relative group overflow-hidden rounded-2xl ${
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
                  className={`w-full h-full object-cover transition-transform duration-35 ${
                    hoveredIndex === index ? "scale-104" : ""
                  }`}
                  style={
                    isLarge
                      ? { aspectRatio: "1 / 2", objectFit: "cover" }
                      : { aspectRatio: "4 / 3", objectFit: "cover" }
                  }
                />
                <div
                  className={`absolute inset-0 bg-black/25 transition-opacity duration-35 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                />
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-35 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <span className="text-white font-semibold text-lg">
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