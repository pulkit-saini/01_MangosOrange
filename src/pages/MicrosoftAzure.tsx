import ServicePageLayout from '@/components/ServicePageLayout';

export default function MicrosoftAzure() {
  const steps = [
    {
      title: "Azure Readiness Evaluation",
      description: "Assess your current Microsoft ecosystem and plan optimal Azure integration."
    },
    {
      title: "Cloud Architecture Planning", 
      description: "Design Azure solutions that integrate seamlessly with your existing Microsoft investments."
    },
    {
      title: "Azure Migration & Setup",
      description: "Migrate workloads to Azure with proven methodologies and minimal disruption."
    },
    {
      title: "Ongoing Management",
      description: "Complete Azure management, monitoring, and optimization services."
    }
  ];

  const benefits = [
    "Seamless integration with Microsoft products",
    "Hybrid cloud capabilities with Azure Arc",
    "Advanced AI and cognitive services",
    "Comprehensive DevOps with Azure DevOps",
    "Enterprise-grade security and compliance",
    "Global presence in 60+ regions",
    "Cost management and optimization tools",
    "Flexible licensing options"
  ];

  const caseStudies = [
    {
      title: "Manufacturing Company",
      result: "50% improvement in operational efficiency",
      description: "Implemented Azure IoT and analytics solutions for a manufacturing company, optimizing production processes."
    },
    {
      title: "Professional Services",
      result: "Seamless hybrid cloud integration",
      description: "Created a hybrid cloud solution connecting on-premises infrastructure with Azure services."
    }
  ];

  return (
    <ServicePageLayout
      title="Microsoft Azure"
      tagline="Accelerate innovation with Microsoft's intelligent cloud platform"
      heroImage="/assets/managed-services-hero.jpg"
      description="Build, manage, and deploy applications on Microsoft's global network using your favorite tools and frameworks with unparalleled integration capabilities."
      steps={steps}
      benefits={benefits}
      caseStudies={caseStudies}
    />
  );
}