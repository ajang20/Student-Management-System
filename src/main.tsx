import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Register,{action} from './Pages/Register.tsx'
import StudentList,{loader as StudentlistLoader} from './Pages/Student List.tsx'
import Layout from './components/Layout.tsx'
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom'
import Courses from './Pages/Courses.tsx'
import StudentDashboard from './Pages/StudentDashboard.tsx'
import CourseDetails from './CourseDetails.tsx'


const router = createBrowserRouter(
  createRoutesFromElements(
   <Route element={<Layout/>}>
      <Route
       path ='/'
        element={<Register/>}
        action={action}/>
      <Route 
      path='/StudentList' 
      element={<StudentDashboard/>}
      
      >
        <Route
         index 
         path='/StudentList'
          element={<StudentList/>}
          loader={StudentlistLoader}/>
        <Route path='courses' element={<Courses/>}>
      </Route>
       <Route path='/StudentList/courses/:course' element={<CourseDetails/>}/>
      </Route>
      </Route>
  )
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
 <RouterProvider router={router}/>
  </StrictMode>,
)
