'use client';

import React from 'react';
import { Building2, Globe, User, Briefcase, History, TrendingUp, Rocket, Star } from 'lucide-react';

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

      <div className="space-y-4 pt-4">
        <div className="flex items-center justify-between px-1">
          <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Growth Trajectory</h3>
          <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-2 py-0.5 rounded border border-blue-100 italic flex items-center gap-1 group">
            <Star size={10} className="fill-blue-600 animate-pulse" />
            High Potential
          </span>
        </div>
        
        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm relative overflow-hidden group">
      
          <div className="absolute top-1/2 left-20 right-20 h-0.5 bg-slate-100 -translate-y-12 hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            
          
            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
              <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-red-50 group-hover:text-red-500 transition-colors duration-500">
                <History size={24} />
              </div>
              <div>
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-800 mb-1">Before Us</h4>
                <p className="text-[11px] font-semibold text-slate-400 leading-tight">Fragmented data, manual processes, and limited visibility.</p>
              </div>
            </div>

            
            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
              <div className="w-12 h-12 bg-blue-600 border border-blue-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20 animate-bounce-slow">
                <TrendingUp size={24} />
              </div>
              <div>
                <h4 className="text-xs font-black uppercase tracking-widest text-blue-600 mb-1">Today</h4>
                <p className="text-[11px] font-bold text-slate-600 leading-tight">Unified workspace, automated workflows, and real-time insights.</p>
              </div>
            </div>

            
            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
              <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-emerald-50 group-hover:text-emerald-500 transition-colors duration-500">
                <Rocket size={24} />
              </div>
              <div>
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-800 mb-1">The Future</h4>
                <p className="text-[11px] font-semibold text-slate-400 leading-tight">AI-driven scaling, ecosystem exponential growth.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default OrgOverview;
