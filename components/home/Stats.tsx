"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { Users, GraduationCap, Briefcase, Heart } from "lucide-react";

interface CounterProps {
    value: number;
    suffix?: string;
    duration?: number;
}

const Counter = ({ value, suffix = "", duration = 2 }: CounterProps) => {
    const [displayValue, setDisplayValue] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = value;
            const increment = end / (duration * 60);
            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setDisplayValue(end);
                    clearInterval(timer);
                } else {
                    setDisplayValue(Math.floor(start));
                }
            }, 1000 / 60);

            return () => clearInterval(timer);
        }
    }, [isInView, value, duration]);

    return (
        <span ref={ref}>
            {displayValue}{suffix}
        </span>
    );
};

const Stats = () => {
    const stats = [
        {
            label: "Trained Candidates",
            value: 1500,
            suffix: "+",
            icon: <Users className="text-blue-500" size={24} />,
            description: "Professionals equipped with practical skills yearly.",
            color: "bg-blue-50",
        },
        {
            label: "Technical Grads",
            value: 800,
            suffix: "+",
            icon: <GraduationCap className="text-yellow-500" size={24} />,
            description: "Specialized in forklift and crane operations.",
            color: "bg-yellow-50",
        },
        {
            label: "Core Values",
            value: 4,
            suffix: "",
            icon: <Heart className="text-red-500" size={24} />,
            description: "Integrity, Excellence, Collaboration, Innovation.",
            color: "bg-red-50",
        },
        {
            label: "Expert Leaders",
            value: 3,
            suffix: "",
            icon: <Briefcase className="text-indigo-500" size={24} />,
            description: "Dedicated specialists guiding your success.",
            color: "bg-indigo-50",
        },
    ];

    return (
        <section id="counter" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-3xl border border-slate-100 hover:border-yellow-200 transition-colors group bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:shadow-yellow-100/50"
                        >
                            <div className={`w-14 h-14 ${stat.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                {stat.icon}
                            </div>
                            <div className="text-4xl font-extrabold text-slate-900 mb-2">
                                <Counter value={stat.value} suffix={stat.suffix} />
                            </div>
                            <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">
                                {stat.label}
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                {stat.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
