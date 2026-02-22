"use client";

import React from "react";
import ServicePageLayout from "@/components/home/ServicePageLayout";
import { ShieldCheck } from "lucide-react";

export default function VettedProfessionalsPage() {
    return (
        <ServicePageLayout
            title="Vetted Professionals"
            subtitle="Verified Excellence"
            description="Every candidate undergoes a rigorous multis-stage vetting process. We ensure that every professional we present not only has the technical skills required but also aligns with your company values and culture."
            icon={<ShieldCheck size={40} />}
            benefits={[
                "Comprehensive background and identity verification",
                "In-depth technical skill assessments",
                "Past performance and reference validation",
                "Soft skills and culture-fit psychometric testing",
                "Expert-led face-to-face interview process",
                "Reduced hiring risk and turnover"
            ]}
            imagePath="/nicholas.jpeg"
        />
    );
}
