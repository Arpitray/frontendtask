'use client';

import React from 'react';
import { Globe, Building2, User, Check } from 'lucide-react';

const OrgCard = ({ 
  name = "DeepThought", 
  isCurrent = true, 
  sector = "Education Technology", 
  role = "Member", 
  description = "DeepThought - Education Technology",
  website = "https://deepthought.com",
  activeMemberships = 1,
  memberships = ["member"]
}) => {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:border-blue-200 transition-all duration-300">
      <div className="flex items-center gap-3 mb-2">
        <h3 className="text-xl font-bold text-slate-900">{name}</h3>
        {isCurrent && (
          <div className="flex items-center gap-1 bg-blue-50 text-blue-600 px-3 py-1 rounded-lg border border-blue-100">
            <Check size={14} strokeWidth={3} />
            <span className="text-xs font-bold">Current</span>
          </div>
        )}
      </div>

      <div className="flex items-center gap-3 mb-6">
        <span className="text-sm font-medium text-slate-500">{sector}</span>
        <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full border border-emerald-100 italic">
          <User size={12} strokeWidth={3} />
          <span className="text-[11px] font-bold">{role}</span>
        </div>
      </div>

      <div className="bg-slate-50/50 border border-slate-100 rounded-xl p-4 mb-6">
        <p className="text-sm font-medium text-slate-600">{description}</p>
      </div>

      <div className="flex items-center gap-6 mb-8">
        <a href={website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline">
          <Globe size={14} strokeWidth={2.5} />
          <span className="text-xs font-bold">{website}</span>
        </a>
        <div className="flex items-center gap-2 text-slate-400 font-bold">
          <Building2 size={14} strokeWidth={2.5} className="opacity-70" />
          <span className="text-xs">{activeMemberships} Active Membership</span>
        </div>
      </div>

      <div className="pt-6 border-t border-slate-50">
        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Your Memberships</h4>
        <div className="flex flex-wrap gap-2">
          {memberships.map((m, i) => (
            <span key={i} className="bg-slate-100 text-slate-500 px-3 py-1.5 rounded-lg text-xs font-bold capitalize">
              {m}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrgCard;
