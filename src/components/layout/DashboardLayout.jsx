import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import TopNavigationBar from "@/components/layout/TopNavigation";
import SideNavigation from "@/components/layout/SideNavigation";
import Loader from "@/components/layout/loader/Loader";
import { usePathname } from "next/navigation";

const DashboardLayout = ({ children }) => {
  const router = useRouter();
  const pathName = usePathname();
  
  const [path, setPath] = useState("");

  useEffect(() => {
    setPath(pathName);
  }, [pathName]);

  return (
    <main className="min-h-screen bg-white flex">
      {/* Optional loader */}
      {/* {loginStatus === "loading" && <Loader />} */}

      <div className="flex flex-col lg:flex-row w-full">
        {/* Sidebar */}
        <div className="w-full lg:w-2/12 bg-white shadow-md">
          <SideNavigation />
        </div>

        {/* Main content area */}
        <div className="flex flex-col w-full lg:w-10/12">
          <TopNavigationBar />
          <div className="p-4 flex-grow bg-gray-100">{children}</div>
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
