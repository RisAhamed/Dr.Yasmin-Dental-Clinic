# services.md
# Supreme Multi-Speciality Dental Centre — Complete Services Specification
# Usage: Attach this file alongside the main AI development prompt and say:
# "Build the complete website using the main prompt AND integrate services.md
#  for the Services page, homepage service section, and all UI display logic."
# ============================================================================

## HOW TO USE THIS FILE (Instructions for the AI Developer)

1. Read all 18 services listed below with their full display specifications.
2. Use the GLOBAL DISPLAY RULES section to understand the card layout system.
3. On the HOMEPAGE: show the first 6 services as a preview grid with a
   "View All Services →" button linking to /services.
4. On the SERVICES PAGE (/services): show ALL 18 services in a filterable grid.
5. Each service card must follow the display type specified (IMAGE or ICON).
6. If display type is IMAGE: use the Unsplash URL provided.
7. If display type is ICON: use the Lucide React icon name and color provided.
8. If the developer provides local images in /public/services/ folder,
   PREFER local images over Unsplash URLs. Local image naming convention:
   /public/services/[service-slug].jpg  (e.g. /public/services/root-canal.jpg)
9. Each service DETAIL VIEW should open as a modal or expand inline on click.
10. Services page must have a CATEGORY FILTER BAR at the top.

---

## GLOBAL DISPLAY RULES

### Service Card Structure (applies to all 18 services):
```
┌─────────────────────────────────────┐
│  [IMAGE (h-52, rounded-t-2xl)]      │ ← if display_type = IMAGE
│  OR [ICON (centered, 64px circle)]  │ ← if display_type = ICON
├─────────────────────────────────────┤
│  [CATEGORY BADGE] e.g. "General"   │ ← small colored pill top-left
│  [SERVICE TITLE]  text-xl bold      │
│  [SHORT DESC]     text-sm gray      │
│  ─────────────────────────────────  │
│  ⏱ Duration: XX mins               │
│  💰 Starting from ₹XXX             │
│  ─────────────────────────────────  │
│  [Know More ▼]    [Book Now →]     │
└─────────────────────────────────────┘
```

