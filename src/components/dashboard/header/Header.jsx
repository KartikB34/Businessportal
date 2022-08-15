import React from "react"
import {BellIcon, SearchIcon, UserCircleIcon} from '@heroicons/react/outline'
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <div className=" w-full py-5 bg-[#F0F5F5] items-center justify-between flex px-12">

      {/* Logo */}
      <div className="w-full items-center flex justify-start space-x-4">
        <img src={logo} alt="logo" className="h-9" />
      </div>

      {/* search */}
      <div className="w-full lg:flex hidden space-x-4 items-center justify-center py-2   ">
        <SearchIcon className="w-4 h-4" />
        <input
          type="text"
          placeholder="Search anything..."
          className="bg-transparent outline-none"
        />
      </div>

      {/*icons*/}
      <div className="items-center justify-end space-x-6 flex w-full">
        <BellIcon className="w-6" />
        <UserCircleIcon className="w-6" />
      </div>
    </div>
  )
};

export default Header;
