import React from "react";
import { Link } from "react-router-dom";

const AllCampusesView = (props) =>
{
    if(!props.allCampuses.length) return <div>There are no campuses</div>;

    return (
        <div>
            {props.allCampuses.map((campus) =>
            (
                <div key={campus.id}>
                    <Link to={`/campuses/${campus.id}`}>
                        <h1>{campus.name}</h1>
                    </Link>

                    <img src={campus.imageUrl} width="150px" alt={campus.name} />
                    <p>{campus.students.length} students</p>

                    <button onClick={() => props.handleDelete(campus.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default AllCampusesView;