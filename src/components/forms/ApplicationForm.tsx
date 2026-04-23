import React, { useState } from 'react';
import { motion } from 'framer-motion';

const positions = [
  "Labourer",
  "Equipment Operator",
  "Pipe Layer",
  "Foreman",
  "Office & Admin"
];

const ApplicationForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate submission
    setTimeout(() => setStatus('success'), 1500);
  };

  if (status === 'success') {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-accent p-12 text-charcoal text-center"
      >
        <h3 className="text-3xl font-bold uppercase tracking-tighter mb-4 text-charcoal">Application Received</h3>
        <p className="text-charcoal/80 font-medium">We prefer to connect by phone — expect a call from our team within 24 hours.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="form-group">
          <label className="text-[10px] uppercase font-bold tracking-widest text-concrete/40 mb-2 block">Full Name</label>
          <input 
            required
            type="text" 
            placeholder="John Doe"
            className="w-full bg-transparent border-b border-concrete/20 py-4 text-concrete focus:border-accent outline-none transition-colors"
          />
        </div>
        <div className="form-group">
          <label className="text-[10px] uppercase font-bold tracking-widest text-concrete/40 mb-2 block">Phone Number</label>
          <input 
            required
            type="tel" 
            placeholder="416-000-0000"
            className="w-full bg-transparent border-b border-concrete/20 py-4 text-concrete focus:border-accent outline-none transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="form-group">
          <label className="text-[10px] uppercase font-bold tracking-widest text-concrete/40 mb-2 block">Email Address</label>
          <input 
            required
            type="email" 
            placeholder="john@example.com"
            className="w-full bg-transparent border-b border-concrete/20 py-4 text-concrete focus:border-accent outline-none transition-colors"
          />
        </div>
        <div className="form-group">
          <label className="text-[10px] uppercase font-bold tracking-widest text-concrete/40 mb-2 block">Desired Position</label>
          <select 
            required
            className="w-full bg-charcoal border-b border-concrete/20 py-4 text-concrete focus:border-accent outline-none transition-colors appearance-none cursor-pointer"
          >
            <option value="" disabled selected>Select a position</option>
            {positions.map(pos => (
              <option key={pos} value={pos}>{pos}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-group">
        <label className="text-[10px] uppercase font-bold tracking-widest text-concrete/40 mb-2 block">Resume Upload (Link or Note)</label>
        <input 
          type="text" 
          placeholder="Link to LinkedIn or Dropbox"
          className="w-full bg-transparent border-b border-concrete/20 py-4 text-concrete focus:border-accent outline-none transition-colors"
        />
      </div>

      <div className="form-group">
        <label className="text-[10px] uppercase font-bold tracking-widest text-concrete/40 mb-2 block">Additional Info</label>
        <textarea 
          placeholder="Tell us about your experience..."
          rows={3}
          className="w-full bg-transparent border-b border-concrete/20 py-4 text-concrete focus:border-accent outline-none transition-colors resize-none"
        />
      </div>

      <div className="pt-6">
        <button 
          disabled={status === 'submitting'}
          className="w-full bg-accent text-charcoal font-bold uppercase tracking-[0.2em] py-6 hover:bg-white transition-colors disabled:opacity-50"
        >
          {status === 'submitting' ? 'Submitting...' : 'Submit Application'}
        </button>
        <p className="text-[10px] uppercase tracking-widest text-concrete/30 text-center mt-6">
           Note: We prefer to connect by phone — expect a call within 24 hours
        </p>
      </div>
    </form>
  );
};

export default ApplicationForm;
