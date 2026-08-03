"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  Code2,
  FileText,
  Laptop,
  LayoutDashboard,
  Mail,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  Palette,
  Presentation,
  Sparkles,
  Table2,
  X,
} from "lucide-react";
import {
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

type Lang = "en" | "id";

const brand = {
  name: "Faiza's Page",
  subtitle: "Digital Portfolio",
  logo: "/logo.png",
  photo: "/foto-faiza.jpg",
  email: "relsafaiza@gmail.com",
  whatsapp: "https://wa.me/6285136929300",
};

const copy = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      services: "Services",
      process: "Process",
      contact: "Contact",
      cta: "Let's Work",
    },
    hero: {
      badge: "Available for digital projects",
      titleStart: "Designing digital work that feels",
      titleHighlight: "clean",
      titleEnd: "useful, and aesthetic.",
      desc: "I help create websites, app interfaces, dashboards, presentations, documents, and digital solutions with professional, responsive, and easy-to-understand design.",
      primaryBtn: "View My Work",
      secondaryBtn: "Contact Me",
      connect: "Connect with me",
    },
    mockup: {
      label: "Project Space",
      title: "Portfolio Preview",
      desc: "Website, app UI, dashboard, data, and document design in one personal portfolio.",
      website: "Website",
      mobile: "Mobile UI",
      dashboard: "Dashboard",
      docs: "Docs",
      dashboardTitle: "Dashboard UI",
      dashboardDesc: "Clean monitoring layout",
      uiTitle: "UI Design",
      uiDesc: "Aesthetic & usable",
      responsiveTitle: "Responsive",
      responsiveDesc: "Mobile & desktop",
      phoneLabel: "Today's Work",
      phoneValue: "12 Projects",
    },
    stats: [
      ["10+", "Projects Completed"],
      ["5+", "Website Designs"],
      ["3+", "Mobile App UI"],
      ["100%", "Responsive Layout"],
    ],
    about: {
      label: "About Me",
      title: "I craft digital solutions with structure, style, and purpose.",
      desc: "I am interested in website development, app interface design, dashboards, data processing, and digital document design. My focus is creating visuals that are clean, responsive, easy to understand, and professional.",
      photoBadge: "Focused on clean digital work",
      photoTitle: "Creative Digital Portfolio",
      photoDesc: "Quality, clarity, and useful design.",
    },
    skills: [
      "Next.js",
      "React",
      "C#",
      "Java",
      "Database Building",
      "Tailwind CSS",
      "UI/UX Design",
      "Responsive Design",
      "Dashboard",
      "Excel",
      "PowerPoint",
      "Canva",
      "Word Layout",
    ],
