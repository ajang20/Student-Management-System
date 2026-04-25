

import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import { ThemeContex } from './useThemeContext'
export default function Layout() {
const [theme,setTheme] = React.useState<string>('light')
  return (
    <div>
      <ThemeContex.Provider value={{theme,setTheme}}>
        <Header/>
        <Outlet/>
        </ThemeContex.Provider>
    </div>
  )
}
