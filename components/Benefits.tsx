
import React from 'react';
import { BENEFITS } from '../constants';

const Benefits: React.FC = () => {
  return (
    <section className="py-12 sm:py-24 bg-slate-50 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-10">
          {BENEFITS.map((benefit) => (
            <div 
              key={benefit.id} 
              className="benefit-card bg-white flex flex-col items-center text-center p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2.5rem] shadow-sm border-slate-100"
            >
              <div className="benefit-icon-container w-14 h-14 sm:w-20 h-20 bg-slate-50 text-tucano-blue rounded-2xl sm:rounded-3xl flex items-center justify-center mb-4 sm:mb-6 transition-all duration-300">
                <div className="scale-75 sm:scale-100">{benefit.icon}</div>
              </div>
              <h3 className="font-bold text-slate-800 text-sm sm:text-lg leading-tight transition-colors duration-300">
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
