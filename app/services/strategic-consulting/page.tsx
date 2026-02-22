"use client";

import React from "react";
import ServicePageLayout from "@/components/home/ServicePageLayout";
import { Users } from "lucide-react";

export default function StrategicConsultingPage() {
    return (
        <ServicePageLayout
            title="Strategic Consulting"
            subtitle="Expert Guidance"
            description="We provide expert guidance for both employers and job seekers to navigate the complexities of the modern workforce. From workforce planning to career mapping, we offer the insights you need to succeed."
            icon={<Users size={40} />}
            benefits={[
                "Strategic workforce planning and design",
                "Up-to-date market rate and salary benchmarking",
                "Talent retention and engagement strategies",
                "Regulatory and compliance advisory",
                "Employer branding and market positioning",
                "Career development and transition coaching"
            ]}
            imagePath="/group.jpeg"
        />
    );
}
