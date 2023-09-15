
import { useState } from 'react'
import './App.css'
import CourseDetail from './CourseDetail'
import Header from './components/Header'
import Courses from './components/courses'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [courseName, setCourseName] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState([]);

  const handleCourseName = (course) => {
    const isSelected = selectedCourse.find((name) => name.id === course.id);

    if (isSelected) {
      toast.error('No duplicates allowed');
    } else {
      setCourseName([...courseName, course]);
      setSelectedCourse([...selectedCourse, course]);
    }
  };
  return (
    <>
      <Header></Header>
      <div className='flex justify-evenly'>
      <Courses handleCourseName={handleCourseName}></Courses>
      <CourseDetail courseName ={courseName}></CourseDetail>
      </div>
      <ToastContainer position='top-left' autoClose={1000}></ToastContainer>
    </>
  )
}

export default App