projects: {
  label: "Featured Work",
  title: "Selected projects that show my digital capability.",
  viewAll: "View All Projects",
  detail: "View Detail",
  filters: ["All", "Website", "Dashboard", "Mobile App", "Data", "Document"],
  items: [
    {
      title: "Pantau Pangan DIY",
      category: "Dashboard Website",
      description:
        "A food price monitoring website for culinary MSMEs with trend analysis, prediction, recommendation, and early warning features.",
      tools: ["Next.js", "Tailwind", "Supabase"],
      image: "/projects/pantau-pangan.png",
      link: "https://pantaupangan-banyumas.netlify.app",
    },
    {
      title: "Law Firm Website",
      category: "Company Profile",
      description:
        "A professional law firm profile website with responsive layout, service pages, and contact section.",
      tools: ["Next.js", "UI Design"],
      image: "/projects/law-firm.png",
      link: "https://rta-lawfirm.netlify.app/",
    },
    {
      title: "AutoFusion",
      category: "Health Monitoring Dashboard",
      description:
        "A responsive admin dashboard for monitoring patient infusion status, active devices, alerts, and real-time safety conditions with a clean mobile-first interface.",
      tools: ["Next.js", "Tailwind CSS", "Mobile UI"],
      image: "/projects/autofusion.png",
      link: "https://autofusion-ten.vercel.app",
    },
    {
      title: "Birthday Date Invitation",
      category: "Digital Invitation",
      description:
        "Aesthetic digital birthday invitation website with event details, date highlight, gallery section, and responsive layout for mobile and desktop.",
      tools: ["HTML", "Tailwind", "Invitation UI"],
      image: "/projects/birthday-inv.png",
      link: "",
    },
  ],
},
    services: {
      label: "Services",
      title: "Things I can help you build and improve.",
      desc: "Not only websites, this section also highlights other relevant digital works so your portfolio looks broader and more valuable.",
      items: [
        {
          title: "Website Development",
          description:
            "Building responsive websites for portfolios, company profiles, landing pages, and information websites.",
        },
        {
          title: "Mobile App UI",
          description:
            "Designing modern, neat, and user-friendly mobile app interfaces.",
        },
        {
          title: "Dashboard Design",
          description:
            "Creating admin dashboards, data monitoring pages, and information visualization layouts.",
        },
        {
          title: "Excel & Data Work",
          description:
            "Cleaning data, creating Excel templates, simple dashboards, and data reports.",
        },
        {
          title: "Presentation Design",
          description:
            "Designing professional presentation slides for academic, business, and project needs.",
        },
        {
          title: "Document Design",
          description:
            "Formatting proposals, reports, modules, invoices, CVs, and other documents professionally.",
        },
      ],
    },
    process: {
      label: "Work Process",
      title: "A simple process to turn ideas into clean digital results.",
      steps: [
        [
          "01",
          "Discuss",
          "Understanding needs, references, goals, and design direction.",
        ],
        ["02", "Plan", "Structuring pages, content, features, and user flow."],
        ["03", "Design", "Creating a clean, modern, and responsive visual design."],
        ["04", "Build", "Implementing the design into a website or digital asset."],
      ],
    },
    contact: {
      label: "Let's Collaborate",
      title: "Have a project in mind? Let's make it look professional.",
      desc: "Available for websites, app designs, dashboards, Excel, presentations, reports, proposals, and other digital documents.",
      whatsapp: "WhatsApp Me",
      email: "Send Email",
    },
    footer: {
      text: "© 2026 Faiza's Page. All rights reserved.",
      instagram: "Instagram",
      github: "GitHub",
      email: "Email",
    },
  },

  id: {
    nav: {
      home: "Home",
      about: "About Me",
      projects: "Works",
      services: "Services",
      process: "Flow",
      contact: "Contact",
      cta: "Let’s Talk",
    },
    hero: {
      badge: "Open buat project digital ✨",
      titleStart: "Bikin digital stuff yang look-nya",
      titleHighlight: "clean",
      titleEnd: "aesthetic, dan berguna tentunya :D",
      desc: "Aku bisa bantu bikin website, aplikasi desktop, UI aplikasi, dashboard, presentasi, dokumen, dan kebutuhan digital lainnya biar tampilannya lebih proper, enak dilihat, responsive, dan nggak ngebosenin atau sesuai request kamu!",
      primaryBtn: "Liat Works",
      secondaryBtn: "Chat Aku",
      connect: "Find me here",
    },
    mockup: {
      label: "Project Space",
      title: "Portfolio Preview",
      desc: "Tempat buat nunjukin website, UI app, dashboard, data, sampai document design.",
      website: "Website",
      mobile: "UI App",
      dashboard: "Dashboard",
      docs: "Docs",
      dashboardTitle: "Dashboard Look",
      dashboardDesc: "Clean monitoring layout",
      uiTitle: "UI Design",
      uiDesc: "Aesthetic & easy to use",
      responsiveTitle: "Responsive",
      responsiveDesc: "Mobile & desktop ready",
      phoneLabel: "Today’s Work",
      phoneValue: "12 Projects",
    },
    stats: [
      ["10+", "Project Done"],
      ["5+", "Website Design"],
      ["3+", "App UI"],
      ["100%", "Responsive"],
    ],
    about: {
      label: "About Me",
      title: "Aku suka bikin digital things yang clean, jelas, dan punya value.",
      desc: "Aku tertarik di website development, aplikasi desktop development, UI aplikasi, dashboard, data processing, sampai document design. Fokusku simple: bikin tampilan yang rapi, aesthetic, responsive, dan tetap user-friendly.",
      photoBadge: "Digital work with clean vibes",
      photoTitle: "Creative Digital Portfolio",
      photoDesc: "Clean look, clear flow, useful result.",
    },
    skills: [
      "Next.js",
      "React",
      "C#",
      "Java",
      "Database Building",
      "Tailwind CSS",
      "UI/UX Design",
      "Responsive Design",
      "Dashboard",
      "Excel",
      "PowerPoint",
      "Canva",
      "Word Layout",
      "Et Cetera",
    ],
projects: {
  label: "Featured Works",
  title: "Some of my digital projects.",
  viewAll: "See All Projects",
  detail: "See Detail",
  filters: ["All", "Website", "Dashboard", "App UI", "Data", "Docs"],
  items: [
    {
      title: "Pantau Pangan DIY",
      category: "Dashboard Website",
      description:
        "Website buat monitoring harga pangan UMKM kuliner, lengkap dengan trend, prediction, recommendation, dan early warning.",
      tools: ["Next.js", "Tailwind", "Supabase"],
      image: "/projects/pantau-pangan.png",
      link: "https://pantaupangan-banyumas.netlify.app",
    },
    {
      title: "Law Firm Website",
      category: "Company Profile",
      description:
        "Website profil law firm dengan look profesional, responsive, plus halaman services dan contact.",
      tools: ["Next.js", "UI Design"],
      image: "/projects/law-firm.png",
      link: "https://rta-lawfirm.netlify.app/",
    },
    {
      title: "AutoFusion",
      category: "Health Monitoring Dashboard",
      description:
        "Dashboard admin buat monitoring status infus pasien secara real-time, mulai dari total pasien, perangkat aktif, alert, sampai status aman dengan UI yang clean dan mobile-first.",
      tools: ["Next.js", "Tailwind CSS", "Mobile UI"],
      image: "/projects/autofusion.png",
      link: "https://autofusion-ten.vercel.app",
    },
    {
      title: "Birthday Date Invitation",
      category: "Digital Invitation",
      description:
        "Website undangan birthday yang aesthetic, lengkap dengan detail acara, highlight tanggal, gallery section, dan tampilan responsive buat mobile maupun desktop.",
      tools: ["HTML", "Tailwind", "Invitation UI"],
      image: "/projects/birthday-inv.png",
      link: "",
    },
  ],
},
    services: {
      label: "Services",
      title: "Hal-hal yang bisa aku bantu biar look-nya makin proper.",
      desc: "Nggak cuma website, aku juga bisa bantu digital works lain yang masih relevan buat portfolio, tugas, business, atau kebutuhan client.",
      items: [
        {
          title: "Website Development",
          description:
            "Bikin website responsive buat portfolio, company profile, landing page, atau website informasi.",
        },
        {
          title: "Mobile App UI",
          description:
            "Bikin tampilan mobile app yang clean, modern, dan nyaman dipakai user.",
        },
        {
          title: "Dashboard Design",
          description:
            "Bikin dashboard admin, monitoring data, dan visualisasi informasi biar lebih gampang dibaca.",
        },
        {
          title: "Excel & Data Work",
          description:
            "Bantu rapihin data, bikin template Excel, simple dashboard, dan report data.",
        },
        {
          title: "Presentation Design",
          description:
            "Bikin slide presentasi yang lebih aesthetic, rapi, dan tetap profesional.",
        },
        {
          title: "Document Design",
          description:
            "Rapihin proposal, laporan, modul, invoice, CV, dan dokumen lain biar kelihatan niat.",
        },
      ],
    },
    process: {
      label: "Work Flow",
      title: "Flow-nya simple, biar ide kamu bisa jadi output yang clean.",
      steps: [
        [
          "01",
          "Briefing",
          "Ngobrol dulu soal kebutuhan, referensi, tujuan, dan style yang kamu mau.",
        ],
        [
          "02",
          "Planning",
          "Susun struktur halaman, content, fitur, dan flow tampilannya.",
        ],
        [
          "03",
          "Design",
          "Bikin look yang clean, modern, aesthetic, dan responsive.",
        ],
        [
          "04",
          "Build",
          "Mulai eksekusi jadi website, UI, deck, atau digital asset lainnya.",
        ],
      ],
    },
    contact: {
      label: "Let’s Create Something",
      title: "Punya project? Let’s make it look more professional.",
      desc: "Bisa buat website, app design, dashboard, Excel, presentation, report, proposal, atau dokumen digital lainnya.",
      whatsapp: "Chat WhatsApp",
      email: "Send Email",
    },
    footer: {
      text: "© 2026 Faiza's Page. All rights reserved.",
      instagram: "Instagram",
      github: "GitHub",
      email: "Email",
    },
  },
};

