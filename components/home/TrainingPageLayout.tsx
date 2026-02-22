"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Calendar, Clock, MapPin, Users, Award, BookOpen } from "lucide-react";
import Link from "next/link";
import ModernNavbar from "@/components/home/ModernNavbar";
import ModernFooter from "@/components/home/ModernFooter";

interface TrainingPageLayoutProps {
    title: string;
    subtitle: string;
    description: string;
    duration: string;
    location: string;
    price?: string;
    highlights: string[];
    curriculum: string[];
    imagePath: string;
}

const TrainingPageLayout = ({
    title,
    subtitle,
    description,
    duration,
    location,
    price,
    highlights,
    curriculum,
    imagePath,
}: TrainingPageLayoutProps) => {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <ModernNavbar />

            <main className="flex-grow pt-32 pb-24">
                <div className="container mx-auto px-6">
                    <Link
                        href="/#events"
                        className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors mb-12 group"
                    >
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Events
                    </Link>

                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        <div className="lg:w-2/3">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h4 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">
                                    {subtitle}
                                </h4>
                                <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 leading-tight">
                                    {title}
                                </h1>

                                <div className="flex flex-wrap gap-6 mb-12">
                                    <div className="flex items-center gap-2 text-slate-600 bg-white px-4 py-2 rounded-xl border border-slate-100 shadow-sm">
                                        <Calendar size={18} className="text-blue-500" />
                                        <span className="text-sm font-medium">{duration}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-600 bg-white px-4 py-2 rounded-xl border border-slate-100 shadow-sm">
                                        <MapPin size={18} className="text-red-500" />
                                        <span className="text-sm font-medium">{location}</span>
                                    </div>
                                    {price && (
                                        <div className="flex items-center gap-2 text-slate-600 bg-white px-4 py-2 rounded-xl border border-slate-100 shadow-sm">
                                            <Award size={18} className="text-yellow-500" />
                                            <span className="text-sm font-medium">{price}</span>
                                        </div>
                                    )}
                                </div>

                                <p className="text-xl text-slate-600 leading-relaxed mb-12">
                                    {description}
                                </p>

                                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                    <CheckCircle2 className="text-green-500" />
                                    Course Highlights
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                                    {highlights.map((highlight, index) => (
                                        <div key={index} className="flex gap-3 items-center text-slate-700 bg-white p-4 rounded-2xl border border-slate-50 shadow-sm">
                                            <div className="w-2 h-2 rounded-full bg-blue-500" />
                                            <span className="font-medium">{highlight}</span>
                                        </div>
                                    ))}
                                </div>

                                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                    <BookOpen className="text-blue-500" />
                                    What You&apos;ll Learn
                                </h3>
                                <div className="space-y-4 mb-12">
                                    {curriculum.map((item, index) => (
                                        <div key={index} className="flex gap-4 items-start p-5 bg-white rounded-3xl border border-slate-100 hover:border-blue-100 transition-colors group">
                                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-sm group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                                {index + 1}
                                            </span>
                                            <p className="text-slate-600 leading-relaxed pt-1">{item}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="bg-slate-900 rounded-[40px] p-10 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2">Ready to start your training?</h3>
                                        <p className="text-slate-400">Join our next cohort and gain industry-recognized skills.</p>
                                    </div>
                                    <Link href="/contact-us">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-8 py-4 bg-yellow-500 text-slate-900 rounded-2xl font-bold whitespace-nowrap"
                                        >
                                            Apply Now
                                        </motion.button>
                                    </Link>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-1/3 sticky top-32"
                        >
                            <div className="rounded-[40px] overflow-hidden shadow-2xl mb-8">
                                <img
                                    src={imagePath}
                                    alt={title}
                                    className="object-cover w-full aspect-square"
                                />
                            </div>

                            <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-xl shadow-slate-200/50">
                                <h4 className="font-bold text-slate-900 mb-6">Course Quick Info</h4>
                                <ul className="space-y-6">
                                    <li className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                                            <Clock size={20} />
                                        </div>
                                        <div>
                                            <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">SCHEDULE</div>
                                            <div className="font-bold text-slate-900 text-sm">Mon - Sat (9:00 AM)</div>
                                        </div>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-green-600">
                                            <Users size={20} />
                                        </div>
                                        <div>
                                            <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">CAPACITY</div>
                                            <div className="font-bold text-slate-900 text-sm">25 Students Per Cohort</div>
                                        </div>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-yellow-50 flex items-center justify-center text-yellow-600">
                                            <Award size={20} />
                                        </div>
                                        <div>
                                            <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">CERTIFICATION</div>
                                            <div className="font-bold text-slate-900 text-sm">Industry-Recognized</div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </main>

            <ModernFooter />
        </div>
    );
};

export default TrainingPageLayout;
