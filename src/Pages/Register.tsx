
import { Form, useActionData} from 'react-router-dom'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import useThemeContext from '../components/useThemeContext';
import type { ActionFunctionArgs } from 'react-router-dom';

type Errors = {name?:string,email?:string,phone?:string,course?:string}
export async function action({request}:ActionFunctionArgs){
  
    const formData = await request.formData()
    console.log(' Data fired!')
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const course = formData.get('course') as string
 
    const errors:Errors = {}
//check student name :
if(!name.trim()){
    errors.name = "Enter student name!"
}
else if(name.length<3){
    errors.name = 'Name must atleast be 3 characters.'
}

//checking emails 
if(!email.trim()){
    errors.email = 'Email is required!'
}
else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
errors.email = 'Enter Valid email'
}

//checking phone number 
if(!phone.trim()){
    errors.phone = 'Enter phone number'
}
else if(!/^\+?[\d\s]{10,15}$/.test(phone)){
    errors.phone = 'Enter valid phone number!'
}

//checking course 
if(!course.trim()){
    errors.course = 'Please Select Course!'
}

if(Object.keys(errors).length > 0) {
    return {errors};
}

return { success:true,name,email,phone,course}
}
    

// function formValidation(name,email,phone,course){
// return {name,email,phone,course}
// }
export default function Register() {
    const actionData = useActionData() as  {errors?:Errors,success?:boolean,name?:string,email?:string,phone?:string,course?:string} | undefined
    console.log(actionData)
    const buttonDisabled = actionData?.success ===true? true:false
    console.log(buttonDisabled)
    
    const {theme} = useThemeContext()
    const isDark = theme ==='dark'

  return (
    <div className={`flex justify-center pt-20 h-screen ${isDark?'bg-[#17181c]':'bg-white'}`}>

        <Form method='post' className={` rounded-2xl flex flex-col gap-6 h-[70vh] w-[80%] p-10 shadow-2xl shadow-black md:w-[60%] lg:w-[30%] ${isDark?'bg-[#23262f] text-white':'bg-white text-black'}`}>
            <div className='text-3xl font-bold'>
              Registration Form
            </div>
            <div className={`userName w-full py-2 px-4 rounded ${isDark? 'bg-[#17181c] placeholder-white':'bg-gray-300 placeholder-black'}`}>
                <div>
                    <input 
            className='focus:outline-none w-full'
            name='name' 
            type='text' 
            placeholder='Student Name'
            required
            />
            {actionData?.errors?.name && <p className='text-red-500 text-sm'>{actionData.errors.name}</p>}
                </div>
            </div>

           <div className={`email w-full py-2 flex justify-between px-4 items-center rounded  ${isDark? 'bg-[#17181c] placeholder-white':'bg-gray-300 placeholder-black'}`}>
             <div className='w-[90%]'>
                <input 
             className='focus:outline-none w-full'
            name='email'
            type="email"
            placeholder='123@gmail.com'
            required
             />
             {actionData?.errors?.email && <p className='text-red-500 text-sm'>{actionData.errors.email}</p>}
             </div>
             <MdEmail />
           </div>
           <div className={` w-full py-2 flex justify-between px-4 items-center rounded  ${isDark? 'bg-[#17181c] placeholder-white':'bg-gray-300 placeholder-black'}`}>
             <div className='w-[90%]'>
                <input 
            className='focus:outline-none w-full'
            name='phone'
            type="text"
            placeholder='+250************'
            required
             />
                 {actionData?.errors?.phone && <p className='text-red-500 text-sm'>{actionData.errors.phone}</p>}
             </div>
             <FaPhoneAlt />
           </div>
           <div className={` flex justify-between items-center font-semibold py-2 md:gap-20 pl-2 pr-4 rounded  ${isDark? 'bg-[#17181c] placeholder-white':'bg-gray-300 placeholder-black'}`}>
             <label>Courses :</label>
             <select name='course' required aria-label="choose Course" className={`focus:outline-none ${isDark? 'bg-[#17181c] placeholder-white':'bg-gray-300 placeholder-black'}`}>
                <option value=''>Default</option>
                <option value='Math'>Math</option>
                <option value='Science'>Science</option>
                <option value='English'>English</option>
                <option value='History'>History</option>
             </select>
             <FaBookOpen />
           </div>
           <div className='flex items-center justify-center mt-6 '>
            <button disabled={buttonDisabled} type='submit' className={` py-1 px-3 rounded md:py-2 md:px-8 md:text-lg  ${isDark?'bg-[#b3c7ff] text-[#17181c]':'bg-black text-white'}`}> Submit </button>
           </div>
        </Form>
    </div>
  )
}
