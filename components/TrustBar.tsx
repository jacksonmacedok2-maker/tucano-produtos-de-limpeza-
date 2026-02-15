import React from 'react';
import { TRUST_SEALS } from '../constants';

const TrustBar: React.FC = () => {
  return (
    <div className="bg-white border-b border-slate-100 py-6 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-4">
          {TRUST_SEALS.map((seal, idx) => (
            <div key={idx} className="flex items-center gap-3 text-slate-400 hover:text-tucano-blue transition-colors group">
              <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-blue-50 transition-colors">
                {seal.icon}
              </div>
              <span className="text-xs font-black uppercase tracking-widest">{seal.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;