import React from 'react';
import { Calendar, Users, TrendingUp, FileText } from 'lucide-react';
import ProjectCard from './ProjectCard';

function FeatureSection() {
  // Fix 1: Add const/let
  const items = [
    {
      icon: Calendar,
      title: "Project Tracking",
      content: "Monitor your construction projects from start to finish with real-time updates.",
      iconBgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      content: "Keep everyone on the same page with integrated communication tools.",
      iconBgColor: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: FileText,
      title: "Document Management",
      content: "Store and organize all your project documents in one secure location.",
      iconBgColor: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: TrendingUp,
      title: "Budget Control",
      content: "Track expenses and stay within budget with powerful financial tools.",
      iconBgColor: "bg-orange-100",
      iconColor: "text-orange-600"
    }
  ];

  return (
    <section className="container mx-auto px-6 py-20">
      <div className="grid md:grid-cols-4 gap-8">
        {items.map((item, index) => (
          <ProjectCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
}

export default FeatureSection;