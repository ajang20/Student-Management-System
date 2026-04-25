import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Register,{action} from './Pages/Register.tsx'
import StudentList from './Pages/Student List.tsx'
import Layout from './components/Layout.tsx'
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
   <Route element={<Layout/>}>
      <Route
       path ='/'
        element={<Register/>}
        action={action}/>
      <Route path='/studentList' element={<StudentList/>}/>
      </Route>
  )
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
 <RouterProvider router={router}/>
  </StrictMode>,
)
