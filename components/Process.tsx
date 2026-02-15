import React from 'react';
import { Database, Server, Lightbulb, Target } from 'lucide-react';
import { ProcessStep } from '../types';

const steps: ProcessStep[] = [
  {
    stepNumber: "01",
    title: "Data Collection & Integration",
    description: "We aggregate data from disparate sources into a unified, clean ecosystem."
  },
  {
    stepNumber: "02",
    title: "Processing & Analysis",
    description: "Our engines transform raw data into structured information ready for analysis."
  },
  {
    stepNumber: "03",
    title: "Insight Generation",
    description: "We apply statistical models and AI to uncover hidden patterns and trends."
  },
  {
    stepNumber: "04",
    title: "Decision Support",
    description: "Delivery of clear, actionable recommendations to leadership."
  }
];

const icons = [Database, Server, Lightbulb, Target];

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-dstl-dark overflow-hidden scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
           <span className="text-dstl-accent font-bold tracking-wider uppercase text-sm">Workflow</span>
           <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">How We Work</h2>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-dstl-blue/20 via-dstl-accent/50 to-dstl-blue/20 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = icons[index];
              return (
                <div key={index} className="flex flex-col items-center text-center group">
                  <div className="relative mb-1">
                    <div className="w-16 h-16 rounded-full bg-dstl-navy border-2 border-dstl-accent text-dstl-accent flex items-center justify-center text-2xl font-bold relative z-10 group-hover:bg-dstl-accent group-hover:text-dstl-navy transition-colors duration-300">
                      <Icon size={24} />
                    </div>
                    {/* Pulse Effect */}
                    <div className="absolute inset-0 rounded-full bg-dstl-accent/20 animate-ping opacity-0 group-hover:opacity-30"></div>
                  </div>
                  
                  <div className="text-2xl leading-none font-bold tracking-widest text-dstl-accent/85 uppercase mt-2 mb-3 select-none pointer-events-none">
                    {step.stepNumber}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-slate-400 text-sm">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
