import React from 'react'
import InputField from '../InputField'

const SignupOne = () => {
  return (
    <div className='w-[50rem] flex flex-col items-center'>

      <div className='w-full flex px-10 my-8 justify-between'>
        <a href='/'> <p>back</p> </a>
        <p>Step 01/03</p>
      </div>

      <div className='my-2'>
        <p className='text-gray-700 mb-3'>Company name</p>
        <InputField type='text' placeholder="Enter company name" />
      </div>

      <div className='my-2'>
        <p className='text-gray-700 mb-3'>Company website</p>
        <InputField type='text' placeholder="Enter website URL" />
      </div>

    </div>
  )
}

export default SignupOne