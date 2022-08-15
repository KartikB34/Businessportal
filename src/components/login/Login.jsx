import React from 'react'

import {FaLinkedinIn, FaGoogle, FaRegEnvelope} from 'react-icons/fa'
import {MdLockOutline} from 'react-icons/md'
import Footer from './Footer'
import Navbar from './Navbar'


const Login = () => {
  return (
    <>
    <Navbar />

    <div className='w-full flex flex-col md:flex-row items-center justify-center flex-1 text-center '>
        <div className='w-full md:w-3/5 p-5'>  {/* Login Section */}
        {/* <img src={logo} alt='logo' className='h-10' /> */}
        <div className='py-10'>
            <h2 className='text-3xl font-bold text-[#003979] mb-2'>Sign in to account</h2>
            <div className='border-4 w-10 border-[#003979] inline-block mb-2' />
            {/*Social Login Section below */}
            <div className='flex justify-center my-2'>
                <a href='social' className='border-2 border-gray-200 rounded-full p-3 mx-1 hover:bg-gray-400 hover:text-white'>
                    <FaLinkedinIn />
                </a>
                <a href='social' className='border-2 border-gray-200 rounded-full p-3 mx-1 hover:bg-gray-400 hover:text-white'>
                    <FaGoogle />
                </a>
            </div>

            <p className='text-gray-400 my-3'>or use your email account</p>

            {/* Input Divs below */}
            <div className='flex flex-col items-center '>
                <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                    <FaRegEnvelope className='text-gray-400 m-2' />
                    <input type='email' name='email' placeholder="Email" className='bg-gray-100 outline-none text-sm flex-1' />
                    {/* using flex-1 above to expand full width */}
                </div>
                <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                    <MdLockOutline className='text-gray-400 m-2' />
                    <input type='password' name='password' placeholder="Password" className='bg-gray-100 outline-none text-sm flex-1' />
                    {/* using flex-1 above to expand full width */}
                </div>
                <div className='flex justify-between w-64 mb-5'>
                    <label className='flex items-center text-sm'><input type='checkbox' name='remember' className='mr-1'/>Remember me</label>
                    <a href='forgot-password' className='text-xs'>Forgot Password?</a>
                </div>
                <a href='signin' className='border-2 border-[#003979] text-[#003979] font-semibold rounded-full px-12 py-2 inline-block hover:bg-[#003979] hover:text-white'>SignIn</a>
            </div>


        </div>
        </div>
        <div className='w-full md:w-2/5 md:h-[492px] bg-[#003979] text-white px-12 py-36'>  {/* signup Section */}
            <h2 className='text-3xl font-bold mb-2'>Hello, company!</h2>
            <div className='border-4 w-10 border-white inline-block mb-2' />
            <div className='90%'>
              <p className='text-xl mb-3'>Post jobs and internships for your company</p>
              <p className='text-xl mb-6'>Hire our trained and skilled WEB3 developers</p>
              <p className='mb-10'>Fill up company info and start journey with us!</p>
            </div>
            <a href='signup' className='border-2 border-white font-semibold rounded-full px-12 py-2 inline-block hover:bg-white hover:text-[#003979]'>SignUp</a>
        </div>


    </div>
    
    <Footer />
    </>
  )
}

export default Login