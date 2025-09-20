"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";

const EXPANDED_H = 112; // h-28
const COMPACT_H = 80;   // h-20

export default function Header() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [headerHeight, setHeaderHeight] = useState(EXPANDED_H);
    const headerRef = useRef<HTMLElement | null>(null);
    const pathname = usePathname();
    const close = () => setOpen(false);

    // Lock body scroll when menu open
    useEffect(() => {
        if (!open) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prev;
        };
    }, [open]);

    // Handle scroll -> toggle compact header
    useEffect(() => {
        let rAF = 0;
        const onScroll = () => {
            if (rAF) return;
            rAF = requestAnimationFrame(() => {
                rAF = 0;
                setScrolled(window.scrollY > 8);
            });
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll(); // initialize
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Measure header height (so mobile drawer top aligns perfectly)
    const measure = () => {
        if (!headerRef.current) return;
        setHeaderHeight(headerRef.current.offsetHeight);
    };

    useLayoutEffect(() => {
        measure();
    }, []);

    useEffect(() => {
        // remeasure when scrolled state changes (height transitions)
        const t = setTimeout(measure, 10);
        return () => clearTimeout(t);
    }, [scrolled]);

    useEffect(() => {
        const onResize = () => measure();
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    const portal =
        typeof document !== "undefined" && open
            ? createPortal(
                <>
                    <button
                        aria-label="Close menu"
                        onClick={close}
                        className="fixed inset-0 z-[1000] bg-black/30 backdrop-blur-sm"
                    />
                    <nav
                        className="fixed left-0 right-0 z-[1001] bg-white border-b border-slate-200"
                        style={{ top: headerHeight, height: `calc(100dvh - ${headerHeight}px)` }}
                        aria-label="Mobile navigation"
                    >
                        <div className="px-6 py-8 flex flex-col gap-2">
                            <MobileNavLink href="/" onClick={close} active={pathname === "/"}>Home</MobileNavLink>
                            <MobileNavLink href="/about" onClick={close} active={pathname.startsWith("/about")}>About</MobileNavLink>
                            <MobileNavLink href="/services" onClick={close} active={pathname.startsWith("/services")}>Services</MobileNavLink>

                            {/* Pill Contact button (mobile) */}
                            <Link
                                href="/contact"
                                onClick={close}
                                className={`mt-3 inline-flex items-center justify-center rounded-full px-6 py-3
                              border border-[#e57e1e] font-semibold transition-all duration-200
                              focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#e57e1e]
                              ${pathname.startsWith("/contact")
                                        ? "bg-[#e57e1e] text-white shadow-md"
                                        : "text-[#e57e1e] hover:bg-[#e57e1e] hover:text-white hover:shadow-md"}`}
                            >
                                Contact
                            </Link>
                        </div>
                    </nav>
                </>,
                document.body
            )
            : null;

    return (
        <header
            ref={headerRef}
            className={`fixed top-0 left-0 right-0 z-[1002] bg-white/90 backdrop-blur-md border-b border-slate-200
                  transition-[height,background-color,box-shadow] duration-300
                  ${scrolled ? "shadow-md" : "shadow-sm"}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Height transitions via utility classes */}
                <div className={`flex items-center justify-between ${scrolled ? "h-20" : "h-28"} transition-[height] duration-300`}>
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="block py-2">
                            <Image
                                src="/cropped-Logo-Data-Decision-596x184.png"
                                alt="Data & Decisions"
                                width={280}
                                height={92}
                                className={`${scrolled ? "h-12" : "h-16"} w-auto object-contain transition-[height] duration-300`}
                                priority
                                quality={95}
                            />
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <DesktopNavLink href="/" active={pathname === "/"}>Home</DesktopNavLink>
                        <DesktopNavLink href="/about" active={pathname.startsWith("/about")}>About</DesktopNavLink>
                        <DesktopNavLink href="/services" active={pathname.startsWith("/services")}>Services</DesktopNavLink>

                        {/* Pill Contact button (desktop) */}
                        <Link
                            href="/contact"
                            className={`inline-flex items-center justify-center rounded-full px-6 py-2.5
                          border border-[#e57e1e] font-semibold transition-all duration-200
                          focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#e57e1e]
                          ${pathname.startsWith("/contact")
                                    ? "bg-[#e57e1e] text-white shadow-md"
                                    : "text-[#e57e1e] hover:bg-[#e57e1e] hover:text-white hover:shadow-md"}`}
                        >
                            Contact
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setOpen(true)}
                        className="md:hidden p-2 rounded-md text-slate-600 hover:text-[#e57e1e] hover:bg-orange-50
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e57e1e]"
                        aria-expanded={open}
                        aria-label="Open menu"
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
            {portal}
        </header>
    );
}

function DesktopNavLink({
    href,
    children,
    active,
}: {
    href: Route<string>;
    children: React.ReactNode;
    active?: boolean;
}) {
    return (
        <Link
            href={href}
            className={`relative group font-medium transition-colors focus:outline-none
                  focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#e57e1e]
                  ${active ? "text-[#e57e1e]" : "text-slate-700 hover:text-[#e57e1e]"}`}
        >
            {children}
            <span
                className={`pointer-events-none absolute -bottom-1 left-0 h-[2px] bg-[#e57e1e] transition-all duration-200
                    ${active ? "w-full" : "w-0 group-hover:w-full"}`}
                aria-hidden="true"
            />
        </Link>
    );
}

function MobileNavLink({
    href,
    onClick,
    children,
    active,
}: {
    href: Route<string>;
    onClick: () => void;
    children: React.ReactNode;
    active?: boolean;
}) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className={`block px-4 py-3 text-lg font-medium rounded-md focus:outline-none
                  focus-visible:ring-2 focus-visible:ring-[#e57e1e]
                  ${active
                    ? "bg-orange-100 text-[#e57e1e]"
                    : "text-slate-700 hover:text-[#e57e1e] hover:bg-orange-50"}`}
        >
            {children}
        </Link>
    );
}
