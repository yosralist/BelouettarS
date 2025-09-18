"use client";
import { Globe } from 'lucide-react'
import { useState } from 'react';

interface ImageErrorState {
  [key: string]: boolean;
}

function CheckItem({ title, desc }: { title: string; desc?: string }) {
  return (
    <div className="flex items-start gap-3">
      <span aria-hidden className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#2da5e5]/15">
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-[#2da5e5]">
          <path fill="currentColor" d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
        </svg>
      </span>
      <div>
        <p className="font-semibold text-lg text-slate-900">{title}</p>
        {desc && <p className="text-base text-slate-600 mt-1">{desc}</p>}
      </div>
    </div>
  )
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white text-ink px-3 py-1 text-sm font-semibold border border-slate-200 shadow-sm">
      {children}
    </span>
  )
}

function SectionHeader({ eyebrow, title, subtitle }: { eyebrow?: string; title?: string; subtitle?: string }) {
  return (
    <div className="max-w-4xl mb-12">
      {eyebrow && <p className="text-base tracking-widest uppercase text-[#2da5e5] mb-4 font-medium">{eyebrow}</p>}
      {title && <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-6 text-slate-900">{title}</h2>}
      {subtitle && <p className="text-xl text-slate-600 leading-relaxed">{subtitle}</p>}
    </div>
  )
}

function SectionBand({ id, bg, children }: { id: string; bg: 'white' | 'slate'; children: React.ReactNode }) {
  const isSlate = bg === 'slate'
  return (
    <section id={id} className={`${isSlate ? 'bg-slate-50' : 'bg-white'} border-t border-b border-slate-200`}>
      <div className="container mx-auto px-4 py-16 sm:py-20 lg:py-24">{children}</div>
    </section>
  )
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-white rounded-xl p-6 shadow-sm ${className}`}>
      {children}
    </div>
  )
}

function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`container mx-auto px-4 ${className}`}>
      {children}
    </div>
  )
}

export default function Page() {
  const [imageErrors, setImageErrors] = useState<ImageErrorState>({});

  const handleImageError = (professorKey: string) => {
    setImageErrors(prev => ({ ...prev, [professorKey]: true }));
  };

  const services = [
    {
      title: 'Digitalisation of Materials & Processes',
      desc: 'Data integration, modelling, simulation, and optimisation to improve throughput, quality, and cost across lab and line.',
      points: ['Data pipelines & dashboards', 'Digital twins & model calibration', 'Advanced analytics & optimisation'],
      icon: (
        <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden>
          <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      )
    },
    {
      title: 'Digital Product Passport (DPP)',
      desc: 'Lifecycle traceability and EU-aligned compliance, enabling transparency, circularity, and sustainability metrics.',
      points: ['Standards & architecture', 'Data model & interfaces', 'Pilot to scale deployment'],
      icon: (
        <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden>
          <path fill="currentColor" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Market Analysis & Business Modelling',
      desc: 'Strategic insights from trends to pricing and go-to-market. We turn data into robust business models for growth.',
      points: ['Market sizing & trends', 'Competitive landscape', 'Value proposition & pricing'],
      icon: (
        <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden>
          <path fill="currentColor" d="M3 3v18h18v-2H5V3H3zm19 4l-6-6v4c0 1.1.9 2 2 2h4z" />
        </svg>
      )
    },
    {
      title: 'Innovation Support',
      desc: 'R&D roadmaps, technology scouting, and pragmatic execution from proof-of-concept to scale.',
      points: ['Use-case discovery', 'Pilot design', 'Change enablement'],
      icon: (
        <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden>
          <path fill="currentColor" d="M9 11H7v3h2v-3zm4 0h-2v3h2v-3zm4 0h-2v3h2v-3zm2.5-7h-15v18h15v-18zm-2 16h-11v-14h11v14z" />
        </svg>
      )
    },
  ]

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* spacer below fixed header */}
      <div className="h-18" />

      {/* Hero with gradient blobs */}
      <section id="home" className="relative overflow-hidden">
        {/* soft gradient base */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-100 via-white to-indigo-50" />
        {/* subtle grid overlay */}
        <div className="absolute inset-0 -z-10 bg-grid bg-[size:22px_22px]" />
        {/* animated color blobs */}
        <div className="pointer-events-none absolute -top-28 -right-24 h-96 w-96 rounded-full bg-[#2da5e5]/30 blur-3xl animate-blob" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#2da5e5]/20 blur-3xl animate-blob animation-delay-2000" />

        <Container className="py-20 sm:py-28 lg:py-36 relative z-10">
          <div className="max-w-4xl">
            <Badge>B. Mathis, Founder and CEO</Badge>
            <h1 className="mt-4 text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight">
              Data-driven solutions for materials, processes, and innovation
            </h1>
            <p className="mt-5 text-2xl text-slate-700">
              Data & Decisions helps manufacturers digitalise across the full value chain — from materials and
              processes to market strategy and EU-ready Digital Product Passport (DPP).
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#2da5e5] to-[#2590cc] px-6 py-3 text-lg font-medium text-white hover:from-[#2590cc] hover:to-[#1e88e5] shadow-lg hover:shadow-xl transition-all"
              >
                Get in touch
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white/70 px-6 py-3 text-lg font-medium hover:bg-slate-50"
              >
                Explore services
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Logos band */}
      <section className="bg-slate-50 border-y border-slate-200">
        <Container className="py-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div className="flex items-center justify-center rounded-2xl border border-slate-200 py-6 text-base font-semibold bg-white">
              Manufacturing
            </div>
            <div className="flex items-center justify-center rounded-2xl border border-slate-200 py-6 text-base font-semibold bg-white">
              Research & Development
            </div>
            <div className="flex items-center justify-center rounded-2xl border border-slate-200 py-6 text-base font-semibold bg-white">
              Sustainability
            </div>
            <div className="flex items-center justify-center rounded-2xl border border-slate-200 py-6 text-base font-semibold bg-white">
              Innovation
            </div>
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <SectionBand id="testimonials" bg="white">
        <SectionHeader
          eyebrow="Trusted by leaders"
          title="What Partners Are Saying"
          subtitle="Academic and industry leaders share their experience working with Data & Decisions."
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Professor Heng HU */}
          <Card className="hover:-translate-y-0.5 transition border-slate-200 p-8 flex flex-col">
            <div className="mb-6">
              <svg className="h-8 w-8 text-[#2da5e5]/30" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
            </div>
            <blockquote className="text-lg text-slate-700 leading-relaxed mb-6 flex-grow min-h-[120px] flex items-center">
              "Data & Decisions team has provided us with a powerful framework for transforming research insights into actionable strategies. Their advanced analytics and evidence-based approach have enhanced our ability to anticipate change, allocate resources efficiently, and strengthen collaboration between academia and industry."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#2da5e5]/20 flex-shrink-0">
                {!imageErrors.heng ? (
                  <img
                    src="/heng-hu.png"
                    alt="Professor Heng HU"
                    className="w-full h-full object-cover"
                    onError={() => handleImageError('heng')}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#2da5e5]/20 to-[#2da5e5]/10 flex items-center justify-center">
                    <span className="text-[#2da5e5] font-bold text-lg">HH</span>
                  </div>
                )}
              </div>
              <div>
                <p className="font-semibold text-slate-900">Professor Heng HU</p>
                <p className="text-slate-600">Yinchuan University</p>
              </div>
            </div>
          </Card>

          {/* Professor Ali Daouadji */}
          <Card className="hover:-translate-y-0.5 transition border-slate-200 p-8 flex flex-col">
            <div className="mb-6">
              <svg className="h-8 w-8 text-[#2da5e5]/30" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
            </div>
            <blockquote className="text-lg text-slate-700 leading-relaxed mb-6 flex-grow min-h-[120px] flex items-center">
              "Working with the Data & Decisions team has significantly strengthened our capacity for innovation management. Their data-driven modelling and decision-support tools allowed us to evaluate complex scenarios with clarity and precision, ensuring that our research outcomes are aligned with both industrial needs and long-term sustainability goals."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#2da5e5]/20 flex-shrink-0">
                {!imageErrors.ali ? (
                  <img
                    src="/eras.png"
                    alt="Professor Ali Daouadji"
                    className="w-full h-full object-cover"
                    onError={() => handleImageError('ali')}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#2da5e5]/20 to-[#2da5e5]/10 flex items-center justify-center">
                    <span className="text-[#2da5e5] font-bold text-lg">AD</span>
                  </div>
                )}
              </div>
              <div>
                <p className="font-semibold text-slate-900">Professor Ali Daouadji</p>
                <p className="text-slate-600">INSA Lyon</p>
              </div>
            </div>
          </Card>
        </div>
      </SectionBand>

      {/* Video Section */}
      <section className="bg-white py-16">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-8">Watch Our Video</h2>
          <div className="flex justify-center">
            <video controls className="max-w-full h-auto rounded-lg shadow-lg">
              <source src="/Datandecisions.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </Container>
      </section>

      {/* Services */}
      <SectionBand id="services" bg="slate">
        <SectionHeader
          eyebrow="What we do"
          title="Services"
          subtitle="End-to-end support — from data foundations and process models to market strategy and innovation."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={service.title} className="hover:-translate-y-1 hover:shadow-lg transition-all duration-300 border-slate-200 group">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 mt-1">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2da5e5]/10 to-[#2da5e5]/5 text-[#2da5e5] group-hover:from-[#2da5e5]/20 group-hover:to-[#2da5e5]/10 group-hover:scale-110 transition-all duration-300">
                    {service.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-[#2da5e5] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-lg text-slate-700 mb-5 leading-relaxed">
                    {service.desc}
                  </p>
                  <div className="space-y-3">
                    {service.points.map((point) => (
                      <CheckItem key={point} title={point} />
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </SectionBand>

      {/* DPP Section */}
      <SectionBand id="dpp" bg="white">
        <SectionHeader
          eyebrow="Transparency & Compliance"
          title="Digital Product Passport (DPP)"
          subtitle="Practical architecture and implementation aligned with EU initiatives for traceability, sustainability, and circularity."
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <Card className="hover:-translate-y-1 hover:shadow-lg transition-all duration-300 border-slate-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#2da5e5]/10 text-[#2da5e5]">
                <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
                  <path fill="currentColor" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">How we help</h3>
            </div>
            <div className="space-y-5">
              <CheckItem
                title="Requirements & standards mapping"
                desc="Identify the right standards and data fields for your sector."
              />
              <CheckItem
                title="Data model & interfaces"
                desc="Define interoperable schemas and API endpoints for passport data."
              />
              <CheckItem
                title="Pilot → scale"
                desc="Start small, verify value, then scale deployment across products."
              />
              <CheckItem
                title="Sustainability metrics"
                desc="Collect primary data for carbon, durability, and circularity KPIs."
              />
            </div>
          </Card>

          <Card className="hover:-translate-y-1 hover:shadow-lg transition-all duration-300 border-slate-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#2da5e5]/10 text-[#2da5e5]">
                <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
                  <path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Example deliverables</h3>
            </div>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-[#2da5e5] rounded-full mt-3 flex-shrink-0"></span>
                <p className="text-lg text-slate-700">DPP architecture blueprint (diagrams + data dictionary)</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-[#2da5e5] rounded-full mt-3 flex-shrink-0"></span>
                <p className="text-lg text-slate-700">Integration spec with ERP/PLM/MES and suppliers</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-[#2da5e5] rounded-full mt-3 flex-shrink-0"></span>
                <p className="text-lg text-slate-700">Compliance checklist and rollout plan</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-[#2da5e5] rounded-full mt-3 flex-shrink-0"></span>
                <p className="text-lg text-slate-700">Demo dashboard for passport issuance & verification</p>
              </div>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#2da5e5] to-[#2590cc] px-8 py-4 text-lg font-semibold text-white hover:from-[#2590cc] hover:to-[#1e88e5] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <span>Discuss your DPP</span>
              <svg viewBox="0 0 24 24" className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300">
                <path fill="currentColor" d="M5 12h14m-7-7l7 7-7 7" />
              </svg>
            </a>
          </Card>
        </div>
      </SectionBand>

      {/* Expertise */}
      <SectionBand id="expertise" bg="slate">
        <SectionHeader
          eyebrow="Applied impact"
          title="Expertise & Use Cases"
          subtitle="Examples of where Data & Decisions makes a measurable difference."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: 'Process optimisation with digital twins', text: 'Model-based optimisation to increase OEE and reduce scrap with calibrated physics- or data-driven models.' },
            { title: 'Smart materials & sensor integration', text: 'Connecting test rigs and production lines to collect trustworthy, high-frequency data for analytics.' },
            { title: 'Sustainable value chains with DPP', text: 'Traceability from material to product with supplier data exchange and QR-based verification.' },
            { title: 'Innovation roadmaps', text: 'From opportunity mapping to pilot design and a de-risked path to scale for emerging technologies.' },
          ].map((c) => (
            <Card key={c.title} className="hover:-translate-y-0.5 transition border-slate-200">
              <h3 className="text-2xl font-bold mb-2">{c.title}</h3>
              <p className="text-lg text-slate-700">{c.text}</p>
            </Card>
          ))}
        </div>
      </SectionBand>
    </div>
  )
}
