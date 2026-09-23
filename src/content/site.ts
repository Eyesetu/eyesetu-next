// Single source of truth for site copy and data.
// Content is taken from https://eyesetu.in. Items marked PLACEHOLDER must be replaced before launch.

export const contact = {
  phoneDisplay: "+91 98991 18310",
  phoneE164: "+919899118310",
  whatsapp: "919899118310",
  email: "support@eyesetu.co.in",
  address: "26, National Park, near Moolchand Metro Station, New Delhi, Delhi 110024",
  mapUrl: "https://maps.google.com/?q=26+National+Park+near+Moolchand+Metro+New+Delhi+110024",
} as const;

export const socials = [
  { label: "X (Twitter)", href: "https://x.com/eyesetu_", icon: "x" },
  { label: "YouTube", href: "https://www.youtube.com/@Eye-Setu", icon: "youtube" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/eyesetu-ab6708382/", icon: "linkedin" },
] as const;

export type NavItem = { label: string; href: string; children?: { label: string; href: string; note?: string }[] };

export const nav: NavItem[] = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  {
    label: "Partners",
    href: "#platform",
    children: [
      { label: "For optometrists", href: "/for-optometrists", note: "Practice OS & referral network" },
      { label: "For enterprise", href: "/for-enterprise", note: "Workplace & hospital screening" },
    ],
  },
  {
    label: "Locations",
    href: "#locations",
    children: [
      { label: "Delhi", href: "/eye-test-at-home-delhi" },
      { label: "Gurgaon", href: "/eye-test-at-home-gurgaon" },
    ],
  },
  { label: "Blogs", href: "/blogs" },
];

export const hero = {
  eyebrow: "An AIIMS faculty – IIM initiative",
  title: "Advanced eye care,",
  titleAccent: "at your doorstep.",
  lede: "No hospital visits. No waiting rooms. Just world-class eye tests, done at home by trained optometrists and reviewed live by AIIMS-trained eye specialists.",
  facts: ["Hospital-grade portable devices", "Doctor consult in the same visit", "Safe for seniors & kids"],
};

export const pillars = [
  { title: "Travel-free", body: "No traffic, no parking, no long corridors. We come to you.", icon: "home" },
  { title: "Time-saving", body: "Tests done in minutes. No OPD queues, no waiting rooms.", icon: "clock" },
  { title: "Comfort-first", body: "Tested on your own sofa, with family around you.", icon: "heart" },
] as const;

export const trustFacts = [
  { value: "AIIMS", label: "trained eye specialists" },
  { value: "8+", label: "hospital-grade tests at home" },
  { value: "1 visit", label: "for tests, report & doctor consult" },
  { value: "Delhi · Gurgaon", label: "home visits across NCR" },
];

export const problem = {
  eyebrow: "Why EyeSetu exists",
  title: "Eye disease is silent. Getting checked shouldn't be hard.",
  points: [
    {
      title: "Late detection costs sight",
      body: "Glaucoma, diabetic retinopathy and macular degeneration progress silently. By the time symptoms appear, irreversible damage has often happened.",
    },
    {
      title: "Hospitals are hard to reach",
      body: "Long travel, crowded OPDs and repeat visits make follow-ups difficult, especially for elderly and chronically ill patients.",
    },
  ],
  solution: {
    title: "So we bring the eye hospital home.",
    body: "Hospital-grade home eye testing means diseases are caught early, follow-ups happen on time, and quality care becomes accessible and affordable for every family.",
  },
};

export type Service = {
  slug: string;
  title: string;
  summary: string;
  tests: string[];
  image?: string;
  imageAlt?: string;
  tag?: string;
};

