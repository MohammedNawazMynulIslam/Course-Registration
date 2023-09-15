import CourseName from "./CourseName";

const CourseDetail = ({courseName,totalCredit,totalHourRemains}) => {
    return (
        <div className="">
            <h2 className="text-[#2F80ED] my-5">Credit Hour Remaining {totalHourRemains}</h2>
            <hr />
            <h3 className="font-bold my-5">Course Name: {courseName.length} </h3>
            {
                courseName.map( listOfcourse=><CourseName listOfcourse={listOfcourse}></CourseName>)
            }
            <hr className="my-5" />
            <h3 className="my-10">Total Credit Hour : {totalCredit}</h3>
        </div>
    );
};

export default CourseDetail;