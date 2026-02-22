"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
    {
        name: "Pastor Matthew",
        role: "Certified Operator",
        image: "/pastor.jpeg",
        content: "I am a proud graduate of Billo Empire. With their training, I became a certified forklift and crane operator, now working successfully in Saudi Arabia. Thanks to Billo Empire!",
        rating: 5,
    },
    {
        name: "Wisdom Anyomi",
        role: "Crane Specialist",
        image: "/wisdom-1.jpeg",
        content: "I've secured an exciting opportunity in Europe thanks to my training in Crane and Forklift Operations from BILLO EMPIRE in collaboration with BON BOSCO TRAINING INSTITUTE!",
        rating: 5,
    },
    {
        name: "Nana Boateng",
        role: "Heavy Equipment Operator",
        image: "/boateng.jpeg",
        content: "Through the help of BILLO EMPIRE training and assistance of recruitment, I was able to gain employment with Bin Quraya Holdings in Saudi Arabia. Thank you BILLO EMPIRE!",
        rating: 5,
    },
    {
        name: "Clement Tetteh Noye",
        role: "Crane Operator",
        image: "/clement.jpeg",
        content: "Thanks to Billo Global Empire, I secured a lucrative contract as a Crane Operator with BIN QURAYA under Saudi Aramco in Saudi Arabia. The opportunities here are real!",
        rating: 5,
    },
];

const Testimonials = () => {
    return (
        <section id="success-stories" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block text-blue-600 font-bold tracking-widest uppercase text-sm mb-4"
                        >
                            Success Stories
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-extrabold text-slate-900"
                        >
                            What Our Graduates Say
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 bg-yellow-50 px-4 py-2 rounded-full border border-yellow-100"
                    >
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={16} className="fill-yellow-500 text-yellow-500" />
                            ))}
                        </div>
                        <span className="font-bold text-slate-900">4.9/5 Average Rating</span>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-[32px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 flex flex-col group"
                        >
                            <div className="mb-6 relative">
                                <Quote size={40} className="text-yellow-500/20 absolute -top-2 -left-2" />
                                <p className="relative z-10 text-slate-600 italic leading-relaxed text-sm">
                                    &ldquo;{testimonial.content}&rdquo;
                                </p>
                            </div>

                            <div className="mt-auto pt-6 border-t border-slate-200 flex items-center gap-4">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
                                    <Image
                                        src={testimonial.image}
                                        fill
                                        alt={testimonial.name}
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <div className="font-bold text-slate-900 text-sm">{testimonial.name}</div>
                                    <div className="text-xs text-slate-400 font-medium">{testimonial.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
