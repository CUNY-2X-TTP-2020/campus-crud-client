import React from "react";

const AllCampusesView = (props) =>
{
    return (
        <div>
            {props.allCampuses.map((campus) =>
            (
                <div key={campus.id}>
                    <h1>{campus.name}</h1>

                    <img src={campus.imageUrl} width="150px" alt={campus.name} />
                </div>
            ))}
        </div>
    );
}

export default AllCampusesView;