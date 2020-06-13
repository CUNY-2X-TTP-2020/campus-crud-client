import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import AllCampusesView from "./AllCampusesView";
import { fetchAllCampusesThunk } from "../../state/campus/thunks";

// Smart container
class AllCampusesContainer extends Component
{
    componentDidMount()
    {
        this.props.fetchAllCampuses();
    }

    render()
    {
        return(
            <AllCampusesView 
                allCampuses={this.props.allCampuses}
            />
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
        fetchAllCampuses: () => dispatch(fetchAllCampusesThunk())
    };
}

// Export our store-connected container by default
export default connect(mapState, mapDispatch)(AllCampusesContainer);