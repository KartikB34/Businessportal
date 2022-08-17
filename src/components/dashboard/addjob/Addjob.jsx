import React,{useState} from 'react'

// import { ChevronLeftIcon } from '@heroicons/react/outline'
import 'antd/dist/antd.min.css';
import Jobform from './Jobform';
import Internshipform from './Internshipform';

const Addjob = () => {

  const [form,setForm] = useState('job');

  const displayForm = () => {
    if(form==='job'){
      return <Jobform />
    }
    else{
      return <Internshipform  />
    }
  }

  // const {TextArea} = Input;  //Not working dont know why

  return (
    <div className='px-4 md:py-12 md:px-20'>

      <div className='mb-8'>
      <button href='jobform' onClick={()=>{setForm('job')}} className={`border-2 w-[12rem] mr-4 border-[#003979] text-[#003979]  font-semibold rounded-full px-12 py-2 mt-7 inline-block ${form==='job'&& "bg-[#003979] text-white" } hover:bg-[#003979] hover:text-white`}>Add Job</button>
      <button href='internshipform' onClick={()=>{setForm('internship')}} className={`border-2 border-[#003979] text-[#003979] font-semibold rounded-full px-12 py-2 mt-7 inline-block ${form==='internship' && "bg-[#003979] text-white" } hover:bg-[#003979] hover:text-white`}>Add Internship</button>
      </div>

      {displayForm()}
    
    </div>
  )
}

export default Addjob