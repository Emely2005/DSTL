import React from 'react';
import { Target, Eye } from 'lucide-react';

export const MissionVision: React.FC = () => {
  return (
    <section id="mission" className="py-24 bg-gradient-to-r from-dstl-navy to-dstl-dark scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Mission Card */}
          <div className="glass-card p-10 rounded-2xl border-l-4 border-l-dstl-accent hover:bg-white/5 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-lg bg-dstl-accent/10 text-dstl-accent">
                <Target size={32} />
              </div>
              <h2 className="text-2xl font-bold text-white">Our Mission</h2>
            </div>
            <p className="text-slate-300 text-lg leading-relaxed">
              Providing secure data infrastructure, analytics, and AI solutions that help organizations grow and perform outstanding.
            </p>
          </div>

          {/* Vision Card */}
          <div className="glass-card p-10 rounded-2xl border-l-4 border-l-dstl-blue hover:bg-white/5 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-lg bg-dstl-blue/10 text-dstl-blue">
                <Eye size={32} />
              </div>
              <h2 className="text-2xl font-bold text-white">Our Vision</h2>
            </div>
            <p className="text-slate-300 text-lg leading-relaxed">
              To become Africa’s most trusted data science and technology partner, empowering organizations to make smarter decisions through secure, reliable, and intelligent data systems.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};