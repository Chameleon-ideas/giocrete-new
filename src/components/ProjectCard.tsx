import * as React from 'react';
import { motion } from 'framer-motion';

interface Props {
  title: string;
  municipality: string;
  image: string;
  scope?: string;
  href: string;
}

const ProjectCard: React.FC<Props> = ({ title, municipality, image, scope, href }) => {
  return (
    <motion.a 
      href={href}
      className="relative aspect-[4/5] overflow-hidden group block bg-[#121212]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {image ? (
        <img 
          src={image} 
          alt={title} 
          loading="lazy"
          decoding="async"
          width={800}
          height={1000}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0"
        />

      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-900 border border-white/5 opacity-40">
           <span className="text-white/20 text-3xl font-bold uppercase tracking-tighter opacity-10 rotate-[-12deg] select-none">GioCrete Archive</span>
        </div>
      )}

      
      {/* Industrial Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-500" />

      {/* Static Info (Bottom) */}
      <div className="absolute bottom-10 left-10 right-10 text-[#F5F5F0] z-10">
         <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF9F1C] block mb-2">{municipality}</span>
         <h4 className="text-3xl font-bold uppercase tracking-[-0.02em] leading-[0.9] editorial-title group-hover:text-[#FF9F1C] transition-colors duration-300 drop-shadow-md">
           {title}
         </h4>
         
         <div className="h-[1px] w-0 bg-[#FF9F1C] mt-6 group-hover:w-full transition-all duration-700 shadow-[0_0_15px_rgba(255,159,28,0.3)]" />
         
         {scope && (
           <p className="text-[10px] font-medium uppercase tracking-widest text-[#F5F5F0]/40 mt-4 h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
             Scope: {scope}
           </p>
         )}
      </div>

      {/* Decorative Arrow */}
      <div className="absolute top-10 right-10 text-[#FF9F1C] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M7 17L17 7M17 7H7M17 7V17" />
        </svg>
      </div>
    </motion.a>
  );
};

export default ProjectCard;
