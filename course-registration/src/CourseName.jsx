
const CourseName = ({listOfcourse}) => {
    const{course_title} = listOfcourse
    console.log(course_title)

    return (
        <div>
            <p className="text-md">
                <li className="list-decimal">{course_title}</li>
                </p>
        </div>
    );
};

export default CourseName;