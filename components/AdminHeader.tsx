import Image from "next/image";
import React from "react";

const AdminHeader = ({ openSidebar, setOpenSidebar }: any) => {
  const handleButtonClick = () => {
    // openSidebar();
    setOpenSidebar(!openSidebar);
    console.log("openSidebar", openSidebar);
  };
  return (
    <div className="w-full bg-white  lg:gap-4 px-4 py-6 lg:px-9 border-b border-b-neutral-500 border-opacity-10">
      <nav className="flex justify-between  ">
        <div className="flex items-center gap-x-5">
          <button onClick={() => handleButtonClick()} className="block">
            <div className="h-1 w-6 bg-[#1A305B] mb-1"></div>
            <div className="h-1 w-6 bg-[#1A305B] mb-1"></div>
            <div className="h-1 w-6 bg-[#1A305B] mb-1"></div>
          </button>{" "}
          <div> nav header 1</div>
        </div>
        <div className="flex items-center gap-x-5">
          <div className="border-[#1a305b] border px-4 py-1 rounded-md relative group ">
            <p>English</p>
            <ul className=" opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300 absolute top-full left-2 rounded-md shadow-lg p-2 bg-white ">
              <li className="bg-black bg-opacity-0 hover:bg-opacity-30 px-2 py-1 rounded-md">
                English
              </li>
              <li className="bg-black bg-opacity-0 hover:bg-opacity-30 px-2 py-1 rounded-md">
                বাংলা
              </li>
            </ul>
          </div>
          <div className="text-[#1a305b] bg-[#3b82f630] hover:bg-[#3b82f680] transition-all duration-300 px-3 py-3 rounded-full">
            {/* <img
              className="w-5"
              src="/assets/image/admin/sidebar/setting.png"
              alt=""
            /> */}
            <svg
              width="20"
              height="17"
              viewBox="0 0 14 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.17054 14.7313C5.57047 14.6448 8.00742 14.6448 8.40735 14.7313C8.74924 14.8121 9.11896 15.0008 9.11896 15.4128C9.09908 15.805 8.87407 16.1528 8.56319 16.3736C8.16008 16.695 7.687 16.8985 7.19246 16.9719C6.91895 17.0081 6.65021 17.009 6.38624 16.9719C5.89089 16.8985 5.41782 16.695 5.0155 16.3728C4.70383 16.1528 4.47882 15.805 4.45894 15.4128C4.45894 15.0008 4.82866 14.8121 5.17054 14.7313ZM6.83618 0.635742C8.5003 0.635742 10.2002 1.4433 11.21 2.7832C11.8651 3.64597 12.1657 4.50791 12.1657 5.84781V6.19638C12.1657 7.22396 12.4312 7.82963 13.0156 8.52759C13.4585 9.04179 13.6 9.70185 13.6 10.4179C13.6 11.1332 13.3702 11.8122 12.9099 12.3635C12.3072 13.0244 11.4572 13.4463 10.5898 13.5196C9.33276 13.6292 8.07493 13.7215 6.8004 13.7215C5.52507 13.7215 4.26804 13.6663 3.011 13.5196C2.14277 13.4463 1.29281 13.0244 0.690932 12.3635C0.230576 11.8122 0 11.1332 0 10.4179C0 9.70185 0.142321 9.04179 0.584391 8.52759C1.18707 7.82963 1.43514 7.22396 1.43514 6.19638V5.84781C1.43514 4.47166 1.77066 3.5718 2.4616 2.6909C3.48885 1.40622 5.13548 0.635742 6.76462 0.635742H6.83618Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div className="relative group">
            <div className="flex items-center gap-x-2">
              {/* <img 
                className="w-10 border rounded-full border-[#1a305b]"
                src="/public/images/assets/image/admin/sidebar/no_profile_picture.png"
                alt=""
              /> */}
              <Image
                src="/images/assets/image/admin/sidebar/no_profile_picture.png"
                alt="image-alt"
                className="rounded-lg w-10 h-10 object-cover"
                priority={true}
                height={40}
                width={40}
              />
              <svg
                width="8"
                height="5"
                viewBox="0 0 8 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L4 4L7 1"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>

            <div className=" opacity-0 group-hover:opacity-100 transition duration-300 absolute top-full -left-full flex flex-col overflow-hidden bg-white border shadow translate-y-1  rounded-xl">
              <button className="flex items-center w-full px-6 py-2 font-medium transition-all duration-200 border-b gap-x-2 hover:bg-primary-100 text-primary text-sm-768 xl:text-sm-1200 3xl:text-sm-1450 bg-black bg-opacity-0 hover:bg-opacity-30">
                <svg
                  width="24"
                  height="29"
                  viewBox="0 0 24 29"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 3xl:w-5 3xl:h-5"
                >
                  <path
                    d="M5.22482 28.1906C4.9112 28.123 4.59216 28.0778 4.28461 27.9912C2.31497 27.4363 1.06991 25.9182 0.983391 23.8512C0.893493 21.716 1.12804 19.6111 1.93983 17.6117C2.46367 16.3207 3.22409 15.2034 4.49956 14.5221C5.27063 14.1061 6.13675 13.898 7.01265 13.9185C7.29113 13.9246 7.58448 14.0651 7.83863 14.203C8.24757 14.4261 8.62743 14.7025 9.02488 14.9466C11.3361 16.3732 13.6469 16.3716 15.9572 14.9418C16.2782 14.7431 16.6054 14.5511 16.9068 14.3254C17.4591 13.911 18.0674 13.859 18.7244 13.9556C20.5163 14.2193 21.7823 15.2007 22.6353 16.7668C23.3978 18.1653 23.7405 19.6834 23.8932 21.2482C23.9723 22.053 24.0075 22.8615 23.9987 23.67C23.9696 26.0811 22.3149 27.8743 19.9174 28.1393C19.8577 28.1507 19.7991 28.1675 19.7424 28.1893L5.22482 28.1906Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M18.972 7.20385C18.9964 10.8444 15.9912 13.8651 12.3304 13.8759C8.66957 13.8867 5.65495 10.8687 5.65359 7.23765C5.64838 5.47344 6.34352 3.77928 7.58638 2.52717C8.82923 1.27506 10.5182 0.567382 12.2824 0.55951C15.9642 0.532473 18.949 3.49775 18.972 7.20385Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="text-xs font-semibold font-openSans">
                  Profile
                </span>
              </button>
              <button className="flex items-center w-full px-6 py-2 font-medium transition-all duration-200 gap-x-2 hover:bg-primary-100 text-primary text-sm-768 xl:text-sm-1200 3xl:text-sm-1450 bg-black bg-opacity-0 hover:bg-opacity-30">
                <svg
                  width="21"
                  height="21"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-4 h-4 text-primary"
                >
                  <path
                    fill="currentColor"
                    d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z"
                  ></path>
                </svg>
                <span className="text-xs font-semibold font-openSans">
                  Logout
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AdminHeader;
