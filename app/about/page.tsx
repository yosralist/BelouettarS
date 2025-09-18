"use client"
import { useState } from 'react';

interface ImageErrorState {
    [key: string]: boolean;
}

export default function AboutPage() {
    const [imageError, setImageError] = useState<ImageErrorState>({});

    const services = [
        {
            title: "Data Strategy & Governance",
            description: "Designing robust frameworks for collecting, managing, and securing high-quality data across the organisation.",
            icon: "🛡️"
        },
        {
            title: "Advanced Analytics & AI Modelling",
            description: "Applying machine learning, predictive analytics, and simulation techniques to uncover patterns, forecast trends, and evaluate scenarios.",
            icon: "🤖"
        },
        {
            title: "Decision Intelligence",
            description: "Developing tools and dashboards that translate complex datasets into actionable insights for executives, researchers, and innovation leaders.",
            icon: "📊"
        },
        {
            title: "Business Model Design",
            description: "Leveraging data to test, validate, and refine business models that support sustainable growth and market differentiation.",
            icon: "🚀"
        },
        {
            title: "Innovation & Risk Management",
            description: "Supporting strategic decisions by modelling uncertainties, testing alternatives, and identifying opportunities for value creation.",
            icon: "⚖️"
        },
        {
            title: "Research Proposal Development",
            description: "Assisting academic, industrial, and public partners in drafting successful research and innovation proposals, ensuring strong evidence-based foundations.",
            icon: "📋"
        },
        {
            title: "Capacity Building",
            description: "Training teams and fostering a culture of data-driven decision-making that aligns with organisational goals and industry standards.",
            icon: "👥"
        }
    ];

    const handleImageError = (imageName: string) => {
        setImageError(prev => ({ ...prev, [imageName]: true }));
    };

    return (
        <div className="min-h-screen bg-white pt-24">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold text-slate-900 mb-6">
                            Turning Complexity into <span className="text-[#2da5e5]">Clarity</span>
                        </h1>
                        <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                            At <strong>Data & Decisions</strong>, we help organisations unlock the full potential of their data to drive strategy, innovation, and sustainable growth.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
                            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                                Our work bridges <strong>advanced data science</strong> with real-world business challenges, ensuring that insights are not just generated but transformed into measurable impact.
                            </p>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                By combining <strong className="text-[#2da5e5]">technical expertise</strong> with a <strong className="text-[#2da5e5]">business-first mindset</strong>, Data & Decisions empowers leaders to make informed choices, design innovative business models, and secure the funding needed to bring impactful research and solutions to life.
                            </p>
                        </div>
                        <div className="bg-slate-100 rounded-xl h-80 flex items-center justify-center">
                            {!imageError.team ? (
                                <img
                                    src="/photo-business-lady.jpg"
                                    alt="Data & Decisions team"
                                    className="w-full h-full object-cover rounded-xl"
                                    onError={() => handleImageError('team')}
                                />
                            ) : (
                                <div className="text-center p-8">
                                    <div className="text-6xl mb-4">📈</div>
                                    <p className="text-slate-600">Add your team photo here<br /><code>/images/team-expertise.jpg</code></p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 px-4 bg-slate-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Activities</h2>
                        <p className="text-xl text-slate-600 max-w-4xl mx-auto">
                            We provide comprehensive data and business intelligence services across seven key areas
                        </p>
                    </div>

                    <div className="space-y-8">
                        {/* Row 1 - 3 cards */}
                        <div className="grid md:grid-cols-3 gap-6">
                            {services.slice(0, 3).map((service, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200 hover:border-[#2da5e5]/20 group text-center">
                                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                                    <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-[#2da5e5] transition-colors">{service.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{service.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* Row 2 - 2 cards centered */}
                        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            {services.slice(3, 5).map((service, index) => (
                                <div key={index + 3} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200 hover:border-[#2da5e5]/20 group text-center">
                                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                                    <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-[#2da5e5] transition-colors">{service.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{service.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* Row 3 - 2 cards centered */}
                        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            {services.slice(5, 7).map((service, index) => (
                                <div key={index + 5} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200 hover:border-[#2da5e5]/20 group text-center">
                                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                                    <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-[#2da5e5] transition-colors">{service.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Expertise</h2>
                        <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                            Our team combines expertise in <strong>data science</strong>, <strong>AI</strong>, and <strong>business strategy</strong> to deliver actionable insights, innovative business models, and successful research outcomes for partners worldwide.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Photo Section */}
                        <div className="order-2 lg:order-1">
                            <div className="bg-slate-100 rounded-xl h-96 flex items-center justify-center">
                                {!imageError.team ? (
                                    <img
                                        src="/software-developer-module.jpg"
                                        alt="Data & Decisions team expertise"
                                        className="w-full h-full object-cover rounded-xl"
                                        onError={() => handleImageError('team')}
                                    />
                                ) : (
                                    <div className="text-center p-8">
                                        <div className="text-6xl mb-4">👥</div>
                                        <p className="text-slate-600">Add your team photo here<br /><code>/images/team-expertise.jpg</code></p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="order-1 lg:order-2">
                            <div className="space-y-8">
                                <div className="flex items-start space-x-4">
                                    <div className="text-3xl">🔬</div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-slate-900 mb-2">Data Science & AI</h3>
                                        <p className="text-slate-600">Advanced analytics, machine learning, and predictive modeling expertise to uncover patterns and drive insights.</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="text-3xl">💼</div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-slate-900 mb-2">Business Strategy</h3>
                                        <p className="text-slate-600">Strategic planning, business model innovation, and market analysis to translate data into business value.</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="text-3xl">🔍</div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-slate-900 mb-2">Research & Innovation</h3>
                                        <p className="text-slate-600">Research proposal development and innovation management to secure funding and drive impactful solutions.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4 bg-gradient-to-r from-[#2da5e5] to-[#1e88e5]">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Data into Decisions?</h2>
                    <p className="text-xl mb-8 opacity-90">
                        Let's discuss how we can help your organisation unlock the full potential of your data
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-white text-[#2da5e5] px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-200"
                    >
                        Get Started Today
                    </a>
                </div>
            </section>
        </div>
    );
}