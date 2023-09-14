import CourseName from "./CourseName";

const CourseDetail = ({courseName}) => {
    console.log(courseName)
    return (
        <div className="">
            <h3 className="font-bold">Course Name: {courseName.length} </h3>
            {
                courseName.map( listOfcourse=><CourseName listOfcourse={listOfcourse}></CourseName>)
            }
        </div>
    );
};

export default CourseDetail;