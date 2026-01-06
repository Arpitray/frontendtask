'use client';

import React from 'react';

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
        className="h-44 w-full bg-cover bg-center grayscale-10 hover:grayscale-0 transition-all duration-500"
        style={{ 
          backgroundImage: `url(${bannerUrl})`,
          backgroundPosition: 'center 35%' 
        }}
      />
      
      <div className="px-8 pb-6 relative">
        <div className="flex flex-col md:flex-row md:items-end -mt-14 md:-mt-16 gap-6">
          
          
          <div className="relative group">
            <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden bg-white shadow-md ring-1 ring-blue-500/20 group-hover:scale-[1.02] transition-transform">
              <img 
                src={profileUrl} 
                alt={name} 
                className="w-full h-full object-cover"
              />
            </div>
            
         
            <button className="absolute top-12 -right-2 bg-blue-600 p-2 rounded-full border-2 border-white text-white shadow-lg hover:bg-blue-700 hover:rotate-12 transition-all cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/>
              </svg>
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
               <svg className="w-3.5 h-3.5 mr-1.5 opacity-70" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
               </svg>
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
