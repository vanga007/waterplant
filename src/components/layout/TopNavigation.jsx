import { IoMdNotificationsOutline } from "react-icons/io";

const TopNavigationBar = ({ toggleSidebar }) => {
  return (
    <header className="sticky top-0 left-0 right-0  sm:ml-[16%] bg-[#209ea7] py-2   text-black select-none z-50 border-gray-400 shadow-sm">
      <div className="flex justify-between items-center px-4">
        <button
          onClick={toggleSidebar}
          className="p-2 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white   dark:focus:ring-gray-600"
        >
          <span className="sr-only">Toggle sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
        <div className="flex items-center gap-4">
          <button className="relative p-2 text-[8px] sm:text-2xl md:text-xl lg:text-lg focus:outline-none text-3xl bg-primary-light rounded-full shadow-md border border-gray-300 text-black cursor-pointer">
            <IoMdNotificationsOutline />
          </button>
          <div className="flex items-center gap-2 cursor-pointer">
            <img
              src={"/asserts/icons/Ellipse2x.png"}
              alt="User Profile"
              className="rounded-full w-10 h-10"
              draggable="false"
            />
            <div className="flex flex-col">
              <span className="text-[8px] sm:text-xl md:text-lg lg:text-sm font-medium">
                Shrasshine
              </span>
              <span className="text-[8px] sm:text-xl md:text-lg lg:text-sm text-primary-dark underline">
                View profile
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNavigationBar;
