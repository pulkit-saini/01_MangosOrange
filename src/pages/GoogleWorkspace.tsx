import ServicePageLayout from '@/components/ServicePageLayout';

export default function GoogleWorkspace() {
  const steps = [
    {
      title: "Assessment & Planning",
      description: "We analyze your current setup and plan the migration to Google Workspace."
    },
    {
      title: "Account Setup & Configuration", 
      description: "Set up your Google Workspace account with proper security and admin controls."
    },
    {
      title: "Data Migration",
      description: "Seamlessly migrate your emails, files, and data to the new platform."
    },
    {
      title: "Training & Support",
      description: "Train your team and provide ongoing support for smooth adoption."
    }
  ];

  const benefits = [
    "Professional email with custom domain",
    "Real-time collaboration on documents",
    "Advanced admin and security controls", 
    "24/7 phone and email support",
    "99.9% guaranteed uptime",
    "Mobile device management",
    "Advanced phishing protection",
    "Meeting recording and live streaming"
  ];

  const caseStudies = [
    {
      title: "Manufacturing Company",
      result: "50% increase in collaboration efficiency",
      description: "Helped a 200+ employee manufacturing company migrate from legacy email to Google Workspace, resulting in improved team collaboration and productivity."
    },
    {
      title: "Healthcare Practice",
      result: "Enhanced security compliance",
      description: "Implemented Google Workspace for a medical practice with HIPAA-compliant configurations and advanced security features."
    }
  ];

  return (
    <ServicePageLayout
      title="Google Workspace for Business"
      tagline="Transform your business communication with Google's integrated productivity suite"
      heroImage="/assets/hero-team.jpg"
      description="Empower your teams with Gmail, Drive, Docs, Meet, and more - all integrated for seamless collaboration and enhanced productivity."
      steps={steps}
      benefits={benefits}
      caseStudies={caseStudies}
    />
  );
}