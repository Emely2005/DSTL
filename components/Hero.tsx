import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-dstl-dark">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-dstl-blue/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-dstl-purple/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-dstl-accent text-xs font-semibold tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-dstl-accent animate-pulse"></span>
            Intelligence Meets Infrastructure
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Empowering <span className="text-gradient">Smarter Decisions</span> Through Data & AI
          </h1>
          
          <p className="text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
            We are a Rwanda-based data and analytics company providing secure infrastructure for inventory management, real-time analytics-based insights, and AI solutions that empower organizations to make data-driven decisions, and improve their operational efficiency.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#solutions" 
              onClick={(e) => handleScrollTo(e, 'solutions')}
              className="px-8 py-4 text-dstl-dark bg-dstl-accent hover:bg-dstl-teal font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(98,227,245,0.3)] flex items-center justify-center gap-2 group cursor-pointer"
            >
              Explore Solutions
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleScrollTo(e, 'contact')}
              className="px-8 py-4 text-white bg-transparent border border-white/20 hover:bg-white/5 font-semibold rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              Contact Us
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </a>
          </div>

          <div className="relative max-w-3xl mx-auto mt-12">
            <div className="absolute inset-0 bg-gradient-to-r from-dstl-blue/10 via-dstl-accent/20 to-dstl-teal/10 blur-3xl rounded-full"></div>
            <div className="relative glass-card rounded-2xl border border-white/10 px-6 py-8 md:px-10">
              <p className="text-dstl-accent font-semibold tracking-[0.2em] uppercase text-xs md:text-sm">
                Trusted Data Infrastructure
              </p>
              <p className="text-white text-xl md:text-2xl font-semibold mt-3">
                Secure systems. Actionable intelligence. Faster decisions.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs md:text-sm bg-dstl-blue/20 text-dstl-cyan border border-dstl-cyan/30">Real-Time Analytics</span>
                <span className="px-3 py-1 rounded-full text-xs md:text-sm bg-dstl-blue/20 text-dstl-cyan border border-dstl-cyan/30">Data-Driven Insights</span>
                <span className="px-3 py-1 rounded-full text-xs md:text-sm bg-dstl-blue/20 text-dstl-cyan border border-dstl-cyan/30">Stock Management</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
