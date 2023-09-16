import { useEffect, useState } from "react";
import Course from "./Course";

const Courses = ({handleCourseName}) => {
    const [course , setCourse] = useState([])
    useEffect(()=>{
        fetch('Course.json')
        .then(res=>res.json())
        .then(data=>setCourse(data))
    },[])
    return (
        <div>
        <div className="grid grid-cols-3 gap-4">
            {
                course.map(course=><Course course={course}
                    handleCourseName={handleCourseName}></Course>)
            }

        </div>
        </div>
    );
};

export default Courses;