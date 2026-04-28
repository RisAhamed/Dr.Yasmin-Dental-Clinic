"use client";

import { useState } from "react";

type FormData = {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  message: string;
};

const defaultForm: FormData = {
  name: "",
  phone: "",
  email: "",
  service: "",
  date: "",
  time: "",
  message: "",
};

export default function AppointmentForm() {
  const [form, setForm] = useState<FormData>(defaultForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(current: FormData) {
    const nextErrors: Partial<Record<keyof FormData, string>> = {};
    if (!current.name.trim()) nextErrors.name = "Full name is required.";
    if (!/^\d{10}$/.test(current.phone.trim()))
      nextErrors.phone = "Enter a valid 10-digit mobile number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(current.email.trim()))
      nextErrors.email = "Enter a valid email address.";
    if (!current.service) nextErrors.service = "Select a service.";
    if (!current.date) nextErrors.date = "Select a preferred date.";
    if (!current.time) nextErrors.time = "Select a preferred time.";
    return nextErrors;
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setSubmitted(true);
    setForm(defaultForm);
    setTimeout(() => setSubmitted(false), 4000);
  }

  function onChange<K extends keyof FormData>(key: K, value: FormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  }

  return (
    <>
      {submitted && (
        <p className="mb-4 rounded-lg bg-green-100 text-green-700 px-4 py-3">
          ✅ Appointment request sent! We&apos;ll call you to confirm shortly.
        </p>
      )}
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            value={form.name}
            onChange={(event) => onChange("name", event.target.value)}
            placeholder="Your Full Name"
            className="w-full border border-slate-300 rounded-xl px-4 py-3"
            aria-label="Full Name"
          />
          {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
        </div>

        <div>
          <div className="flex">
            <span className="inline-flex items-center rounded-l-xl border border-r-0 border-slate-300 bg-slate-50 px-3">
              +91
            </span>
            <input
              type="tel"
              value={form.phone}
              onChange={(event) => onChange("phone", event.target.value)}
              placeholder="9551118120"
              className="w-full border border-slate-300 rounded-r-xl px-4 py-3"
              aria-label="Phone number"
            />
          </div>
          {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
        </div>

        <div>
          <input
            type="email"
            value={form.email}
            onChange={(event) => onChange("email", event.target.value)}
            placeholder="Your Email Address"
            className="w-full border border-slate-300 rounded-xl px-4 py-3"
            aria-label="Email address"
          />
          {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <select
            value={form.service}
            onChange={(event) => onChange("service", event.target.value)}
            className="w-full border border-slate-300 rounded-xl px-4 py-3"
            aria-label="Service Needed"
          >
            <option value="">Select Service Needed</option>
            <option>General Dentistry</option>
            <option>Cosmetic Dentistry</option>
            <option>Root Canal</option>
            <option>Dental Implants</option>
            <option>Teeth Cleaning</option>
            <option>Orthodontics</option>
            <option>Paediatric Dentistry</option>
            <option>Emergency</option>
            <option>Other</option>
          </select>
          {errors.service && <p className="text-red-600 text-sm mt-1">{errors.service}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="date"
              value={form.date}
              onChange={(event) => onChange("date", event.target.value)}
              className="w-full border border-slate-300 rounded-xl px-4 py-3"
              aria-label="Preferred date"
            />
            {errors.date && <p className="text-red-600 text-sm mt-1">{errors.date}</p>}
          </div>
          <div>
            <select
              value={form.time}
              onChange={(event) => onChange("time", event.target.value)}
              className="w-full border border-slate-300 rounded-xl px-4 py-3"
              aria-label="Preferred time"
            >
              <option value="">Preferred Time</option>
              <option>Morning 9AM–12PM</option>
              <option>Afternoon 12PM–4PM</option>
              <option>Evening 4PM–8PM</option>
              <option>Night 8PM–12AM</option>
              <option>Emergency (Any Time)</option>
            </select>
            {errors.time && <p className="text-red-600 text-sm mt-1">{errors.time}</p>}
          </div>
        </div>

        <div>
          <textarea
            rows={4}
            value={form.message}
            onChange={(event) => onChange("message", event.target.value)}
            placeholder="Any specific concerns or information?"
            className="w-full border border-slate-300 rounded-xl px-4 py-3"
            aria-label="Message or notes"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#0A7EA4] hover:bg-[#085f80] text-white py-4 text-lg rounded-xl font-semibold"
          aria-label="Book my appointment"
        >
          Book My Appointment
        </button>
      </form>
    </>
  );
}
