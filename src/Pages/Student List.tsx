
import useThemeContext from '../components/useThemeContext';

export default function StudentList() {
    const {theme} = useThemeContext()
    const isDark = theme ==='dark'
  return (
    <div className={` h-screen ${isDark?'bg-[#17181c] text-white':'bg-white text-black'}`}>Student List</div>
  )
}
