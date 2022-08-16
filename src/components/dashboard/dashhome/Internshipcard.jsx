import React from 'react'

const Internshipscard = () => {

  const Internships = [
    {
      title: "Front-end Internship",
      experience: "2-years",
      stipend: "50K",
      status: "Completed"
    },
    {
      title: "Back-end Internship",
      experience: "1-years",
      stipend: "50K",
      status: "No selection"
    },
    {
      title: "Graphic Designer Internship",
      experience: "2-years",
      stipend: "50K",
      status: "Completed"
    },
    {
      title: "Marketing Internship",
      experience: "1-years",
      stipend: "50K",
      status: "not selection"
    },
  ]

  return (
    <div>
      <div className="p-5 shadow-xl bg-gray-100">
    <h1 className="text-xl mb-2">Your Internships</h1>
 
    <div className="overflow-auto w-[510.65px] rounded-lg shadow hidden md:block">
      <table className="w-full">
        
        <thead className="bg-gray-50 border-b-2 border-gray-200">
        <tr>
          <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">Internships title</th>
          <th className="p-3 text-sm font-semibold tracking-wide text-left">Experience</th>
          <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">Stipend</th>
          <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">Status</th>
        </tr>
        </thead>

        {Internships.slice(0,3).map((internship) => (

        <tbody className="divide-y divide-gray-100 ">
        <tr className="bg-white">
          <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
            {internship.title}
          </td>
          <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{internship.experience}</td>
          <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{internship.stipend}</td>
          <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
          <span
            className={`p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-200 ${internship.status === "Completed" && "text-green-800 bg-green-200"} rounded-lg bg-opacity-50`}>{internship.status}</span>
          </td>
        </tr>
        </tbody>

        ))}
      </table>
    </div>
 
    <div className="flex flex-col w-full md:hidden">

    {Internships.slice(0,2).map((internship) => (
      <div className="bg-white space-y-3 p-4 my-2 rounded-lg shadow">
        <div className="text-sm text-gray-700">
          {internship.title}
        </div>
        <div className="flex items-center space-x-2 text-sm">
        <div className="text-sm font-medium text-black mr-8">
          Stipend: {internship.stipend}
        </div>
          <div className="text-gray-500 ">Experience: {internship.experience}</div>
        </div>
          <div>
            <span
              className={`p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-200 ${internship.status === "Completed" && "text-green-800 bg-green-200"} rounded-lg bg-opacity-50`}>{internship.status}</span>
          </div>
      </div>
    ))}
      
    </div>
    <div className='w-full my-2 flex items-end relative'>
      <a href='/signin/yourinternships' className='text-red-400 right-5 top-1 absolute'>see more..</a>
    </div>
  </div>
    </div>
  )
}

export default Internshipscard