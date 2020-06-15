import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import AllCampusesView from "./AllCampusesView";
import 
{ 
    fetchAllCampusesThunk, 
    addCampusThunk,
    deleteCampusThunk
} from "../../state/campus/thunks";

// Smart container
class AllCampusesContainer extends Component
{
    componentDidMount()
    {
        this.props.fetchAllCampuses();
    }

    handleSubmit = (event) =>
    {
        // Prevent browser refresh
        event.preventDefault();

        const name = event.target.name.value;
        const address = event.target.address.value;
        const description = event.target.description.value;
        const imageUrl = event.target.imageUrl.value;

        let newCampus =
        {
            name: name,
            address: address,
            description: description,
            imageUrl: imageUrl
        };
        this.props.addCampus(newCampus);

        event.target.reset();
    }

    handleDelete = (campusId) =>
    {
        if(!window.confirm(`Are you sure you want to delete campus ${campusId}?`)) return;
        
        console.log("Delete the campus");
        this.props.deleteCampus(campusId);
    }

    render()
    {
        return(
            <div>
                <fieldset>
                    <legend>Add New Campus</legend>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="name">Name: </label>
                        <input type="text" name="name" placeholder="Campus Name" required />
                        <br/>
                        <label htmlFor="address">Address: </label>
                        <input type="text" name="address" placeholder="Campus Address" required />
                        <br/>
                        <label htmlFor="description">Description: </label>
                        <input type="text" name="description" placeholder="Campus Description" />
                        <br/>
                        <label htmlFor="imageUrl">Image Url: </label>
                        <input type="text" name="imageUrl" placeholder="https://via.placeholder.com/150" />
                        <br/>
                        <button type="submit">Submit</button>
                    </form>
                </fieldset>
    
                <AllCampusesView 
                    allCampuses={this.props.allCampuses}
                    handleDelete={this.handleDelete}
                />
            </div>
        );
    }
}

// Type check props
AllCampusesContainer.propTypes =
{
    allCampuses: PropTypes.array.isRequired
}

// Map state to props
const mapState = (state) =>
{
    return {
        allCampuses: state.campus
    };
}

// Map dispatch to props
const mapDispatch = (dispatch) =>
{
    return {
        fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
        addCampus: (campus) => dispatch(addCampusThunk(campus)),
        deleteCampus: (campusId) => dispatch(deleteCampusThunk(campusId))
    };
}

// Export our store-connected container by default
export default connect(mapState, mapDispatch)(AllCampusesContainer);