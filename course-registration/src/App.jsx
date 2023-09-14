
import './App.css'
import CourseDetail from './CourseDetail'
import Header from './components/Header'
import Courses from './components/courses'

function App() {
  return (
    <>
      <Header></Header>
      <div className='flex justify-between'>
      <Courses></Courses>
      <CourseDetail></CourseDetail>
      </div>
    </>
  )
}

export default App
