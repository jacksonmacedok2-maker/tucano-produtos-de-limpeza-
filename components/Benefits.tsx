
import React from 'react';
import { BENEFITS } from '../constants';

const Benefits: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {BENEFITS.map((benefit) => (
            <div 
              key={benefit.id} 
              className="benefit-card flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100 transition-all duration-300"
            >
              <div className="benefit-icon-container w-16 h-16 bg-tucano-blue/5 text-tucano-blue rounded-full flex items-center justify-center mb-4 transition-all duration-300">
                {benefit.icon}
              </div>
              <h3 className="font-bold text-slate-800 text-sm md:text-base leading-tight transition-colors duration-300">
                {benefit.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
