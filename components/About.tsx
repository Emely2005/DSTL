import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-dstl-dark relative scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">About DSTL</h2>
          <div className="glass-card p-8 md:p-12 rounded-2xl relative overflow-hidden">
             <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-dstl-accent to-dstl-blue"></div>
             
             <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
               We are a <span className="text-dstl-accent font-semibold">Rwanda-based</span> data and analytics company providing secure infrastructure for inventory management, real-time analytics-based insights, and AI solutions. Our core purpose is to help organizations reduce costs, manage risk, and grow using data while making better, faster decisions. We bridge the gap between complex data and actionable strategy.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};