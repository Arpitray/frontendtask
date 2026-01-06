import DashboardHeader from "./components/DashboardHeader";
import OrgOverview from "./components/OrgOverview";

export default function Home() {
  const userData = {
    name: "Arpit",
    id: "2",
    email: "rayarpit72.com",
    bannerUrl: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=2544&auto=format&fit=crop",
    profileUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=shubham" 
  };

  const orgData = {
    orgName: "DeepThought",
    website: "https://deepthought.com",
    privileges: "Member",
    sector: "Education Technology",
    about: "DeepThought - Education Technology"
  };

  return (
    <main className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <DashboardHeader 
          name={userData.name}
          id={userData.id}
          email={userData.email}
          bannerUrl={userData.bannerUrl}
          profileUrl={userData.profileUrl}
        />

        <OrgOverview 
          orgName={orgData.orgName}
          website={orgData.website}
          privileges={orgData.privileges}
          sector={orgData.sector}
          about={orgData.about}
        />
      </div>
    </main>
  );
}
