

import { createContext,useContext } from 'react'
type Theme = {
  theme:string,
  setTheme:React.Dispatch<React.SetStateAction<string>>
}

export const ThemeContex = createContext<Theme | null>(null)

function useThemeContext() {
  const ctx = useContext(ThemeContex)
  if(!ctx){
    throw new Error ('ThemeContex must be used inside Provider')
  }
  return ctx;
}

export default useThemeContext