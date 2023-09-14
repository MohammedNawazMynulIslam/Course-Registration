
import { useState } from 'react'
import './App.css'
import CourseDetail from './CourseDetail'
import Header from './components/Header'
import Courses from './components/courses'

function App() {
  const [courseName , setCourseName] = useState([])
  const handleCourseName = course=>{
    const courseNameAdded = [...courseName, course]
   setCourseName(courseNameAdded)
  }
  return (
    <>
      <Header></Header>
      <div className='flex justify-evenly'>
      <Courses handleCourseName={handleCourseName}></Courses>
      <CourseDetail courseName ={courseName}></CourseDetail>
      </div>
    </>
  )
}

export default App
