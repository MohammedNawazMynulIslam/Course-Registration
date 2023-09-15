import { FaBookOpen,FaDollarSign } from 'react-icons/fa';
const Course = ({course,handleCourseName}) => {
    const{course_img,course_title,course_description,price,credit} = course
    return (
        <div>
            <div className="card w-[312px] h-[402px] bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={course_img} alt="" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{course_title}</h2>
    <p>{course_description}</p>
    <div className="flex gap-3">
      <div className='flex justify-center items-center'>
        <FaDollarSign></FaDollarSign>
        <p>Price = {price}</p>
        </div>
        <div className='flex gap-2 justify-center items-center'>
        <p><FaBookOpen></FaBookOpen></p>
        <p><span>Credit: {credit}hr</span> </p>
        </div>

        </div>

    <div className="card-actions">
      <button onClick={()=> handleCourseName(course)} className="btn bg-[#2F80ED] text-white w-[280px]">Select</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Course;