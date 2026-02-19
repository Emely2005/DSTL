import React from 'react';

// Using text placeholders styled as logos since we don't have real svg assets
const partners = [
  "New Technology Center Ltd", "Royal Grain Supply Ltd"
];

export const TrustedBy: React.FC = () => {
  const marqueePartners = [...partners, ...partners];

  return (
    <section className="py-10 bg-dstl-navy border-b border-white/5">
      <div className="container mx-auto px-6">
        <p className="text-center text-slate-500 text-sm font-medium uppercase tracking-wider mb-8">
          Trusted by forward-thinking organizations
        </p>
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500 trusted-marquee">
            {marqueePartners.map((partner, idx) => (
              <div key={idx} className="flex items-center gap-2 group cursor-default shrink-0">
                <div className="w-8 h-8 rounded bg-white/10 group-hover:bg-dstl-accent/20 transition-colors"></div>
                <span className="text-lg font-bold text-slate-400 group-hover:text-white transition-colors">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .trusted-marquee {
          animation: trusted-marquee-scroll 22s linear infinite;
        }
        @keyframes trusted-marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};
