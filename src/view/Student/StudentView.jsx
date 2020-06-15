import React from "react";
import { Link } from "react-router-dom";

const StudentView = (props) =>
{
    let campusDisplay;

    if(props.student.campus) 
    {
        campusDisplay = 
        (
            <Link to={`/campuses/${props.student.campus.id}`}>
                <h3>{props.student.campus.name}</h3>
            </Link>
        );
    }
    else campusDisplay = <p>Student is not enrolled in any campus</p>;

    return (
        <div>
            <img src={props.student.imageUrl} alt={props.student.firstName} />
            <h1>{props.student.firstName} {props.student.lastName}</h1>
            <p>{props.student.email}</p>
            <p>GPA: {props.student.gpa}</p>
            <button onClick={() => props.handleDelete(props.student.id)}>Delete</button>

            {campusDisplay}
        </div>
    );
};

export default StudentView;