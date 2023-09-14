

const CourseName = ({listOfcourse}) => {
    const{course_title} = listOfcourse

    return (
        <div>
            <h3 className="text-md">{course_title}</h3>
        </div>
    );
};

export default CourseName;