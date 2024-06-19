import { IoMdNotificationsOutline } from "react-icons/io";
import { useState } from "react";

const TopNavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 left-0 right-0 bg-white py-2 text-black select-none z-50 shadow-md border-b">
      <div className="flex justify-between items-center px-4">
        <div className="text-xl font-bold"></div>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleDropdown}
            className="relative p-2 focus:outline-none text-3xl bg-primary-light rounded-full shadow-md border border-gray-300 text-black cursor-pointer"
          >
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
              <span className="text-sm font-medium">KVN Singh</span>
              <span className="text-xs text-primary-dark underline">
                View profile
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* {isOpen && <Notifications />} */}
    </header>
  );
};

export default TopNavigationBar;
