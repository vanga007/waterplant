import React, { useEffect, useState } from "react";
import TopNavigationBar from "@/components/layout/TopNavigation";
import SideNavigation from "@/components/layout/SideNavigation";
import { usePathname } from "next/navigation";

const DashboardLayout = ({ children }) => {
  const pathName = usePathname();
  const [path, setPath] = useState("");

  useEffect(() => {
    setPath(pathName);
  }, [pathName]);

  return (
    <main className="min-h-screen bg-white flex flex-col lg:flex-row">
      <div className="w-full lg:w-2/12 bg-white shadow-md">
        <SideNavigation />
      </div>
      <div className="flex flex-col w-full lg:w-10/12">
        <TopNavigationBar />
        <div className="p-4 flex-grow bg-gray-100">{children}</div>
      </div>
    </main>
  );
};

export default DashboardLayout;
