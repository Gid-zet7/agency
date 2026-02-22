"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";

const blogPosts = [
    {
        title: "Top Recruitment Trends in 2024",
        excerpt: "Explore the latest trends shaping the recruitment landscape this year and how companies are adapting.",
        image: "/estee-janssens.jpg",
        category: "Recruitment Trends",
        date: "Feb 15, 2024",
        link: "/blog/top-recruitment-trends",
    },
    {
        title: "Networking in Your Job Search",
        excerpt: "Discover why networking is a vital component of a successful job search and how to do it effectively.",
        image: "/grad.jpeg",
        category: "Career Development",
        date: "Feb 10, 2024",
        link: "/blog/networking-in-job-search",
    },
    {
        title: "Interview Preparation: Success Tips",
        excerpt: "Get ready for your next big interview with these essential preparation tips and industry secrets.",
        image: "/hiring.jpeg",
        category: "Interview Tips",
        date: "Feb 05, 2024",
        link: "/blog/interview-tips",
    },
];

const BlogPreview = () => {
    return (
        <section id="blog" className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block text-blue-600 font-bold tracking-widest uppercase text-sm mb-4"
                        >
                            Latest Insights
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-extrabold text-slate-900"
                        >
                            Industry News & Career Tips
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link href="/blog">
                            <button className="px-6 py-3 border border-slate-200 rounded-xl font-bold bg-white hover:bg-slate-50 transition-all flex items-center gap-2">
                                Read All Posts <ArrowRight size={20} />
                            </button>
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-[32px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 group"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={post.image}
                                    fill
                                    alt={post.title}
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold rounded-full shadow-sm">
                                        {post.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="flex items-center gap-4 text-slate-400 text-xs font-medium mb-4 uppercase tracking-widest">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar size={14} /> {post.date}
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <User size={14} /> By Admin
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
                                    {post.excerpt}
                                </p>
                                <Link href={post.link} className="inline-flex items-center gap-2 text-slate-900 font-bold text-sm tracking-tight group/link">
                                    Read Article
                                    <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover/link:bg-slate-900 group-hover/link:text-white transition-all duration-300">
                                        <ArrowRight size={16} />
                                    </span>
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogPreview;
