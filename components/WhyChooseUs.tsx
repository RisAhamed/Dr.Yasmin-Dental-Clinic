import { Clock, IndianRupee, Microscope, UserCheck } from "lucide-react";

const items = [
  {
    title: "24/7 Availability",
    text: "Open every day, every hour. Emergencies don't wait and neither do we.",
    icon: Clock,
    bg: "bg-blue-100",
    color: "text-[#0A7EA4]",
  },
  {
    title: "Expert Dentists",
    text: "Experienced, qualified dental professionals with 15+ years of expertise.",
    icon: UserCheck,
    bg: "bg-teal-100",
    color: "text-teal-600",
  },
  {
    title: "Affordable Pricing",
    text: "Transparent fees with no hidden charges. Flexible payment options available.",
    icon: IndianRupee,
    bg: "bg-green-100",
    color: "text-green-600",
  },
  {
    title: "Latest Technology",
    text: "Digital X-rays, painless rotary instruments and sterilised modern equipment.",
    icon: Microscope,
    bg: "bg-purple-100",
    color: "text-purple-600",
  },
] as const;

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A1A2E]">
          Why Patients Choose Us
        </h2>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title}>
                <div
                  className={`w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center ${item.bg}`}
                >
                  <Icon className={item.color} size={36} />
                </div>
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-sm text-[#5A5A7A] mt-2">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
