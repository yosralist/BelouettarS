import Header from '../components/Header'
import { Globe } from 'lucide-react'
import {
  Card,
  Container,
  SecondaryButton,
  GradientButton,
  GradientSubmitButton,
} from '../components/ui'

function CheckItem({ title, desc }: { title: string; desc?: string }) {
  return (
    <div className="flex items-start gap-3">
      <span aria-hidden className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5">
          <path fill="currentColor" d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
        </svg>
      </span>
      <div>
        <p className="font-semibold text-lg">{title}</p>
        {desc && <p className="text-base text-slate-700">{desc}</p>}
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
    <div className="max-w-4xl mb-10">
      {eyebrow && <p className="text-base tracking-widest uppercase text-slate-500 mb-4">{eyebrow}</p>}
      {title && <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">{title}</h2>}
      {subtitle && <p className="text-xl text-slate-700">{subtitle}</p>}
    </div>
  )
}

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Header />
      {/* spacer below fixed header */}
      <div className="h-16" />

      {/* Hero with gradient blobs (first-version style) */}
      <section id="home" className="relative overflow-hidden">
        {/* soft gradient base */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-100 via-white to-indigo-50" />
        {/* subtle grid overlay */}
        <div className="absolute inset-0 -z-10 bg-grid bg-[size:22px_22px]" />
        {/* animated color blobs */}
        <div className="pointer-events-none absolute -top-28 -right-24 h-96 w-96 rounded-full bg-primary/30 blur-3xl animate-blob" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-sky-300/30 blur-3xl animate-blob animation-delay-2000" />

        <Container className="py-20 sm:py-28 lg:py-36 relative z-10">
          <div className="max-w-4xl">
            <Badge>European leadership • End-to-end value chain</Badge>
            <h1 className="mt-4 text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight">
              Data-driven solutions for materials, processes, and innovation
            </h1>
            <p className="mt-5 text-2xl text-slate-700">
              Data & Decisions helps manufacturers digitalise across the full value chain — from materials and
              processes to market strategy and EU-ready Digital Product Passport (DPP).
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <GradientButton href="#contact" className="text-lg">Get in touch</GradientButton>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white/70 px-6 py-3 text-lg font-medium hover:bg-slate-50"
              >
                Explore services
              </a>
            </div>

            {/* Stats */}
            <ul className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 text-base">
              <li className="rounded-xl border p-5 bg-white/80 backdrop-blur border-slate-200 hover:-translate-y-0.5 transition">
                <p className="font-bold text-lg">+5 years</p>
                <p className="text-slate-700 text-base">experience in digitalisation</p>
              </li>
              <li className="rounded-xl border p-5 bg-white/80 backdrop-blur border-slate-200 hover:-translate-y-0.5 transition">
                <p className="font-bold text-lg">Full lifecycle</p>
                <p className="text-slate-700 text-base">materials → processes → market</p>
              </li>
              <li className="rounded-xl border p-5 bg-white/80 backdrop-blur border-slate-200 hover:-translate-y-0.5 transition">
                <p className="font-bold text-lg">EU focus</p>
                <p className="text-slate-700 text-base">DPP & sustainability readiness</p>
              </li>
            </ul>
          </div>
        </Container>
      </section>

      {/* Logos band */}
      <section className="bg-slate-50 border-y border-slate-200">
        <Container className="py-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 opacity-90">
            <div className="flex items-center justify-center rounded-2xl border border-slate-200 py-6 text-base font-semibold bg-white">AI</div>
            <div className="flex items-center justify-center rounded-2xl border border-slate-200 py-6 text-base font-semibold bg-white">R&amp;D</div>
            <div className="flex items-center justify-center rounded-2xl border border-slate-200 py-6 text-base font-semibold bg-white">EU</div>
            <div className="flex items-center justify-center rounded-2xl border border-slate-200 py-6 text-base font-semibold bg-white">ISO</div>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'Digitalisation of Materials & Processes',
              desc: 'Data integration, modelling, simulation, and optimisation to improve throughput, quality, and cost across lab and line.',
              points: ['Data pipelines & dashboards', 'Digital twins & model calibration', 'Advanced analytics & optimisation'],
            },
            {
              title: 'Digital Product Passport (DPP)',
              desc: 'Lifecycle traceability and EU-aligned compliance, enabling transparency, circularity, and sustainability metrics.',
              points: ['Standards & architecture', 'Data model & interfaces', 'Pilot to scale deployment'],
            },
            {
              title: 'Market Analysis & Business Modelling',
              desc: 'Strategic insights from trends to pricing and go-to-market. We turn data into robust business models for growth.',
              points: ['Market sizing & trends', 'Competitive landscape', 'Value proposition & pricing'],
            },
            {
              title: 'Innovation Support',
              desc: 'R&D roadmaps, technology scouting, and pragmatic execution from proof-of-concept to scale.',
              points: ['Use-case discovery', 'Pilot design', 'Change enablement'],
            },
          ].map((s) => (
            <Card key={s.title} className="hover:-translate-y-0.5 transition border-slate-200">
              <div className="flex items-start gap-4">
                <span className="mt-1 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
                    <path fill="currentColor" d="M11 2l1.5 4.5L17 8l-4.5 1.5L11 14l-1.5-4.5L5 8l4.5-1.5L11 2z" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{s.title}</h3>
                  <p className="text-lg text-slate-700">{s.desc}</p>
                  <div className="mt-4 space-y-2">
                    {s.points.map((p) => (
                      <CheckItem key={p} title={p} />
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </SectionBand>

      {/* DPP */}
      <SectionBand id="dpp" bg="white">
        <SectionHeader
          eyebrow="Transparency & Compliance"
          title="Digital Product Passport (DPP)"
          subtitle="Practical architecture and implementation aligned with EU initiatives for traceability, sustainability, and circularity."
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          <Card className="hover:-translate-y-0.5 transition border-slate-200">
            <h3 className="text-2xl font-bold mb-4">How we help</h3>
            <div className="space-y-4">
              <CheckItem title="Requirements & standards mapping" desc="Identify the right standards and data fields for your sector." />
              <CheckItem title="Data model & interfaces" desc="Define interoperable schemas and API endpoints for passport data." />
              <CheckItem title="Pilot → scale" desc="Start small, verify value, then scale deployment across products." />
              <CheckItem title="Sustainability metrics" desc="Collect primary data for carbon, durability, and circularity KPIs." />
            </div>
          </Card>
          <Card className="hover:-translate-y-0.5 transition border-slate-200">
            <h3 className="text-2xl font-bold mb-4">Example deliverables</h3>
            <ul className="list-disc pl-5 space-y-3 text-lg text-slate-800">
              <li>DPP architecture blueprint (diagrams + data dictionary)</li>
              <li>Integration spec with ERP/PLM/MES and suppliers</li>
              <li>Compliance checklist and rollout plan</li>
              <li>Demo dashboard for passport issuance &amp; verification</li>
            </ul>
            <div className="mt-6">
              <GradientButton href="#contact" className="text-lg">Discuss your DPP</GradientButton>
            </div>
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

      {/* Contact */}
      <SectionBand id="contact" bg="white">
        <SectionHeader
          eyebrow="Let’s talk"
          title="Contact"
          subtitle="Tell us about your challenge — we’ll propose a pragmatic path."
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="border-slate-200">
            <h3 className="text-2xl font-bold mb-4">Send a message</h3>
            <form action="https://formspree.io/f/your_form_id" method="POST" className="space-y-4">
              <div>
                <label className="block text-base font-medium">Name</label>
                <input name="name" required className="mt-1 w-full rounded-md border border-slate-300 px-4 py-3 text-base" />
              </div>
              <div>
                <label className="block text-base font-medium">Email</label>
                <input name="email" type="email" required className="mt-1 w-full rounded-md border border-slate-300 px-4 py-3 text-base" />
              </div>
              <div>
                <label className="block text-base font-medium">Message</label>
                <textarea name="message" required className="mt-1 w-full min-h-[140px] rounded-md border border-slate-300 px-4 py-3 text-base" />
              </div>
              <GradientSubmitButton type="submit" className="text-lg">Send</GradientSubmitButton>
            </form>
            <p className="mt-4 text-sm text-slate-500">
              By submitting, you agree to our processing of your data in line with our privacy policy.
            </p>
          </Card>

          <Card className="border-slate-200">
            <h3 className="text-2xl font-bold mb-4">Direct contact</h3>
            <ul className="space-y-2 text-lg text-slate-800">
              <li><b>Email:</b> hello@data-decisions.example</li>
              <li><b>Phone:</b> +352 000 000</li>
              <li><b>LinkedIn:</b> linkedin.com/company/data-and-decisions</li>
              <li><b>Location:</b> Luxembourg, EU</li>
            </ul>
            <div className="mt-6">
              <SecondaryButton href="#home" className="text-lg">Back to top</SecondaryButton>
            </div>
          </Card>
        </div>
      </SectionBand>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-12">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-base">
          <div className="flex items-center gap-2">
            <Globe className="h-6 w-6 text-primary" aria-hidden />
            <span>© {new Date().getFullYear()} Data & Decisions</span>
          </div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Imprint</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

/** alternating section band helper */
function SectionBand({
  id,
  bg,
  children,
}: {
  id: string
  bg: 'white' | 'slate'
  children: React.ReactNode
}) {
  const isSlate = bg === 'slate'
  return (
    <section id={id} className={`${isSlate ? 'bg-slate-50' : 'bg-white'} border-t border-b border-slate-200`}>
      <div className="container py-16 sm:py-20 lg:py-24">{children}</div>
    </section>
  )
}
