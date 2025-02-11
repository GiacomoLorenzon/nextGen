import React from "react";

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateCalendar, TimePicker, renderTimeViewClock } from '@mui/x-date-pickers';

import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

function Form() {

  return (
    <div className="p-5 dark:bg-gray-900">
      <h2 className="text-2xl font-bold dark:text-white">Reach us, reach your success</h2>
      <label htmlFor="input-group-1" className="block mb-2 mt-5 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
      <div className="relative mb-6">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
          </svg>
        </div>
        <input type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="your@email.com"/>
      </div>

      <label htmlFor="website-admin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Surname and Name</label>
      <div className="mb-5 flex">
        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
          </svg>
        </span>
        <input type="text" id="website-admin" className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your surname and name"/>
      </div>

      <label className="block w-auto cursor-pointer block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="multiple_files">Upload files</label>
      <input className="hidden" id="multiple_files" type="file" multiple/>
      <label
        htmlFor="multiple_files"
        className="dark:focus:border-blue-500 dark:focus:ring-blue-500 dark:text-gray-400 p-2.5 focus:ring-blue-500 focus:border-blue-500 flex-1 rounded-lg px-4 py-2 mb-5 block w-full text-sm text-gray-500 border border-gray-300 cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 hover:bg-gray-200 transition-all duration-200">
        CV, transcripts, cover letter
      </label>

      <div className="flex items-center justify-center w-full">
        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">PDF - max 5MB</p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" />
        </label>
      </div> 

      <label htmlFor="website-admin" className="mt-5 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date and time</label>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div className="">
          <DateCalendar
            disablePast
            className="bg-gray-100 box text-gray-900 dark:text-white dark:bg-gray-700"
            showDaysOutsideCurrentMonth fixedWeekNumber={6}
            sx={{
              '& .MuiPickersDay-root': {
                color: '#8a929c', // ''
              },
              '& .MuiPickersDay-root:hover': {
                color: 'white', // Hover effect for day
              },
              '& .MuiPickersDay-root:focus': {
                color: 'white', // Hover effect for day
                background: 'linear-gradient(to bottom right, #6b46c1, #3b82f6)'
              },
              '& .MuiPickersArrowSwitcher-root svg': {
                fill: '#8a929c', // Customizing the arrows' fill color (using fill to target the SVG)
              },
              borderRadius: '10px',
              border: '0.5px solid #8a929c'
            }}
          />
        </div>

        <div className="mt-5 flex justify-center items-center">
          <TimePicker
            label="With Time Clock"
            className="bg-gray-100 box text-gray-900 dark:text-white dark:bg-gray-700"
            viewRenderers={{
              hours: renderTimeViewClock,
              minutes: renderTimeViewClock
            }}
            minutesStep={10} 
            sx={{
              borderRadius: '10px',
              border: '0.5px solid #8a929c',
              '.MuiSvgIcon-root': {
                fill: '#8a929c', // Set the arrow SVG icons color to white
              },
              '.MuiInputBase-input': {
                color: 'white', // Set text color to white
              },
              '.MuiFormLabel-root': {
                color: '#8a929c',
              }
            }}
          />
        </div>
      </LocalizationProvider>

      <div className="mt-5 relative">
        <input type="text" id="floating_outlined" className="border block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
        <label htmlFor="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Ask us any particular need</label>
      </div>

      <button
        type="button"
        className="mt-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-20
          transition-all duration-300 ease-in-out
          focus:ring-4 focus:outline-none focus:ring-blue-300
          dark:focus:ring-blue-800 group">
        Submit
        <span className="ml-1 arrow inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-[5px] group-hover:translate-y-[-5px]">
          <RocketLaunchIcon />
        </span>
      </button>

    </div>
  );
}

export default Form;