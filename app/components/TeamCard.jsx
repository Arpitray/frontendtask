'use client';

import React from 'react';
import { Mail, Phone } from 'lucide-react';

const TeamCard = ({ name, role, email, phone }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm max-w-sm hover:border-blue-200 transition-colors group">
      <div className="flex items-center gap-3 mb-6">
        <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{name}</h3>
        <span className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider">
          {role}
        </span>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center gap-3 text-slate-400">
          <Mail size={14} className="opacity-60" />
          <span className="text-xs font-semibold">{email}</span>
        </div>
        <div className="flex items-center gap-3 text-slate-400">
          <Phone size={14} className="opacity-60" />
          <span className="text-xs font-semibold">{phone}</span>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
