// components/ui.tsx
import * as React from 'react'

export function Container({ className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`container ${className}`} {...props} />
}

export function Section({
  id, eyebrow, title, subtitle, className = '', children,
}: React.PropsWithChildren<{
  id?: string
  eyebrow?: string
  title?: string
  subtitle?: string
  className?: string
}>) {
  return (
    <section id={id} className={`py-16 sm:py-20 lg:py-24 border-t border-white/10 ${className}`}>
      <Container>
        <div className="max-w-3xl">
          {eyebrow && <p className="text-sm tracking-widest uppercase text-slate-500 mb-2">{eyebrow}</p>}
          {title && <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-3">{title}</h2>}
          {subtitle && <p className="text-lg text-slate-600 mb-8">{subtitle}</p>}
        </div>
        {children}
      </Container>
    </section>
  )
}

export function Card({ className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`rounded-2xl border bg-white p-6 shadow-sm ${className}`} {...props} />
}

/** New: glassy card with gradient border */
export function GlassCard({ className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`relative rounded-2xl p-[1px] bg-gradient-to-br from-primary/50 via-secondary/50 to-accent/50`}>
      <div className={`rounded-2xl bg-white/70 backdrop-blur border border-white/60 p-6 ${className}`} {...props} />
    </div>
  )
}

export function PrimaryButton({ className = '', ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a className={`inline-flex items-center gap-2 rounded-2xl bg-primary px-5 py-3 font-medium text-white shadow-sm hover:opacity-95 focus:outline-none focus:ring focus:ring-primary/30 ${className}`} {...props} />
}

export function SecondaryButton({ className = '', ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a className={`inline-flex items-center gap-2 rounded-2xl border border-slate-300 px-5 py-3 font-medium hover:bg-slate-50 ${className}`} {...props} />
}

/** New: animated gradient button (anchor version) */
export function GradientButton({ className = '', ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={`inline-flex items-center gap-2 rounded-2xl px-5 py-3 font-medium text-white shadow-sm
      bg-gradient-to-r from-primary via-secondary to-accent bg-[length:200%_200%] animate-[float_6s_ease-in-out_infinite]
      hover:opacity-95 focus:outline-none focus:ring focus:ring-primary/30 ${className}`}
      {...props}
    />
  )
}

/** Optional: button element variant for forms */
export function GradientSubmitButton({ className = '', ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`inline-flex items-center gap-2 rounded-2xl px-5 py-3 font-medium text-white shadow-sm
      bg-gradient-to-r from-primary via-secondary to-accent bg-[length:200%_200%] animate-[float_6s_ease-in-out_infinite]
      hover:opacity-95 focus:outline-none focus:ring focus:ring-primary/30 ${className}`}
      {...props}
    />
  )
}
