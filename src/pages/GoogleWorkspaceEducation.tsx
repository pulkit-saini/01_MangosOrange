import ServicePageLayout from '@/components/ServicePageLayout';

export default function GoogleWorkspaceEducation() {
  const steps = [
    {
      title: "Needs Assessment",
      description: "We assess your institution's requirements and create a deployment plan."
    },
    {
      title: "Account Setup & Configuration", 
      description: "Configure Google for Education with proper student safety and privacy controls."
    },
    {
      title: "Teacher & Student Training",
      description: "Comprehensive training programs for educators and students on digital learning tools."
    },
    {
      title: "Ongoing Support",
      description: "Continuous support and best practices guidance for educational technology integration."
    }
  ];

  const benefits = [
    "Google Classroom for assignment management",
    "Unlimited cloud storage for institutions",
    "Admin controls for student safety",
    "Meet for virtual classrooms (up to 250 participants)",
    "Chromebook management integration",
    "Parent/guardian notifications",
    "Advanced security and compliance",
    "24/7 support for IT administrators"
  ];

  const caseStudies = [
    {
      title: "K-12 School District",
      result: "40% improvement in assignment completion rates",
      description: "Helped a 5,000-student school district implement Google Classroom, resulting in better student engagement and streamlined assignment workflows."
    },
    {
      title: "University Department",
      result: "Seamless remote learning transition",
      description: "Enabled a university department to quickly transition to remote learning with Google Meet and collaborative tools during challenging times."
    }
  ];

  return (
    <ServicePageLayout
      title="Google Workspace for Education"
      tagline="Empower educators and students with collaborative learning tools"
      heroImage="/assets/professional-team-hero.jpg"
      description="Transform your educational institution with Google's suite of learning tools designed specifically for educators and students, from K-12 to higher education."
      steps={steps}
      benefits={benefits}
      caseStudies={caseStudies}
    />
  );
}