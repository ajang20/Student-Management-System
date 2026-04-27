

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

// export function ThemeProvider({children}:{children:ReactNode}){
//   const [theme,setTheme] = React.useState<string>('light')
//   return (
//     <ThemeContex.Provider value={{theme,setTheme}}>
//       {children}
//     </ThemeContex.Provider>
//   )
// }
export default useThemeContext