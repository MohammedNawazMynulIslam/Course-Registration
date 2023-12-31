
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
  const [totalCredit, setTotalCredit] =useState(0)
  const [totalHourRemains, setTotalHourRemains] =useState(0)

  const handleCourseName = (course) => {
    const isSelected = selectedCourse.find((name) => name.id === course.id);
    let count = course.credit;

    if (isSelected) {
      toast.error('No duplicates allowed');
    } else {
      selectedCourse.forEach((item)=>{
        count+=item.credit
      });
      if(count>20){
        toast.error('Cant take more than 20 hr credit');
      }
      else{
        const hourleft = 20 - count
      setTotalHourRemains(hourleft)
      setTotalCredit(count)
      setCourseName([...courseName, course]);
      setSelectedCourse([...selectedCourse, course])
      }

    }
  };
  return (
    <>
      <Header></Header>
      <div className='flex justify-evenly'>
      <Courses handleCourseName={handleCourseName}></Courses>
      <CourseDetail courseName ={courseName} totalCredit={totalCredit} totalHourRemains={totalHourRemains}></CourseDetail>
      </div>
      <ToastContainer position='top-left' autoClose={1000}></ToastContainer>
    </>
  )
}

export default App
