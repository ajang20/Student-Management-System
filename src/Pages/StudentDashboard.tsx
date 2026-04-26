import { Outlet,Link} from "react-router-dom"
import useThemeContext from "../components/useThemeContext";


function StudentDashboard() {
    const {theme} = useThemeContext()
    const isDark = theme ==='dark'
  return (
    <div className={`${isDark?'bg-[#17181c] text-white':'bg-white text-black'}`}>
        <div className={`flex ml-40 pt-10 ${isDark?'bg-[#17181c]':'bg-white'}`}>
        <div className='buttons flex gap-30 '>
          <Link className='border py-1 px-2 rounded' to='.'> Student List</Link>
          <Link className='border py-1 px-2 rounded' to='courses'> Courses</Link>
        </div>
      </div>
        <Outlet/>
    </div>
  )
}

export default StudentDashboard