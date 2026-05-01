"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

interface GalleryImage {
  src: string;
  alt: string;
}

const smileGalleryImages: GalleryImage[] = [
  {
    src: "/services/Images/WhatsApp Image 2026-05-01 at 12.41.17 PM (1).jpeg",
    alt: "Beautiful smile result after cosmetic dental treatment",
  },
  {
    src: "/services/Images/WhatsApp Image 2026-05-01 at 12.41.17 PM (2).jpeg",
    alt: "Patient smile transformation with teeth whitening",
  },
  {
    src: "/services/Images/WhatsApp Image 2026-05-01 at 12.41.17 PM (3).jpeg",
    alt: "Confident smile after orthodontic treatment",
  },
  {
    src: "/services/Images/WhatsApp Image 2026-05-01 at 12.41.19 PM (1).jpeg",
    alt: "Perfect smile showing healthy teeth",
  },
  {
    src: "/services/Images/WhatsApp Image 2026-05-01 at 12.41.19 PM (2).jpeg",
    alt: "Dental restoration result showcase",
  },
  {
    src: "/services/Images/WhatsApp Image 2026-05-01 at 12.41.19 PM (3).jpeg",
    alt: "Patient happy with new dentures",
  },
];

export default function SmileGallery() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2
            className="font-bold text-[#1A1A2E]"
            style={{ fontSize: "clamp(22px, 3.5vw, 36px)", lineHeight: 1.4 }}
          >
            Real Results from Our Patients
          </h2>
          <p
            className="text-[#5A5A7A] mt-3 max-w-2xl mx-auto"
            style={{ fontSize: "clamp(14px, 1.5vw, 18px)", lineHeight: 1.6 }}
          >
            Transform your smile with our expert dental care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {smileGalleryImages.map((image, index) => (
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
              className="overflow-hidden rounded-xl"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={220}
                className="w-full h-[220px] object-cover hover:scale-104 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}