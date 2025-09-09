"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Globe } from "lucide-react";

const HEADER_H = 64; // header height in px (matches h-16)

export default function Header() {
    const [open, setOpen] = useState(false);
    const close = () => setOpen(false);

    // Prevent background scroll when menu is open
    useEffect(() => {
        if (!open) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prev;
        };
    }, [open]);

    // Drawer + overlay rendered in a portal (avoids clipping)
    const portal =
        typeof document !== "undefined" && open
            ? createPortal(
                <>
                    {/* Overlay */}
                    <button
                        aria-label="Close menu"
                        onClick={close}
                        className="fixed inset-0 z-[1000] bg-black/35 backdrop-blur-sm"
                    />
                    {/* Full-screen drawer below the header */}
                    <nav
                        className="fixed left-0 right-0 z-[1001] bg-white"
                        style={{ top: HEADER_H, height: `calc(100dvh - ${HEADER_H}px)` }}
                        aria-label="Mobile navigation"
                    >
                        <div className="container py-4 flex flex-col gap-2 overflow-auto">
                            <NavLink href="#services" onClick={close}>Services</NavLink>
                            <NavLink href="#dpp" onClick={close}>Digital Product Passport</NavLink>
                            <NavLink href="#expertise" onClick={close}>Expertise</NavLink>
                            <NavLink href="#contact" onClick={close}>Contact</NavLink>

                            <a
                                href="#contact"
                                onClick={close}
                                className="mt-3 inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-3 font-medium text-white shadow-sm hover:opacity-95"
                            >
                                Get in touch
                            </a>

                            <button
                                onClick={close}
                                className="mt-3 inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 px-5 py-3 font-medium hover:bg-slate-50"
                            >
                                Close
                            </button>
                        </div>
                    </nav>
                </>,
                document.body
            )
            : null;

    return (
        <header className="fixed top-0 left-0 right-0 z-[1002] bg-white/90 backdrop-blur border-b border-slate-200">
            <div className="container h-16 flex items-center justify-between">
                {/* Logo + brand */}
                <a href="#home" className="flex items-center gap-2 font-semibold text-lg">
                    <Globe className="h-7 w-7 text-primary" aria-hidden />
                    <span>Data & Decisions</span>
                </a>

                {/* Desktop nav */}
                <nav className="hidden sm:flex items-center gap-6 text-base">
                    <a href="#services" className="hover:text-primary">Services</a>
                    <a href="#dpp" className="hover:text-primary">Digital Product Passport</a>
                    <a href="#expertise" className="hover:text-primary">Expertise</a>
                    <a href="#contact" className="hover:text-primary">Contact</a>
                </nav>

                {/* Desktop CTA */}
                <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-2xl bg-primary px-5 py-3 font-medium text-white shadow-sm hover:opacity-95">
                    Get in touch
                </a>

                {/* Mobile toggle */}
                <button
                    type="button"
                    onClick={() => setOpen(true)}
                    className="sm:hidden inline-flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-base"
                    aria-haspopup="dialog"
                    aria-expanded={open}
                >
                    <svg viewBox="0 0 24 24" className="h-5 w-5">
                        <path fill="currentColor" d="M3 6h18v2H3zM3 11h18v2H3zM3 16h18v2H3z" />
                    </svg>
                    Menu
                </button>
            </div>

            {portal}
        </header>
    );
}

function NavLink({
    href,
    onClick,
    children,
}: {
    href: string;
    onClick: () => void;
    children: React.ReactNode;
}) {
    return (
        <a
            href={href}
            onClick={onClick}
            className="block rounded-md px-3 py-3 text-base hover:bg-slate-50"
        >
            {children}
        </a>
    );
}
