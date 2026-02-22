"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Users, ShieldCheck, Globe } from "lucide-react";

import Link from "next/link";

const services = [
    {
        title: "Global Talent Pool",
        description: "Connect with top-tier professionals from local and international markets across diverse industries.",
        icon: <Globe className="text-blue-500" size={32} />,
        color: "from-blue-500/10 to-blue-500/5",
        href: "/services/global-talent-pool",
    },
    {
        title: "Vetted Professionals",
        description: "Every candidate undergoes rigorous skill assessment and background checks to ensure quality.",
        icon: <ShieldCheck className="text-green-500" size={32} />,
        color: "from-green-500/10 to-green-500/5",
        href: "/services/vetted-professionals",
    },
    {
        title: "Rapid Recruitment",
        description: "Our streamlined AI-driven matching process reduces time-to-hire by up to 50%.",
        icon: <Zap className="text-yellow-500" size={32} />,
        color: "from-yellow-500/10 to-yellow-500/5",
        href: "/services/rapid-recruitment",
    },
    {
        title: "Strategic Consulting",
        description: "Expert guidance for both employers and job seekers to navigate the evolving talent landscape.",
        icon: <Users className="text-purple-500" size={32} />,
        color: "from-purple-500/10 to-purple-500/5",
        href: "/services/strategic-consulting",
    },
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block text-blue-600 font-bold tracking-widest uppercase text-sm mb-4"
                    >
                        Our Services
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6"
                    >
                        Comprehensive Recruitment Solutions
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-slate-600 text-lg max-w-2xl mx-auto"
                    >
                        Billo Empire offers personalized services tailored to connect top talent with leading employers, ensuring a perfect match for every unique requirement.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`relative group p-8 rounded-[32px] overflow-hidden bg-gradient-to-br ${service.color} border border-white/50 shadow-sm hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500`}
                        >
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                                <p className="text-slate-600 leading-relaxed mb-6">
                                    {service.description}
                                </p>
                                <Link href={service.href}>
                                    <motion.button
                                        whileHover={{ x: 5 }}
                                        className="flex items-center gap-2 text-slate-900 font-bold group/btn"
                                    >
                                        Learn more <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                                    </motion.button>
                                </Link>
                            </div>

                            {/* Decorative background shape */}
                            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/40 rounded-full blur-3xl group-hover:bg-white/60 transition-colors duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
