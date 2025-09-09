import ServicePageLayout from '@/components/ServicePageLayout';

export default function GoogleCloudPlatform() {
  const steps = [
    {
      title: "Cloud Readiness Assessment",
      description: "Evaluate your current infrastructure and plan the optimal GCP migration strategy."
    },
    {
      title: "Architecture Design", 
      description: "Design scalable cloud architecture using GCP best practices and services."
    },
    {
      title: "Migration & Implementation",
      description: "Execute the migration plan with minimal downtime and maximum efficiency."
    },
    {
      title: "Optimization & Support",
      description: "Ongoing optimization, monitoring, and 24/7 support for your GCP environment."
    }
  ];

  const benefits = [
    "Global network infrastructure with low latency",
    "Advanced AI and machine learning capabilities",
    "Kubernetes-native container orchestration",
    "Big data analytics with BigQuery",
    "Serverless computing with Cloud Functions",
    "Enterprise-grade security and compliance",
    "Cost optimization with smart pricing",
    "Integration with Google Workspace"
  ];

  const caseStudies = [
    {
      title: "E-commerce Platform",
      result: "70% cost reduction in infrastructure",
      description: "Migrated a high-traffic e-commerce platform to GCP, achieving significant cost savings and improved performance."
    },
    {
      title: "Healthcare Analytics",
      result: "10x faster data processing",
      description: "Implemented BigQuery and AI/ML services for a healthcare provider, dramatically improving data analytics capabilities."
    }
  ];

  return (
    <ServicePageLayout
      title="Google Cloud Platform (GCP)"
      tagline="Transform your business with Google's industry-leading cloud platform"
      heroImage="/assets/cloud-strategy-hero.jpg"
      description="Leverage Google's global infrastructure, AI capabilities, and innovative services to build, deploy, and scale applications with unmatched performance and reliability."
      steps={steps}
      benefits={benefits}
      caseStudies={caseStudies}
    />
  );
}