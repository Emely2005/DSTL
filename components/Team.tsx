import React from 'react';
import { TeamMember } from '../types';

// Placeholder images using reliable external placeholder service
const team: TeamMember[] = [
  { name: "Executive Leader", role: "Chief Executive Officer", imageUrl: "https://picsum.photos/seed/ceo1/400/400?grayscale" },
  { name: "Financial Director", role: "Chief Financial Officer", imageUrl: "https://picsum.photos/seed/cfo2/400/400?grayscale" },
  { name: "Operations Lead", role: "Chief Operating Officer", imageUrl: "https://picsum.photos/seed/coo3/400/400?grayscale" },
  { name: "Tech Innovator", role: "Chief Technology Officer", imageUrl: "https://picsum.photos/seed/cto4/400/400?grayscale" },
];

export const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-dstl-dark scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Board Members</h2>
          <p className="text-slate-400 mt-4">Leadership driving innovation and integrity.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="group bg-slate-900 rounded-xl overflow-hidden border border-white/5 hover:border-dstl-accent/50 transition-all">
              <div className="aspect-square overflow-hidden relative">
                <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              </div>
              <div className="p-6 relative">
                <h3 className="text-lg font-bold text-white group-hover:text-dstl-accent transition-colors">{member.name}</h3>
                <p className="text-dstl-blue text-sm font-medium uppercase tracking-wide mt-1">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};