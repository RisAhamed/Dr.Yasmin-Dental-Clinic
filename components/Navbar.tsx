"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Stethoscope, X } from "lucide-react";
import { useEffect, useState } from "react";

import { clinicInfo } from "@/lib/clinic";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-[#0A7EA4] text-white text-xs md:text-sm hidden md:block">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-2 flex flex-col md:flex-row md:items-center md:justify-between gap-1">
          <p>📞 24/7 Emergency: {clinicInfo.phone}</p>
          <p>📍 {clinicInfo.shortAddress}</p>
        </div>
      </div>

      <nav className={`bg-white transition-shadow ${isScrolled ? "shadow-md" : "shadow-sm"}`}>
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2" aria-label="Go to homepage">
            <Stethoscope className="text-[#0A7EA4]" />
            <span
              className="font-bold text-[#0A7EA4]"
              style={{ fontSize: "clamp(14px, 2.5vw, 20px)", whiteSpace: "nowrap" }}
            >
              {clinicInfo.name}
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-7">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-medium transition ${
                    active
                      ? "text-[#0A7EA4] underline underline-offset-8"
                      : "text-gray-700 hover:text-[#0A7EA4]"
                  }`}
                  aria-label={`Navigate to ${item.label}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:block">
            <Link
              href={clinicInfo.mapsUrl}
              target="_blank"
              className="bg-[#0A7EA4] hover:bg-[#085f80] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
              aria-label="Get directions on Google Maps"
            >
              Get Directions
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden text-[#0A7EA4] min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Close mobile menu" : "Open mobile menu"}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-gray-200 px-4 py-4 bg-white">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`font-medium py-3 px-4 min-h-[44px] ${
                      active ? "text-[#0A7EA4] underline underline-offset-4" : "text-gray-700"
                    }`}
                    aria-label={`Navigate to ${item.label}`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href={clinicInfo.mapsUrl}
                target="_blank"
                onClick={() => setOpen(false)}
                className="w-full justify-center bg-[#0A7EA4] text-white px-6 py-3 rounded-full font-semibold min-h-[44px] flex items-center"
                aria-label="Get directions on Google Maps"
              >
                Get Directions
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}