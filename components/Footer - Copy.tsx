import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dstl-dark pt-16 pb-8 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2 space-y-4">
            <div className="inline-block rounded-xl border border-dstl-accent/25 bg-dstl-navy/60 px-4 py-3 shadow-[0_0_18px_rgba(98,227,245,0.2)]">
              <p className="text-xl md:text-2xl font-extrabold tracking-wide text-white leading-tight">
                DSTL
              </p>
              <p className="text-sm md:text-base tracking-[0.18em] uppercase text-dstl-cyan mt-1">
                Data Space Technologies Ltd
              </p>
            </div>
            <p className="text-slate-400 text-sm max-w-xs leading-relaxed mt-4">
              Africa's most trusted data science partner. We empower organizations to make smarter decisions through secure, reliable, and intelligent data systems.
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="https://www.linkedin.com/company/data-space-technologies-limited/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DSTL LinkedIn"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-dstl-accent hover:text-dstl-dark transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://wa.me/250798802169"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DSTL WhatsApp"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-dstl-accent hover:text-dstl-dark transition-all"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.52 3.48A11.94 11.94 0 0 0 12.01 0C5.39 0 .02 5.37.02 11.99c0 2.11.55 4.18 1.6 6.01L0 24l6.17-1.62a11.95 11.95 0 0 0 5.84 1.49h.01c6.62 0 11.99-5.38 11.99-12a11.9 11.9 0 0 0-3.49-8.39ZM12.02 21.85h-.01a9.9 9.9 0 0 1-5.05-1.39l-.36-.22-3.66.96.98-3.57-.24-.37a9.92 9.92 0 0 1-1.53-5.27c0-5.49 4.47-9.95 9.97-9.95a9.9 9.9 0 0 1 7.03 2.91 9.88 9.88 0 0 1 2.91 7.03c0 5.49-4.47 9.95-9.96 9.95Zm5.46-7.45c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.37-1.46a8.96 8.96 0 0 1-1.65-2.05c-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.08 4.48.71.3 1.27.48 1.71.62.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/data_space_technologies?igsh=NHZxN2R4cDY2cm44"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DSTL Instagram"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-dstl-accent hover:text-dstl-dark transition-all"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#home" className="hover:text-dstl-accent transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-dstl-accent transition-colors">About Us</a></li>
              <li><a href="#solutions" className="hover:text-dstl-accent transition-colors">Solutions</a></li>
              <li><a href="#mission" className="hover:text-dstl-accent transition-colors">Mission & Vision</a></li>
              <li><a href="#team" className="hover:text-dstl-accent transition-colors">Board Members</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-dstl-accent transition-colors">Real-Time Analytics</a></li>
              <li><a href="#" className="hover:text-dstl-accent transition-colors">Secure Infrastructure</a></li>
              <li><a href="#" className="hover:text-dstl-accent transition-colors">AI & Machine Learning</a></li>
              <li><a href="#" className="hover:text-dstl-accent transition-colors">Risk Optimization</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-sm">
            &copy; {new Date().getFullYear()} Data Space Technologies Limited (DSTL). All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-600">
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
