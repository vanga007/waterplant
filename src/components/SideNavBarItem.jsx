import React, { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaCircle } from "react-icons/fa";
import Link from 'next/link';
import { useRouter } from 'next/router';

const SideNavBarItem = ({ MenuItem, isSidebarOpen }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const isActive = (link) => router.asPath === link;

  return (
    <div className='flex flex-col 2xl:py-0 lg:py-1 cursor-pointer mr-3 text-black'>
      {/* Main Menu */}
      <Link href={MenuItem.link || '#'}>
        <div
          className={`group flex gap-2 2xl:mb-3 mb-1 hover:scale-x-105 items-center ${
            isActive(MenuItem.link) ? 'bg-blue-900' : 'hover:bg-blue-900'
          } text-black rounded-md 2xl:p-3 p-1.5 pl-2 transition-all duration-300`}
          onClick={() => setOpen(!open)}
        >
          {MenuItem.img ? (
            <img src={MenuItem?.img} alt='' className='2xl:w-5 2xl:h-5 w-4 h-4' />
          ) : (
            <span className='group-hover:text-primary-dark'>
              <MenuItem.icon className='2xl:w-5 2xl:h-5 w-4 h-4 text-black group-hover:text-primary-dark' />
            </span>
          )}
          {isSidebarOpen && (
            <span className='2xl:text-[12px] hidden lg:block text-black text-secondary text-xl font-semibold font-Poppins group-hover:text-primary-dark'>
              {MenuItem.title}
            </span>
          )}
          {MenuItem.subMenu && (
            <MdKeyboardArrowDown
              className={`ml-auto text-lg ${
                open ? 'rotate-180' : ''
              } transition-transform duration-300 group-hover:text-primary-dark`}
            />
          )}
        </div>
      </Link>

      {/* Submenu Container */}
      {MenuItem?.subMenu && (
        <div
          className={`2xl:ml-7 ml-5 flex gap-2 duration-300 relative ${
            open ? 'block transition-all duration-300 ease-in-out' : 'hidden'
          }`}
        >
          {/* Vertical Line */}
          <div className='bg-gray-400 w-[1px] h-[96%] relative transition-all duration-300'>
            <span className='absolute top-0 right-0 -left-[3px] text-gray-400'>
              <FaCircle className='text-[7px]' />
            </span>
            <span className='absolute bottom-0 -left-[3px]'>
              <FaCircle className='text-[7px] text-gray-400' />
            </span>
          </div>

          {/* Submenu Items */}
          <div className='flex flex-col gap-3 w-full transition-all duration-300'>
            {MenuItem.subMenu.map((subMenuItem, index) => (
              <Link key={index} href={subMenuItem.link}>
                <div
                  className={`flex gap-3 px-4 text-secondary-light 2xl:p-2 p-1.5 ${
                    isActive(subMenuItem.link)
                      ? 'bg-red-100 text-primary-dark'
                      : 'hover:bg-red-100 hover:text-primary-dark'
                  } rounded-md transition-all duration-300`}
                >
                  {subMenuItem.img ? (
                    <img
                      src={subMenuItem.img}
                      alt={index}
                      className='2xl:w-4 2xl:h-4 w-3 h-3 hover:rotate-[90deg] duration-300'
                    />
                  ) : (
                    <subMenuItem.icon className='2xl:w-5 2xl:h-5 w-4 h-4 hover:rotate-[360deg] duration-300' />
                  )}
                  {isSidebarOpen && (
                    <span className='2xl:text-[12px] hidden lg:block text-[11px] font-light'>
                      {subMenuItem.title}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SideNavBarItem;
