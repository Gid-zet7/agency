"use client";

import React from "react";
import TrainingPageLayout from "@/components/home/TrainingPageLayout";

export default function RiggingTrainingPage() {
    return (
        <TrainingPageLayout
            title="Professional Rigging Training"
            subtitle="Industry Certification"
            description="Master the essential skills of professional rigging. Our comprehensive course is designed to equip you with the knowledge and practical skills required to safely and effectively handle heavy loads and equipment in industrial environments."
            duration="6 Days (9:00 AM - 4:00 PM)"
            location="Halleluyah Junction, Afienya-Mataheko Rd."
            price="Certified Training"
            highlights={[
                "Hands-on Practical Sessions",
                "OSHA Safety Compliance",
                "Load Calculation Mastery",
                "Industry-Recognized Certification",
                "Expert Professional Tutors",
                "Job Placement Assistance"
            ]}
            curriculum={[
                "Introduction to Rigging Hardware and Equipment",
                "Understanding Load Weight and Center of Gravity",
                "Safe Slinging Techniques and Hitch Types",
                "Rigging Inspection and Maintenance Procedures",
                "Crane Signaling and Communication Protocols",
                "Emergency Procedures and Risk Assessment",
                "Final Practical Assessment and Certification Exam"
            ]}
            imagePath="/pastor.jpeg"
        />
    );
}
