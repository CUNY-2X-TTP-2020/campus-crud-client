import React, { Component } from "react";
import { connect } from "react-redux";

import CampusView from "./CampusView";
import { fetchCampusThunk } from "../../state/thunks";

// Smart container
class CampusContainer extends Component
{
    componentDidMount()
    {
        this.props.fetchCampus(this.props.match.params.id);
    }

    render()
    {
        return (
            <CampusView 
                campus={this.props.campus}
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
        fetchCampus: (id) => dispatch(fetchCampusThunk(id))
    };
}

// Export our store-connected container by default
export default connect(mapState, mapDispatch)(CampusContainer);