export const services: Service[] = [
  {
    slug: "retina",
    title: "Advanced Retina Tests",
    summary: "AI-assisted retina imaging for diabetic and age-related eye disease.",
    tests: ["Amsler Grid", "Visual Acuity", "AI Fundus Imaging", "AI OCT Imaging"],
    image: "/images/device-retina-scan.jpg",
    imageAlt: "A retina image captured on EyeSetu's handheld fundus camera",
    tag: "AI-powered",
  },
  {
    slug: "glaucoma",
    title: "Advanced Glaucoma Tests",
    summary: "Know whether you have glaucoma, and whether it is stable.",
    tests: ["IOP", "Pachymetry", "Fundus Imaging", "OCT", "Perimetry", "Visual field progression"],
    image: "/images/test-tonometry.jpg",
    imageAlt: "Eye pressure being measured with a handheld tonometer",
  },
  {
    slug: "basic",
    title: "Basic Eye Check",
    summary: "A complete annual check-up for the whole family.",
    tests: ["Vision test", "IOP", "Slit Lamp", "Refraction", "Fundus photo"],
    image: "/images/kit-portable.jpg",
    imageAlt: "EyeSetu's portable diagnostic kit opened on a table",
    tag: "Most booked",
  },
  {
    slug: "kids",
    title: "Kids Eye Tests",
    summary: "Semi-annual review with at-home dilation, refraction and a teleconsult.",
    tests: ["Dilation", "Refraction", "Teleconsult"],
    image: "/images/kids-exam-close.jpg",
    imageAlt: "An optometrist examining a child's eyes at home",
  },
  {
    slug: "post-surgery",
    title: "Post-Surgical Monitoring",
    summary: "Recovery tracking after cataract, LASIK or retina surgery.",
    tests: ["Vision recovery", "IOP", "Slit Lamp", "Fundus"],
  },
  {
    slug: "lasik",
    title: "LASIK Screening",
    summary: "Know whether you are fit for refractive surgery.",
    tests: ["Topography", "Pachymetry", "Dry eye check", "Refraction"],
  },
  {
    slug: "chronic",
    title: "Chronic Care Plans",
    summary: "Quarterly check-ups and digital reports for glaucoma & diabetes.",
    tests: ["Quarterly visits", "Digital reports", "Teleconsult"],
  },
  {
    slug: "glasses",
    title: "Prescription & Glasses",
    summary: "Try frames at home and get your glasses delivered after the test.",
    tests: ["Digital prescription", "Frames at home", "Home delivery"],
  },
];

export const steps = [
  {
    title: "Book your slot",
    body: "WhatsApp or call us. Pick a time that suits you, even outside office hours.",
    icon: "calendar",
  },
  {
    title: "We come to you",
    body: "A trained optometrist arrives with a complete portable diagnostic kit.",
    image: "/images/optometrist-arrives.jpg",
    imageAlt: "An EyeSetu optometrist arriving with a portable diagnostic kit",
    imagePosition: "80% center",
  },
  {
    title: "Tested in minutes",
    body: "Painless, non-invasive tests on hospital-grade devices, right at home.",
    image: "/images/step-tested.jpg",
    imageAlt: "A patient having a retina photo taken at home",
  },
  {
    title: "Instant specialist review",
    body: "Results go live to super-specialist, AIIMS-trained doctors over tele-ophthalmology.",
    image: "/images/step-teleconsult.jpg",
    imageAlt: "A patient on a video consultation with an eye doctor",
  },
  {
    title: "Real-time guidance",
    body: "The doctor explains your report and plans treatment, and we stay with you till you heal.",
    image: "/images/step-guidance.jpg",
    imageAlt: "Retina scan results shown on a phone to a family at home",
  },
];

export const programs = [
  {
    title: "Seniors",
    body: "Stress-free follow-ups without travel or queues.",
    image: "/images/elder-slit-lamp.jpg",
    imageAlt: "An optometrist examining an elderly woman at home",
  },
  {
    title: "Children",
    body: "Early detection from the comfort of home.",
    image: "/images/kids-exam.jpg",
    imageAlt: "A child having an eye test at home with a parent beside",
  },
  {
    title: "Professionals",
    body: "Get checked before or after office hours.",
    image: "/images/professional-exam.jpg",
    imageAlt: "A young professional having an eye scan",
  },
  {
    title: "Chronic patients",
    body: "AI-based monitoring for glaucoma, diabetes & ARMD.",
    image: "/images/chronic-tonometry.jpg",
    imageAlt: "Eye pressure check for a glaucoma patient",
  },
];

