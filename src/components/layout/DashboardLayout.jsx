import React, { useEffect, useState } from "react";
import TopNavigationBar from "@/components/layout/TopNavigation";
import Sidebar from "@/components/layout/SideNavigation";
import { usePathname } from "next/navigation";

const DashboardLayout = ({ children }) => {
  const pathName = usePathname();
  const [path, setPath] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    setPath(pathName);
  }, [pathName]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <main className="min-h-screen bg-white ">
      <div className={`fixed inset-0 z-40 flex-shrink-0 bg-white w-[45%] sm:w-[16%] shadow-inner transition-transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0`}>
      <Sidebar path={path} />
      </div>
      <div className="flex flex-col  ">
        <TopNavigationBar toggleSidebar={toggleSidebar} />
        <div className="p-4 flex-grow sm:ml-[16%]">{children}</div>
      </div>
    </main>
  );
};

export default DashboardLayout;
