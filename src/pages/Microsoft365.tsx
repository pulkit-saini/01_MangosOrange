import ServicePageLayout from '@/components/ServicePageLayout';

export default function Microsoft365() {
  const steps = [
    {
      title: "Current System Analysis",
      description: "Evaluate your existing setup and plan the Microsoft 365 implementation strategy."
    },
    {
      title: "Account Setup & Migration", 
      description: "Set up Microsoft 365 accounts and migrate your data with minimal downtime."
    },
    {
      title: "Security Configuration",
      description: "Configure advanced security features, compliance settings, and user permissions."
    },
    {
      title: "User Training & Support",
      description: "Comprehensive training on Office applications and ongoing technical support."
    }
  ];

  const benefits = [
    "Desktop and web versions of Office apps",
    "1TB OneDrive cloud storage per user",
    "Microsoft Teams for collaboration",
    "Advanced email with Exchange Online",
    "SharePoint for document management",
    "Power Platform for automation",
    "Advanced security and compliance",
    "99.9% uptime guarantee"
  ];

  const caseStudies = [
    {
      title: "Professional Services Firm",
      result: "30% increase in productivity",
      description: "Implemented Microsoft 365 for a 150-person law firm, resulting in improved document collaboration and client communication."
    },
    {
      title: "Construction Company",
      result: "Enhanced project coordination",
      description: "Deployed Teams and SharePoint for a construction company, enabling better project management across multiple job sites."
    }
  ];

  return (
    <ServicePageLayout
      title="Microsoft Office 365"
      tagline="The world's most popular productivity suite, enhanced with cloud capabilities"
      heroImage="/assets/it-services-hero.jpg"
      description="Boost productivity with familiar Office applications, intelligent cloud services, and world-class security in one comprehensive package."
      steps={steps}
      benefits={benefits}
      caseStudies={caseStudies}
    />
  );
}