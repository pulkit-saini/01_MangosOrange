import ServicePageLayout from '@/components/ServicePageLayout';

export default function ZohoWorkplace() {
  const steps = [
    {
      title: "Business Assessment",
      description: "We analyze your current business processes and communication needs."
    },
    {
      title: "Zoho Setup & Configuration", 
      description: "Configure your Zoho Workplace with custom domains and business settings."
    },
    {
      title: "Data Migration & Integration",
      description: "Migrate existing data and integrate with your current business systems."
    },
    {
      title: "Team Training & Adoption",
      description: "Train your team on Zoho tools and ensure smooth adoption across the organization."
    }
  ];

  const benefits = [
    "Custom domain email hosting",
    "Collaborative document editing",
    "Team chat and video calls",
    "File sharing and storage",
    "Calendar and scheduling",
    "Mobile apps for all platforms",
    "Admin panel for user management",
    "24/7 customer support"
  ];

  const caseStudies = [
    {
      title: "Growing Startup",
      result: "60% reduction in communication costs",
      description: "Helped a 50-person startup implement Zoho Workplace, reducing their communication and collaboration tool costs significantly."
    },
    {
      title: "Regional Business",
      result: "Unified communication platform",
      description: "Consolidated multiple communication tools into one integrated Zoho Workplace solution for a multi-location business."
    }
  ];

  return (
    <ServicePageLayout
      title="Zoho Workplace"
      tagline="Complete business communication and collaboration suite"
      heroImage="/assets/software-team-collaboration.jpg"
      description="Get professional email, office tools, and team collaboration in one integrated platform designed for businesses of all sizes."
      steps={steps}
      benefits={benefits}
      caseStudies={caseStudies}
    />
  );
}