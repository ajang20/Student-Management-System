

import { NavLink } from 'react-router-dom'
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import useThemeContext from './useThemeContext';

function Header() {
    const {theme,setTheme} = useThemeContext()
    const isDark = theme ==='dark'
    function handleTheme(){
        setTheme(prev => prev === 'light'?'dark':'light')
    }  
  return (
   <div className={`sticky z-50 top-0 ${ isDark? 'bg-[#17181c]':'bg-white'}`}>
     <header className={`h-20 flex px-8 justify-between items-center shadow-2xl md:justify-between  md:pr-20 md:pl-50 ${isDark ? 'bg-[#17181c] text-white' : 'bg-white text-black'} `}>
        <nav className='flex items-center gap-6 justify-center md:gap-20'>
      <NavLink className={({isActive}) => isActive ? 'underline font-bold':''} to='/' >Register</NavLink>
      <NavLink className={({isActive}) => isActive ? 'underline font-bold':''}  to='/studentList'>Student List</NavLink>
        </nav>
     <div  className='text-2xl' onClick={handleTheme}>
        {isDark? <CiLight /> :<MdDarkMode/>
                       }
     </div>
    </header>
   </div>
  )
}

export default Header