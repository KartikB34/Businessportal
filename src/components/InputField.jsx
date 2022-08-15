import React from 'react'
//DO copy the code from index.css

const InputField = ({type,placeholder}) => {
  return (
    <div className='relative'>
        <label className=''>
            <input type={type} className='px-6 h-[45px] w-[20rem] border rounded-md border-gray-200 outline-none focus:border-blue-400 transition duration-200'>
            </input>
            <span className='text-sm text-gray-700 text-opacity-80 absolute left-0 top-3 mx-6 transition duration-200 input-text'>{placeholder}</span>
        </label>
    </div>
  )
}

InputField.defaultProps = {
    type: "text",
    placeholder: "Input",
}

export default InputField