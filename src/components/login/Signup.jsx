import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

import SignupOne from "./SignupOne";

const Signup = () => {
  return (
    <>
    <Navbar />
    <div className="w-full bg-gray-200 flex flex-col items-center justify-center py-6">
      <h1 className="text-3xl mt-3 font-bold text-[#003979] mb-2">
        Sign up as a new business!
      </h1>
      <div className="bg-white mt-8 rounded-2xl">
        <SignupOne />
      </div>
    </div>
      <Footer className='w-full' />
    </>
  );
};

export default Signup;
