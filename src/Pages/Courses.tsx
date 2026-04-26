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
                  description:'Algebra, Geometry, Calculus',
                  img:English
                },
                  {
                  course:'History',
                  description:'Algebra, Geometry, Calculus',
                  img:History
                }

                ]

function Courses() {
  
  const mappedCourses = courses.map( subject => <Link to={`/StudentList/courses/${subject.course}`} state={[subject]}>
                <div className='flex flex-col gap-4 rounded-2xl pb-6 items-center  shadow-2xl p-8 shadow-black'>
                         <img src={subject.img} alt={subject.course} className='w-60'/>
                         <span className='text-xl font-bold'>{subject.course}</span>                
                </div>
                </Link>)
          
  return (
    <div className='md:h-screen'>
    <div className=" flex flex-wrap justify-center gap-10 py-6 mx-6 mt-5">
{mappedCourses}
    </div>
    </div>
  )
}

export default Courses 