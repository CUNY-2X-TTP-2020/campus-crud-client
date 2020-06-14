import React from "react";
import { Link } from "react-router-dom";

const AllCampusesView = (props) =>
{
    return (
        <div>
            {props.allCampuses.map((campus) =>
            (
                <div key={campus.id}>
                    <Link to={`/campuses/${campus.id}`}>
                        <h1>{campus.name}</h1>
                    </Link>

                    <img src={campus.imageUrl} width="150px" alt={campus.name} />
                </div>
            ))}
        </div>
    );
}

export default AllCampusesView;