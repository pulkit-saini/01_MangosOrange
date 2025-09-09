import ServicePageLayout from '@/components/ServicePageLayout';

export default function AmazonWebServices() {
  const steps = [
    {
      title: "Infrastructure Assessment",
      description: "Comprehensive analysis of your current infrastructure and AWS migration planning."
    },
    {
      title: "AWS Architecture Design", 
      description: "Design robust, scalable AWS solutions tailored to your business requirements."
    },
    {
      title: "Migration & Deployment",
      description: "Seamless migration to AWS with minimal business disruption and downtime."
    },
    {
      title: "Management & Optimization",
      description: "Ongoing AWS management, cost optimization, and performance monitoring."
    }
  ];

  const benefits = [
    "200+ fully featured services available globally",
    "Industry-leading security and compliance",
    "Scalable compute with EC2 and Lambda",
    "Comprehensive database solutions (RDS, DynamoDB)",
    "Advanced analytics and machine learning",
    "Content delivery with CloudFront CDN",
    "DevOps and CI/CD pipeline integration",
    "Pay-as-you-use pricing model"
  ];

  const caseStudies = [
    {
      title: "Media Streaming Service",
      result: "99.99% uptime achieved",
      description: "Built a scalable video streaming platform on AWS, serving millions of users with exceptional reliability."
    },
    {
      title: "Financial Services Firm",
      result: "Enhanced security compliance",
      description: "Implemented AWS security services for a financial firm, achieving SOC 2 and PCI DSS compliance."
    }
  ];

  return (
    <ServicePageLayout
      title="Amazon Web Services (AWS)"
      tagline="Build, deploy, and scale with the world's most comprehensive cloud platform"
      heroImage="/assets/cloud-infrastructure-service.jpg"
      description="Harness the power of AWS's extensive service portfolio to innovate faster, reduce costs, and scale your applications globally with industry-leading reliability."
      steps={steps}
      benefits={benefits}
      caseStudies={caseStudies}
    />
  );
}