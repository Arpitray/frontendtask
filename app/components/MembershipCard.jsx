'use client';

import React from 'react';
import { Beaker, Check } from 'lucide-react';

const MembershipCard = ({ type = "member", joinedDate = "January 3, 2026", id = "2", status = "active" }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm max-w-sm hover:border-blue-200 transition-all duration-300 group">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-blue-50 p-2 rounded-lg text-blue-600 group-hover:scale-110 transition-transform">
          <Beaker size={20} strokeWidth={2} />
        </div>
        <h3 className="text-base font-bold text-slate-900 capitalize group-hover:text-blue-600 transition-colors">{type}</h3>
      </div>
      
      <div className="space-y-6">
        <div className="bg-slate-50 border border-slate-100 rounded-xl p-4">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight mb-2">Membership Type</p>
          <p className="text-sm font-semibold text-slate-600 capitalize">{type}</p>
        </div>

        <div className="space-y-1">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">Joined</p>
          <p className="text-sm font-semibold text-slate-600">{joinedDate}</p>
        </div>

        <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs font-bold text-slate-400">ID: {id}</span>
          <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-600 px-2.5 py-1 rounded-lg border border-emerald-100">
            <Check size={12} strokeWidth={3} />
            <span className="text-[10px] font-black uppercase tracking-wider">{status}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipCard;
