"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative bg-slate-900 rounded-[40px] p-12 md:p-20 overflow-hidden text-center"
                >
                    {/* Decorative background elements */}
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px] z-0" />
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-yellow-500/20 rounded-full blur-[100px] z-0" />

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-8 border border-white/10 backdrop-blur-md"
                        >
                            <Sparkles size={16} className="text-yellow-400" />
                            <span>Take the next step in your career journey</span>
                        </motion.div>

                        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight">
                            Ready to Bridge Your <span className="text-yellow-400">Potential</span> with <span className="text-blue-400">Opportunity</span>?
                        </h2>

                        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                            Whether you&apos;re an employer looking for top talent or a professional seeking your next challenge, Billo Empire is here to guide you.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link href="/contact-us">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-10 py-5 bg-yellow-500 text-slate-900 rounded-2xl font-bold text-xl flex items-center gap-3 shadow-2xl shadow-yellow-500/30 hover:bg-yellow-400 transition-all group"
                                >
                                    Get Started Today
                                    <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                                </motion.button>
                            </Link>

                            <Link href="/contact-us" className="text-white font-bold text-lg hover:text-yellow-400 transition-colors">
                                Contact Sales Experts
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