const serviceIcons = [
  Laptop,
  MonitorSmartphone,
  LayoutDashboard,
  Table2,
  Presentation,
  FileText,
];

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const t = copy[lang];

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f7ff] text-[#111827]">
      <Navbar lang={lang} setLang={setLang} t={t.nav} />

      <section className="relative mx-auto max-w-7xl px-5 pb-16 pt-28 sm:px-8 lg:px-10 lg:pb-24">
        <Decorations />

        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.05fr]">
          <div className="relative z-10">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/70 px-4 py-2 text-sm font-medium text-violet-700 shadow-sm backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {t.hero.badge}
            </div>

            <h1 className="max-w-3xl text-5xl font-black tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              {t.hero.titleStart}{" "}
              <span className="text-gradient">{t.hero.titleHighlight}</span>,{" "}
              {t.hero.titleEnd}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              {t.hero.desc}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-violet-200 transition hover:-translate-y-1 hover:bg-violet-700"
              >
                {t.hero.primaryBtn}
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-1 hover:border-violet-300 hover:text-violet-700"
              >
                {t.hero.secondaryBtn}
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <p className="text-sm text-slate-500">{t.hero.connect}</p>
              <div className="flex gap-2">
                <SocialButton icon={<MessageCircle className="h-4 w-4" />} />
                <SocialButton icon={<Code2 className="h-4 w-4" />} />
                <SocialButton icon={<Mail className="h-4 w-4" />} />
              </div>
            </div>
          </div>

          <HeroMockup t={t.mockup} />
        </div>

        <Stats stats={t.stats} />
      </section>

      <About t={t.about} skills={t.skills} />

      <Projects t={t.projects} />

      <Services t={t.services} />

      <Process t={t.process} />

      <Contact t={t.contact} />

      <Footer t={t.footer} />
    </main>
  );
}

