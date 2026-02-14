import React from 'react';

// Using text placeholders styled as logos since we don't have real svg assets
const partners = [
  "TechGlobal", "DataFlow Africa", "SecureNet", "Future Finance", "EcoEnergy", "HealthPlus"
];

export const TrustedBy: React.FC = () => {
  return (
    <section className="py-10 bg-dstl-navy border-b border-white/5">
      <div className="container mx-auto px-6">
        <p className="text-center text-slate-500 text-sm font-medium uppercase tracking-wider mb-8">
          Trusted by forward-thinking organizations
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
           {/* Placeholder Logos */}
           {partners.map((partner, idx) => (
             <div key={idx} className="flex items-center gap-2 group cursor-default">
                <div className="w-8 h-8 rounded bg-white/10 group-hover:bg-dstl-accent/20 transition-colors"></div>
                <span className="text-lg font-bold text-slate-400 group-hover:text-white transition-colors">{partner}</span>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};