export const technology = {
  eyebrow: "Hospital-grade technology",
  title: "A full eye clinic, packed into a suitcase.",
  lede: "The same class of devices trusted in leading eye centres, made portable, and backed by our MedSetu tele-diagnostic hub.",
  features: [
    {
      title: "Proprietary AI algorithms",
      body: "Early detection of cataract, glaucoma and diabetic retinopathy with 95% accuracy matching specialist diagnosis.",
      icon: "brain",
    },
    {
      title: "Portable diagnostics",
      body: "FDA-approved, clinic-grade tools that enable comprehensive eye examinations at home.",
      icon: "scan",
    },
    {
      title: "Integrated care platform",
      body: "Data-driven care plans with automated follow-up reminders and progress tracking.",
      icon: "activity",
    },
  ],
  equipment: ["OCT", "Fundus imaging", "Tonometry", "Visual field testing", "Slit lamp", "Pachymetry"],
};

export const surgiSetu = {
  eyebrow: "SurgiSetu",
  title: "If you need surgery, we walk every step with you.",
  lede: "End-to-end surgical assistance with AIIMS and other reputed surgeons, including teleconsults, transport and recovery care.",
  phases: [
    {
      label: "Before",
      title: "Plan with confidence",
      points: ["Tele-surgical consultation", "Remote pre-operative assessment", "Pick-up & transport arranged"],
    },
    {
      label: "Surgery",
      title: "Best-in-class hands",
      points: ["In-hospital surgery scheduling", "AIIMS & reputed surgeon teams", "Coordinated logistics on the day"],
    },
    {
      label: "After",
      title: "Recover at home",
      points: ["Teleconsult follow-ups", "Supervised return transport", "AI-powered recovery tracking"],
    },
  ],
};

export const team = [
  {
    name: "Dr. Shikha Gupta",
    role: "Co-founder & CEO",
    image: "/images/team/shikha-gupta.jpg",
    avatar: "/images/team/shikha-gupta-avatar.jpg",
    bio: "MD Ophthalmology with 15+ years in clinical practice and telemedicine innovation. Former senior consultant at AIIMS, with a vision to provide eye care to all.",
    creds: ["MBBS, MD – AIIMS (Gold medal)", "AGS Humanitarian Award", "Top 2% Stanford researcher 2025", "H-index 32"],
  },
  {
    name: "Preeti Gupta",
    role: "Co-founder & CTO",
    image: "/images/team/preeti-gupta.jpg",
    avatar: "/images/team/preeti-gupta.jpg",
    bio: "Product leader with a decade at Microsoft and Times Internet, and a founder herself. Builds the platform that connects patients to specialists.",
    creds: ["MBA – IIM Indore", "BE – NSIT", "Senior PM, Microsoft", "Ex-Times Internet"],
  },
  {
    name: "Dr. Varun Gogia",
    role: "Chief Advisor",
    image: "/images/team/varun-gogia.jpg",
    avatar: "/images/team/varun-gogia.jpg",
    bio: "Director of the ICLINIX group of hospitals. AIIMS gold medalist and Best Junior Resident (2011), advising EyeSetu on clinical care.",
    creds: ["MBBS, MD – AIIMS (Gold medal)", "IJO Silver Awardee", "Director, ICLINIX"],
  },
];

// PLACEHOLDER: real patient photos, placeholder quotes & names. Replace with consented testimonials.
export const testimonials = [
  {
    name: "Patient name",
    meta: "Glaucoma follow-up · South Delhi",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. The team came home, the tests took minutes and the doctor explained everything on video.",
    image: "/images/testimonial-1.jpg",
    placeholder: true,
  },
  {
    name: "Patient name",
    meta: "Senior care · Gurgaon",
    quote:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. No hospital queue, no travel. Exactly what my family needed.",
    image: "/images/testimonial-2.jpg",
    placeholder: true,
  },
  {
    name: "Patient name",
    meta: "Annual eye check · New Delhi",
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco. Professional, punctual and the report was on my phone the same day.",
    image: "/images/testimonial-3.jpg",
    placeholder: true,
  },
];

