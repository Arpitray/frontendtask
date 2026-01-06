import DashboardHeader from "./components/DashboardHeader";

export default function Home() {
  const userData = {
    name: "shubhamdubey23042004",
    id: "2",
    email: "shubhamdubey23042004@gmail.com",
    bannerUrl: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=2544&auto=format&fit=crop",
    profileUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=shubham" // Using a placeholder avatar service
  };

  return (
    <main className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <DashboardHeader 
          name={userData.name}
          id={userData.id}
          email={userData.email}
          bannerUrl={userData.bannerUrl}
          profileUrl={userData.profileUrl}
        />
      </div>
    </main>
  );
}
