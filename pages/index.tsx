import { useState } from "react";
import LeftMenuSideBarDesktop from "../components/LeftMenuSideBarDesktop";
import AdminBody from "../components/AdminBody";

export default function Home() {
  const [openSidebar, setOpenSidebar] = useState(true);

  return (
    <div>
      {openSidebar && (
        <div
          className="absolute top-0 left-0  right-0 bottom-0 bg-blue-900 bg-opacity-70 h-[calc(100vh+20 isp
      px)]  md:h-auto md:relative "
        >
          <div className="sidebar absolute md:fixed top-0 bottom-0 z-50 h-full min-h-screen w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] transition-all duration-300 bg-slate-400">
            <div className="h-full bg-white  relative">
              <LeftMenuSideBarDesktop
                openSidebar={openSidebar}
                setOpenSidebar={setOpenSidebar}
              />
            </div>
          </div>
        </div>
      )}

      <AdminBody openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
    </div>
  );
}
