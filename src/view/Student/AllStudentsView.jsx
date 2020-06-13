import React from "react";

const AllStudentsView = (props) =>
{
    return (
        <div>
            {props.allStudents.map((student) =>
            (
                <div key={student.id}>
                    <h1>{student.firstName} {student.lastName}</h1>
                </div>
            ))}
        </div>
    );
}

export default AllStudentsView;