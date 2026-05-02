"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

import type { Service, ServiceCategory } from "@/lib/service-types";
import { clinicInfo } from "@/lib/clinic";
import { serviceCategories } from "@/lib/service-types";

type Props = {
  services: Service[];
  mode: "preview" | "full";
};

export default function ServiceCards({ services, mode }: Props) {
  const [category, setCategory] = useState<"All" | ServiceCategory>("All");
  const [expandedSlug, setExpandedSlug] = useState<string | null>(() => {
    if (typeof window === "undefined") {
      return null;
    }
    const slug = window.location.hash.replace("#", "");
    return slug || null;
  });

  useEffect(() => {
    if (mode !== "full") {
      return;
    }
    const slug = window.location.hash.replace("#", "");
    if (slug) {
      document.getElementById(slug)?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [mode]);

  const filtered = useMemo(() => {
    if (mode !== "full" || category === "All") {
      return services;
    }
    return services.filter((service) => service.category === category);
  }, [category, mode, services]);

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6">
      {mode === "full" && (
        <div className="mb-6 md:mb-10 overflow-x-auto pb-2">
          <div className="flex flex-nowrap md:flex-wrap items-center gap-2 md:gap-3">
            {serviceCategories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={`px-4 py-2 rounded-full border transition-all duration-300 flex-shrink-0 min-h-[44px] ${
                  category === item
                    ? "bg-[#0A7EA4] text-white border-[#0A7EA4]"
                    : "bg-white border-gray-300 text-gray-600 hover:border-[#0A7EA4]"
                }`}
                aria-label={`Filter ${item} services`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}

      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6"
      >
        <AnimatePresence>
          {filtered.map((service) => {
            const isExpanded = expandedSlug === service.slug;
            const emergency = service.slug === "emergency-dental";

            return (
              <motion.article
                layout
                key={service.slug}
                id={service.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 ${
                  emergency && mode === "preview" ? "border-2 border-red-500" : ""
                }`}
                aria-label={service.title}
              >
                <div className="h-[200px] relative overflow-hidden">
                  {service.imageSrc2 ? (
                    <div className="flex w-full h-[180px] overflow-hidden rounded-t-xl">
                      <Image
                        src={service.imageSrc2}
                        alt={service.imageAlt2 || service.imageAlt}
                        width={300}
                        height={180}
                        className="w-1/2 h-[180px] object-cover rounded-tl-xl"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <Image
                        src={service.imageSrc}
                        alt={service.imageAlt}
                        width={300}
                        height={180}
                        className="w-1/2 h-[180px] object-cover rounded-tr-xl"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  ) : (
                    <Image
                      src={service.imageSrc}
                      alt={service.imageAlt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  )}
                </div>

                <div className="p-4 md:p-5">
                  <span
                    className={`inline-flex px-2.5 py-1 text-[11px] font-semibold rounded-full ${service.badgeColor} ${
                      service.slug === "emergency-dental" ? "animate-pulse" : ""
                    }`}
                  >
                    {service.category}
                  </span>
                  <h2
                    className="mt-3 md:mt-4 font-bold text-[#1A1A2E]"
                    style={{ fontSize: "clamp(15px, 2vw, 18px)", lineHeight: 1.3 }}
                  >
                    {service.title}
                  </h2>
                  <p
                    className="text-[#5A5A7A] mt-2"
                    style={{ fontSize: "clamp(13px, 1.5vw, 14px)", lineHeight: 1.6 }}
                  >
                    {service.shortDesc}
                  </p>

                  {mode === "full" && (
                    <div className="mt-4 pt-4 border-t border-slate-200 space-y-1 text-sm">
                      <p>⏱ Duration: {service.duration}</p>
                    </div>
                  )}

                  {mode === "preview" ? (
                    <Link
                      href={`/services#${service.slug}`}
                      className="inline-flex mt-4 text-[#0A7EA4] font-semibold"
                      aria-label={`Learn more about ${service.title}`}
                    >
                      Learn More →
                    </Link>
                  ) : (
                    <div className="mt-4 md:mt-5 flex flex-wrap items-center gap-2 md:gap-3">
                      <button
                        type="button"
                        onClick={() => setExpandedSlug(isExpanded ? null : service.slug)}
                        className="px-4 py-2 rounded-full border border-[#0A7EA4] text-[#0A7EA4] font-semibold min-h-[44px]"
                        aria-label={`Know more about ${service.title}`}
                      >
                        {isExpanded ? "Hide Details ▲" : "Know More ▼"}
                      </button>
                      <Link
                        href={clinicInfo.mapsUrl}
                        target="_blank"
                        className="px-4 py-2 rounded-full bg-[#0A7EA4] text-white font-semibold min-h-[44px] flex items-center"
                        aria-label={`Get directions for ${service.title}`}
                      >
                        Get Directions →
                      </Link>
                    </div>
                  )}
                </div>

                {mode === "full" && (
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden border-t border-slate-200 bg-slate-50"
                      >
                        <div className="p-4 md:p-6">
                          <p className="text-[#5A5A7A]">{service.fullDesc}</p>
                          <h3 className="font-semibold mt-4">What to expect</h3>
                          <ul className="list-disc pl-6 text-sm text-[#5A5A7A] space-y-1 mt-2">
                            {service.expect.map((point) => (
                              <li key={point}>{point}</li>
                            ))}
                          </ul>
                          <h3 className="font-semibold mt-4">Who needs this service</h3>
                          <p className="text-sm text-[#5A5A7A] mt-1">{service.whoNeeds}</p>
                          <p className="text-sm text-[#5A5A7A] mt-2">{service.note}</p>
                          <Link
                            href={clinicInfo.mapsUrl}
                            target="_blank"
                            className="inline-flex mt-5 w-full justify-center bg-[#0A7EA4] hover:bg-[#085f80] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
                            aria-label={`Get directions for ${service.title}`}
                          >
                            Get Directions
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
