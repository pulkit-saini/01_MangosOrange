import ServicePageLayout from '@/components/ServicePageLayout';

export default function McafeeAntivirus() {
  const steps = [
    {
      title: "Security Assessment",
      description: "Comprehensive evaluation of your current endpoint security and threat landscape."
    },
    {
      title: "McAfee Solution Design", 
      description: "Design optimal McAfee security configuration for your organization's needs."
    },
    {
      title: "Deployment & Configuration",
      description: "Install and configure McAfee solutions across all endpoints and servers."
    },
    {
      title: "Management & Updates",
      description: "Ongoing security management, policy updates, and threat response."
    }
  ];

  const benefits = [
    "Real-time threat detection and response",
    "Advanced machine learning protection",
    "Centralized security management console",
    "Web and email protection",
    "Firewall and intrusion prevention",
    "Data encryption and loss prevention",
    "Mobile device protection",
    "24/7 threat intelligence updates"
  ];

  const caseStudies = [
    {
      title: "Corporate Enterprise",
      result: "99.9% malware detection rate",
      description: "Deployed McAfee Total Protection across 500+ endpoints, achieving industry-leading threat detection rates."
    },
    {
      title: "Educational Institution",
      result: "Zero successful cyber attacks",
      description: "Implemented comprehensive McAfee security suite protecting student and faculty data with zero breaches."
    }
  ];

  return (
    <ServicePageLayout
      title="McAfee Antivirus & Security"
      tagline="Comprehensive endpoint protection with industry-leading threat intelligence"
      heroImage="/assets/professional-team-hero.jpg"
      description="Protect your organization with McAfee's advanced cybersecurity solutions, featuring real-time threat detection and comprehensive endpoint protection."
      steps={steps}
      benefits={benefits}
      caseStudies={caseStudies}
    />
  );
}