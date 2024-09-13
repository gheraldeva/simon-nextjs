import { SidebarSiswa } from "@/components/SideBar";
import Profile from "@/components/siswa/Profile";
import WhiteTemplate from "@/components/WhiteTemplate";
import React from "react";

const pageProfile = () => {
  return (
    <div className="flex h-screen ">
      <SidebarSiswa className="flex-shrink-0 w-64 h-full" />
      <div className="-mt-5.4 flex-1 overflow-hidden">
        <WhiteTemplate>
          <Profile />
        </WhiteTemplate>
      </div>
    </div>
  );
};

export default pageProfile;
