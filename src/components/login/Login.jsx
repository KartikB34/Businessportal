import React,{useState} from 'react'

import {FaRegEnvelope} from 'react-icons/fa'
// import {FaLinkedinIn, FaGoogle} from 'react-icons/fa'
import {MdLockOutline} from 'react-icons/md'
import Footer from './Footer'
import Navbar from './Navbar'

import { useHistory } from "react-router-dom";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Login = (props) => {

  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [loading, setLoading] = useState(false);


  var url_string = window.location.href;
  var url = new URL(url_string);
  var redirectType = url.searchParams.get("redirecttype");
  var redirectid = url.searchParams.get("redirectid");

  const navigate = useHistory();

  const API = "https://cryptonaukribackend.herokuapp.com/";


  const handleEmailChange = (e) => {
    setEmail(e.target.value.toLowerCase());
  };
  const handlePassChange = (e) => {
    setPass(e.target.value);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    navigate.push("/resetPassWord");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return toast.error("Enter all the values !!");
    }
    if (email && password) {
    
        try {
          setLoading(true);
          const response = await Axios.post(`${API}api/v1/business/login`, {
            email,
            password,
          });
          // console.log(email, password)
          localStorage.setItem("tokenNew", response.headers["authorization"]);
          console.log(response.data);
          console.log(response.headers["authorization"]);
          setLoading(false);
          if (response.data.userLoggedIn) {
            const timestamp = new Date().getTime();
            const expire = timestamp + 60 * 60 * 24 * 1000 * 2;
            const expireDate = new Date(expire);
            console.log(expireDate);
            await props.setCookie("token", response.headers.authorization, {
              expires: expireDate,
              path: "/",
              // domain: '.cryptonaukri.com',
            });

            toast.success(response.data.message);
            localStorage.setItem("login", true);
            localStorage.setItem("cUser", "BUISNESS");
            navigate.push("/signin");
          } else {
            toast.success(response.data.message);
          }
        } catch (error) {
          console.log(error);
          setLoading(false);
          toast.error("Login Failed ,please try again !!");
        }
    }
  };


  return (
    <>
    <Navbar />

    <div className='w-full flex flex-col md:flex-row items-center justify-center flex-1 text-center '>
        <div className='w-full md:w-3/5 p-5'>  {/* Login Section */}
        {/* <img src={logo} alt='logo' className='h-10' /> */}
        <div className='py-10'>
            <h2 className='text-3xl font-bold text-[#003979] mb-8'>Sign in to account</h2>
            <div className='border-4 w-10 border-[#003979] inline-block mb-2' />
            {/*Social Login Section below */}
            {/* <div className='flex justify-center my-2'>
                <a href='social' className='border-2 border-gray-200 rounded-full p-3 mx-1 hover:bg-[#003979] hover:text-white'>
                    <FaLinkedinIn />
                </a>
                <a href='social' className='border-2 border-gray-200 rounded-full p-3 mx-1 hover:bg-[#003979] hover:text-white'>
                    <FaGoogle />
                </a>
            </div> */}

            {/* <p className='text-gray-400 my-3'>or use your email account</p> */}

            {/* Input Divs below */}
            <div className='flex flex-col items-center '>
                <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                    <FaRegEnvelope className='text-gray-400 m-2' />
                    <input type='email' name='email' value={email} onChange={handleEmailChange} placeholder="Email" className='bg-gray-100 outline-none text-sm flex-1' />
                    {/* using flex-1 above to expand full width */}
                </div>
                <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                    <MdLockOutline className='text-gray-400 m-2' />
                    <input type='password' name='password' value={password} onChange={handlePassChange} placeholder="Password" className='bg-gray-100 outline-none text-sm flex-1' />
                    {/* using flex-1 above to expand full width */}
                </div>
                <div className='flex justify-between w-64 mb-5'>
                    {/* <label className='flex items-center text-sm'><input type='checkbox' name='remember' className='mr-1'/>Remember me</label> */}
                    <div onClick={handleForgotPassword} className='text-xs hover:cursor-pointer'>Forgot Password?</div>
                </div>
                <button  onClick={handleSubmit} className='border-2 border-[#003979] text-[#003979] font-semibold rounded-full px-12 py-2 inline-block hover:bg-[#003979] hover:text-white hover:cursor-pointer'>SignIn</button>
            </div>


        </div>
        </div>
        <div className='w-full md:w-2/5 md:h-[492px] bg-[#003979] text-white px-12 py-36'>  {/* signup Section */}
            <h2 className='text-3xl text-white font-bold mb-2'>Hello, company!</h2>
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