export const faqs = [
  {
    q: "Is the home test as accurate as in the hospital?",
    a: "Yes. We use the same class of advanced devices trusted in leading eye centres, operated by trained optometrists and reviewed by AIIMS-trained specialists.",
  },
  {
    q: "Do I still need to see my doctor?",
    a: "A doctor consultation is included after the tests, over video, during the same visit. You only need to visit a hospital if you need further intervention, and we will discuss every option with you.",
  },
  {
    q: "Is it safe for elderly patients?",
    a: "Yes. All our devices are non-invasive, painless and safe. In fact, we began primarily for the elderly, so they don't have to wait in long queues or travel long distances for every follow-up.",
  },
  {
    q: "How often should I book a home eye test?",
    a: "Healthy adults: once a year. Glaucoma, diabetic eye disease or ARMD: every 3–6 months. Dry eye or post-operative: every 3–6 months. Children with glasses, amblyopia or myopia: every 3–6 months.",
  },
  {
    q: "Can I get new spectacles at home after testing?",
    a: "Yes. Our team brings a full range of frames for you to try and delivers your glasses after the test or surgery.",
  },
  {
    q: "Is home eye care covered by insurance?",
    a: "For many plans, yes. We provide all the paperwork for easy claims and help you check your eligibility.",
  },
  {
    q: "Which areas do you serve?",
    a: "We currently visit homes across Delhi and Gurgaon. WhatsApp us your area and we'll confirm the earliest available slot.",
  },
  {
    q: "Do you accept international cards for NRI bookings?",
    a: "Yes. All major international cards and popular payment methods are supported via Razorpay, so family abroad can book and pay for parents in India.",
  },
  {
    q: "Is there a subscription lock-in?",
    a: "No. Family and Diabetic Care plans renew automatically but can be cancelled anytime before renewal.",
  },
  {
    q: "What if the specialist review flags something serious?",
    a: "We connect you directly to a specialist consultation or SurgiSetu surgery coordination, with no extra booking hassle.",
  },
  {
    q: "Is there a refund policy?",
    a: "If a home visit does not happen as scheduled due to our error, you get a full refund, no questions asked.",
  },
  {
    q: "What does nursing attendant help cost?",
    a: "Plans are flexible. Book hourly, by the day or weekly for surgery recovery, chronic care or elderly support.",
  },
];

export const footerLinks = {
  Services: [
    { label: "Basic eye check", href: "#services" },
    { label: "Glaucoma tests", href: "#services" },
    { label: "Retina tests", href: "#services" },
    { label: "Kids eye tests", href: "#services" },
    { label: "LASIK screening", href: "#services" },
    { label: "SurgiSetu – surgery support", href: "#surgisetu" },
  ],
  Company: [
    { label: "About us", href: "/about" },
    { label: "Our doctors", href: "#team" },
    { label: "For optometrists", href: "/for-optometrists" },
    { label: "For enterprise", href: "/for-enterprise" },
    { label: "Careers", href: "/careers" },
    { label: "Blogs", href: "/blogs" },
  ],
  "Locations & legal": [
    { label: "Eye test, Delhi", href: "/eye-test-at-home-delhi" },
    { label: "Eye test, Gurgaon", href: "/eye-test-at-home-gurgaon" },
    { label: "Privacy policy", href: "/privacy" },
    { label: "Terms of service", href: "/terms" },
    { label: "Design system", href: "/design" },
  ],
};

/** Conditions EyeSetu screens and monitors for (from the tests and FAQs on eyesetu.in). */
export const conditions = [
  "Glaucoma",
  "Diabetic retinopathy",
  "Cataract",
  "Age-related macular degeneration",
  "Dry eye",
  "Myopia in children",
  "Amblyopia",
  "Post-surgery recovery",
  "Refractive errors",
];

