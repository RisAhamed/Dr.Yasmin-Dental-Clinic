=======================================================================
  DR. YASMIN DENTAL CLINIC — COMPLETE WEB DEVELOPMENT PROMPT
  Template Reference: levitasdentalclinic.com layout style
  Deploy Target: Vercel | Framework: Next.js 14 + Tailwind CSS
=======================================================================

You are an expert full-stack web developer. Build a COMPLETE, modern,
fully responsive multi-page dental clinic website for "Dr. Yasmin Dental
Clinic" located in Vadapalani, Chennai, Tamil Nadu, India.

The website must be production-ready and deployable to Vercel using
Next.js 14 (App Router) with Tailwind CSS. Generate ALL files,
components, pages, and configs needed to run this project from scratch.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 CLINIC INFORMATION — USE THIS EXACT DATA ACROSS ALL PAGES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Clinic Name    : Dr. Yasmin Dental Clinic
Tagline        : Your Trusted Smile Partner in Vadapalani, Chennai
Address        : 122, Arcot Rd, opposite Murugan Temple Arch,
                 Sarvamangala Colony, Vadapalani, Chennai,
                 Tamil Nadu 600026
Working Hours  : Open 24 Hours / 7 Days a Week (No Holidays)
Phone          : +91 9551118120  
Email          : info@dryasmindental.com
WhatsApp       : https://wa.me/919551118120
Google Maps    : https://www.google.com/maps/place/Dr.+Yasmin+Dental+Clinic/@13.0499725,80.2130335,17z
Coordinates    : Latitude 13.0499725 | Longitude 80.2130335

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 TECH STACK — USE EXACTLY THESE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Framework      : Next.js 14 (App Router, TypeScript)
Styling        : Tailwind CSS (no inline styles except iframe)
Animations     : Framer Motion (hero slider, section fade-ins, counters)
Icons          : Lucide React
Images         : next/image with free Unsplash URLs (listed below)
Maps           : Google Maps iframe embed (no API key needed)
Fonts          : Google Fonts — "Poppins" (headings) + "Inter" (body)
Deployment     : Vercel (vercel.json included)
Package Mgr    : npm

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 COLOR PALETTE & DESIGN TOKENS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Primary Blue-Teal  : #0A7EA4   → navbar, buttons, icons, borders
Secondary White    : #FFFFFF   → section backgrounds, cards
Light Blue BG      : #E8F4FD  → alternating section background
Accent Teal        : #00B4D8  → hover states, highlights
Dark Text          : #1A1A2E  → headings
Body Text Gray     : #5A5A7A  → paragraphs, subtitles
CTA Button Style   : bg-[#0A7EA4] hover:bg-[#085f80] text-white
                     px-6 py-3 rounded-full font-semibold
                     transition-all duration-300
Footer Background  : #0D1B2A  → dark navy
Card Border Radius : rounded-2xl
Box Shadow         : shadow-md hover:shadow-xl transition-all duration-300
Divider Color      : #E2E8F0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 PROJECT FILE STRUCTURE — GENERATE ALL THESE FILES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

dr-yasmin-dental/
├── app/
│   ├── layout.tsx              ← Root layout: Navbar + Footer + SEO metadata
│   ├── page.tsx                ← Homepage (/)
│   ├── about/
│   │   └── page.tsx            ← About Us page
│   ├── services/
│   │   └── page.tsx            ← All Services page
│   ├── contact/
│   │   └── page.tsx            ← Contact + Google Map page
│   └── appointments/
│       └── page.tsx            ← Booking Form page
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── HeroSlider.tsx
│   ├── ServiceCards.tsx
│   ├── WhyChooseUs.tsx
│   ├── StatsCounter.tsx
│   ├── TestimonialsCarousel.tsx
│   ├── GoogleMap.tsx
│   ├── AppointmentForm.tsx
│   └── FloatingButtons.tsx
├── public/
│   └── favicon.ico
├── next.config.js
├── tailwind.config.ts
├── vercel.json
├── tsconfig.json
└── package.json

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 NAVBAR COMPONENT — Navbar.tsx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Structure:
- TOP INFO BAR (thin strip above main nav):
  Background: #0A7EA4 | Text: white | height: 36px
  Left side: "📞 24/7 Emergency: +91 9551118120"
  Right side: "📍 122, Arcot Rd, Vadapalani, Chennai 600026"

- MAIN NAVBAR:
  Background: white | sticky top-0 z-50 | shadow on scroll
  LEFT  → Tooth icon (Lucide <Stethoscope />) + "Dr. Yasmin Dental Clinic"
           (bold, text-[#0A7EA4], text-xl)
  CENTER → Nav links: Home | Services | About | Contact
           (text-gray-700 hover:text-[#0A7EA4] font-medium transition)
  RIGHT  → "Book Appointment" pill button (primary blue, rounded-full)

- MOBILE: Hamburger icon → slide-down drawer with all nav links + CTA button
- Active page link should be underlined with #0A7EA4

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 HERO SLIDER COMPONENT — HeroSlider.tsx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Full-width, min-h-screen hero with 3 slides
- Each slide: background image (next/image fill) + dark overlay (bg-black/50)
- Framer Motion: fade + cross-dissolve transition, auto-play every 5 seconds
- Dot indicator navigation at bottom center (clickable)
- Left/Right arrow navigation buttons on desktop

SLIDE 1:
  bg image : https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1400&q=80
  Heading  : "Welcome to Dr. Yasmin Dental Clinic"
  Subtext  : "Comprehensive Dental Care — Open 24 Hours, 7 Days a Week"
  Buttons  : [Book Appointment →] (primary blue pill)
             [Our Services] (white outline pill)

SLIDE 2:
  bg image : https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1400&q=80
  Heading  : "Your Perfect Smile Starts Here"
  Subtext  : "Advanced Cosmetic & Restorative Dentistry in Vadapalani"
  Buttons  : [Explore Services →] (primary blue pill)

SLIDE 3:
  bg image : https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1400&q=80
  Heading  : "Trusted by Thousands of Chennai Families"
  Subtext  : "Gentle, Affordable & Expert Dental Treatment for All Ages"
  Buttons  : [Book Appointment →] (primary)
             [View Testimonials] (white outline)

Heading style   : text-white font-bold text-4xl md:text-6xl
Subtext style   : text-gray-200 text-lg md:text-2xl mt-4
Content layout  : centered, max-w-4xl mx-auto

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 QUICK SERVICES BANNER (homepage, below hero)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Background: #E8F4FD | Padding: py-12
3 cards in a row (grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto)
Each card: white bg, rounded-2xl, shadow-md, p-8, text-center
Hover: scale-105, shadow-xl, border-t-4 border-[#0A7EA4]

Card 1 — General Dentistry
  Icon : <Stethoscope size={48} color="#0A7EA4" />
  Title: "General Dentistry"
  Text : "Routine check-ups, X-rays, fillings, extractions & professional cleaning."
  Link : "Learn More →" (text-[#0A7EA4])

Card 2 — Cosmetic Dentistry
  Icon : <Sparkles size={48} color="#0A7EA4" />
  Title: "Cosmetic Dentistry"
  Text : "Teeth whitening, veneers, smile makeovers & invisible aligners."
  Link : "Learn More →"

Card 3 — 24/7 Emergency Care
  Icon : <Clock size={48} color="#e11d48" />
  Badge: Red badge "24/7" overlaid top-right of icon
  Title: "Emergency Dental Care"
  Text : "Immediate relief for toothaches, broken teeth & dental trauma — any hour."
  Link : "Call Now →" (text-red-600)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 FULL SERVICES PAGE — /services/page.tsx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Section heading: "Our Dental Services"
Subheading: "Comprehensive care under one roof — from routine to advanced"
Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8

Card structure:
- Image top (rounded-t-2xl, h-52, object-cover, next/image)
- Card body: p-6
- Service title: text-xl font-bold text-[#1A1A2E]
- Description: text-[#5A5A7A] text-sm
- "Learn More →" button (outline, text-[#0A7EA4], border-[#0A7EA4])
- Hover: card lifts (shadow-xl), image zooms slightly (scale-105 overflow-hidden)

SERVICES (9 total):

1. General Dentistry
   Image: https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80
   Alt  : "General dentistry check-up at Dr Yasmin Dental Clinic Vadapalani"
   Desc : "Regular check-ups, professional cleaning, tooth-coloured fillings,
           and digital X-rays to keep your oral health in perfect shape."

2. Cosmetic Dentistry
   Image: https://images.unsplash.com/photo-1601517491419-a2d55f74b82d?w=600&q=80
   Alt  : "Cosmetic dentistry smile makeover Chennai"
   Desc : "Teeth whitening, porcelain veneers, smile design & makeovers
           for a radiant, camera-ready smile you'll love."

3. Dental Implants
   Image: https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&q=80
   Alt  : "Dental implants procedure Vadapalani Chennai"
   Desc : "Permanent titanium tooth replacements that look, feel and
           function exactly like your natural teeth."

4. Orthodontics & Aligners
   Image: https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=600&q=80
   Alt  : "Invisible aligners and orthodontics Chennai"
   Desc : "Clear invisible aligners and traditional braces to straighten
           teeth beautifully at any age."

5. Root Canal Treatment
   Image: https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=600&q=80
   Alt  : "Pain-free root canal treatment Chennai"
   Desc : "Advanced, pain-free root canal therapy using rotary techniques
           to save infected teeth and eliminate pain permanently."

6. Teeth Cleaning & Scaling
   Image: https://images.unsplash.com/photo-1627308595229-7830a5c18199?w=600&q=80
   Alt  : "Professional teeth cleaning scaling Vadapalani"
   Desc : "Deep cleaning, ultrasonic scaling, and polishing to remove
           plaque, tartar and prevent gum disease."

7. Paediatric Dentistry
   Image: https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&q=80
   Alt  : "Children dental care paediatric dentist Chennai"
   Desc : "Gentle, child-friendly dental care from first tooth visits
           to preventive fluoride treatments and sealants."

8. Gum Disease Treatment
   Image: https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&q=80
   Alt  : "Gum disease periodontal treatment Chennai"
   Desc : "Comprehensive periodontal therapy including deep cleaning,
           scaling, root planing and gum surgery when needed."

9. Emergency Dentistry (24/7)
   Image: https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80
   Alt  : "24/7 emergency dental care Vadapalani Chennai"
   Desc : "Round-the-clock emergency dental care for sudden pain,
           broken teeth, trauma, lost crowns — any time, day or night."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 WHY CHOOSE US SECTION — WhyChooseUs.tsx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Background: white | Padding: py-20
Section heading: "Why Patients Choose Us"
Grid: grid-cols-2 md:grid-cols-4 gap-10 text-center

Each item: Icon inside a colored circle (w-20 h-20 rounded-full mx-auto mb-4)
           + Bold title + 2-line description

Item 1 — 24/7 Availability
  Icon BG : bg-blue-100 | Icon: <Clock className="text-[#0A7EA4]" size={36} />
  Title   : "24/7 Availability"
  Text    : "Open every day, every hour. Emergencies don't wait and neither do we."

Item 2 — Expert Dentists
  Icon BG : bg-teal-100 | Icon: <UserCheck className="text-teal-600" size={36} />
  Title   : "Expert Dentists"
  Text    : "Experienced, qualified dental professionals with 15+ years of expertise."

Item 3 — Affordable Pricing
  Icon BG : bg-green-100 | Icon: <IndianRupee className="text-green-600" size={36} />
  Title   : "Affordable Pricing"
  Text    : "Transparent fees with no hidden charges. Flexible payment options available."

Item 4 — Modern Equipment
  Icon BG : bg-purple-100 | Icon: <Microscope className="text-purple-600" size={36} />
  Title   : "Latest Technology"
  Text    : "Digital X-rays, painless rotary instruments and sterilised modern equipment."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 STATS COUNTER SECTION — StatsCounter.tsx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Background: linear gradient from #0A7EA4 to #0D1B2A
Text: white | Padding: py-16
Grid: grid-cols-2 md:grid-cols-4 gap-8 text-center

Use Framer Motion to animate numbers counting up when section enters viewport.

Stat 1: Number "5000+"  | Label: "Happy Patients"
Stat 2: Number "15+"    | Label: "Years of Experience"
Stat 3: Number "9"      | Label: "Dental Services"
Stat 4: Number "24/7"   | Label: "Emergency Care"

Each stat: Number in text-5xl font-bold, Label in text-lg text-blue-100

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 TESTIMONIALS SECTION — TestimonialsCarousel.tsx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Background: #E8F4FD | Padding: py-20
Section heading: "What Our Patients Say"
Subheading: "Real reviews from real families across Chennai"

Layout: Horizontal auto-scrolling carousel
- Show 3 cards on desktop, 2 on tablet, 1 on mobile
- Auto-scroll every 4 seconds | Pause on hover
- Manual left/right arrow buttons
- Infinite loop

Each card:
- white bg, rounded-2xl, shadow-md, p-6, mx-3
- Gold stars row: ★★★★★ (text-yellow-400 text-xl)
- Review text in italic (text-[#5A5A7A])
- Bottom: Avatar circle (initials, colored bg) + Name (bold) + Location (text-sm gray)

TESTIMONIALS DATA — USE ALL 10 EXACTLY:

[1]
Name     : Priya Ramesh
Location : Vadapalani, Chennai
Stars    : ★★★★★
Review   : "Dr. Yasmin treated my severe toothache at 2 AM without any
            delay. The staff was so caring and the pain relief was
            immediate. Absolutely the best for 24/7 emergency care!"
Avatar   : "PR" on bg-blue-500

[2]
Name     : Karthik Sundar
Location : Ashok Nagar, Chennai
Stars    : ★★★★★
Review   : "I had my root canal done here and I was absolutely terrified.
            But the doctor made it completely painless. The clinic is
            spotless and modern. Highly recommended to everyone!"
Avatar   : "KS" on bg-teal-500

[3]
Name     : Meena Lakshmi
Location : Sarvamangala Colony, Chennai
Stars    : ★★★★★
Review   : "My children absolutely love coming here. The doctor is so
            gentle and patient with kids. Teeth cleaning done in just
            30 minutes. Best dental clinic near Arcot Road!"
Avatar   : "ML" on bg-pink-500

[4]
Name     : Anand Krishnamurthy
Location : Virugambakkam, Chennai
Stars    : ★★★★★
Review   : "Got my smile makeover done — whitening plus veneers. The
            results are absolutely stunning. My confidence has gone
            through the roof. Worth every single rupee!"
Avatar   : "AK" on bg-orange-500

[5]
Name     : Fatima Begum
Location : Vadapalani, Chennai
Stars    : ★★★★★
Review   : "Very affordable pricing with no hidden charges. The doctor
            explained everything clearly before starting treatment.
            The location near Murugan Temple is very easy to find!"
Avatar   : "FB" on bg-purple-500

[6]
Name     : Suresh Babu
Location : Kodambakkam, Chennai
Stars    : ★★★★★
Review   : "My wife needed emergency dental surgery and we came here
            at midnight. The team handled everything professionally.
            This is now our permanent family dental clinic forever."
Avatar   : "SB" on bg-green-600

[7]
Name     : Deepa Nair
Location : Anna Nagar, Chennai
Stars    : ★★★★★
Review   : "Dental implant procedure was seamless. Follow-up care was
            excellent. The doctor personally called to check on my
            recovery. That personal touch is rare and so appreciated!"
Avatar   : "DN" on bg-red-500

[8]
Name     : Rajesh Venkataraman
Location : Vadapalani, Chennai
Stars    : ★★★★★
Review   : "Scaling and polishing done in one visit. My gums feel
            healthier than ever. The hygienist explained how to maintain
            oral health at home too. Truly excellent service!"
Avatar   : "RV" on bg-yellow-600

[9]
Name     : Nithya Chandrasekhar
Location : Porur, Chennai
Stars    : ★★★★★
Review   : "I was nervous about braces but the doctor showed me
            invisible aligner options that were perfect for my case.
            My alignment has improved beautifully. Thank you so much!"
Avatar   : "NC" on bg-indigo-500

[10]
Name     : Mohammed Irfan
Location : Saidapet, Chennai
Stars    : ★★★★★
Review   : "The best part is complete transparency — no surprise bills.
            The doctor created a full treatment plan with costs upfront.
            I truly respect that honesty. Will always come back here!"
Avatar   : "MI" on bg-cyan-600

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 ABOUT PAGE — /about/page.tsx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

HERO BANNER: bg-[#0A7EA4] py-20 text-white text-center
  Heading: "About Dr. Yasmin Dental Clinic"
  Subtext: "15+ Years of Trusted Dental Care in Vadapalani, Chennai"

MAIN CONTENT — two-column split:
LEFT  : next/image
        src: https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&q=80
        alt: "Female dentist at Dr Yasmin Dental Clinic Chennai"
        className: rounded-2xl shadow-xl w-full h-auto object-cover

RIGHT : Text content (prose)
        Heading: "About Our Clinic"
        Para 1: "Dr. Yasmin Dental Clinic has been serving the families
        of Vadapalani, Chennai for over 15 years. Located on Arcot Road,
        opposite the iconic Murugan Temple Arch, our clinic is a trusted
        name in dental healthcare across Sarvamangala Colony."

        Para 2: "We provide a complete range of dental services — from
        simple check-ups and cleaning to advanced implants and smile
        makeovers. We are one of very few clinics in Chennai to offer
        true 24/7 emergency dental care, so you're never left suffering."

        Para 3: "Our approach is rooted in compassion, transparency, and
        modern dentistry. We use the latest equipment and follow strict
        sterilisation protocols to ensure every patient's safety and comfort."

MISSION BOX (below text, teal bg-[#0A7EA4] rounded-2xl p-6 text-white):
  "Our Mission: To make world-class dental care accessible to every family
  in Vadapalani — affordable, comfortable, and always available."

  Google Map iframe (below info):
  <iframe
    src="https://maps.google.com/maps?q=13.0499725,80.2130335&z=17&output=embed"
    width="100%"
    height="300"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Dr. Yasmin Dental Clinic Location"
  />

  "Get Directions" button:
  href="https://www.google.com/maps/place/Dr.+Yasmin+Dental+Clinic/@13.0499725,80.2130335,17z"
  target="_blank"
  Style: outline primary blue, full width

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 CONTACT PAGE — /contact/page.tsx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION 1 — Full-width Google Maps embed (h-[500px]):
  <iframe
    src="https://maps.google.com/maps?q=13.0499725,80.2130335&z=17&output=embed"
    width="100%" height="500"
    style={{ border: 0 }}
    allowFullScreen loading="lazy"
    title="Dr. Yasmin Dental Clinic on Google Maps"
  />

SECTION 2 — 3-column contact info cards (below map, py-16):
Card 1 — Location:
  Icon: <MapPin size={40} color="#0A7EA4" />
  Title: "Our Address"
  Text: 122, Arcot Rd, opposite Murugan Temple Arch,
        Sarvamangala Colony, Vadapalani, Chennai 600026
  Link: "View on Google Maps →"

Card 2 — Phone:
  Icon: <Phone size={40} color="#0A7EA4" />
  Title: "Call Us Anytime"
  Text: +91 9551118120
        Available 24 Hours / 7 Days
  Link: "Call Now →"

Card 3 — Hours:
  Icon: <Clock size={40} color="#0A7EA4" />
  Title: "Working Hours"
  Text: Monday – Sunday: Open 24 Hours
        No Holidays | Emergency Available Always

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 FOOTER COMPONENT — Footer.tsx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Background: #0D1B2A | Text: white and gray-300 | Padding: py-16
Grid: grid-cols-1 md:grid-cols-4 gap-10

COL 1 — Brand:
  Logo: Tooth icon + "Dr. Yasmin Dental Clinic" (text-white text-xl bold)
  Tagline: "Your Smile, Our Priority" (text-gray-400)
  "🕐 Open 24/7 — Emergency Care Available" (text-sm text-green-400)
  Social icons row: Facebook | Instagram | WhatsApp
  (each links to "#", white icons, hover:text-[#00B4D8])

COL 2 — Quick Links:
  Heading: "Quick Links" (text-[#00B4D8] font-semibold mb-4)
  Links: Home | Services | About Us | Contact | Book Appointment
  (text-gray-300 hover:text-white transition)

COL 3 — Our Services:
  Heading: "Our Services" (text-[#00B4D8] font-semibold mb-4)
  Links: General Dentistry | Cosmetic Dentistry | Root Canal |
         Dental Implants | Orthodontics | Paediatric Dentistry |
         Emergency Dentistry

COL 4 — Contact Details:
  Heading: "Contact Us" (text-[#00B4D8] font-semibold mb-4)
  📍 122, Arcot Rd, Vadapalani, Chennai 600026
  📞 +91 9551118120
  ✉️ info@dryasmindental.com
  🕐 Open 24 Hours / 7 Days a Week

BOTTOM BAR:
  border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm
  "© 2025 Dr. Yasmin Dental Clinic. All Rights Reserved.
   Designed with ❤️ in Chennai."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 FLOATING BUTTONS — FloatingButtons.tsx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WhatsApp Button (ALL screens, bottom-right):
   position: fixed bottom-6 right-6 z-50
   Style: w-14 h-14 rounded-full bg-green-500 hover:bg-green-600
          shadow-lg flex items-center justify-center
   Icon: WhatsApp SVG icon (white, 28px)
   Tooltip: "Chat on WhatsApp" (appears on hover)
   href: https://wa.me/91XXXXXXXXXX | target="_blank"

2. "Book Now" Button (MOBILE ONLY, bottom-left):
   position: fixed bottom-6 left-6 z-50 block md:hidden
   Style: px-5 py-3 rounded-full bg-[#0A7EA4] text-white font-semibold shadow-lg
   Text: "📅 Book Now"
   href: /appointments

3. Scroll-To-Top Button:
   Appears only after scrolling 300px
   position: fixed bottom-24 right-6 z-50
   Style: w-10 h-10 rounded-full bg-[#0A7EA4] text-white shadow-md
   Icon: <ChevronUp size={20} />
   onClick: window.scrollTo({ top: 0, behavior: 'smooth' })

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 SEO METADATA — app/layout.tsx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const metadata: Metadata = {
  title: "Dr. Yasmin Dental Clinic | 24/7 Dentist in Vadapalani, Chennai",
  description:
    "Dr. Yasmin Dental Clinic — Expert dental care in Vadapalani, Chennai.
     Open 24 hours, 7 days a week. Services include general dentistry,
     cosmetic dentistry, root canal, dental implants, teeth whitening &
     emergency dental care. Book an appointment today.",
  keywords: [
    "dental clinic Vadapalani",
    "dentist Chennai",
    "24/7 dental clinic Chennai",
    "dental clinic near Murugan Temple Vadapalani",
    "root canal Chennai",
    "teeth whitening Vadapalani",
    "dental implants Chennai",
    "emergency dentist Chennai open now",
    "cosmetic dentistry Vadapalani",
    "best dentist Arcot Road Chennai",
    "dental clinic Sarvamangala Colony",
    "Dr Yasmin dental clinic",
    "paediatric dentist Chennai",
    "affordable dental treatment Chennai",
    "dental clinic open 24 hours Chennai"
  ],
  openGraph: {
    title: "Dr. Yasmin Dental Clinic | 24/7 Dentist in Vadapalani Chennai",
    description: "Comprehensive dental care open 24/7 in Vadapalani, Chennai.",
    url: "https://dryasmindental.com",
    siteName: "Dr. Yasmin Dental Clinic",
    locale: "en_IN",
    type: "website",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://dryasmindental.com" },
};

JSON-LD LOCAL BUSINESS SCHEMA — Add inside layout.tsx <head>:

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Dentist",
      "name": "Dr. Yasmin Dental Clinic",
      "image": "https://dryasmindental.com/og-image.jpg",
      "url": "https://dryasmindental.com",
      "telephone": "+91 9551118120",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "122, Arcot Rd, opposite Murugan Temple Arch",
        "addressLocality": "Vadapalani",
        "addressRegion": "Tamil Nadu",
        "postalCode": "600026",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 13.0499725,
        "longitude": 80.2130335
      },
      "openingHours": "Mo-Su 00:00-24:00",
      "priceRange": "₹₹",
      "hasMap": "https://maps.google.com/?q=13.0499725,80.2130335",
      "sameAs": [
        "https://www.facebook.com/dryasmindental",
        "https://www.instagram.com/dryasmindental"
      ]
    })
  }}
/>

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 CONFIG FILES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

next.config.js:
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "plus.unsplash.com"],
  },
};
module.exports = nextConfig;

vercel.json:
{
  "framework": "nextjs",
  "buildCommand": "next build",
  "outputDirectory": ".next",
  "installCommand": "npm install"
}

tailwind.config.ts:
  Extend fontFamily with Poppins and Inter
  Extend colors with: primary: "#0A7EA4", dark: "#0D1B2A"

package.json scripts:
  "dev":   "next dev"
  "build": "next build"
  "start": "next start"
  "lint":  "next lint"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 GLOBAL RULES FOR AI TO FOLLOW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Generate ALL files completely — no placeholders, no "..." truncations.
2. Use TypeScript throughout (.tsx, .ts files only).
3. All sections must be fully responsive using Tailwind mobile-first classes.
4. Use Framer Motion for: hero slide transitions, section fade-in on scroll,
   testimonial carousel scroll, and stats count-up animation.
5. Every page must include <Navbar /> at the top and <Footer /> at the bottom.
6. Every page must include <FloatingButtons /> for WhatsApp + Book Now.
7. All next/image tags must have proper alt text for SEO.
8. All buttons must have aria-label attributes for accessibility.
9. Add a smooth wave/curve SVG divider between alternate sections.
10. Form must include client-side validation with error messages in red.
11. All links between pages must use Next.js <Link href="..."> component.
12. The project must run successfully with: npm install && npm run dev
13. Do NOT use any external UI libraries (no shadcn, no MUI, no Chakra).
    Use only Tailwind CSS + Framer Motion + Lucide React.
14. Images from Unsplash must use the exact URLs listed above.
15. Target Google PageSpeed score of 90+ using next/image lazy loading.

=======================================================================
 NOW GENERATE THE COMPLETE PROJECT — ALL FILES, FULLY CODED.
 START WITH: package.json → next.config.js → tailwind.config.ts →
 app/layout.tsx → components/ → then all pages in order.
=======================================================================