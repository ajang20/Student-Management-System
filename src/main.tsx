import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Register from './Pages/Register.tsx'
import StudentList from './Pages/Student List.tsx'
import Layout from './components/Layout.tsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}>
      <Route path ='/' element={<Register/>}/>
      <Route path='/studentList' element={<StudentList/>}/>
      </Route>
    </Routes>
    </BrowserRouter>

  </StrictMode>,
)
