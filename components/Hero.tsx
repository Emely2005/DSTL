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

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="space-y-8 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-dstl-accent text-xs font-semibold tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-dstl-accent animate-pulse"></span>
            Intelligence Meets Infrastructure
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Empowering <span className="text-gradient">Smarter Decisions</span> Through Data & AI
          </h1>
          
          <p className="text-lg text-slate-400 leading-relaxed">
            We are a Rwanda-based data and analytics company providing secure infrastructure for inventory management, real-time analytics-based insights, and AI solutions that help organizations reduce costs and manage risk.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#solutions" 
              onClick={(e) => handleScrollTo(e, 'solutions')}
              className="px-8 py-4 text-dstl-dark bg-dstl-accent hover:bg-cyan-300 font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] flex items-center justify-center gap-2 group cursor-pointer"
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
        </div>

        {/* Visual Content - Abstract Dashboard/Data Graphic */}
        <div className="relative hidden lg:block">
          <div className="relative w-full aspect-square max-w-[600px] mx-auto animate-float">
             {/* Central Hub */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-dstl-blue to-dstl-purple rounded-full blur-2xl opacity-40"></div>
            
             {/* Main Card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] glass-card rounded-2xl p-6 border-t border-l border-white/20 shadow-2xl transform rotate-[-2deg]">
              <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="text-xs text-slate-500 font-mono">DSTL_SYSTEM_MONITOR_V2.0</div>
              </div>
              
              <div className="space-y-4">
                {/* Simulated Chart */}
                <div className="flex items-end gap-2 h-32 px-2 pb-2 border-b border-white/10">
                   {[40, 70, 45, 90, 60, 80, 50, 95].map((h, i) => (
                     <div key={i} className="flex-1 bg-gradient-to-t from-dstl-blue/20 to-dstl-accent/60 rounded-t-sm relative group" style={{ height: `${h}%` }}>
                       <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-dstl-accent opacity-0 group-hover:opacity-100 transition-opacity">{h}%</div>
                     </div>
                   ))}
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                   <div className="p-3 bg-white/5 rounded-lg border border-white/5">
                      <div className="text-xs text-slate-400 mb-1">System Load</div>
                      <div className="text-xl font-bold text-white">98.2%</div>
                      <div className="w-full bg-white/10 h-1 mt-2 rounded-full overflow-hidden">
                        <div className="bg-dstl-accent h-full w-[98%]"></div>
                      </div>
                   </div>
                   <div className="p-3 bg-white/5 rounded-lg border border-white/5">
                      <div className="text-xs text-slate-400 mb-1">Active Nodes</div>
                      <div className="text-xl font-bold text-white">4,281</div>
                      <div className="flex gap-1 mt-2">
                         <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                         <span className="text-[10px] text-green-400">Operational</span>
                      </div>
                   </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-10 right-0 glass-card p-3 rounded-lg flex items-center gap-3 animate-pulse-slow">
              <div className="w-8 h-8 rounded bg-dstl-accent/20 flex items-center justify-center text-dstl-accent">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M2 12h20"/></svg>
              </div>
              <div>
                <div className="text-xs text-slate-400">Inventory Risk</div>
                <div className="text-sm font-bold text-white">Minimized</div>
              </div>
            </div>

             <div className="absolute bottom-20 -left-4 glass-card p-3 rounded-lg flex items-center gap-3 animate-pulse-slow" style={{ animationDelay: '1s' }}>
              <div className="w-8 h-8 rounded bg-dstl-blue/20 flex items-center justify-center text-dstl-blue">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              </div>
              <div>
                <div className="text-xs text-slate-400">Real-time Data</div>
                <div className="text-sm font-bold text-white">Active Stream</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};