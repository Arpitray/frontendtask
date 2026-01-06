'use client';

import React from 'react';
import { MapPin } from 'lucide-react';

const InfoCard = ({ title, icon: Icon, items = [], emptyMessage = "No information available" }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col min-h-32">
      <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-5">{title}</h3>
      
      {items.length > 0 ? (
        <div className="space-y-4">
          {items.map((item, idx) => (
            <div key={idx} className="flex gap-3">
              <div className="mt-1 text-slate-900">
                {Icon ? <Icon size={16} strokeWidth={2.5} /> : <MapPin size={16} strokeWidth={2.5} />}
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">{item.label}</p>
                <p className="text-xs text-slate-400 font-medium leading-relaxed mt-0.5">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex-1 flex items-center">
          <p className="text-xs text-slate-400 font-medium italic">{emptyMessage}</p>
        </div>
      )}
    </div>
  );
};

export default InfoCard;
