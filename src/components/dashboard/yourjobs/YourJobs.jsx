import React from "react";
import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/outline";

const Jobcard = () => {
  const Jobs = [
    {
      title: "Front-end Developer",
      experience: "2-years",
      ctc: "10LPA",
      status: "Completed",
    },
    {
      title: "Back-end Developer",
      experience: "1-years",
      ctc: "10LPA",
      status: "No selection",
    },
    {
      title: "Graphic Designer",
      experience: "2-years",
      ctc: "10LPA",
      status: "Completed",
    },
    {
      title: "Marketing manager",
      experience: "1-years",
      ctc: "10LPA",
      status: "not selection",
    },
  ];

  return (
    <div className="md:px-4 md:py-12 bg-gray-100 ">
      <div className="p-5 my-6 shadow-xl bg-gray-100">
        <h1 className="text-xl mb-2">Your Jobs</h1>

        <div className="overflow-auto rounded-lg shadow hidden md:block">
          <table className="w-full">
            <thead className="bg-gray-50 border-b-2 border-gray-200">
              <tr>
                <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">
                  Sr no.
                </th>
                <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">
                  Job title
                </th>
                <th className="p-3 w-24 text-sm font-semibold tracking-wide text-left">
                  Experience
                </th>
                <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                  CTC
                </th>
                <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                  Status
                </th>
                <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">
                  Action
                </th>
              </tr>
            </thead>

            {Jobs.map((job,i) => (
              <tbody className="divide-y divide-gray-100 ">
                <tr className="bg-white">
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {i + 1}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {job.title}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {job.experience}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {job.ctc}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <span
                      className={`p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-200 ${
                        job.status === "Completed" &&
                        "text-green-800 bg-green-200"
                      } rounded-lg bg-opacity-50`}
                    >
                      {job.status}
                    </span>
                    
                  </td>
                  <td className="p-3 text-sm flex justify-between text-gray-700 whitespace-nowrap">
                    <EyeIcon className="h-4 mt-1 text-blue-600" />
                    <PencilIcon className="h-4 mt-1 text-blue-400" />
                    <TrashIcon className="h-4 mt-1 text-red-600" />
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>

        <div className="flex flex-col w-full md:hidden">
          {Jobs.map((job,i) => (
            <div className="bg-white space-y-3 p-4 my-2 rounded-lg shadow">
              <div className="text-sm text-gray-700">{i+1}. {job.title}</div>
              <div className="flex items-center space-x-2 text-sm">
                <div className="text-sm font-medium text-black mr-8">
                  CTC: {job.ctc}
                </div>
                <div className="text-gray-500 ">
                  Experience: {job.experience}
                </div>
              </div>
              <div className="flex h-7 justify-between">
                <span
                  className={`p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-200 ${
                    job.status === "Completed" && "text-green-800 bg-green-200"
                  } rounded-lg bg-opacity-50`}
                >
                  {job.status}
                </span>
                <div className="p-3 text-sm flex justify-between text-gray-700 whitespace-nowrap">
                    <EyeIcon className="h-4 text-blue-600" />
                    <PencilIcon className="h-4 mx-4 text-blue-400" />
                    <TrashIcon className="h-4 text-red-600" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jobcard;
