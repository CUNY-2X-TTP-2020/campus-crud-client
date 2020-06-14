import React from "react";
import { Link } from "react-router-dom";

const AllStudentsView = (props) =>
{
    return (
        <div>
            {props.allStudents.map((student) =>
            (
                <div key={student.id}>
                    <Link to={`/students/${student.id}`}>
                        <h1>{student.firstName} {student.lastName}</h1>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default AllStudentsView;