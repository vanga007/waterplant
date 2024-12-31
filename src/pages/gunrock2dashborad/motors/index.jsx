import DashboardLayout from "@/components/layout/DashboardLayout";
import Motors from "@/components/motors";
import React from "react";

const index = () => {
  return (
    <DashboardLayout>
      <div>
        <Motors />
      </div>
    </DashboardLayout>
  );
};

export default index;
