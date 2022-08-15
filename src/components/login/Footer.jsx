import React from 'react'
import {FaLinkedinIn, FaRegEnvelope, FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='flex justify-center flex-col text-center bg-gray-100 py-6'>
    <p>©Cryptonaukri all right reserved</p>
    <p className='mt-4'>Connect with us:</p>
    <div className='flex justify-center my-2'>
        <a href='social' className='border-2 border-gray-200 rounded-full p-3 mx-1 hover:bg-[#003979] hover:text-white'>
            <FaLinkedinIn />
        </a>
        <a href='social' className='border-2 border-gray-200 rounded-full p-3 mx-1 hover:bg-[#003979] hover:text-white'>
            <FaInstagram />
        </a>
        <a href='social' className='border-2 border-gray-200 rounded-full p-3 mx-1 hover:bg-[#003979] hover:text-white'>
            <FaRegEnvelope />
        </a>
    </div>
    </footer>
  )
}

export default Footer