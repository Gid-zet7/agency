"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#counter" },
    { name: "Services", href: "#services" },
    { name: "Success Stories", href: "#success-stories" },
    { name: "Blog", href: "#blog" },
];

const ModernNavbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
                    ? "py-3 bg-white/80 backdrop-blur-xl shadow-lg shadow-slate-200/50"
                    : "py-6 bg-transparent"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-md">
                        <Image
                            src="/billo-logo.jpeg"
                            fill
                            alt="Billo Empire Logo"
                            className="object-cover"
                        />
                    </div>
                    <span className={`text-xl font-black tracking-tighter ${isScrolled ? 'text-slate-900' : 'text-slate-900 md:text-white lg:text-slate-900'}`}>
                        BILLO <span className="text-yellow-500">EMPIRE</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-8">
                    <div className="flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-semibold text-slate-600 hover:text-yellow-600 transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </div>
                    <Link href="/contact-us">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 bg-slate-900 text-white rounded-xl text-sm font-bold shadow-xl shadow-slate-200 hover:bg-yellow-600 transition-all"
                        >
                            Get Started
                        </motion.button>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden p-2 text-slate-900"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
                    >
                        <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-2xl font-bold text-slate-900 flex items-center justify-between group"
                                >
                                    {link.name}
                                    <ChevronRight size={20} className="text-slate-300 group-hover:text-yellow-500 transition-colors" />
                                </Link>
                            ))}
                            <Link href="/contact-us" onClick={() => setIsMobileMenuOpen(false)}>
                                <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold text-lg mt-4">
                                    Get Started
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default ModernNavbar;
