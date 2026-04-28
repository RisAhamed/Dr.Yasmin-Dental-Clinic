"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const testimonials = [
  {
    name: "Priya Ramesh",
    location: "Vadapalani, Chennai",
    review:
      "Dr. Yasmin treated my severe toothache at 2 AM without any delay. The staff was so caring and the pain relief was immediate. Absolutely the best for 24/7 emergency care!",
    avatar: "PR",
    avatarBg: "bg-blue-500",
  },
  {
    name: "Karthik Sundar",
    location: "Ashok Nagar, Chennai",
    review:
      "I had my root canal done here and I was absolutely terrified. But the doctor made it completely painless. The clinic is spotless and modern. Highly recommended to everyone!",
    avatar: "KS",
    avatarBg: "bg-teal-500",
  },
  {
    name: "Meena Lakshmi",
    location: "Sarvamangala Colony, Chennai",
    review:
      "My children absolutely love coming here. The doctor is so gentle and patient with kids. Teeth cleaning done in just 30 minutes. Best dental clinic near Arcot Road!",
    avatar: "ML",
    avatarBg: "bg-pink-500",
  },
  {
    name: "Anand Krishnamurthy",
    location: "Virugambakkam, Chennai",
    review:
      "Got my smile makeover done — whitening plus veneers. The results are absolutely stunning. My confidence has gone through the roof. Worth every single rupee!",
    avatar: "AK",
    avatarBg: "bg-orange-500",
  },
  {
    name: "Fatima Begum",
    location: "Vadapalani, Chennai",
    review:
      "Very affordable pricing with no hidden charges. The doctor explained everything clearly before starting treatment. The location near Murugan Temple is very easy to find!",
    avatar: "FB",
    avatarBg: "bg-purple-500",
  },
  {
    name: "Suresh Babu",
    location: "Kodambakkam, Chennai",
    review:
      "My wife needed emergency dental surgery and we came here at midnight. The team handled everything professionally. This is now our permanent family dental clinic forever.",
    avatar: "SB",
    avatarBg: "bg-green-600",
  },
  {
    name: "Deepa Nair",
    location: "Anna Nagar, Chennai",
    review:
      "Dental implant procedure was seamless. Follow-up care was excellent. The doctor personally called to check on my recovery. That personal touch is rare and so appreciated!",
    avatar: "DN",
    avatarBg: "bg-red-500",
  },
  {
    name: "Rajesh Venkataraman",
    location: "Vadapalani, Chennai",
    review:
      "Scaling and polishing done in one visit. My gums feel healthier than ever. The hygienist explained how to maintain oral health at home too. Truly excellent service!",
    avatar: "RV",
    avatarBg: "bg-yellow-600",
  },
  {
    name: "Nithya Chandrasekhar",
    location: "Porur, Chennai",
    review:
      "I was nervous about braces but the doctor showed me invisible aligner options that were perfect for my case. My alignment has improved beautifully. Thank you so much!",
    avatar: "NC",
    avatarBg: "bg-indigo-500",
  },
  {
    name: "Mohammed Irfan",
    location: "Saidapet, Chennai",
    review:
      "The best part is complete transparency — no surprise bills. The doctor created a full treatment plan with costs upfront. I truly respect that honesty. Will always come back here!",
    avatar: "MI",
    avatarBg: "bg-cyan-600",
  },
] as const;

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth < 768) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (paused) {
      return;
    }
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => window.clearInterval(id);
  }, [paused]);

  const visible = useMemo(
    () =>
      Array.from({ length: visibleCount }, (_, i) => testimonials[(index + i) % testimonials.length]),
    [index, visibleCount],
  );

  return (
    <section id="testimonials" className="py-20 bg-[#E8F4FD]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A1A2E]">
          What Our Patients Say
        </h2>
        <p className="text-center text-[#5A5A7A] mt-3">
          Real reviews from real families across Chennai
        </p>

        <div
          className="mt-10"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((item) => (
              <article key={`${item.name}-${item.location}`} className="bg-white rounded-2xl shadow-md p-6">
                <div className="text-yellow-400 text-xl">★★★★★</div>
                <p className="italic text-[#5A5A7A] mt-3">{item.review}</p>
                <div className="flex items-center gap-3 mt-5">
                  <div
                    className={`w-11 h-11 rounded-full text-white font-semibold flex items-center justify-center ${item.avatarBg}`}
                  >
                    {item.avatar}
                  </div>
                  <div>
                    <p className="font-bold">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.location}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-3">
            <button
              type="button"
              onClick={() =>
                setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
              }
              className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <ChevronLeft />
            </button>
            <button
              type="button"
              onClick={() => setIndex((prev) => (prev + 1) % testimonials.length)}
              className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
