"use client";

import React from "react";
import ServicePageLayout from "@/components/home/ServicePageLayout";
import { Globe } from "lucide-react";

export default function GlobalTalentPoolPage() {
    return (
        <ServicePageLayout
            title="Global Talent Pool"
            subtitle="Global Reach"
            description="Connect with top-tier professionals from local and international markets across diverse industries. We break geographic barriers to find the perfect fit for your specialized roles, whether you're looking for local experts or international specialists."
            icon={<Globe size={40} />}
            benefits={[
                "Worldwide candidate search across 50+ countries",
                "Multicultural and multi-lingual expertise",
                "Full support for remote hiring and onboarding",
                "Expert visa and relocation consulting",
                "Access to niche technical skills globally",
                "Diverse perspective integration"
            ]}
            imagePath="/talent.jpeg"
        />
    );
}
