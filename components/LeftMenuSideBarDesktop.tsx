import React, { useState } from "react";
import FullLogo from "./Icons/FullLogo";
import LogoIcon from "./Icons/LogoIcon";
import SideBarIcon from "./Icons/SideBarIcon";
import SidebarArrow from "./Icons/SidebarArrow";

const SIDEBAR_DATA = [
  { id: 1, listName: "Dashboard", child: [] },
  {
    id: 2,
    listName: "Settings",
    child: [
      { childName: "Settings 1" },
      { childName: "Settings 2" },
      { childName: "Settings 3" },
    ],
  },
  {
    id: 3,
    listName: "Profile",
    child: [
      { childName: "Profile 1" },
      { childName: "Profile 2" },
      { childName: "Profile 3" },
    ],
  },
  { id: 4, listName: "Activity", child: [] },
];
const LeftMenuSideBarDesktop = ({ openSidebar, setOpenSidebar }: any) => {
  const [selectedMenu, setSelectedMenu] = useState<any>();
  const [check, setCheck] = useState<any>(null);
  const [firstClick, setFirstClick] = useState<any>(false);
  const [logoFull, setLogofull] = useState<any>(true);

  const handleListItem = (selectedItemObj: any) => {
    const selectedMenuObj: any = SIDEBAR_DATA.find(
      (item) => item.listName === selectedItemObj.listName
    );

    setSelectedMenu(selectedMenuObj);
    if (selectedMenuObj.child && selectedMenuObj.child.length !== 0) {
      console.log("selectedMenuObj", selectedMenuObj);
      setCheck(true);
    } else {
      setCheck(false);
    }

    if (selectedItemObj && selectedItemObj.child.length !== 0) {
      setFirstClick(true);
      console.log("yo");
      setLogofull(false);
    } else {
      setLogofull(true);
    }
  };

  const handelMouseEnter = () => {
    if (selectedMenu && selectedMenu.child.length !== 0) {
      setFirstClick(false);
    }
    setLogofull(true);
  };

  const hideSideBar = () => {
    setOpenSidebar(!openSidebar);
  };

  const leaveLogoChange = () => {
    if (selectedMenu && selectedMenu.child.length !== 0) {
      setLogofull(false);
    }
  };

  return (
    <div>
      <div
        onMouseEnter={() => handelMouseEnter()}
        onMouseLeave={() => leaveLogoChange()}
        className={`${
          firstClick && check ? "w-[80px]" : "w-full"
        } transition-all duration-300`}
      >
        <div
          className={`${
            check
              ? "w-[80px] hover:w-full transition-all group duration-300  "
              : ""
          } z-50 relative bg-[#1A305B]`}
        >
          <div
            onClick={() => hideSideBar()}
            className="ml-auto text-right bg-white w-6 pr-2 mt-2 mr-2 rounded block md:hidden -mb-7"
          >
            X
          </div>
          <div className="flex items-center justify-between px-4 py-3">
            <a className="main-logo flex shrink-0 items-center">
              <span className="align-middle text-2xl font-semibold ltr:ml-1.5 rtl:mr-1.5 dark:text-white-light md:inline">
                {logoFull ? (
                  <p className="flex items-center gap-x-1">
                    <LogoIcon />
                    <FullLogo />
                  </p>
                ) : (
                  <p>
                    <LogoIcon />
                  </p>
                )}
              </span>
            </a>
          </div>
          <div className="perfect-scrollbar relative h-[calc(100vh-80px)] space-y-0.5 overflow-y-auto overflow-x-hidden p-4 py-0 font-semibold mt-10">
            <ul>
              {SIDEBAR_DATA.map((item) => (
                <li
                  key={item.id}
                  onClick={() => handleListItem(item)}
                  className={`flex cursor-pointer items-center justify-between my-3 h-9  p-0 pl-3 rounded-md overflow-hidden text-white hover:bg-white hover:text-[#142546] ${
                    selectedMenu && item.listName === selectedMenu.listName
                      ? "bg-[#142546]"
                      : "bg-transparent"
                  } pr-3 group
                `}
                >
                  <div className="flex items-center gap-x-2 ">
                    <div className="translate-x-1  hover:text-[#142546]">
                      <SideBarIcon />
                    </div>
                    <a
                      className={` block ${
                        logoFull ? "block " : "hidden"
                      } pl-2 `}
                    >
                      {item.listName}
                    </a>
                  </div>
                  {item.child.length > 0 && (
                    <div
                      className={` block ${
                        logoFull ? "block " : "hidden"
                      } group-hover:text[#142546]`}
                    >
                      <SidebarArrow
                        className={`${
                          check ? "block " : "hidden "
                        } ml-3 mr-2 translate-x-2`}
                      />
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {selectedMenu && (
        <div className="bg-[#142546] text-white min-h-screen absolute top-0 pt-4 right-0 z-20 w-[180px] pl-0">
          <h4 className="text-center font-semibold border-b-2 border-white mb-10 pb-2">
            {selectedMenu.listName}
          </h4>
          {selectedMenu.child.map((item: any, index: any) =>
            index === 0 ? (
              <p
                className="font-semibold pl-3 bg-transparent text-white hover:bg-white hover:text-[#142546] py-2 mb-1 cursor-pointer"
                key={item.childName}
              >
                {item.childName}
              </p>
            ) : (
              <p
                className=" pl-3 bg-transparent text-white hover:bg-white hover:text-[#142546] py-2 mb-1 cursor-pointer"
                key={item.childName}
              >
                {item.childName}
              </p>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default LeftMenuSideBarDesktop;
