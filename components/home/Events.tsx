"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, ArrowUpRight } from "lucide-react";

import Link from "next/link";

const events = [
    {
        day: "11",
        month: "Nov",
        title: "Rigging Training",
        time: "9:00 AM, 11th - 16th Nov",
        location: "Halleluyah Junction, Afienya-Mataheko Rd.",
        status: "Ended",
        statusColor: "bg-gray-500",
        href: "/training/rigging",
    },
    {
        day: "02",
        month: "Dec",
        title: "Rigging Training 2",
        time: "9:30 AM, Every Saturday",
        location: "Halleluyah Junction, Afienya-Mataheko Rd.",
        status: "Upcoming",
        statusColor: "bg-blue-500",
        href: "/training/rigging",
    }
];

const Events = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block text-blue-600 font-bold tracking-widest uppercase text-sm mb-4"
                    >
                        Stay Informed
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4"
                    >
                        Upcoming Training & Events
                    </motion.h2>
                    <div className="w-24 h-1.5 bg-yellow-400 mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {events.map((event, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex flex-col md:flex-row gap-6 p-8 rounded-[32px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 group"
                        >
                            <div className="flex flex-col items-center justify-center min-w-[100px] h-[100px] bg-white rounded-2xl shadow-sm border border-slate-100 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-500">
                                <span className="text-3xl font-black">{event.day}</span>
                                <span className="text-sm font-bold uppercase tracking-widest opacity-60">{event.month}</span>
                            </div>

                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`w-2.5 h-2.5 rounded-full ${event.statusColor} animate-pulse`} />
                                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">{event.status}</span>
                                </div>

                                <h3 className="text-2xl font-bold text-slate-900 mb-6 group-hover:text-blue-600 transition-colors">
                                    {event.title}
                                </h3>

                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center gap-3 text-slate-500 text-sm">
                                        <Clock size={16} className="text-yellow-500" />
                                        <span>{event.time}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-500 text-sm">
                                        <MapPin size={16} className="text-blue-500" />
                                        <span>{event.location}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-end justify-end">
                                <Link href={event.href}>
                                    <button className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all transform group-hover:rotate-45">
                                        <ArrowUpRight size={20} />
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Events;
