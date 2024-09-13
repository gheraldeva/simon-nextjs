import { SidebarSiswa } from "@/components/SideBar";
import Profile from "@/components/siswa/Profile";
import WhiteTemplate from "@/components/WhiteTemplate";
import React from "react";

const pageProfile = () => {
  return (
    <div className="h-screen">
      <SidebarSiswa className="h-[100vh]" />
      <div className="-mt-5.4">
        <WhiteTemplate>
          <Profile />
        </WhiteTemplate>
      </div>
    </div>
  );
};

export default pageProfile;
