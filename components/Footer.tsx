import React from 'react';
import { Logo } from './Logo';
import { Linkedin, Twitter, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dstl-dark pt-16 pb-8 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2 space-y-4">
            <Logo />
            <p className="text-slate-400 text-sm max-w-xs leading-relaxed mt-4">
              Africa's most trusted data science partner. We empower organizations to make smarter decisions through secure, reliable, and intelligent data systems.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-dstl-accent hover:text-dstl-dark transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-dstl-accent hover:text-dstl-dark transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-dstl-accent hover:text-dstl-dark transition-all">
                <Facebook size={20} />
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