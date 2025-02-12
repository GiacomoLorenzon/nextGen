import React from "react";

import ContactPageRoundedIcon from '@mui/icons-material/ContactPageRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import AssignmentTurnedInRoundedIcon from '@mui/icons-material/AssignmentTurnedInRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';

function Plans() {
  // Array containing all the plan details
  
  const documentsData = [
    {
      title: "CV",
      description: "Do your best! We will revise it together.",
      iconPath: ContactPageRoundedIcon
    },
    {
      title: "Transcript of Records",
      description: "Send us your marks of all the attended courses.",
      iconPath: SchoolRoundedIcon
    },
    {
      title: "High School Final Grade",
      description: "A self-certification is sufficient.",
      iconPath: AssignmentTurnedInRoundedIcon
    },
    {
      title: "Cover Letter",
      description: "It is highly suggested, albeit not mandatory.",
      iconPath: AssignmentRoundedIcon
    }
  ];

  return (
    <div className="p-5 dark:bg-gray-900">
      <div className="dark:text-white">
        <h2 className="text-3xl font-bold dark:text-white">Stand out from the crowd</h2>
        <div className="mt-2 dark:text-gray-200">Are you ready to use your problem-solving skills and creativity to make a difference in society?</div>
        <div className="mt-2 dark:text-gray-200">At <b className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Next Generation Consultants</b>, we are all about unlocking your potential. We are dedicated to empowering individuals and to provide invaluable support in cracking the toughest business cases.</div>
        <div className="mt-2 dark:text-gray-200">Selected individuals demonstrating <b className="bg-gradient-to-br from-purple-600 to-blue-500 text-white">exceptional talent</b> will receive the opportunity to train with our experts in business case cracking.</div>
        <div className="mt-10 dark:text-gray-200">During our shared journey, you will be coached by our experts and consultants that will provide you tools and techniques to help you solve the case. This is your perfect occasion to <b>crack business interviews</b> and to foster your early professional carreer.</div>
        
        <h2 className="text-3xl font-bold dark:text-white">Application process</h2>
        <div className="mt-2 dark:text-gray-200">Due to the high demand of our service, a preliminary screening of the candidate will be performed, based on your academic transcript and curriculum vitae.</div>
        <div className="mt-2 dark:text-gray-200">Please note that we are not searching for the already-perfect candidate, so <b>do not hesitate to join</b>.</div>
        <div className="mt-2 dark:text-gray-200">When applying, you will need to enclose the following documents:</div>

        <ol className="ml-10 mt-10 mb-10 relative text-black border-s dark:border-white">
          {documentsData.map((doc, index) => (
            <li key={index} className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-200">
                <doc.iconPath className="w-2 h-2 text-gray-500 dark:text-gray-900" />
              </span>
              <h3 className="ml-2 font-bold leading-tight dark:text-white">{doc.title}</h3>
              <p className="ml-2 text-normal dark:text-gray-200">{doc.description}</p>
            </li>
          ))}
        </ol>
        If selected, you can choose one of the following <a href="#plans_id" className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">plans</a>.
      </div>
    </div>
  );
}

export default Plans;