
import React from 'react'
import { Form } from 'react-router-dom'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import useThemeContext from '../components/useThemeContext';

export default function Register() {
    const {theme} = useThemeContext()
    const isDark = theme ==='dark'
  return (
    <div className={`flex justify-center pt-20 h-screen ${isDark?'bg-[#17181c]':'bg-white'}`}>
        <form className={` rounded-2xl flex flex-col gap-6 h-[70vh] w-[80%] p-10 shadow-2xl shadow-black md:w-[60%] lg:w-[30%] ${isDark?'bg-[#23262f] text-white':'bg-white text-black'}`}>
            <div className='text-3xl font-bold'>
              Registration Form
            </div>
            <div className={`userName w-full py-2 px-4 rounded ${isDark? 'bg-[#17181c] placeholder-white':'bg-gray-300 placeholder-black'}`}>
                <input 
            className='focus:outline-none w-full'
            name='name' 
            type='text' 
            placeholder='Student Name'
            required
            />
            </div>

           <div className={`email w-full py-2 flex justify-between px-4 items-center rounded  ${isDark? 'bg-[#17181c] placeholder-white':'bg-gray-300 placeholder-black'}`}>
             <input 
             className='focus:outline-none w-[90%]'
            name='email'
            type="email"
            placeholder='123@gmail.com'
            required
             />
             <MdEmail />
           </div>
           <div className={`email w-full py-2 flex justify-between px-4 items-center rounded  ${isDark? 'bg-[#17181c] placeholder-white':'bg-gray-300 placeholder-black'}`}>
             <input 
            className='focus:outline-none w-[90%]'
            name='phone'
            type="text"
            placeholder='+250************'
            required
             />
             <FaPhoneAlt />
           </div>
           <div className={` flex justify-between items-center font-semibold py-2 md:gap-20 pl-2 pr-4 rounded  ${isDark? 'bg-[#17181c] placeholder-white':'bg-gray-300 placeholder-black'}`}>
             <label>Courses :</label>
             <select name='course' required aria-label="choose Course" className={`focus:outline-none ${isDark? 'bg-[#17181c] placeholder-white':'bg-gray-300 placeholder-black'}`}>
                <option value=''>Default</option>
                <option value='Math'>Math</option>
                <option value='Science'>Science</option>
                <option value='English'>English</option>
                <option value='History'>History</option>
             </select>
             <FaBookOpen />
           </div>
           <div className='flex items-center justify-center mt-6 '>
            <button type='submit' className={` py-1 px-3 rounded md:py-3 md:px-8 md:text-xl  ${isDark?'bg-[#b3c7ff] text-[#17181c]':'bg-black text-white'}`}> Submit </button>
           </div>
        </form>
    </div>
  )
}
