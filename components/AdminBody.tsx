import React from "react";
import AdminHeader from "./AdminHeader";

const AdminBody = ({ openSidebar, setOpenSidebar }) => {
  // const handleButtonClick = () => {
  //   // openSidebar();
  //   setOpenSidebar(!openSidebar);
  //   console.log("openSidebar", openSidebar);
  // };
  return (
    <div className={`main-content  ${openSidebar ? "md:ml-[260px]" : ""}  `}>
      {/* <nav className="flex justify-between">
        <div>
          <button onClick={() => handleButtonClick()}>Click</button> nav header
          1
        </div>
        <div>nav header 2</div>
      </nav> */}
      <AdminHeader openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      <div className="pb-3 px-4 lg:px-6">
        <div className="border-b-8 border-neutral pb-2 pt-5">
          <h2>Admin Body</h2>
          <p>lorem2 </p>
        </div>
      </div>
    </div>
  );
};

export default AdminBody;
