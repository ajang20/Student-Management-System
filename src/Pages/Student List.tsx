
import useThemeContext from '../components/useThemeContext';
import { useLoaderData } from 'react-router-dom';
import type { StudentData } from './Register';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import toast from 'react-hot-toast';


export function loader(){
const existing = localStorage.getItem('students')
const studentsArr = existing ? JSON.parse(existing):[]
return {studentsArr}
}

export default function StudentList() {
  const [input,setInput] = useState<string>('')
  const {studentsArr} = useLoaderData() as {studentsArr:StudentData[]}
  const [studentsListArr,setStudentsListArr] = useState<StudentData[]>(studentsArr)
  const {theme} = useThemeContext()
  const isDark = theme ==='dark'
  const length = studentsListArr.length
  
  console.log(studentsListArr)
   const filteredNames =input.trim()? studentsListArr.filter( student => student.name?.toLowerCase().includes(input.toLocaleLowerCase())):studentsListArr
   const students = filteredNames.map((student,index) => <tr key={index} className=''>
                       <td className="border border-slate-600 p-2" >{student.name}</td>
                       <td className="border border-slate-600 p-2" >{student.phone}</td>
                       <td className="border border-slate-600 p-2" >{student.course}</td>
                       <td className="border border-slate-600 p-2" >{student.email}</td>
                       <td className="border border-slate-600 p-2" ><button onClick={()=>removeStudent(student,index)} type='button' className=' border px-4 py-1'>Delete</button></td>

    </tr>)       

  const MathStudents = studentsListArr.filter( (student) => student.course?.toLowerCase() ==='math').length
  const scienceStudents = studentsListArr.filter( (student) => student.course?.toLowerCase() ==='science').length
  const englishStudents = studentsListArr.filter( (student) => student.course?.toLowerCase() ==='english').length
  const historyStudents = studentsListArr.filter( (student) => student.course?.toLowerCase() ==='history').length

  function removeStudent(student:StudentData,index:number){
  console.log('filtered!')
  //  const studentsArr:StudentData[] =  JSON.parse(localStorage.getItem('students') ?? '[]')
   const filteredStudents = studentsListArr.filter((stu,i) => i !== index && stu.name !== student.name )
   localStorage.setItem('students',JSON.stringify(filteredStudents))

   setStudentsListArr(filteredStudents)
   toast.success(`${student.name} is deleted successfully!`)

  }
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
      <div className='w-full overflow-x-auto px-4 flex md:items-center flex-col gap-4'>
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
      <table className='border-collapse border border-slate-600 md:w-full lg:w-[70%] min-w-150'>
        <thead>
          <tr > 
            <td className='p-2 text-xl font-bold' colSpan={6}>
              Summary Table
              </td>
               </tr>
          <tr>
           <td className=' border border-collapse border-slate-600 p-2 font-bold'>Subject</td>
           <td className=' border border-collapse border-slate-600 p-2 font-bold  '>Math</td>
           <td className=' border border-collapse border-slate-600 p-2 font-bold '>Science</td>
           <td className=' border border-collapse border-slate-600 p-2 font-bold '>English</td>
           <td className=' border border-collapse border-slate-600 p-2 font-bold '>History</td>
           <td className=' border border-collapse border-slate-600 p-2  font-bold'>Total</td>
           
          </tr>
        </thead>
        <tbody>
          <tr>
           <td className=' border border-collapse border-slate-600 p-2 font-bold '>No. of Students</td>
           <td className=' border border-collapse border-slate-600 p-2'>{MathStudents} </td>
           <td className=' border border-collapse border-slate-600 p-2'>{scienceStudents}</td>
           <td className=' border border-collapse border-slate-600 p-2'>{englishStudents}</td>
           <td className=' border border-collapse border-slate-600 p-2'>{historyStudents}</td>
           <td className=' border border-collapse border-slate-600 p-2 '>{length} </td>
          </tr>
        </tbody>
      </table>
      </div>
      <Outlet/>
      </div>
  )
}
