import React, { Component } from "react";
import { connect } from "react-redux";

import CampusView from "./CampusView";
import { fetchCampusThunk, deleteCampusThunk } from "../../state/thunks";

// Smart container
class CampusContainer extends Component
{
    componentDidMount()
    {
        this.props.fetchCampus(this.props.match.params.id);
    }

    handleDelete = (campusId) =>
    {
        if(!window.confirm(`Are you sure you want to delete campus ${campusId}?`)) return;
        
        this.props.deleteCampus(campusId);
    }

    render()
    {
        return (
            <CampusView 
                campus={this.props.campus}
                handleDelete={this.handleDelete}
            />
        );
    }
}

// Map state to props
const mapState = (state) =>
{
    return {
        campus: state.campus
    };
}

// Map dispatch to props
const mapDispatch = (dispatch) =>
{
    return {
        fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
        deleteCampus: (campusId) => dispatch(deleteCampusThunk(campusId))
    };
}

// Export our store-connected container by default
export default connect(mapState, mapDispatch)(CampusContainer);