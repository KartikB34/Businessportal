import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import logo from '../../assets/logo.png'

const Navbar = () => {

  const [nav, setNav] = useState(false);
  const clickHandler = () => setNav(!nav);

  return (
    <>
    <div className=" w-full py-3 bg-gray-100 items-center justify-between flex px-12">

      {/* Logo */}
      <div className="w-full items-center flex justify-start space-x-4">
        <img src={logo} alt="logo" className="h-9" />
      </div>

      {/* icons */}
      <div className="md:hidden" onClick={clickHandler} >
            { !nav? <MenuIcon className="w-5" /> : <XIcon className="w-5" /> }
      </div>

      {/*Links*/}
      <div className=" hidden items-center justify-end space-x-6 md:flex w-full">
        <a href="about-us">Benefits</a>
        <a href="about-us">About us</a>
        <a href="Contact-us">Contact us</a>
        {/* <BellIcon className="w-6" />
        <UserCircleIcon className="w-6" /> */}
      </div>
    </div>

    <div className={!nav? "hidden" : "absolute w-full flex flex-col text-center py-8 bg-gray-100"}>
        <a href="about-us" className="my-1">Benefits</a>
        <a href="about-us"  className="my-1">About us</a>
        <a href="Contact-us"  className="my-1">Contact us</a>
    </div>
    </>
  )
};

export default Navbar;
