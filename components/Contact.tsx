import React from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for contacting DSTL. We will get back to you shortly.");
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-dstl-navy to-dstl-dark scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div>
            <span className="text-dstl-accent font-bold tracking-wider uppercase text-sm">Get in Touch</span>
            <h2 className="text-4xl font-bold text-white mt-3 mb-6">Let's Transform Your Data Strategy</h2>
            <p className="text-slate-400 text-lg mb-12">
              Ready to reduce costs and manage risk with AI-driven insights? Contact our team in Rwanda today.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-dstl-blue/10 rounded-lg text-dstl-accent">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Visit Us</h3>
                  <p className="text-slate-400">Kigali, Rwanda</p>
                  <p className="text-slate-500 text-sm">HQ Office</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-dstl-blue/10 rounded-lg text-dstl-accent">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Email Us</h3>
                  <p className="text-slate-400">info@dstl.rw</p>
                  <p className="text-slate-500 text-sm">For general inquiries</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-dstl-blue/10 rounded-lg text-dstl-accent">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Call Us</h3>
                  <p className="text-slate-400">+250 788 123 456</p>
                  <p className="text-slate-500 text-sm">Mon-Fri from 8am to 5pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="glass-card p-8 rounded-2xl border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-300">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-dstl-accent focus:ring-1 focus:ring-dstl-accent transition-all"
                    placeholder="John Doe"
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-300">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-dstl-accent focus:ring-1 focus:ring-dstl-accent transition-all"
                    placeholder="john@company.com"
                    required 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium text-slate-300">Company Name</label>
                <input 
                  type="text" 
                  id="company"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-dstl-accent focus:ring-1 focus:ring-dstl-accent transition-all"
                  placeholder="Your Organization Ltd."
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                <textarea 
                  id="message"
                  rows={4}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-dstl-accent focus:ring-1 focus:ring-dstl-accent transition-all"
                  placeholder="Tell us about your data needs..."
                  required
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-dstl-accent hover:bg-cyan-300 text-dstl-dark font-bold rounded-lg transition-all flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};