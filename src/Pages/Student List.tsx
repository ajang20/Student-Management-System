
import useThemeContext from '../components/useThemeContext';
import { useLoaderData } from 'react-router-dom';
import type { StudentData } from './Register';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

export function loader(){
const existing = localStorage.getItem('students')
const studentsArr = existing ? JSON.parse(existing):[]
return {studentsArr}
}

export default function StudentList() {
  const [input,setInput] = useState<string>('')
  const {studentsArr} = useLoaderData() as {studentsArr:StudentData[]}
    const {theme} = useThemeContext()
    const isDark = theme ==='dark'
   const length = studentsArr.length
  
   const filteredNames =input.trim()? studentsArr.filter( student => student.name?.toLowerCase().includes(input.toLocaleLowerCase())):studentsArr
   const students = filteredNames.map((student,index) => <tr key={index} className=''>
                       <td className="border border-slate-300 p-2" >{student.name}</td>
                       <td className="border border-slate-300 p-2" >{student.phone}</td>
                       <td className="border border-slate-300 p-2" >{student.course}</td>
                       <td className="border border-slate-300 p-2" >{student.email}</td>
                       <td className="border border-slate-300 p-2" ><button type='button'>Delete</button></td>
    </tr>)       

  return (
    <div className={` h-screen flex flex-col gap-10 pt-10 items-center ${isDark?'bg-[#17181c] text-white':'bg-white text-black'}`}>
      <div className={`w-[30%]  rounded ${isDark? 'bg-[#23262f] placeholder-white':'bg-gray-300 placeholder-black'}`}>
        <input 
        type="text" 
        aria-label="Filter Students" 
        placeholder='Enter Student name' 
        className='w-full p-2 focus:outline-none' 
        onChange={(e) => setInput(e.target.value)}/>
      </div>
      <table className='w-[80%] h-[50%] border-collapse border border-slate-400 pl-20'> 
        <thead>
          <tr>
            <td  className="border border-slate-300 p-2 font-bold"> Student Name</td>
            <td className="border border-slate-300 p-2 font-bold"> Phone</td>
            <td className="border border-slate-300 p-2 font-bold">Course</td>
            <td className="border border-slate-300 p-2 font-bold"> Email </td>
             <td className="border border-slate-300 p-2 font-bold"> Delete </td>
          </tr>
        </thead>
        <tbody>
          { length>0?students:<p>No students</p>}
        </tbody>
      </table>
      <Outlet/>
      </div>
  )
}
