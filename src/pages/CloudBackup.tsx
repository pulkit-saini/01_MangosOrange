import ServicePageLayout from '@/components/ServicePageLayout';

export default function CloudBackup() {
  const steps = [
    {
      title: "Data Assessment",
      description: "Comprehensive analysis of your data, systems, and backup requirements."
    },
    {
      title: "Backup Strategy Design", 
      description: "Design optimal cloud backup solution with appropriate retention and recovery policies."
    },
    {
      title: "Implementation & Setup",
      description: "Deploy cloud backup solution with automated scheduling and monitoring."
    },
    {
      title: "Monitoring & Testing",
      description: "Regular backup verification, disaster recovery testing, and continuous monitoring."
    }
  ];

  const benefits = [
    "Automated daily cloud backups",
    "Point-in-time recovery capabilities",
    "Encrypted data transmission and storage",
    "Geographic redundancy and replication",
    "Ransomware protection and detection",
    "Compliance with industry standards",
    "Rapid disaster recovery (RTO/RPO)",
    "Cost-effective long-term retention"
  ];

  const caseStudies = [
    {
      title: "Accounting Firm",
      result: "4-hour recovery time achieved",
      description: "Implemented comprehensive cloud backup solution enabling rapid recovery from system failures with minimal data loss."
    },
    {
      title: "Medical Practice",
      result: "HIPAA-compliant data protection",
      description: "Deployed secure cloud backup with encryption and audit trails to protect patient records and ensure compliance."
    }
  ];

  return (
    <ServicePageLayout
      title="Cloud Backup Services"
      tagline="Protect your critical data with automated cloud backup and disaster recovery"
      heroImage="/assets/data-migration-hero.jpg"
      description="Ensure business continuity with our comprehensive cloud backup solutions featuring automated backups, rapid recovery, and enterprise-grade security."
      steps={steps}
      benefits={benefits}
      caseStudies={caseStudies}
    />
  );
}