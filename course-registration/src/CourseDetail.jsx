import CourseName from "./CourseName";

const CourseDetail = ({courseName,totalCredit,totalHourRemains}) => {
    return (
        <div className="">
            <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
  <h2 className="text-[#2F80ED] my-5">Credit Hour Remaining {totalHourRemains}</h2>
            <hr />
            <h3 className="font-extrabold text-2xl my-5">Course Name  </h3>
            <ol>
            {
                courseName.map( listOfcourse=><CourseName listOfcourse={listOfcourse}></CourseName>)
            }
            </ol>
            <hr className="my-5" />
            <h3 className="my-10">Total Credit Hour : {totalCredit}</h3>
    <div className="card-actions justify-end">

    </div>
  </div>
</div>

        </div>
    );
};

export default CourseDetail;