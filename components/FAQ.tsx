"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RecruitmentFAQ } from "@/constant";
import { Plus, Minus } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        onClick={onClick}
        className="flex items-center justify-between w-full py-6 text-left group"
      >
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-blue-600' : 'text-slate-900 group-hover:text-blue-600'}`}>
          {question}
        </span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-blue-100 text-blue-600 rotate-180' : 'bg-slate-50 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600'}`}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-600 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-extrabold text-slate-900 mb-6 font-primary">
                Frequently Asked <span className="text-blue-600">Questions</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Everything you need to know about our recruitment process and talent matching services.
              </p>
              <div className="p-6 bg-slate-50 rounded-[32px] border border-slate-100">
                <p className="font-bold text-slate-900 mb-2">Still have questions?</p>
                <p className="text-sm text-slate-500 mb-4">Can&apos;t find what you&apos;re looking for? Reach out to our dedicated support team.</p>
                <a href="/contact-us" className="text-blue-600 font-bold hover:underline">Contact Support →</a>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50/50 p-8 rounded-[40px] border border-slate-100 shadow-sm"
            >
              {RecruitmentFAQ.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
