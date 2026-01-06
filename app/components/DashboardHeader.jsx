'use client';

import React from 'react';
import { Pencil, Mail } from 'lucide-react';

const DashboardHeader = ({ 
  bannerUrl = "/placeholder-banner.jpg", 
  profileUrl = "/placeholder-profile.jpg", 
  name = "User Name", 
  id = "1", 
  email = "user@example.com" 
}) => {
 
  const btnBase = "px-5 py-2 rounded-lg font-bold text-xs transition-all duration-200 active:scale-95 whitespace-nowrap shadow-sm";

  return (
    <div className="w-full bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm font-sans mb-8">
      
      <div 
        className="h-44 w-full bg-cover bg-center grayscale-10 "
        style={{ 
          backgroundImage: `url(${bannerUrl})`,
          backgroundPosition: 'center' 
        }}
      />
      
      <div className="px-8 pb-6 relative">
        <div className="flex flex-col md:flex-row md:items-end -mt-14 md:-mt-16 gap-6">
          
          
          <div className="relative group">
            <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden bg-white shadow-md ring-1 ring-blue-500/20 ">
              <img 
                src={profileUrl} 
                alt={name} 
                className="w-full h-full object-cover"
              />
            </div>
            
         
            <button className="absolute top-12 -right-2 bg-blue-600 p-2 rounded-full border-2 border-white text-white shadow-lg  cursor-pointer text-xs">
              <Pencil size={12} strokeWidth={3} />
            </button>
          </div>

   
          <div className="flex-1 min-w-0 pb-1 pt-2">
            <div className="flex items-center flex-wrap gap-2">
              <h1 className="text-xl font-bold text-slate-900 tracking-tight">{name}</h1>
              <div className="bg-slate-100 px-2.5 py-0.5 rounded-full flex items-center border border-slate-200/50">
                 <span className="text-[10px] text-slate-400 font-black mr-1">#</span>
                 <span className="text-xs text-slate-500 font-bold">{id}</span>
              </div>
            </div>
            
            <div className="flex items-center mt-1 text-slate-400">
               <Mail size={14} strokeWidth={2.5} className="mr-1.5 opacity-70" />
               <span className="text-xs font-semibold tracking-tight">{email}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 pb-1">
            <button className={`${btnBase} bg-blue-600 text-white hover:bg-blue-700 hover:shadow-blue-200`}>
              View Plans
            </button>
            <button className={`${btnBase} bg-white text-blue-600 border border-blue-600 hover:bg-blue-50`}>
              View Reports
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
