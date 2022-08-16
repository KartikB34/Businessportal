import React from 'react'
import { ChevronLeftIcon } from '@heroicons/react/outline'
import { Input } from 'antd';
import 'antd/dist/antd.min.css';

const SignupOne = () => {

  // const [show, setShow] = useState(false);
  const { TextArea } = Input;

  // const handleClickShowPassword = () => {
  //   setShow(!show);
  // }

  // const passVisible = () => {
  //   return(
  //     show? <VisibilityOff /> : <Visibility/>
  //   )
  // }

  return (
    <div className='w-full md:w-[48rem] py-16 flex flex-col items-center shadow-2xl rounded-2xl px-10 md:px-0'>

      <div className='w-full flex md:pl-12 mb-8'>
        <a href='/' className='flex flex-row justify-center text-black'>
          <ChevronLeftIcon className='mr-1 h-5 '/>
          <p>back</p>
        </a>
      </div>

      <div className='w-full md:flex md:flex-row justify-between md:w-[70%]'>
        <div className='my-8 md:my-0'> 
          <p className='ml-2'>Name</p>
          <Input size="large" placeholder='Company Name' />
        </div>

        <div className='my-8 md:my-0'>
          <p className='ml-2'>Company website</p>
          <Input size="large" placeholder='Website URL' />
        </div>
      </div>

      <div className='w-full md:flex md:flex-row justify-between md:w-[70%] md:my-6'>
        <div className='mt-2 mb-8 md:my-0'>
          <p className='ml-2'>E-mail</p>
          <Input size="large" placeholder='E-mail' />
        </div>

        <div className='my-8 md:my-0'>
          <p className='ml-2'>Contact number</p>
          <Input size="large" placeholder='Executive name' />
        </div>
      </div>


      <div className='w-full md:px-28'>
        <p className='ml-2'>Company info</p>
        <TextArea size="large" placeholder='Description' rows={4} />
      </div>

      <div className='w-full md:flex md:flex-row justify-between md:w-[70%] md:my-6'>
        <div className='my-8 md:my-0'>
          <p className='ml-2'>Establishment year</p>
          <Input size="large" placeholder='Extablishment year' />
        </div>

        <div className='my-8 md:my-0'>
          <p className='ml-2'>GST number</p>
          <Input size="large" placeholder='GSTIN (optional)' />
        </div>
      </div>

      <div className='w-full md:flex md:flex-row justify-between md:w-[70%] md:my-6'>
        <div className='mt-2 mb-8 md:my-0'>
          <p className='ml-2'>Office Location</p>
          <Input size="large" placeholder='Office location' />
        </div>

        <div className='my-8 md:my-0'>
          <p className='ml-2'>Contact number</p>
          <Input size="large" placeholder="Executive's contact" />
        </div>
      </div>

      <div className='w-full md:flex md:flex-row justify-between md:w-[70%] md:my-6'>
        <div className='mt-2 mb-8 md:my-0'>
          <p className='ml-2'>Password</p>
          <Input.Password size="large" placeholder='password' />
        </div>

        <div className='my-8 md:my-0'>
          <p className='ml-2'>Copoun Code</p>
          <Input size="large" placeholder='Copoun code' />
        </div>
      </div>

      <a href='signup' className='border-2 border-[#003979] text-[#003979] font-semibold rounded-full px-12 py-2 mt-7 inline-block hover:bg-[#003979] hover:text-white'>Send OTP</a>
      

    </div>
  )
}

export default SignupOne