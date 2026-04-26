
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
                       <td className="border border-slate-600 p-2" >{student.name}</td>
                       <td className="border border-slate-600 p-2" >{student.phone}</td>
                       <td className="border border-slate-600 p-2" >{student.course}</td>
                       <td className="border border-slate-600 p-2" >{student.email}</td>
                       <td className="border border-slate-600 p-2" ><button type='button' className=' border px-4 py-1'>Delete</button></td>
    </tr>)       


  // function removeStudent(index:number){
  //  const studentsArr:StudentData[] =  JSON.parse(localStorage.getItem('students') ?? '[]')
  //  const filteredStudents = studentsArr.filter((student,i) => student.name )
  // }
  return (
    <div className={` h-screen flex flex-col gap-5 pt-10 items-center ${isDark?'bg-[#17181c] text-white':'bg-white text-black'}`}>
      <div className={` w-[70%] rounded ${isDark? 'bg-[#23262f] placeholder-white':'bg-gray-300 placeholder-black'} md:w-[30%]`}>
        <input 
        type="text" 
        aria-label="Filter Students" 
        placeholder='Enter Student name' 
        className='w-full p-2 focus:outline-none' 
        onChange={(e) => setInput(e.target.value)}/>
      </div>
      <div className='w-full overflow-x-auto px-4 md:flex md:justify-center'>
      <table className='border-collapse border border-slate-600 md:w-full lg:w-[70%] min-w-150'> 
        <thead>
          <tr>
            <td  className="border border-slate-600  font-bold p-2"> Student Name</td>
            <td className="border border-slate-600  font-bold p-2"> Phone</td>
            <td className="border border-slate-600 font-bold p-2">Course</td>
            <td className="border border-slate-600  font-bold p-2"> Email </td>
             <td className="border border-slate-600 p font-bold p-2"> Delete </td>
          </tr>
        </thead>
        <tbody>
          { length>0?students:<p>No students</p>}
        </tbody>
      </table>
      </div>
      <Outlet/>
      </div>
  )
}