function Navbar({
  lang,
  setLang,
  t,
}: {
  lang: Lang;
  setLang: Dispatch<SetStateAction<Lang>>;
  t: typeof copy.en.nav;
}) {
  const [open, setOpen] = useState(false);

  const menus = [
    { label: t.home, href: "#" },
    { label: t.about, href: "#about" },
    { label: t.projects, href: "#projects" },
    { label: t.services, href: "#services" },
    { label: t.process, href: "#process" },
    { label: t.contact, href: "#contact" },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/60 bg-white/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <a href="#" className="flex items-center gap-3">
          <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-violet-100 bg-white shadow-lg shadow-violet-200">
            <Image
              src={brand.logo}
              alt={`${brand.name} logo`}
              fill
              className="object-contain p-2"
              priority
            />
          </div>

          <div>
            <p className="text-sm font-black leading-none text-slate-950">
              {brand.name}
            </p>
            <p className="mt-1 text-xs text-slate-500">{brand.subtitle}</p>
          </div>
        </a>

        <div className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
          {menus.map((item) => (
            <a
              key={item.label}
              className="transition hover:text-violet-700"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <LanguageSwitch lang={lang} setLang={setLang} />

          <a
            href="#contact"
            className="hidden rounded-full bg-violet-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5 hover:bg-slate-950 md:inline-flex"
          >
            {t.cta}
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-950 shadow-sm md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-100 bg-white/95 px-5 py-5 shadow-xl backdrop-blur md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {menus.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-violet-50 hover:text-violet-700"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-2xl bg-slate-950 px-4 py-3 text-center text-sm font-bold text-white"
            >
              {t.cta}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function LanguageSwitch({
  lang,
  setLang,
}: {
  lang: Lang;
  setLang: Dispatch<SetStateAction<Lang>>;
}) {
  return (
    <div className="flex rounded-full border border-slate-200 bg-white p-1 shadow-sm">
      <button
        onClick={() => setLang("en")}
        className={`rounded-full px-3 py-2 text-xs font-black transition ${
          lang === "en"
            ? "bg-slate-950 text-white"
            : "text-slate-500 hover:text-violet-700"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLang("id")}
        className={`rounded-full px-3 py-2 text-xs font-black transition ${
          lang === "id"
            ? "bg-slate-950 text-white"
            : "text-slate-500 hover:text-violet-700"
        }`}
      >
        ID
      </button>
    </div>
  );
}

function HeroMockup({ t }: { t: typeof copy.en.mockup }) {
  return (
    <div className="relative z-10">
      <div className="absolute -left-8 top-20 h-40 w-40 rounded-full bg-violet-300/30 blur-3xl" />
      <div className="absolute -right-8 bottom-10 h-48 w-48 rounded-full bg-blue-300/30 blur-3xl" />

      <div className="glass-card relative rounded-[2rem] border border-white/80 bg-white/70 p-4 shadow-2xl shadow-violet-200/60 backdrop-blur">
        <div className="rounded-[1.5rem] border border-slate-100 bg-[#fbfbff] p-4">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
            <div className="ml-3 h-3 flex-1 rounded-full bg-slate-100" />
          </div>

          <div className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-3xl bg-slate-950 p-5 text-white">
              <div className="mb-8 flex items-center justify-between">
                <p className="text-sm font-semibold">{t.label}</p>
                <Sparkles className="h-5 w-5 text-violet-300" />
              </div>

              <p className="text-3xl font-black leading-tight">{t.title}</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">{t.desc}</p>

              <div className="mt-8 grid grid-cols-2 gap-3">
                <MiniDarkCard label={t.website} value="10+" />
                <MiniDarkCard label={t.mobile} value="3+" />
                <MiniDarkCard label={t.dashboard} value="5+" />
                <MiniDarkCard label={t.docs} value="8+" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-slate-950">
                      {t.dashboardTitle}
                    </p>
                    <p className="text-xs text-slate-500">{t.dashboardDesc}</p>
                  </div>
                  <Code2 className="h-5 w-5 text-violet-600" />
                </div>

                <div className="mt-5 h-32 rounded-2xl bg-gradient-to-br from-violet-50 to-blue-50 p-4">
                  <div className="h-full rounded-xl border border-white bg-white/70 p-3">
                    <div className="mb-3 h-3 w-1/2 rounded-full bg-violet-200" />
                    <div className="flex h-20 items-end gap-2">
                      {[35, 55, 42, 70, 60, 85, 68].map((height, index) => (
                        <span
                          key={index}
                          className="w-full rounded-t-full bg-violet-500/70"
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
                  <Palette className="mb-5 h-6 w-6 text-violet-600" />
                  <p className="text-sm font-black">{t.uiTitle}</p>
                  <p className="mt-1 text-xs text-slate-500">{t.uiDesc}</p>
                </div>

                <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
                  <MonitorSmartphone className="mb-5 h-6 w-6 text-blue-600" />
                  <p className="text-sm font-black">{t.responsiveTitle}</p>
                  <p className="mt-1 text-xs text-slate-500">
                    {t.responsiveDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="floating-phone absolute -bottom-8 -right-3 hidden w-40 rounded-[2rem] border-8 border-slate-950 bg-white p-3 shadow-2xl lg:block">
          <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-slate-300" />
          <div className="rounded-2xl bg-violet-600 p-3 text-white">
            <p className="text-xs">{t.phoneLabel}</p>
            <p className="mt-1 text-lg font-black">{t.phoneValue}</p>
          </div>
          <div className="mt-3 space-y-2">
            <div className="h-3 rounded-full bg-slate-100" />
            <div className="h-3 w-3/4 rounded-full bg-slate-100" />
            <div className="h-20 rounded-2xl bg-violet-50" />
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniDarkCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 p-3">
      <p className="text-xl font-black">{value}</p>
      <p className="mt-1 text-xs text-slate-300">{label}</p>
    </div>
  );
}

function Stats({ stats }: { stats: string[][] }) {
  return (
    <div className="relative z-10 mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map(([value, label]) => (
        <div
          key={label}
          className="rounded-[1.5rem] border border-white bg-white/80 p-6 shadow-lg shadow-violet-100 backdrop-blur transition hover:-translate-y-1"
        >
          <p className="text-3xl font-black text-slate-950">{value}</p>
          <p className="mt-1 text-sm font-medium text-slate-500">{label}</p>
        </div>
      ))}
    </div>
  );
}

function About({
  t,
  skills,
}: {
  t: typeof copy.en.about;
  skills: string[];
}) {
  return (
    <section
      id="about"
      className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10"
    >
      <div className="relative">
        <div className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-violet-200/60 blur-3xl" />

        <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-4 shadow-xl shadow-violet-100">
          <div className="relative aspect-[4/4] overflow-hidden rounded-[1.5rem] bg-slate-950">
            <Image
              src={brand.photo}
              alt="Faiza profile photo"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent" />

            <div className="absolute left-5 right-5 top-5">
              <span className="inline-flex rounded-full bg-white/80 px-4 py-2 text-xs font-black text-violet-700 shadow-sm backdrop-blur">
                {t.photoBadge}
              </span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="max-w-md text-3xl font-black leading-tight">
                {t.photoTitle}
              </p>
              <p className="mt-3 text-sm leading-6 text-violet-50">
                {t.photoDesc}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <p className="mb-3 inline-flex w-fit rounded-full bg-violet-100 px-4 py-2 text-sm font-bold text-violet-700">
          {t.label}
        </p>

        <h2 className="max-w-2xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
          {t.title}
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
          {t.desc}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects({ t }: { t: typeof copy.en.projects }) {
  const [activeFilter, setActiveFilter] = useState(t.filters[0]);

  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10"
    >
      <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="mb-3 inline-flex rounded-full bg-violet-100 px-4 py-2 text-sm font-bold text-violet-700">
            {t.label}
          </p>

          <h2 className="max-w-2xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            {t.title}
          </h2>
        </div>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-sm font-bold text-violet-700"
        >
          {t.viewAll}
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      <div className="mb-8 flex gap-3 overflow-x-auto pb-2">
        {t.filters.map((item) => (
          <button
            key={item}
            onClick={() => setActiveFilter(item)}
            className={`whitespace-nowrap rounded-full border px-5 py-2 text-sm font-bold shadow-sm transition ${
              activeFilter === item
                ? "border-slate-950 bg-slate-950 text-white"
                : "border-slate-200 bg-white text-slate-600 hover:bg-slate-950 hover:text-white"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {t.items.map((project, index) => (
          <article
            key={project.title}
            className="group overflow-hidden rounded-[1.7rem] border border-white bg-white p-3 shadow-lg shadow-violet-100 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-200"
          >
            <div className="relative aspect-[1.25/1] overflow-hidden rounded-[1.3rem] bg-slate-100">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 25vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />

              <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-black text-violet-700 shadow-sm">
                0{index + 1}
              </span>

              <span className="absolute bottom-3 left-3 rounded-full bg-slate-950/80 px-3 py-1 text-xs font-bold text-white backdrop-blur">
                {project.category}
              </span>
            </div>

            <div className="p-3">
              <p className="mb-2 text-xs font-bold uppercase tracking-wide text-violet-600">
                {project.category}
              </p>

              <h3 className="text-lg font-black text-slate-950">
                {project.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full bg-violet-50 px-3 py-1 text-xs font-bold text-violet-700"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-black text-slate-950 transition group-hover:text-violet-700"
              >
                {t.detail}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Services({ t }: { t: typeof copy.en.services }) {
  return (
    <section
      id="services"
      className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10"
    >
      <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="mb-3 inline-flex rounded-full bg-violet-100 px-4 py-2 text-sm font-bold text-violet-700">
            {t.label}
          </p>

          <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            {t.title}
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">{t.desc}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {t.items.map((service, index) => {
            const Icon = serviceIcons[index] ?? Laptop;

            return (
              <div
                key={service.title}
                className="group rounded-[1.5rem] border border-white bg-white p-6 shadow-lg shadow-violet-100 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-200"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-violet-700 transition group-hover:bg-slate-950 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-lg font-black text-slate-950">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Process({ t }: { t: typeof copy.en.process }) {
  return (
    <section
      id="process"
      className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10"
    >
      <div className="rounded-[2rem] bg-slate-950 p-6 text-white sm:p-10 lg:p-14">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-violet-200">
              {t.label}
            </p>

            <h2 className="max-w-2xl text-4xl font-black tracking-tight sm:text-5xl">
              {t.title}
            </h2>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {t.steps.map(([number, title, description]) => (
            <div
              key={number}
              className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <p className="text-sm font-black text-violet-300">{number}</p>
              <h3 className="mt-5 text-xl font-black">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact({ t }: { t: typeof copy.en.contact }) {
  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10"
    >
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-violet-600 to-slate-950 p-8 text-white shadow-2xl shadow-violet-200 sm:p-12 lg:p-16">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-violet-300/20 blur-3xl" />

        <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="mb-3 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-violet-100">
              {t.label}
            </p>

            <h2 className="max-w-2xl text-4xl font-black tracking-tight sm:text-5xl">
              {t.title}
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-violet-100">
              {t.desc}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              href={brand.whatsapp}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-black text-slate-950 transition hover:-translate-y-1 hover:bg-violet-100"
            >
              {t.whatsapp}
              <MessageCircle className="h-4 w-4" />
            </a>

            <a
              href={`mailto:${brand.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-black text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/20"
            >
              {t.email}
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ t }: { t: typeof copy.en.footer }) {
  return (
    <footer className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-5 pb-10 pt-5 text-sm text-slate-500 sm:px-8 md:flex-row lg:px-10">
      <p>{t.text}</p>

      <div className="flex gap-4">
        <a href="#" className="hover:text-violet-700">
          {t.instagram}
        </a>
        <a href="#" className="hover:text-violet-700">
          {t.github}
        </a>
        <a href={`mailto:${brand.email}`} className="hover:text-violet-700">
          {t.email}
        </a>
      </div>
    </footer>
  );
}

function SocialButton({ icon }: { icon: ReactNode }) {
  return (
    <a
      href="#"
      className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:-translate-y-1 hover:border-violet-300 hover:text-violet-700"
    >
      {icon}
    </a>
  );
}

function Decorations() {
  return (
    <>
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-violet-200/50 blur-3xl" />
      <div className="absolute right-0 top-32 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="absolute left-1/2 top-10 h-64 w-64 -translate-x-1/2 rounded-full bg-pink-100/70 blur-3xl" />
    </>
  );
}