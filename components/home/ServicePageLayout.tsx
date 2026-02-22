"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ModernNavbar from "@/components/home/ModernNavbar";
import ModernFooter from "@/components/home/ModernFooter";

interface ServicePageLayoutProps {
    title: string;
    subtitle: string;
    description: string;
    icon: React.ReactNode;
    benefits: string[];
    imagePath: string;
}

const ServicePageLayout = ({
    title,
    subtitle,
    description,
    icon,
    benefits,
    imagePath,
}: ServicePageLayoutProps) => {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <ModernNavbar />

            <main className="flex-grow pt-32 pb-24">
                <div className="container mx-auto px-6">
                    <Link
                        href="/#services"
                        className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors mb-12 group"
                    >
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Services
                    </Link>

                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        <div className="lg:w-1/2">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center text-blue-600 mb-8 border border-blue-100 shadow-sm">
                                    {icon}
                                </div>
                                <h4 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">
                                    {subtitle}
                                </h4>
                                <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 leading-tight">
                                    {title}
                                </h1>
                                <p className="text-xl text-slate-600 leading-relaxed mb-12">
                                    {description}
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                    {benefits.map((benefit, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.2 + index * 0.1 }}
                                            className="flex gap-3 items-start"
                                        >
                                            <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={20} />
                                            <span className="text-slate-700 font-medium">{benefit}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                <Link href="/contact-us">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold text-lg shadow-xl shadow-slate-200 hover:bg-blue-600 transition-all"
                                    >
                                        Get Started with this Service
                                    </motion.button>
                                </Link>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-1/2 relative"
                        >
                            <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl relative">
                                <Image
                                    src={imagePath}
                                    alt={title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-200/30 rounded-full blur-3xl z-[-1]" />
                            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-200/20 rounded-full blur-3xl z-[-1]" />
                        </motion.div>
                    </div>
                </div>
            </main>

            <ModernFooter />
        </div>
    );
};

export default ServicePageLayout;
