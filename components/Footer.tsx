import Link from "next/link";
import { Globe, MessageCircle, PhoneCall, Stethoscope } from "lucide-react";

import { clinicInfo } from "@/lib/clinic";

export default function Footer() {
  return (
    <footer className="bg-[#0D1B2A] text-white py-16 mt-auto">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 text-xl font-bold">
              <Stethoscope />
              <span>{clinicInfo.name}</span>
            </div>
            <p className="text-gray-400 mt-3">Your Smile, Our Priority</p>
            <p className="text-sm text-green-400 mt-2">🕐 Open 24/7 — Emergency Care Available</p>
            <div className="flex items-center gap-4 mt-4">
              <Link href="#" className="hover:text-[#00B4D8]" aria-label="Facebook">
                <Globe />
              </Link>
              <Link href="#" className="hover:text-[#00B4D8]" aria-label="Instagram">
                <PhoneCall />
              </Link>
              <Link href={clinicInfo.whatsapp} className="hover:text-[#00B4D8]" aria-label="WhatsApp">
                <MessageCircle />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-[#00B4D8] font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2 text-gray-300">
              <Link href="/" className="block hover:text-white" aria-label="Go to home">
                Home
              </Link>
              <Link href="/services" className="block hover:text-white" aria-label="Go to services">
                Services
              </Link>
              <Link href="/about" className="block hover:text-white" aria-label="Go to about">
                About Us
              </Link>
              <Link href="/contact" className="block hover:text-white" aria-label="Go to contact">
                Contact
              </Link>
              <Link
                href="/appointments"
                className="block hover:text-white"
                aria-label="Book appointment"
              >
                Book Appointment
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-[#00B4D8] font-semibold mb-4">Our Services</h3>
            <div className="space-y-2 text-gray-300">
              <p>General Dentistry</p>
              <p>Cosmetic Dentistry</p>
              <p>Root Canal</p>
              <p>Dental Implants</p>
              <p>Orthodontics</p>
              <p>Paediatric Dentistry</p>
              <p>Emergency Dentistry</p>
            </div>
          </div>

          <div>
            <h3 className="text-[#00B4D8] font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2 text-gray-300">
              <p>📍 {clinicInfo.shortAddress}</p>
              <p>📞 {clinicInfo.phone}</p>
              <p>✉️ {clinicInfo.email}</p>
              <p>🕐 {clinicInfo.hours}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
          © 2025 {clinicInfo.name}. All Rights Reserved. Designed with ❤️ in Chennai.
        </div>
      </div>
    </footer>
  );
}
