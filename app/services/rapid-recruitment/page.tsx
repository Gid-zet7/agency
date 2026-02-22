"use client";

import React from "react";
import ServicePageLayout from "@/components/home/ServicePageLayout";
import { Zap } from "lucide-react";

export default function RapidRecruitmentPage() {
    return (
        <ServicePageLayout
            title="Rapid Recruitment"
            subtitle="Fast Results"
            description="Our streamlined, technology-driven matching process reduces time-to-hire by up to 50%. We maintain a constant pipeline of pre-screened talent, allowing us to fill critical roles in days, not weeks."
            icon={<Zap size={40} />}
            benefits={[
                "Proprietary AI-powered candidate matching",
                "Instant access to pre-vetted talent pipelines",
                "Automated screening and interview scheduling",
                "Dedicated recruitment teams for urgent needs",
                "Real-time progress tracking for employers",
                "Agile hiring workflows for rapid scaling"
            ]}
            imagePath="/hiring.jpeg"
        />
    );
}
