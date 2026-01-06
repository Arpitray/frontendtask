'use client';

import DashboardHeader from "./components/DashboardHeader";
import OrgOverview from "./components/OrgOverview";
import TeamCard from "./components/TeamCard";
import InfoCard from "./components/InfoCard";
import MembershipCard from "./components/MembershipCard";
import OrgCard from "./components/OrgCard";
import { Building2, LayoutGrid, Building } from "lucide-react";

export default function Home() {
  const userData = {
    name: "Arpit",
    id: "2",
    email: "rayarpit72.com",
    bannerUrl: "https://plus.unsplash.com/premium_photo-1680883415316-1a0d97b96478?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profileUrl: "https://images.unsplash.com/photo-1752323365464-192aff757dd9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  };

  const orgData = {
    orgName: "DeepThought",
    website: "https://deepthought.com",
    privileges: "Member",
    sector: "Education Technology",
    about: "DeepThought - Education Technology"
  };

  const teamMembers = [
    {
      name: "Arpit Ray",
      role: "CTO",
      email: "arpitray.me",
      phone: "8412954339"
    }
  ];

  const locations = [
    {
      label: "Hyderabad, TG",
      value: "Street No. 2, Hyderabad, TG 500007, India"
    }
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] p-4 md:p-8">
      <div className="max-w-6xl mx-auto bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="p-0 space-y-0">
          <DashboardHeader 
            name={userData.name}
            id={userData.id}
            email={userData.email}
            bannerUrl={userData.bannerUrl}
            profileUrl={userData.profileUrl}
          />
          
          <div className="px-8 pb-12 space-y-12">
            <OrgOverview 
              orgName={orgData.orgName}
              website={orgData.website}
              privileges={orgData.privileges}
              sector={orgData.sector}
              about={orgData.about}
            />

            <section className="space-y-4">
              <h2 className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-1">Leadership Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {teamMembers.map((member, idx) => (
                  <TeamCard key={idx} {...member} />
                ))}
              </div>
            </section>

           

            <section className="space-y-4">
              <h2 className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-1">Locations & Contact</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <InfoCard 
                  title="Office Locations"
                  icon={Building2}
                  items={locations}
                />
                <InfoCard 
                  title="Email Addresses"
                  emptyMessage="No email addresses available"
                />
                <InfoCard 
                  title="Phone Numbers"
                  emptyMessage="No phone numbers available"
                />
              </div>
            </section>
             <section className="space-y-6">
              <div className="flex items-start gap-4 p-4 -ml-4">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                  <LayoutGrid size={20} strokeWidth={2} />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-slate-800">Your Memberships</h2>
                  <p className="text-xs text-slate-400">You have 1 active membership</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <MembershipCard 
                  type="member" 
                  joinedDate="January 3, 2026" 
                  id="2" 
                  status="active" 
                />
              </div>
            </section>

        
            <section className="space-y-6">
              <div className="flex items-start gap-4 p-4 -ml-4">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                  <Building size={20} strokeWidth={2} />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-slate-800">All Organizations</h2>
                  <p className="text-xs text-slate-400">You are a member of 1 organization</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-6">
                <OrgCard 
                  name="DeepThought"
                  isCurrent={true}
                  sector="Education Technology"
                  role="Member"
                  description="DeepThought - Education Technology"
                  website="https://deepthought.com"
                  activeMemberships={1}
                  memberships={["member"]}
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
