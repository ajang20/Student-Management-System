import English from '../assets/English.png'
import Math from '../assets/Math.avif'
import History from '../assets/History.avif'
import science from '../assets/science.jpg'
import { Link } from 'react-router-dom'


const courses = [{
                  course:'Math',
                  description:'Algebra, Geometry, Calculus',
                  img:Math
                },
                  {
                  course:'Science',
                  description:'Physics, Chemistry, Biology',
                  img:science
                },
                  {
                  course:'English',
                  description:'Literature, Writing, Grammar',
                  img:English
                },
                  {
                  course:'History',
                  description:'World History, Civilizations, Events',
                  img:History
                }

                ]

function Courses() {
  
  const mappedCourses = courses.map( subject => <Link to={`/StudentList/courses/${subject.course}`} state={[subject]}>
                <div className='flex flex-col items-center'>
                         <img src={subject.img} alt={subject.course} className='w-60'/>
                         <span className='text-xl font-bold'>{subject.course}</span>                
                </div>
                </Link>)
          
  return (
    <div className="h-screen flex flex-wrap pl-30 gap-20 py-10 border-t mx-6 mt-5">
{mappedCourses}
    </div>
  )
}

export default Courses 