/** Hospital visit vs. EyeSetu at home, qualitative only. */
export const comparison = [
  { label: "Getting there", hospital: "Travel, parking and long corridors", eyesetu: "We come to your home" },
  { label: "Waiting", hospital: "Crowded OPD queues", eyesetu: "Your slot, no waiting room" },
  { label: "Doctor consult", hospital: "Often a separate visit", eyesetu: "Video consult in the same visit" },
  { label: "Reports", hospital: "Collect later, on paper", eyesetu: "Digital reports on your phone" },
  { label: "Follow-ups", hospital: "Easy to postpone or miss", eyesetu: "Reminders & repeat home visits" },
  { label: "For seniors", hospital: "Tiring, needs an attendant", eyesetu: "Comfort-first, family beside" },
];

/** Options for the quick-book widget (sent as a pre-filled WhatsApp message). */
export const quickBook = {
  tests: ["Basic eye check", "Glaucoma tests", "Retina tests", "Kids eye test", "Post-surgery check", "LASIK screening", "Not sure yet"],
  cities: ["Delhi", "Gurgaon"],
  times: ["Morning", "Afternoon", "Evening"],
};

// ---------------------------------------------------------------------------
// Content brought over from eyesetu.co.in
// ---------------------------------------------------------------------------

export const recognition = ["DPIIT Recognized", "Startup India"];

/** "India has a vision crisis hiding in plain sight." */
export const crisisStats = [
  { value: 550, suffix: "M", label: "Indians need eye care they cannot access" },
  { value: 100, suffix: "M+", label: "diabetics at risk of preventable blindness" },
  { value: 80, suffix: "%", label: "of vision impairment is preventable" },
  { value: 25000, prefix: "₹", suffix: " Cr+", label: "Indian eye care market size" },
];

export const audiences = {
  eyebrow: "At-home care · No hospital trips · No full day off",
  title: "Eye care for the ones who need it most, at home.",
  lede: "Whether your parents are in Delhi and you're in Dubai, or your child dreads the hospital, EyeSetu removes every barrier between your family and world-class eye care.",
  nri: {
    tab: "Parents in India",
    tag: "For NRIs & families abroad",
    title: "Your parents are in India. You're abroad. Their eyes can't wait.",
    body: "75% of senior citizens in India live with a chronic condition affecting their vision, and most haven't had a proper eye test in years. We bring hospital-grade diagnostics to your parents' home in Delhi or Gurgaon, and you join the specialist consultation live on video from wherever you are.",
    points: [
      { title: "Book online from any country", body: "Pay via Razorpay in seconds. No Indian bank account needed." },
      { title: "Attend the consultation live", body: "Join the AIIMS specialist teleconsult on video, in any time zone." },
      { title: "Report sent to you directly", body: "Full diagnostic report emailed to you and your parents within 2 hours." },
      { title: "Quarterly follow-up reminders", body: "For glaucoma, diabetic retina and post-cataract care, so nothing falls through." },
    ],
    tags: ["Glaucoma monitoring", "Diabetic retina screen", "SurgiSetu coordination", "Post-surgery follow-up"],
    cta: "Book my parents' eye test",
    ctaMessage: "Hi EyeSetu, I live abroad and want to book an eye test at home for my parents.",
    note: "We call to confirm within 2 hours · Serving Delhi NCR & Gurgaon",
    image: "/images/visual-field-team.jpg",
    imageAlt: "EyeSetu optometrists running a visual field test for a senior patient at home",
  },
  kids: {
    tab: "Your child",
    tag: "For parents of school-age children",
    title: "Your child's eye test shouldn't cost you a full day off work.",
    body: "Children spending 6+ hours a day on screens are developing nearsightedness faster than any generation before. Catching it before age 10 can slow progression significantly. EyeSetu does the full test, including dilation, at home. Your child stays relaxed; you lose two hours, not two days.",
    points: [
      { title: "Full dilation at home", body: "The same cycloplegic refraction done at leading eye hospitals." },
      { title: "Myopia progression tracking", body: "Prescriptions tracked every 6 months, with acceleration flagged early." },
      { title: "Amblyopia & squint detection", body: "Lazy eye and squint are best caught before age 7. We screen for both." },
      { title: "Paediatric specialist on video", body: "A children's eye specialist reviews results live, in the same visit." },
    ],
    compare: [
      { label: "Travel time", clinic: "60–90 min", home: "0 min" },
      { label: "Waiting room", clinic: "45–120 min", home: "0 min" },
      { label: "Time off work", clinic: "4–6 hours", home: "Under 2 hours" },
      { label: "Child stress", clinic: "High", home: "Low" },
      { label: "Dilation included", clinic: "Sometimes", home: "Always" },
    ],
    stat: { value: "80%", label: "of children's vision problems go undetected until they affect school performance" },
    cta: "Book my child's eye test",
    ctaMessage: "Hi EyeSetu, I'd like to book a home eye test for my child.",
    note: "Ages 3–18 · Includes full dilation · No hospital visit needed",
    image: "/images/kids-exam.jpg",
    imageAlt: "An optometrist examining a child's eyes at home while a parent sits beside",
  },
};

