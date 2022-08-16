import React from 'react'
import Jobcard from './Jobcard'
import Internshipcard from './Internshipcard'

const DashHome = () => {
  return (
    <div className=' w-fll flex flex-col items-center'>
      <Jobcard  />
      <Internshipcard />
    </div>
  )
}

export default DashHome