### Card Hover Behaviour:
- Scale: transform scale-105
- Shadow: shadow-xl
- Border: border-t-4 border-[#0A7EA4]
- Transition: transition-all duration-300

### Category Badge Colors:
- General     → bg-blue-100    text-blue-700
- Cosmetic    → bg-pink-100    text-pink-700
- Surgical    → bg-red-100     text-red-700
- Orthodontic → bg-purple-100  text-purple-700
- Paediatric  → bg-yellow-100  text-yellow-700
- Emergency   → bg-red-600     text-white  (pulse animation)
- Diagnostic  → bg-gray-100    text-gray-700

### "Know More" Expand Panel (inline accordion below card):
When clicked, expand to show:
- Full description (3-4 sentences)
- Bullet list: What to expect (3-4 points)
- Bullet list: Who needs this service
- Recovery/Duration note
- CTA: "Book This Service" button (primary blue, full width)

### Services Page Filter Bar:
Horizontal pill buttons at top:
[All] [General] [Cosmetic] [Surgical] [Orthodontic] [Paediatric] [Emergency] [Diagnostic]
Active filter: bg-[#0A7EA4] text-white
Inactive: bg-white border border-gray-300 text-gray-600 hover:border-[#0A7EA4]
Filter logic: JavaScript filter by category, animate with Framer Motion layout

### Grid Layout:
- Desktop  : grid-cols-3 gap-8
- Tablet   : grid-cols-2 gap-6
- Mobile   : grid-cols-1 gap-5
- Max width: max-w-7xl mx-auto px-6

---

## SERVICE LIST (18 Services — Display Spec for Each)

---

### SERVICE 01 — General Dental Check-up & Consultation
```
slug          : general-checkup
category      : General
display_type  : IMAGE
image_url     : https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80
local_image   : /public/services/general-checkup.jpg
image_alt     : "General dental check-up and consultation at Supreme Multi-Speciality Dental Centre Vadapalani"
badge_color   : bg-blue-100 text-blue-700
title         : General Dental Check-up
short_desc    : Routine oral examination, dental X-rays, and personalised
                oral health assessment for the whole family.
duration      : 30–45 mins
price         : Starting from ₹299
badge_extra   : null
show_homepage : YES (position 1)

EXPAND DETAIL:
full_desc    : A comprehensive dental check-up includes a thorough examination
               of your teeth, gums, jaw, and oral tissues. We use digital X-rays
               for precise diagnosis. Early detection prevents costly treatments
               later. Recommended every 6 months for adults and children.
expect       :
  - Full mouth examination with digital X-rays
  - Gum health assessment and periodontal screening
  - Bite and jaw alignment check
  - Personalised oral hygiene advice
who_needs    : Everyone — children, adults, and seniors every 6 months
note         : No recovery needed. Takes 30–45 minutes.
```

---

### SERVICE 02 — Professional Teeth Cleaning & Scaling
```
slug          : teeth-cleaning
category      : General
display_type  : IMAGE
image_url     : https://images.unsplash.com/photo-1627308595229-7830a5c18199?w=600&q=80
local_image   : /public/services/teeth-cleaning.jpg
image_alt     : "Professional teeth cleaning and scaling at dental clinic Chennai"
badge_color   : bg-blue-100 text-blue-700
title         : Teeth Cleaning & Scaling
short_desc    : Ultrasonic plaque and tartar removal followed by professional
                polishing for a clean, fresh, healthy mouth.
duration      : 45–60 mins
price         : Starting from ₹499
badge_extra   : null
show_homepage : YES (position 2)

EXPAND DETAIL:
full_desc    : Professional cleaning removes hardened tartar (calculus) that
               home brushing cannot. Ultrasonic scaling + hand instruments
               clean below the gum line. Polishing removes surface stains,
               leaving teeth smooth and bright. Prevents gum disease and cavities.
expect       :
  - Ultrasonic scaling to remove tartar above and below gum line
  - Hand scaling for precision cleaning between teeth
  - Air polishing to remove surface stains
  - Fluoride treatment (optional add-on)
who_needs    : All adults — recommended every 6 months. Essential for smokers.
note         : Mild gum sensitivity for 24 hours is normal post-cleaning.
```

---

### SERVICE 03 — Tooth Extraction
```
slug          : tooth-extraction
category      : Surgical
display_type  : ICON
icon_name     : Scissors
icon_color    : text-red-600
icon_bg       : bg-red-100
badge_color   : bg-red-100 text-red-700
title         : Tooth Extraction
short_desc    : Safe, painless removal of damaged, infected, or impacted teeth
                under local anaesthesia by expert hands.
duration      : 20–45 mins
price         : Starting from ₹399
badge_extra   : null
show_homepage : NO

EXPAND DETAIL:
full_desc    : Tooth extraction is performed when a tooth is too damaged to be
               saved. We use local anaesthesia for a completely pain-free
               experience. Simple and surgical (impacted wisdom tooth) extractions
               are both available at our clinic.
expect       :
  - Local anaesthesia injection for zero pain
  - Simple or surgical extraction based on case
  - Post-extraction socket care and dressing
  - Detailed aftercare instructions provided
who_needs    : Patients with severely decayed, cracked, impacted, or overcrowded teeth
note         : Soft food diet for 24–48 hours post extraction. Full healing in 1–2 weeks.
```

---

### SERVICE 04 — Tooth Filling (Composite & Glass Ionomer)
```
slug          : tooth-filling
category      : General
display_type  : ICON
icon_name     : PenTool
icon_color    : text-blue-600
icon_bg       : bg-blue-100
badge_color   : bg-blue-100 text-blue-700
title         : Tooth Filling
short_desc    : Tooth-coloured composite resin fillings that restore decayed
                teeth invisibly — strong, durable, and natural-looking.
duration      : 30–60 mins
price         : Starting from ₹599
badge_extra   : "Tooth-Coloured"
show_homepage : NO

EXPAND DETAIL:
full_desc    : Modern composite fillings match your tooth colour exactly,
               unlike old silver amalgam fillings. We remove decay, clean
               the cavity, and bond the composite in layers, hardened with
               a curing light. Durable and aesthetic for front and back teeth.
expect       :
  - Local anaesthesia for painless treatment
  - Complete removal of tooth decay
  - Shade-matched composite resin placed in layers
  - Bite adjusted and surface polished
who_needs    : Patients with cavities, chipped teeth, or old amalgam replacements
note         : Avoid very hard foods for 24 hours. Filling lasts 7–10 years with care.
```

---

### SERVICE 05 — Root Canal Treatment (RCT)
```
slug          : root-canal
category      : Surgical
display_type  : IMAGE
image_url     : https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=600&q=80
local_image   : /public/services/root-canal.jpg
image_alt     : "Painless root canal treatment RCT at Supreme Multi-Speciality Dental Centre Chennai"
badge_color   : bg-red-100 text-red-700
title         : Root Canal Treatment
short_desc    : Advanced, pain-free RCT using rotary instruments to save
                severely infected teeth and eliminate chronic dental pain.
duration      : 60–90 mins (1–2 sittings)
price         : Starting from ₹2,499
badge_extra   : "Save Your Tooth"
show_homepage : YES (position 3)

EXPAND DETAIL:
full_desc    : Root canal treatment removes infected pulp tissue from inside
               the tooth, cleaning and sealing the root canals. Modern rotary
               RCT is completely pain-free under anaesthesia. A crown is fitted
               after RCT to strengthen the tooth permanently.
expect       :
  - Local anaesthesia for pain-free procedure
  - Infected pulp removal using rotary files
  - Root canal cleaning, shaping, and filling
  - Tooth sealed with crown for protection (separate appointment)
who_needs    : Patients with severe toothache, dental abscess, or deep decay
note         : Usually 1–2 sittings. Mild soreness for 1–2 days is normal after.
```

---

### SERVICE 06 — Dental Implants
```
slug          : dental-implants
category      : Surgical
display_type  : IMAGE
image_url     : https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&q=80
local_image   : /public/services/dental-implants.jpg
image_alt     : "Dental implants permanent tooth replacement Chennai"
badge_color   : bg-red-100 text-red-700
title         : Dental Implants
short_desc    : Permanent titanium tooth replacements that look, feel, and
                function exactly like your natural teeth. Lifetime solution.
duration      : Multiple sittings over 3–6 months
price         : Starting from ₹18,000 per implant
badge_extra   : "Permanent Solution"
show_homepage : YES (position 4)

EXPAND DETAIL:
full_desc    : Dental implants are titanium screws placed into the jawbone
               to act as artificial tooth roots. A crown is placed on top
               after osseointegration (3–6 months). The result is indistinguishable
               from a natural tooth. Implants last a lifetime with proper care.
expect       :
  - Thorough 3D X-ray and bone density assessment
  - Titanium implant placed under local anaesthesia
  - Healing cap fitted during osseointegration (3–6 months)
  - Custom porcelain crown placed on healed implant
who_needs    : Patients missing one or more teeth wanting a permanent solution
note         : Full osseointegration takes 3–6 months. Brush and floss like natural teeth.
```

---

### SERVICE 07 — Teeth Whitening / Bleaching
```
slug          : teeth-whitening
category      : Cosmetic
display_type  : IMAGE
image_url     : https://images.unsplash.com/photo-1601517491419-a2d55f74b82d?w=600&q=80
local_image   : /public/services/teeth-whitening.jpg
image_alt     : "Professional teeth whitening bleaching cosmetic dentistry Chennai"
badge_color   : bg-pink-100 text-pink-700
title         : Teeth Whitening & Bleaching
short_desc    : Professional in-chair whitening that removes deep stains and
                lightens teeth by up to 8 shades in a single session.
duration      : 60–90 mins
price         : Starting from ₹3,999
badge_extra   : "Most Popular"
show_homepage : YES (position 5)

EXPAND DETAIL:
full_desc    : Our professional teeth whitening uses carbamide or hydrogen
               peroxide gel activated by LED light for dramatic results.
               Far more effective than home kits, with results lasting
               1–2 years. Safe, supervised, and comfortable.
expect       :
  - Shade assessment with a shade guide before procedure
  - Gum protection applied before whitening gel
  - LED light activation for accelerated whitening
  - Final shade comparison and aftercare advice
who_needs    : Patients with stained, yellowed, or discoloured teeth from
               coffee, tea, smoking, or ageing
note         : Avoid staining foods/drinks 48 hours post-treatment.
               Mild sensitivity is normal for 24–48 hours.
```

---

### SERVICE 08 — Porcelain Veneers
```
slug          : veneers
category      : Cosmetic
display_type  : ICON
icon_name     : Sparkles
icon_color    : text-pink-500
icon_bg       : bg-pink-100
badge_color   : bg-pink-100 text-pink-700
title         : Porcelain Veneers
short_desc    : Ultra-thin porcelain shells bonded to the front of teeth to
                correct chips, gaps, stains, and shape — a Hollywood smile.
duration      : 2–3 sittings
price         : Starting from ₹8,000 per tooth
badge_extra   : "Smile Makeover"
show_homepage : NO

EXPAND DETAIL:
full_desc    : Dental veneers are paper-thin porcelain shells custom-made
               to fit over the front surface of teeth. They correct multiple
               cosmetic issues in one procedure — chips, gaps, stains,
               slight misalignment, and uneven shapes.
expect       :
  - Smile design consultation and shade selection
  - Minimal tooth preparation (0.5mm shaving)
  - Impression taken for lab fabrication (7–10 days)
  - Permanent bonding of custom veneers
who_needs    : Patients wanting a complete smile transformation
note         : Veneers last 10–15 years. Avoid biting nails or opening bottles.
```

---

### SERVICE 09 — Dental Crowns & Bridges
```
slug          : crowns-bridges
category      : General
display_type  : ICON
icon_name     : Crown
icon_color    : text-yellow-600
icon_bg       : bg-yellow-100
badge_color   : bg-blue-100 text-blue-700
title         : Dental Crowns & Bridges
short_desc    : Custom-fitted crowns to restore broken teeth and fixed bridges
                to replace missing teeth without implant surgery.
duration      : 2 sittings (7–10 days apart)
price         : Starting from ₹3,500 per unit
badge_extra   : null
show_homepage : NO

EXPAND DETAIL:
full_desc    : A dental crown caps a damaged tooth, restoring its shape,
               strength, and appearance. A bridge uses crowns on adjacent
               teeth to "bridge" a gap where a tooth is missing. Both are
               cemented permanently for long-term function.
expect       :
  - Tooth preparation and temporary crown placement
  - Impression sent to dental lab for custom fabrication
  - Permanent crown/bridge cemented after 7–10 days
  - Bite adjustment and final polish
who_needs    : Patients with broken, cracked, root-canal-treated, or missing teeth
note         : Lasts 10–15 years. Brush and floss bridges carefully under the span.
```

---

### SERVICE 10 — Orthodontics — Braces & Clear Aligners
```
slug          : orthodontics
category      : Orthodontic
display_type  : IMAGE
image_url     : https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=600&q=80
local_image   : /public/services/orthodontics.jpg
image_alt     : "Orthodontics braces and clear aligners dental clinic Chennai"
badge_color   : bg-purple-100 text-purple-700
title         : Orthodontics — Braces & Aligners
short_desc    : Traditional metal braces and invisible clear aligners to
                straighten crooked, crowded, or gapped teeth at any age.
duration      : 12–24 months total treatment
price         : Metal braces from ₹15,000 | Clear aligners from ₹35,000
badge_extra   : "For All Ages"
show_homepage : YES (position 6)

EXPAND DETAIL:
full_desc    : Orthodontic treatment corrects bite issues, crooked teeth,
               and jaw alignment. We offer traditional stainless steel braces,
               ceramic (tooth-coloured) braces, and clear aligner systems.
               A retainer is provided after treatment to maintain results.
expect       :
  - Comprehensive orthodontic assessment + X-rays
  - Custom treatment plan with expected timeline
  - Monthly adjustment visits (braces) or fortnightly aligner changes
  - Retainer fitting on completion to maintain alignment
who_needs    : Children (7+), teens, and adults with crooked, overcrowded,
               gapped, or protruding teeth
note         : Monthly check-ups required. Total duration: 12–24 months.
```

---

### SERVICE 11 — Flexible (Flexi) Dentures
```
slug          : dentures
category      : General
display_type  : IMAGE
image_url     : /services/flexi-dentures-2.jpeg
local_image   : /services/flexi-dentures-2.jpeg
image_alt     : "Flexible partial denture with pink thermoplastic base"
image_alt_2   : "Flexi denture — comfortable and metal-free prosthesis"
image_src_2   : /services/flexi-dentures-1.jpeg
badge_color   : bg-blue-100 text-blue-700
title         : Flexible (Flexi) Dentures
short_desc    : Say goodbye to uncomfortable metal clasps. Our flexible (flexi)
                dentures are made from a lightweight, tissue-coloured
                thermoplastic material that adapts to the shape of your mouth.
                They are virtually invisible, highly comfortable, and far more
                natural-looking than traditional metal partial dentures.
duration      : Single sitting impression; prosthesis ready in 3–5 days
price         : Starting from ₹8,000
badge_extra   : null
show_homepage : NO

EXPAND DETAIL:
full_desc    : Flexible (flexi) dentures are made from a lightweight,
                tissue-coloured thermoplastic material that is more comfortable
                and natural-looking than traditional acrylic dentures with metal
                clasps. They adapt seamlessly to the shape of your mouth and are
                virtually invisible when worn. Ideal for patients seeking comfort
                and aesthetics.
expect       :
  - Single sitting impression for custom fit
  - Digital design preview of prosthesis
  - Lightweight thermoplastic fabrication in lab
  - Quick turnaround: ready in 3–5 days
who_needs    : Patients with missing teeth seeking comfortable, invisible, metal-free
                partial dentures as an alternative to traditional clasped dentures
note         : Extremely comfortable and durable. Regular cleaning and care required.
```
---

### SERVICE 12 — Gum Disease Treatment (Periodontics)
```
slug          : gum-treatment
category      : Surgical
display_type  : ICON
icon_name     : HeartPulse
icon_color    : text-red-500
icon_bg       : bg-red-100
badge_color   : bg-red-100 text-red-700
title         : Gum Disease Treatment
short_desc    : Comprehensive periodontal therapy including deep cleaning,
                curettage, and gum surgery to treat and reverse gum disease.
duration      : 1–3 sittings
price         : Starting from ₹1,500
badge_extra   : null
show_homepage : NO

EXPAND DETAIL:
full_desc    : Gum disease (gingivitis/periodontitis) is the leading cause
               of adult tooth loss. Treatment ranges from deep cleaning
               (scaling and root planing) to gum surgery for advanced cases.
               Early treatment prevents permanent bone loss.
expect       :
  - Periodontal probing to measure gum pocket depth
  - Deep scaling and root planing under local anaesthesia
  - Antimicrobial treatment in deep pockets
  - Review appointment 4–6 weeks later
who_needs    : Patients with bleeding gums, bad breath, loose teeth,
               receding gums, or gum swelling
note         : Regular 3-monthly maintenance cleaning after treatment is essential.
```

---

### SERVICE 13 — Paediatric Dentistry (Children's Dental Care)
```
slug          : paediatric-dentistry
category      : Paediatric
display_type  : IMAGE
image_url     : https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&q=80
local_image   : /public/services/paediatric-dentistry.jpg
image_alt     : "Children paediatric dentistry kid-friendly dental clinic Chennai"
badge_color   : bg-yellow-100 text-yellow-700
title         : Paediatric Dentistry
short_desc    : Gentle, fun, and child-friendly dental care from the very
                first tooth — check-ups, fillings, fluoride and fissure sealants.
duration      : 30–45 mins
price         : Starting from ₹299
badge_extra   : "Kid Friendly ⭐"
show_homepage : NO

EXPAND DETAIL:
full_desc    : Our paediatric dental approach is designed to make children
               comfortable and unafraid of the dentist. We use child-friendly
               communication, colourful tools, and reward stickers. Services
               include milk tooth fillings, extractions, and preventive fluoride.
expect       :
  - Gentle oral exam with child-friendly communication
  - Milk tooth fillings and extractions if needed
  - Fluoride application and fissure sealants for cavity prevention
  - Brushing technique teaching for child and parent
who_needs    : Children from first tooth eruption (6 months) through to age 16
note         : First visit recommended at age 1 or when first tooth appears.
```

---

### SERVICE 14 — Facial Surgical Correction
```
slug          : facial-surgical-correction
category      : Surgical
display_type  : IMAGE
image_url     : /services/Images/child photo.jpeg
local_image   : /services/Images/child photo.jpeg
image_alt     : "Child patient treated for facial surgical correction at Supreme Multi-Speciality Dental Centre"
badge_color   : bg-red-100 text-red-700
title         : Facial Surgical Correction
short_desc    : Specialised surgical correction for facial and dental
               anomalies in children, including cleft lip, cleft palate,
               and jaw alignment corrections. Our expert team provides
               compassionate care to restore function, appearance,
               and confidence.
duration      : Duration: Assessed per case; surgical planning over 1–2 consultations
price         : Custom quote after consultation
badge_extra   : null
show_homepage : NO

EXPAND DETAIL:
full_desc    : Our facial surgical correction services provide specialised
              surgical care for children with facial and dental
              anomalies. This includes cleft lip and palate repairs,
              jaw alignment surgeries, and other corrective procedures.
              We work with a multidisciplinary team to ensure comprehensive
              care and natural-looking results.
expect       :
  - Comprehensive surgical assessment and planning
  - Cleft lip/palate repair surgery
  - Jaw alignment correction procedures
  - Post-surgical care and follow-up
who_needs    : Children with facial or dental anomalies requiring surgical correction
note         : Surgical planning requires 1–2 consultation sessions.
```

---

### SERVICE 15 — Smile Makeover (Cosmetic Consultation)
```
slug          : smile-makeover
category      : Cosmetic
display_type  : IMAGE
image_url     : https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&q=80
local_image   : /public/services/smile-makeover.jpg
image_alt     : "Complete smile makeover cosmetic dentistry Vadapalani Chennai"
badge_color   : bg-pink-100 text-pink-700
title         : Complete Smile Makeover
short_desc    : A personalised combination of cosmetic treatments — whitening,
                veneers, reshaping, and alignment — for your dream smile.
duration      : Multiple treatments, customised plan
price         : Custom quote after consultation
badge_extra   : "Transformative"
show_homepage : NO

EXPAND DETAIL:
full_desc    : A smile makeover combines two or more cosmetic procedures
               tailored to your unique facial features and smile goals.
               May include whitening, veneers, gum contouring, bonding,
               and aligners. A digital smile preview is provided before starting.
expect       :
  - Full smile analysis and digital smile design preview
  - Customised treatment plan with procedure sequence
  - Combined appointments to reduce clinic visits
  - Final photography of completed smile transformation
who_needs    : Patients wanting to address multiple cosmetic concerns together
note         : Timeline and cost vary based on treatment combination chosen.
```

---

### SERVICE 15 — Teeth Sensitivity Treatment
```
slug          : sensitivity-treatment
category      : General
display_type  : ICON
icon_name     : Zap
icon_color    : text-yellow-500
icon_bg       : bg-yellow-100
badge_color   : bg-blue-100 text-blue-700
title         : Teeth Sensitivity Treatment
short_desc    : Targeted treatment for sharp tooth pain triggered by hot,
                cold, sweet, or acidic foods using desensitising agents.
duration      : 30–45 mins
price         : Starting from ₹799
badge_extra   : null
show_homepage : NO

EXPAND DETAIL:
full_desc    : Tooth sensitivity is caused by exposed dentine (enamel wear,
               gum recession, or cracked teeth). Treatment involves application
               of fluoride varnish, desensitising gel, or bonding to seal
               exposed dentine tubules and stop pain signals.
expect       :
  - Sensitivity assessment to identify trigger and cause
  - Professional fluoride varnish or desensitising gel applied
  - Bonding or restoration if enamel damage is the cause
  - Home care advice: desensitising toothpaste and technique
who_needs    : Patients who feel sharp pain with hot, cold, sweet, or cold air
note         : Results felt within 1–2 treatments. Home care continuation essential.
```

---

### SERVICE 16 — Dental X-rays & Digital Diagnostics
```
slug          : dental-xrays
category      : Diagnostic
display_type  : ICON
icon_name     : ScanLine
icon_color    : text-gray-600
icon_bg       : bg-gray-100
badge_color   : bg-gray-100 text-gray-700
title         : Dental X-rays & Digital Diagnostics
short_desc    : Advanced digital X-rays (OPG, IOPA, CBCT) for precise
                diagnosis of hidden decay, bone loss, impactions and more.
duration      : 10–20 mins
price         : Starting from ₹199
badge_extra   : "Low Radiation"
show_homepage : NO

EXPAND DETAIL:
full_desc    : Digital dental X-rays use up to 90% less radiation than
               traditional film X-rays and produce instant high-resolution
               images. We offer IOPA (single tooth), OPG (full mouth panoramic),
               and CBCT (3D cone beam) for implant and surgical planning.
expect       :
  - IOPA X-ray for individual tooth diagnosis
  - OPG panoramic X-ray for full mouth overview
  - CBCT 3D scan for implant planning or jaw assessment
  - Same-day digital report and diagnosis discussion
who_needs    : All patients as part of routine check-up or pre-treatment assessment
note         : Safe for adults. Pregnancy shield available. Minimal radiation dose.
```

---

### SERVICE 17 — Jaw Pain & TMJ Treatment
```
slug          : tmj-treatment
category      : Surgical
display_type  : ICON
icon_name     : Activity
icon_color    : text-orange-500
icon_bg       : bg-orange-100
badge_color   : bg-red-100 text-red-700
title         : Jaw Pain & TMJ Treatment
short_desc    : Relief for jaw clicking, lockjaw, chronic headaches, and
                facial pain caused by temporomandibular joint (TMJ) disorders.
duration      : 45–60 mins
price         : Starting from ₹1,999
badge_extra   : null
show_homepage : NO

EXPAND DETAIL:
full_desc    : TMJ disorders cause jaw pain, clicking sounds, difficulty
               chewing, and headaches. Treatment includes bite splints
               (night guards), physiotherapy exercises, occlusal adjustments,
               and in severe cases, specialist referral.
expect       :
  - TMJ assessment including jaw movement and bite analysis
  - Custom night guard / bite splint fabrication
  - Occlusal adjustment (bite correction)
  - Physiotherapy exercises and lifestyle advice
who_needs    : Patients with jaw clicking, facial pain, teeth grinding,
               morning headaches, or difficulty opening/closing mouth
note         : Night guard must be worn consistently for relief.
```

---

### SERVICE 18 — 24/7 Emergency Dental Care
```
slug          : emergency-dental
category      : Emergency
display_type  : IMAGE
image_url     : https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80
local_image   : /public/services/emergency-dental.jpg
image_alt     : "24/7 emergency dental care Vadapalani Chennai open now"
badge_color   : bg-red-600 text-white  [ADD pulse animation class]
title         : 24/7 Emergency Dental Care
short_desc    : Round-the-clock emergency care for sudden toothache, broken
                 teeth, dental trauma, lost fillings, or swelling — any hour.
duration      : Immediate — walk-in or call ahead
price         : Starting from ₹499
badge_extra   : "OPEN NOW 24/7"  [Red badge, pulsing dot animation]
show_homepage : YES (position 6 — always last, highlighted in red border)

EXPAND DETAIL:
full_desc    : Dental emergencies don't follow office hours. Dr. Yasmin
               Dental Clinic is open 24 hours a day, 365 days a year for
               emergency cases. We handle severe toothache, dental abscesses,
               knocked-out teeth, broken crowns, and facial swelling.
expect       :
   - Immediate pain relief on arrival (anaesthesia or medication)
   - Emergency X-ray for rapid diagnosis
   - Temporary or permanent treatment of the emergency
   - Follow-up appointment booked before you leave
who_needs    : Anyone experiencing sudden dental pain, injury, or swelling
note         : Call ahead if possible so we can prepare. Walk-ins also welcome any time.
```

---

### SERVICE 19 — Complete Teeth Make Over
```
slug          : complete-teeth-makeover
category      : Cosmetic
display_type  : IMAGE
image_url     : /services/Images/complete teeth smile make over.png
local_image   : /services/complete teeth smile make over.png
image_alt     : "Complete teeth smile make over at Supreme Multi-Speciality Dental Centre Vadapalani"
badge_color   : bg-pink-100 text-pink-700
title         : Complete Teeth Make Over
short_desc    : A comprehensive transformation of your smile using advanced
                 cosmetic dentistry — combining multiple procedures for a
                 complete, radiant, and confident smile.
duration      : Multiple sittings — customized treatment plan
price         : Custom quote after consultation
badge_extra   : "Transform Your Smile"
show_homepage : NO

EXPAND DETAIL:
full_desc    : Complete Teeth Make Over is a full-mouth cosmetic transformation
               that addresses multiple dental concerns simultaneously. Using a
               combination of advanced procedures like veneers, crowns, whitening,
               and alignment corrections, we create a harmonious, natural-looking
               smile that complements your facial features. Each treatment plan
               is customized to your unique needs and smile goals.
expect       :
   - Comprehensive smile analysis and digital imaging
   - Customized treatment plan with timeline and phases
   - Combination of veneers, crowns, whitening as needed
   - Final smile preview before completing treatment
   - Aftercare guidance for maintaining your new smile
who_needs    : Patients with multiple cosmetic concerns including stained,
               misaligned, chipped, gapped, or worn teeth seeking a complete
               smile transformation
note         : Treatment duration varies based on complexity. Results are
               long-lasting with proper care and maintenance.
```

---

## HOMEPAGE SERVICES SECTION DISPLAY RULES

Show 6 service preview cards on homepage (services marked show_homepage: YES):
1. General Dental Check-up
2. Teeth Cleaning & Scaling
3. Root Canal Treatment
4. Dental Implants
5. Teeth Whitening
6. Emergency Dental Care (always last, with red highlight border)

Layout on homepage:
- Section heading: "Our Dental Services"
- Subheading: "Expert care for every dental need — from routine to advanced"
- Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
- Below grid: centered "View All 18 Services →" button (primary blue, rounded-full)
  links to /services

Homepage cards are SIMPLIFIED (no expand panel, no price, no duration).
Show: Image/Icon + Badge + Title + Short desc + "Learn More →" link only.

---

## LOCAL IMAGE FALLBACK RULES

If developer provides local images in /public/services/ folder:
  → ALWAYS use local image FIRST over Unsplash URL
  → Check: /public/services/[slug].jpg or /public/services/[slug].png
  → If local image missing → fall back to Unsplash URL above
  → If BOTH missing → use ICON display type for that card instead

Icon fallback for image cards (if no image available):
  - General Checkup    → icon: Stethoscope, color: text-blue-600
  - Teeth Cleaning     → icon: Brush,       color: text-blue-500
  - Root Canal         → icon: Zap,         color: text-red-500
  - Dental Implants    → icon: Anchor,      color: text-gray-600
  - Teeth Whitening    → icon: Sun,         color: text-yellow-500
  - Orthodontics       → icon: GitBranch,   color: text-purple-500
  - Emergency          → icon: AlertCircle, color: text-red-600

---

## SEO RULES FOR SERVICES PAGE

Page title    : "Dental Services in Vadapalani Chennai | Supreme Multi-Speciality Dental Centre"
Meta desc     : "Explore all 18 dental services at Supreme Multi-Speciality Dental Centre,
                 Vadapalani — general dentistry, root canal, implants, whitening,
                 orthodontics & 24/7 emergency dental care in Chennai."
H1            : "Our Dental Services"
H2 per card   : [Service Title] — use as aria-label on each card

Image alt text: Use the image_alt value specified per service above.
URL slug      : /services#[slug] (allow deep-linking to individual service)
Schema        : Add MedicalProcedure schema for each service (name + description)

---
## END OF services.md
## ============================================================================
## TO INTEGRATE: Add this file to your project root as services.md, then
## add this line at the END of your main AI prompt:
##
## "Also read services.md in the project root and use it to build the
##  complete /services page, homepage services section, and all service
##  card components exactly as specified in that file. If local images
##  exist in /public/services/, use them. Otherwise use Unsplash URLs."
## ============================================================================

