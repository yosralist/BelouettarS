export default function ServicesPage() {
    const detailedServices = [
        {
            number: "01",
            title: "Market Analysis & Business Modelling",
            description: "We support strategic decision-making with data-driven insights.",
            features: [
                "Market research and competitor analysis",
                "Innovation-driven business models",
                "Growth and investment strategies"
            ]
        },
        {
            number: "02",
            title: "Innovation & R&D Support",
            description: "We accelerate digital transformation and technological adoption.",
            features: [
                "Co-design of innovation roadmaps",
                "Support for funding and collaborative projects",
                "Bridging science, industry, and digitalisation"
            ]
        },
        {
            number: "03",
            title: "Training & Knowledge Transfer",
            description: "Empowering teams to embrace the future of digitalisation.",
            features: [
                "Digital maturity assessment",
                "Knowledge transfer for sustainable adoption"
            ]
        },
        {
            number: "04",
            title: "Digitalisation",
            description: "We enable industries to move towards smarter, more efficient, and sustainable workflows.",
            features: [
                "Data integration across the value chain"
            ]
        },
        {
            number: "05",
            title: "Sustainability and Transparency",
            description: "Helping companies comply with EU standards and achieve transparency & sustainability.",
            features: [
                "Data-driven sustainability reporting",
                "Integration into business operations"
            ]
        },
        {
            number: "06",
            title: "Software Solutions & Platforms",
            description: "Custom digital tools for process monitoring.",
            features: [
                "Data-driven platforms for modelling, simulation and supply chain optimisation",
                "Cloud-based simulation and collaboration tools"
            ]
        },
        {
            number: "07",
            title: "Intellectual Property & Innovation Management",
            description: "Comprehensive IP and innovation support.",
            features: [
                "Technology scouting & trend analysis",
                "Support in IP protection for digital solutions",
                "Innovation portfolio management"
            ]
        },
        {
            number: "08",
            title: "Drafting Competitive Horizon Europe (HE) Research Proposals",
            description: "We support organisations, research centres, and industries in building successful applications for EU-funded projects.",
            features: [
                "Structuring strong consortia with industrial and academic partners",
                "Preparing high-quality proposals (Excellence, Impact, Implementation)",
                "Enhancing chances of funding success through expert guidance"
            ]
        }
    ];

    const mainServices = [
        {
            number: "01",
            title: "Innovation & Business Modelling",
            description: "We design innovative business models that transform ideas into sustainable growth and competitive advantage.",
            cta: false
        },
        {
            number: "02",
            title: "Digital Strategy",
            description: "We craft digital strategies that harness data, technology, and innovation to drive transformation and long-term value.",
            cta: false
        },
        {
            number: "03",
            title: "Data Analytics & AI",
            description: "We leverage advanced analytics and AI to unlock insights that drive strategic decision-making and operational excellence.",
            cta: true
        },
        {
            number: "04",
            title: "Horizon Europe Services",
            description: "Our Horizon Europe services support partners at every stage of the innovation journey from drafting competitive research proposals to managing complex projects, and delivering impactful dissemination and communication activities.",
            cta: true
        }
    ];

    return (
        <div className="min-h-screen bg-white pt-24">
            {/* Hero Section */}
            <section className="relative py-20 px-4 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/business-consulting-main-services-img-bg.jpg)' }}>
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative max-w-6xl mx-auto text-center text-white">
                    <h1 className="text-5xl font-bold mb-6">Services</h1>
                    <h2 className="text-3xl font-semibold mb-8">
                        We All Need Help to Realise What We Want Most.
                    </h2>
                    <p className="text-xl max-w-4xl mx-auto leading-relaxed opacity-90">
                        At <strong>Data & Decisions</strong>, we believe that achieving meaningful goals requires more than vision—it requires the right insights, strategies, and support. Through our services in data strategy, advanced analytics, innovation management, and research proposal development, we help organisations transform complexity into clarity, turning ambition into measurable outcomes.
                    </p>
                </div>
            </section>

            {/* Main Services Section */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">Main Services</h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {mainServices.map((service, index) => (
                            <div key={index} className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-lg transition-shadow group">
                                <div className="flex items-start gap-6">
                                    <div className="text-[#2da5e5] text-3xl font-bold flex-shrink-0 group-hover:scale-110 transition-transform">
                                        {service.number}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#2da5e5] transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Services Section */}
            <section className="py-20 px-4 bg-slate-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Services</h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Comprehensive solutions across eight specialized service areas
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {detailedServices.map((service, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200 hover:border-[#2da5e5]/30 group">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="bg-[#2da5e5] text-white text-lg font-bold w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                        {service.number}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#2da5e5] transition-colors">
                                        {service.title}
                                    </h3>
                                </div>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    {service.description}
                                </p>
                                <ul className="space-y-2">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <span className="text-[#2da5e5] text-sm font-bold mt-1">✓</span>
                                            <span className="text-slate-600 text-sm leading-relaxed">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4 bg-gradient-to-r from-[#2da5e5] to-[#1e88e5]">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Vision into Reality?</h2>
                    <p className="text-xl mb-8 opacity-90">
                        Let's discuss how our comprehensive services can help your organisation achieve its most ambitious goals
                    </p>
                    <a
                        href="#contact"
                        className="inline-block bg-white text-[#2da5e5] px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-200"
                    >
                        Start Your Journey Today
                    </a>
                </div>
            </section>
        </div>
    );
}