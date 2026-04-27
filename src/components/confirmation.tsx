import { Outlet} from "react-router-dom"
import toast from "react-hot-toast"
import { useLocation } from "react-router-dom"
import useThemeContext from '../components/useThemeContext';

function confirmation() {
const location = useLocation().state
 const {theme} = useThemeContext()
const isDark = theme ==='dark'



if(!location ){

    return <div className={`h-screen ${isDark?'bg-[#17181c]':'bg-white'}`}>
            {toast.error('User must first Register')}
    </div>
}
  return (
    <Outlet/> 
  )
}

export default confirmation