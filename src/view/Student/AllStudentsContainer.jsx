import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import AllStudentsView from "./AllStudentsView";
import { fetchAllStudentsThunk } from "../../state/student/thunks";

// Smart container
class AllStudentsContainer extends Component
{
    componentDidMount()
    {
        this.props.fetchAllStudents();
    }

    render()
    {
        return (
            <AllStudentsView 
                allStudents={this.props.allStudents}
            />
        );
    }
}

// Type check props
AllStudentsContainer.propTypes =
{
    allStudents: PropTypes.array.isRequired
}

// Map state to props
const mapState = (state) =>
{
    return {
        allStudents: state.student
    };
}

// Map dispatch to props
const mapDispatch = (dispatch) =>
{
    return {
        fetchAllStudents: () => dispatch(fetchAllStudentsThunk())
    };
}

// Export our store-connected container by default
export default connect(mapState, mapDispatch)(AllStudentsContainer);