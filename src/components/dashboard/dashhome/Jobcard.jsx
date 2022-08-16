import React from 'react'

const Jobcard = () => {

  const Jobs = [
    {
      title: "Front-end Developer",
      experience: "2-years",
      ctc: "10LPA",
      status: "Completed"
    },
    {
      title: "Back-end Developer",
      experience: "1-years",
      ctc: "10LPA",
      status: "No selection"
    },
    {
      title: "Graphic Designer",
      experience: "2-years",
      ctc: "10LPA",
      status: "Completed"
    },
    {
      title: "Marketing manager",
      experience: "1-years",
      ctc: "10LPA",
      status: "not selection"
    },
  ]

  return (
    <div>
      <div className="p-5 my-3 bg-gray-100">
       <h1 className="text-xl mb-2">Your Jobs</h1>
 
      <div className="overflow-auto rounded-lg shadow hidden md:block">
      <table className="w-full">
        
        <thead className="bg-gray-50 border-b-2 border-gray-200">
        <tr>
          <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">Job title</th>
          <th className="p-3 text-sm font-semibold tracking-wide text-left">Experience</th>
          <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">CTC</th>
          <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">Status</th>
        </tr>
        </thead>

        {Jobs.slice(0,3).map((job) => (

        <tbody className="divide-y divide-gray-100 ">
        <tr className="bg-white">
          <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
            {job.title}
          </td>
          <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{job.experience}</td>
          <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{job.ctc}</td>
          <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
          <span
            className={`p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-200 ${job.status === "Completed" && "text-green-800 bg-green-200"} rounded-lg bg-opacity-50`}>{job.status}</span>
          </td>
        </tr>
        </tbody>

        ))}
      </table>
    </div>
 
    <div className="flex flex-col w-full md:hidden">

    {Jobs.slice(0,2).map((job) => (
      <div className="bg-white space-y-3 p-4 my-2 rounded-lg shadow">
        <div className="text-sm text-gray-700">
          {job.title}
        </div>
        <div className="flex items-center space-x-2 text-sm">
        <div className="text-sm font-medium text-black mr-8">
          CTC: {job.ctc}
        </div>
          <div className="text-gray-500 ">Experience: {job.experience}</div>
        </div>
          <div>
            <span
              className={`p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-200 ${job.status === "Completed" && "text-green-800 bg-green-200"} rounded-lg bg-opacity-50`}>{job.status}</span>
          </div>
      </div>
    ))}
      
    </div>
    <div className='w-full my-2 flex items-end relative'>
      <a href='/signin/yourjobs' className='text-red-400 right-5 top-1 absolute'>see more..</a>
    </div>
   </div>
    </div>
  )
}

export default Jobcard