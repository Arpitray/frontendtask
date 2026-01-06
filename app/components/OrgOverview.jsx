'use client';

import React from 'react';
import { Building2, Globe, User, Briefcase } from 'lucide-react';

const OrgOverview = ({ 
  orgName, 
  website, 
  privileges, 
  sector,
  about
}) => {
  return (
    <div className="space-y-6 animate-in fade-in duration-700">
      <div className="flex items-start gap-4 p-4 -ml-4">
        <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
          <Building2 size={20} strokeWidth={2} />
        </div>
        <div>
          <h2 className="text-sm font-bold text-slate-800">Current Organization</h2>
          <p className="text-xs text-slate-400">Your active workspace in DeepThought</p>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <div className="space-y-4">
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight mb-1">Organization Name</p>
                <p className="text-base font-bold text-slate-900">{orgName}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight mb-1">Website</p>
                <a href={website} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 font-medium flex items-center gap-2 hover:underline">
                  <Globe size={12} strokeWidth={2.5} />
                  {website}
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <div className="space-y-4">
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight mb-1">Your Privileges</p>
                <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full border border-emerald-100 italic">
                  <User size={12} strokeWidth={3} />
                  <span className="text-[11px] font-bold">{privileges}</span>
                </div>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight mb-1">Sector</p>
                <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-600 px-3 py-1 rounded-full border border-blue-100">
                  <Briefcase size={12} strokeWidth={3} />
                  <span className="text-[11px] font-bold">{sector}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">About</h3>
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm min-h-20">
          <p className="text-sm font-medium text-slate-600 leading-relaxed">{about}</p>
        </div>
      </div>
    </div>
  );
};

export default OrgOverview;
