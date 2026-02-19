import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-dstl-dark relative scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">About DSTL</h2>
          <div className="glass-card p-8 md:p-12 rounded-2xl relative overflow-hidden">
             <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-dstl-accent to-dstl-blue"></div>
             
             <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-6">
               We are a <span className="text-dstl-accent font-semibold">Rwanda-based data analytics company</span> providing secure infrastructure for data recording, intelligent inventory management systems, real-time analytics, and AI-powered solutions.
             </p>

             <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-6">
               Our purpose is to help organizations easily record and transform complex data into clear, actionable insights that support informed and timely decision-making. Through interactive dashboards, automated reporting, and predictive analytics, we provide business leaders with real-time visibility into operations, inventory movement, sales performance, and key performance indicators.
             </p>

             <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
               By enabling businesses to rely on accurate, structured information rather than assumptions, we enhance operational efficiency, strengthen planning accuracy, and support smarter, faster strategic execution.
             </p>

          </div>
        </div>
      </div>
    </section>
  );
};
