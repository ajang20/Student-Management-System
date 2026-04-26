import { Outlet,Link} from "react-router-dom"
import useThemeContext from "../components/useThemeContext";


function StudentDashboard() {
    const {theme} = useThemeContext()
    const isDark = theme ==='dark'
  return (
    <div className={`${isDark?'bg-[#17181c] text-white':'bg-white text-black'}`}>
       <div className={`border-b mx-8 pb-4 flex  pt-10 ${isDark?'bg-[#17181c]':'bg-white'}`}>
        <div className='buttons flex gap-10 md:gap-30 justify-center w-full '>
          <Link className='rounded  border py-1 px-2 ' to='.'> Student List</Link>
          <Link className='border py-1 px-2 rounded' to='courses'> Courses</Link>
        </div>
      </div>
        <Outlet/>
    </div>
  )
}

export default StudentDashboard