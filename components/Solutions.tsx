import React from 'react';
import { BarChart2, ShieldCheck, Brain, TrendingUp } from 'lucide-react';
import { Solution } from '../types';

const solutions: Solution[] = [
  {
    title: "Real-Time Analytics",
    description: "Instant access to actionable insights. We build dashboards and pipelines that let you see your business performance as it happens.",
    icon: BarChart2
  },
  {
    title: "Secure Data Infrastructure",
    description: "Robust, scalable, and compliant data architecture designed to protect your most valuable asset while ensuring high availability.",
    icon: ShieldCheck
  },
  {
    title: "AI & Machine Learning",
    description: "Predictive models and intelligent automation that drive efficiency and unlock new opportunities for growth and innovation.",
    icon: Brain
  },
  {
    title: "Inventory & Risk Optimization",
    description: "Advanced algorithms to minimize stockouts, reduce carrying costs, and identify operational risks before they impact your bottom line.",
    icon: TrendingUp
  }
];

export const Solutions: React.FC = () => {
  return (
    <section id="solutions" className="py-24 bg-gradient-to-b from-dstl-dark to-dstl-navy relative scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-dstl-accent font-bold tracking-wider uppercase text-sm">What We Do</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">Our Solutions</h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Comprehensive technology services designed to transform your raw data into your competitive advantage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((item, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-2xl bg-slate-900 border border-white/5 hover:border-dstl-accent/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(34,211,238,0.15)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-dstl-blue/10 flex items-center justify-center text-dstl-accent mb-6 group-hover:bg-dstl-accent group-hover:text-dstl-dark transition-all duration-300">
                  <item.icon size={28} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-dstl-accent transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};