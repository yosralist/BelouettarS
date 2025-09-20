"use client";

import { useEffect, useRef } from 'react';

export default function ContactPageClient() {
    const bgRef = useRef<HTMLDivElement | null>(null);
    const sectionRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (bgRef.current && sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                const scrollY = window.scrollY || window.pageYOffset;
                const offset = scrollY - (window.innerHeight - rect.height) / 2;
                bgRef.current.style.transform = offset > 0 ? `translateY(${offset * 0.3}px)` : 'translateY(0px)';
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-white pt-24">
            {/* Hero Section */}
            <section ref={sectionRef} className="py-16 px-4 bg-gradient-to-r from-[#2da5e5] to-[#1e88e5]">
                <div className="relative max-w-6xl mx-auto text-center text-white">
                    <h1 className="text-5xl font-bold mb-6">Contact</h1>
                    <p className="text-xl max-w-4xl mx-auto leading-relaxed">
                        We are here to support you in turning data into actionable decisions, innovative
                        strategies, and successful outcomes. Get in touch with our team today.
                    </p>
                </div>
            </section>

            {/* Contact Information & Map */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-8">Get in Touch</h2>

                            {/* Office Information */}
                            <div className="mb-8">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="flex-shrink-0 w-12 h-12 bg-[#2da5e5]/10 rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-[#2da5e5]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-slate-900 mb-2">Office</h3>
                                        <p className="text-slate-600 leading-relaxed">
                                            86 Rue aux Arènes<br />
                                            57000 Metz<br />
                                            France
                                        </p>
                                    </div>
                                </div>

                                {/* Email Information */}
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="flex-shrink-0 w-12 h-12 bg-[#2da5e5]/10 rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-[#2da5e5]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-slate-900 mb-2">Email</h3>
                                        <a
                                            href="mailto:contact@datandecisions.com"
                                            className="text-[#2da5e5] hover:text-[#2590cc] transition-colors font-medium"
                                        >
                                            contact@datandecisions.com
                                        </a>
                                    </div>
                                </div>

                                {/* Phone Information */}
                                <div className="flex items-start gap-4 mb-8">
                                    <div className="flex-shrink-0 w-12 h-12 bg-[#2da5e5]/10 rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-[#2da5e5]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-slate-900 mb-2">Phone</h3>
                                        <p className="text-slate-600">123 456 789</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div>
                            <div className="max-w-6xl mx-auto">
                                <h2 className="text-3xl font-bold text-slate-900 mb-8">Find Us</h2>

                                <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                                    {/* Map Container */}
                                    <div className="h-96 bg-slate-100 relative">
                                        {/* Embedded Google Maps */}
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2636.8542474147916!2d6.175285876921665!3d49.11976547139445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4794e4c6e1c1f5db%3A0x5f9b8c4e6b1e6f8a!2s86%20Rue%20aux%20Ar%C3%A8nes%2C%2057000%20Metz%2C%20France!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0 }}
                                            allowFullScreen
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            title="Data & Decisions Office Location"
                                        />
                                        {/* Map Overlay with Office Info */}
                                        <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-4 max-w-sm">
                                            <div className="flex items-start gap-3">
                                                <div className="w-10 h-10 bg-[#2da5e5] rounded-lg flex items-center justify-center flex-shrink-0">
                                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-slate-900">Data &amp; Decisions</h4>
                                                    <p className="text-sm text-slate-600 mt-1">
                                                        86 Rue aux Arènes<br />
                                                        57000 Metz, France
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* /Map */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
