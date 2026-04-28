"use client";

import Link from "next/link";
import { ChevronUp, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

import { clinicInfo } from "@/lib/clinic";

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Link
        href={clinicInfo.whatsapp}
        target="_blank"
        className="group fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="text-white" size={28} />
        <span className="absolute right-16 whitespace-nowrap px-2 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100">
          Chat on WhatsApp
        </span>
      </Link>

      <Link
        href={clinicInfo.mapsUrl}
        target="_blank"
        className="fixed bottom-6 left-6 z-50 block md:hidden px-5 py-3 rounded-full bg-[#0A7EA4] text-white font-semibold shadow-lg"
        aria-label="Get directions on Google Maps"
      >
        📍 Get Directions
      </Link>

      {showScrollTop && (
        <button
          type="button"
          className="fixed bottom-24 right-6 z-50 w-10 h-10 rounded-full bg-[#0A7EA4] text-white shadow-md flex items-center justify-center"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} />
        </button>
      )}
    </>
  );
}
