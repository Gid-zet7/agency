"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Linkedin, Twitter, Youtube, ArrowRight, Mail, Phone, MapPin } from "lucide-react";

const ModernFooter = () => {
    return (
        <footer className="bg-slate-900 pt-24 pb-12 overflow-hidden relative">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] z-0" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
                    {/* Brand Column */}
                    <div className="flex flex-col gap-8">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white p-1">
                                <Image
                                    src="/billo-logo.jpeg"
                                    fill
                                    alt="Billo Empire Logo"
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-2xl font-black tracking-tighter text-white">
                                BILLO <span className="text-yellow-500">EMPIRE</span>
                            </span>
                        </Link>
                        <p className="text-slate-400 leading-relaxed max-w-xs">
                            Ghana&apos;s premier recruitment agency, dedicated to matching exceptional talent with leading employers globally.
                        </p>
                        <div className="flex items-center gap-4">
                            {[
                                { icon: <Facebook size={20} />, href: "https://web.facebook.com/profile.php?id=61568082937141" },
                                { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/company/billo-empire/" },
                                { icon: <Twitter size={20} />, href: "#" },
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-yellow-500 hover:text-slate-900 transition-all duration-300"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-8">
                        <h4 className="text-white font-bold text-lg">Quick Links</h4>
                        <ul className="flex flex-col gap-4">
                            {["Home", "About Us", "Services", "Success Stories", "Blog"].map((link) => (
                                <li key={link}>
                                    <Link
                                        href={`#${link.toLowerCase().replace(" ", "-")}`}
                                        className="text-slate-400 hover:text-yellow-500 transition-colors flex items-center gap-2 group"
                                    >
                                        <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="flex flex-col gap-8">
                        <h4 className="text-white font-bold text-lg">Legal</h4>
                        <ul className="flex flex-col gap-4">
                            {["Terms of Service", "Privacy Policy", "Cookie Policy", "Contact Us"].map((link) => (
                                <li key={link}>
                                    <Link
                                        href={`/${link.toLowerCase().replace(/ /g, "-")}`}
                                        className="text-slate-400 hover:text-yellow-500 transition-colors flex items-center gap-2 group"
                                    >
                                        <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col gap-8">
                        <h4 className="text-white font-bold text-lg">Contact Us</h4>
                        <ul className="flex flex-col gap-6">
                            <li className="flex gap-4">
                                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-yellow-500 shrink-0">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <div className="text-xs text-slate-500 font-bold uppercase mb-1">Email</div>
                                    <a href="mailto:info@billoempire.com" className="text-slate-300 hover:text-yellow-500 transition-colors">info@billoempire.com</a>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-blue-500 shrink-0">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <div className="text-xs text-slate-500 font-bold uppercase mb-1">Phone</div>
                                    <a href="tel:+233000000000" className="text-slate-300 hover:text-yellow-500 transition-colors">+233 (0) 555 123 456</a>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-green-500 shrink-0">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <div className="text-xs text-slate-500 font-bold uppercase mb-1">Location</div>
                                    <span className="text-slate-300">Accra, Ghana</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} Billo Empire. All rights reserved.
                    </p>
                    <p className="text-slate-500 text-sm">
                        Powered by <Link href="#" className="text-slate-300 hover:text-white transition-colors">Gidzet</Link>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default ModernFooter;
