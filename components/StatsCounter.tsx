"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 5000, suffix: "+", label: "Happy Patients" },
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 18, suffix: "", label: "Dental Services" },
  { value: 24, suffix: "/7", label: "Emergency Care" },
] as const;

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!inView) {
      return;
    }

    let current = 0;
    const step = Math.max(1, Math.floor(value / 40));
    const id = window.setInterval(() => {
      current += step;
      if (current >= value) {
        setDisplay(value);
        window.clearInterval(id);
      } else {
        setDisplay(current);
      }
    }, 25);
    return () => window.clearInterval(id);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function StatsCounter() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#0A7EA4] to-[#0D1B2A] text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat) => (
          <motion.div key={stat.label} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}>
            <div className="text-5xl font-bold">
              <CountUp value={stat.value} suffix={stat.suffix} />
            </div>
            <p className="text-lg text-blue-100 mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
