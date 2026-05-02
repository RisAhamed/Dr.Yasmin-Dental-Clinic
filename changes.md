Make the following FIND & REPLACE changes across the entire project.
Do NOT change anything else — layout, design, colors, services, 
testimonials, components, or any other content stays exactly the same.
Only make these 4 specific replacements listed below.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CHANGE 1 — CLINIC NAME (replace every occurrence)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

FIND (all variations):
  "Dr. Yasmin Dental Clinic"
  "Dr Yasmin Dental Clinic"
  "Dr. Yasmin Dental"
  "dryasmindental"
  "dr-yasmin-dental"
  "DrYasminDental"

REPLACE WITH:
  "Supreme Multi-Speciality Dental Centre"
  "Supreme Multi-Speciality Dental Centre"
  "Supreme Multi-Speciality Dental Centre"
  "supremedental"
  "supreme-dental"
  "SupremeDental"

Apply this in ALL files:
  - app/layout.tsx          (metadata title, description, siteName)
  - app/page.tsx
  - app/about/page.tsx
  - app/services/page.tsx
  - app/contact/page.tsx
  - app/appointments/page.tsx
  - app/sitemap.ts          (siteUrl string)
  - app/robots.ts           (sitemap URL string)
  - components/Navbar.tsx   (logo text)
  - components/Footer.tsx   (brand name + copyright line)
  - vercel.json             (if name is referenced)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CHANGE 2 — CLINIC ADDRESS (replace every occurrence)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

FIND (remove this address wherever it appears): 
  "122, Arcot Rd, opposite Murugan Temple Arch,
   Sarvamangala Colony, Vadapalani, Chennai,
   Tamil Nadu 600026"

  Also remove any partial references to:
  "122, Arcot Rd"
  "opposite Murugan Temple Arch"
  "Sarvamangala Colony"

REPLACE WITH (use this exact address):
  "1/5, Kodambakkam Saidapet Road,
   Vadapalani, Chennai – 600026.
   Near Vadapalani Masjid"

Apply this in ALL files where address appears:
  - app/layout.tsx          (JSON-LD schema streetAddress)
  - components/Navbar.tsx   (top info bar)
  - components/Footer.tsx   (contact column)
  - app/contact/page.tsx    (contact card)
  - app/appointments/page.tsx (right side contact info box)
  - services.md             (if referenced)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CHANGE 3 — GOOGLE MAPS LOCATION (replace everywhere)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

FIND — Old coordinates and map links:
  latitude:   13.0499725
  longitude:  80.2130335

  Old iframe src:
  "https://maps.google.com/maps?q=13.0499725,80.2130335&z=17&output=embed"

  Old "Get Directions" href:
  "https://www.google.com/maps/place/Dr.+Yasmin+Dental+Clinic/@13.0499725,80.2130335,17z"

REPLACE WITH — New coordinates and map links:
  latitude:   13.0499134
  longitude:  80.2131861

  New iframe src:
  "https://maps.google.com/maps?q=13.0499134,80.2131861&z=17&output=embed"

  New "Get Directions" href:
  "https://www.google.com/maps/search/Supreme+Multi-Speciality+Dental+Centre/@13.0499134,80.2131861,17z"

Apply this in ALL files where map appears:
  - components/GoogleMap.tsx
  - app/contact/page.tsx    (iframe + Get Directions button)
  - app/appointments/page.tsx (iframe + Get Directions button)
  - app/layout.tsx          (JSON-LD schema geo coordinates)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CHANGE 4 — SEO METADATA & SCHEMA (targeted replacements)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In app/layout.tsx update ONLY these strings:

title:
  FROM: "Dr. Yasmin Dental Clinic | 24/7 Dentist in Vadapalani, Chennai"
  TO:   "Supreme Multi-Speciality Dental Centre | 24/7 Dentist in Vadapalani, Chennai"

description:
  FROM: "Dr. Yasmin Dental Clinic — Expert dental care..."
  TO:   "Supreme Multi-Speciality Dental Centre — Expert dental care..."

siteName (openGraph):
  FROM: "Dr. Yasmin Dental Clinic"
  TO:   "Supreme Multi-Speciality Dental Centre"

JSON-LD schema "name":
  FROM: "Dr. Yasmin Dental Clinic"
  TO:   "Supreme Multi-Speciality Dental Centre"

JSON-LD schema "streetAddress":
  FROM: "122, Arcot Rd, opposite Murugan Temple Arch"
  TO:   "1/5, Kodambakkam Saidapet Road, Near Vadapalani Masjid"

JSON-LD schema "addressLocality":
  Keep as: "Vadapalani"

JSON-LD schema "postalCode":
  Keep as: "600026"

JSON-LD schema "geo" latitude:
  FROM: 13.0499725
  TO:   13.0499134

JSON-LD schema "geo" longitude:
  FROM: 80.2130335
  TO:   80.2131861

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FINAL INSTRUCTION TO COPILOT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

After making all changes:
1. Show me EACH modified file with the full updated code.
2. Confirm every occurrence of the old clinic name has been replaced.
3. Confirm the old address has been fully removed and new address added.
4. Confirm old coordinates are replaced with new coordinates in ALL locations.
5. Do NOT change: colors, layout, services list, testimonials, 
   working hours, email placeholders, phone placeholders, or 
   any component structure.