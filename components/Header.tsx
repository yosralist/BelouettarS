"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

const HEADER_H = 96; // Increased height for better logo visibility

export default function Header() {
    const [open, setOpen] = useState(false);
    const close = () => setOpen(false);

    useEffect(() => {
        if (!open) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prev;
        };
    }, [open]);

    const portal =
        typeof document !== "undefined" && open
            ? createPortal(
                <>
                    <button
                        aria-label="Close menu"
                        onClick={close}
                        className="fixed inset-0 z-[1000] bg-black/20 backdrop-blur-sm"
                    />
                    <nav
                        className="fixed left-0 right-0 z-[1001] bg-white border-b border-slate-200"
                        style={{ top: HEADER_H, height: `calc(100dvh - ${HEADER_H}px)` }}
                        aria-label="Mobile navigation"
                    >
                        <div className="px-6 py-8 flex flex-col gap-1">
                            <MobileNavLink href="/" onClick={close}>Home</MobileNavLink>
                            <MobileNavLink href="/about" onClick={close}>About</MobileNavLink>
                            <MobileNavLink href="/services" onClick={close}>Services</MobileNavLink>
                            <MobileNavLink href="/contact" onClick={close}>Contact</MobileNavLink>
                        </div>
                    </nav>
                </>,
                document.body
            )
            : null;

    return (
        <header className="fixed top-0 left-0 right-0 z-[1002] bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-24">

                    {/* Logo - Left Side */}
                    <div className="flex-shrink-0">
                        <a href="#home" className="block py-2">
                            <Image
                                src="/cropped-Logo-Data-Decision-596x184.png"
                                alt="Data & Decisions"
                                width={280}
                                height={86}
                                className="h-16 w-auto object-contain"
                                priority
                                quality={95}
                            />
                        </a>
                    </div>

                    {/* Desktop Navigation - Right Side */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <a href="/" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
                            Home
                        </a>
                        <a href="/about" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
                            About
                        </a>
                        <a href="/services" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
                            Services
                        </a>
                        <a href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md font-medium transition-colors">
                            Contact
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setOpen(true)}
                        className="md:hidden p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                        aria-expanded={open}
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
            {portal}
        </header>
    );
}

function MobileNavLink({
    href,
    onClick,
    children
}: {
    href: string;
    onClick: () => void;
    children: React.ReactNode;
}) {
    return (
        <a
            href={href}
            onClick={onClick}
            className="block px-3 py-3 text-lg font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-md"
        >
            {children}
        </a>
    );
}