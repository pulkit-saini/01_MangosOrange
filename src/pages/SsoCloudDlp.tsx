import ServicePageLayout from '@/components/ServicePageLayout';

export default function SsoCloudDlp() {
  const steps = [
    {
      title: "Security Assessment",
      description: "Comprehensive evaluation of your current identity and data protection posture."
    },
    {
      title: "Solution Design", 
      description: "Design SSO and DLP solutions tailored to your security and compliance requirements."
    },
    {
      title: "Implementation & Integration",
      description: "Deploy and integrate SSO and DLP solutions with your existing systems."
    },
    {
      title: "Monitoring & Maintenance",
      description: "Continuous monitoring, policy updates, and security optimization."
    }
  ];

  const benefits = [
    "Single sign-on for all cloud applications",
    "Advanced data loss prevention policies",
    "Multi-factor authentication support",
    "Real-time threat detection and response",
    "Compliance with GDPR, HIPAA, SOX",
    "Centralized identity and access management",
    "Automated security incident reporting",
    "Zero-trust security architecture"
  ];

  const caseStudies = [
    {
      title: "Healthcare Organization",
      result: "100% HIPAA compliance achieved",
      description: "Implemented comprehensive SSO and DLP solution ensuring complete HIPAA compliance for patient data protection."
    },
    {
      title: "Financial Institution",
      result: "90% reduction in security incidents",
      description: "Deployed advanced SSO and DLP controls, significantly reducing data breaches and unauthorized access attempts."
    }
  ];

  return (
    <ServicePageLayout
      title="SSO & Cloud DLP Solutions"
      tagline="Secure your digital identity and protect sensitive data in the cloud"
      heroImage="/assets/it-services-hero.jpg"
      description="Implement enterprise-grade Single Sign-On and Data Loss Prevention solutions to secure your cloud environment and ensure compliance."
      steps={steps}
      benefits={benefits}
      caseStudies={caseStudies}
    />
  );
}