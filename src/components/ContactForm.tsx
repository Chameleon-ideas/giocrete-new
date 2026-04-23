import * as React from 'react';
import { motion } from 'framer-motion';
import { HoverButton } from './HoverButton';

import { BorderRotate } from './BorderRotate';

export default function ContactForm({ confirmationMessage }: { confirmationMessage?: string }) {
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate submission for demo
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <BorderRotate 
        animationMode="stop-rotate-on-hover"
        className="p-12 text-center"
        backgroundColor="#121212"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-4xl mb-4 block">✓</span>
          <h3 className="text-2xl font-bold uppercase tracking-tighter mb-2">Message Received</h3>
          <p className="text-white/60 font-medium">We'll get back to you within 24 hours.</p>
        </motion.div>
      </BorderRotate>
    );
  }

  return (
    <BorderRotate 
      animationMode="auto-rotate"
      animationSpeed={6}
      className="p-8 md:p-10"
      backgroundColor="#0A0A0A"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-group">
            <label className="text-[10px] uppercase font-bold tracking-widest text-white/40 mb-2 block">Full Name</label>
            <input 
              required
              name="name"
              type="text" 
              placeholder="Name"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-accent outline-none transition-all"
            />
          </div>
          <div className="form-group">
            <label className="text-[10px] uppercase font-bold tracking-widest text-white/40 mb-2 block">Email Address</label>
            <input 
              required
              name="email"
              type="email" 
              placeholder="email@example.com"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-accent outline-none transition-all"
            />
          </div>
        </div>

        <div className="form-group">
          <label className="text-[10px] uppercase font-bold tracking-widest text-white/40 mb-2 block">Inquiry Type</label>
          <div className="relative">
            <select 
              name="type"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-accent outline-none transition-all appearance-none cursor-pointer"
            >
              <option value="Municipal Project" className="bg-charcoal">Municipal Project</option>
              <option value="Sewer / Watermain" className="bg-charcoal">Sewer / Watermain</option>
              <option value="Road Reconstruction" className="bg-charcoal">Road Reconstruction</option>
              <option value="General Inquiry" className="bg-charcoal">General Inquiry</option>
            </select>
            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label className="text-[10px] uppercase font-bold tracking-widest text-white/40 mb-2 block">Message</label>
          <textarea 
            required
            name="message"
            placeholder="Detailed inquiry..."
            rows={4}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-accent outline-none transition-all resize-none"
          />
        </div>

        <div className="pt-6">
          <HoverButton 
            type="submit"
            disabled={status === 'loading'}
            variant="primary"
            className="w-full !py-6 !font-bold !uppercase !tracking-[0.2em] rounded-full"
          >
            {status === 'loading' ? 'Sending...' : 'Send Inquiry →'}
          </HoverButton>
        </div>
      </form>
    </BorderRotate>
  );
}
