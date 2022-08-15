import React from 'react'


const Login = () => {
  return (
    <div className='w-full flex flex-col md:flex-row items-center justify-center flex-1 text-center'>
        <div className='w-full md:w-3/5 p-5'>  {/* Login Section */}
        {/* <img></img> */}
        </div>
        <div className='w-full md:w-2/5 bg-blue-400 text-white px-12 py-36'>  {/* signup Section */}
            <h2 className='text-3xl font-bold mb-2'>Hello, company!</h2>
            <div className='border-4 w-10 border-white inline-block mb-2' />
            <p className='mb-10'>Fill up company info and start journey with us!</p>
            <a href='signup' className='border-2 border-white font-semibold rounded-full px-12 py-2 inline-block hover:bg-white hover:text-blue-400'>SignUp</a>
        </div>
    </div>
  )
}

export default Login