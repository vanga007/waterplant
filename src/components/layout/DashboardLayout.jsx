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
    <main className="min-h-screen bg-white flex flex-row">
      <div className=" flex-shrink-0 bg-white w-2/12 shadow-inner">
        <SideNavigation path={path} />
      </div>
      <div className="flex flex-col w-[82%]">
        <TopNavigationBar />
        <div className="p-4 flex-grow ">{children}</div>
      </div>
    </main>
  );
};

export default DashboardLayout;