export type Plan = {
  name: string;
  subhead: string;
  inr: number;
  usd: number;
  period: string;
  features: string[];
  cta: string;
  popular?: boolean;
};

export const plans: Plan[] = [
  {
    name: "Single Test",
    subhead: "For one person, one test",
    inr: 499,
    usd: 6,
    period: "one-time",
    features: [
      "Full home eye test (refraction, acuity, pressure)",
      "Specialist review within 24 hours",
      "Digital report + prescription",
      "Free re-test if inconclusive",
    ],
    cta: "Book a test",
  },
  {
    name: "Family Care",
    subhead: "For families, including parents managed from abroad",
    inr: 1499,
    usd: 18,
    period: "/quarter",
    features: [
      "Up to 4 family profiles",
      "Unlimited booking across all members",
      "NRI-friendly international payment",
      "Video access to consultations from anywhere",
      "Automated annual reminders",
    ],
    cta: "Set up family plan",
    popular: true,
  },
  {
    name: "Diabetic Care Annual",
    subhead: "For diabetics needing annual retina monitoring",
    inr: 1999,
    usd: 24,
    period: "/year",
    features: [
      "Annual retina screening at home",
      "AI-assisted + specialist grading",
      "Priority scheduling",
      "Year-round symptom check-ins",
    ],
    cta: "Start diabetic care plan",
  },
];

/** "Built for everyone": the wider EyeSetu platform. */
export const platform = [
  {
    audience: "For consumers",
    name: "EyeSetu Pro",
    price: "₹299",
    period: "/month",
    features: ["AI-powered eye risk assessment", "Teleconsult with optometrists", "Lifelong eye health tracking"],
    cta: "Start free trial",
    href: "/pro",
  },
  {
    audience: "For optometrists",
    name: "Practice OS",
    price: "₹999+",
    period: "/month",
    features: ["Complete practice management", "Digital prescriptions", "Patient referral network"],
    cta: "Book a demo",
    href: "/for-optometrists",
  },
  {
    audience: "For enterprise",
    name: "Workplace Screening",
    price: "Custom",
    period: "",
    features: ["Bulk diabetic retinopathy screening", "Employee wellness programs", "Insurance integrations"],
    cta: "Talk to us",
    href: "/for-enterprise",
  },
];

/** Verified-booking reviews from eyesetu.co.in (text only; never paired with photos). */
export const reviews = [
  {
    quote:
      "My father has glaucoma and needs quarterly check-ups. Getting him to a hospital was becoming impossible. EyeSetu's home visit saved us hours and he was so much more comfortable.",
    name: "Priya M.",
    meta: "Bengaluru · Elder care (NRI)",
  },
  {
    quote:
      "Diabetic for 8 years, never got my retina checked because I felt fine. EyeSetu found early signs of retinopathy. If I'd waited another year, I might have lost vision.",
    name: "Arjun K.",
    meta: "Delhi · Diabetic screening",
  },
  {
    quote:
      "Took my 6-year-old daughter for an eye test at home. She was relaxed, no waiting room meltdown. They found she needed glasses. The entire process was under 2 hours.",
    name: "Meera S.",
    meta: "Mumbai · Home test",
  },
];

export const trustBadges = [
  "Specialists trained at AIIMS-affiliated hospitals",
  "Razorpay secure payments",
  "Data encrypted & HIPAA-aligned practices",
];
