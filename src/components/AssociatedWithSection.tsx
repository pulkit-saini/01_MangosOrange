import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const partnersData = [
  { 
    name: "AWS Partner", 
    logo: "/lovable-uploads/01d957b7-bc44-4bb4-a246-84ca4d1fd887.png",
    alt: "AWS Partner Badge"
  },
  { 
    name: "Microsoft Partner", 
    logo: "/lovable-uploads/fdb84287-eccc-4577-8949-46977930e543.png",
    alt: "Microsoft Partner Logo"
  },
  { 
    name: "Google Partner", 
    logo: "/lovable-uploads/e52188a9-7b2e-4c43-bc35-70e60beaaf82.png",
    alt: "Google Premier Partner Badge"
  },
  { 
    name: "HP", 
    logo: "/lovable-uploads/fd833830-5daa-4781-9f25-190d72df51bc.png",
    alt: "HP Logo"
  },
  { 
    name: "Acer", 
    logo: "/lovable-uploads/01a2af85-69cc-4374-a2d0-dc11631b0ac8.png",
    alt: "Acer Authorized Reseller Logo"
  },
  { 
    name: "Redington", 
    logo: "/lovable-uploads/482f5bd6-b4cb-412c-8e9c-0830e3668957.png",
    alt: "Redington Seamless Partnerships Logo"
  },
  { 
    name: "Fortinet", 
    logo: "/lovable-uploads/86611a82-04e8-4d65-80a2-e66c5ca623fe.png",
    alt: "Fortinet Logo"
  },
  { 
    name: "Canon", 
    logo: "/lovable-uploads/c31df73f-5355-4e8e-bdcc-0f4074af8850.png",
    alt: "Canon Logo"
  },
  { 
    name: "ASUS", 
    logo: "/lovable-uploads/8a726fde-f018-4a20-b22b-f4b732945ec3.png",
    alt: "ASUS Logo - Inspiring Innovation Persistent Perfection"
  },
];

const AssociatedWithSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  // No complex scroll logic needed for grid layout

  return (
    <section 
      ref={sectionRef}
      className={`py-16 lg:py-24 bg-background transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            Associated With
          </h3>
          <div className={`w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-6 rounded-full transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`} />
          <p className={`text-muted-foreground max-w-2xl mx-auto text-lg transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            Proud to be partners and associates with industry leaders and technology giants 
            who share our commitment to excellence and innovation.
          </p>
        </div>

        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-12 transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {partnersData.map((partner, index) => (
            <div
              key={partner.name}
              className={`relative w-full h-32 md:h-36 lg:h-40 bg-card rounded-xl border-2 border-border/50 transition-all duration-500 hover:scale-105 hover:shadow-xl group overflow-hidden ${
                isVisible ? 'animate-fade-in' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="flex items-center justify-center h-full p-4 relative z-10">
                <div className={`flex items-center justify-center ${
                  ['Google Partner', 'Microsoft Partner', 'AWS Partner', 'HP'].includes(partner.name) ? 'h-24' : 'h-20'
                }`}>
                  <img 
                    src={partner.logo} 
                    alt={partner.alt}
                    className="max-w-full max-h-full object-contain filter brightness-90 group-hover:brightness-100 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Optional subtitle */}
        <div className={`text-center transition-all duration-700 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}>
          <p className="text-sm text-muted-foreground">
            Building tomorrow's solutions with today's most trusted technology partners
          </p>
        </div>
      </div>
    </section>
  );
};

export default AssociatedWithSection;