import React, { Component } from "react";
import { connect } from "react-redux";

import StudentView from "./StudentView";
import { fetchStudentThunk } from "../../state/thunks";

// Smart container
class StudentContainer extends Component
{
    componentDidMount()
    {
        this.props.fetchStudent(this.props.match.params.id);
    }

    render()
    {
        return (
            <StudentView 
                student={this.props.student}
            />
        );
    }
}

// Map state to props
const mapState = (state) =>
{
    return {
        student: state.student
    };
}

// Map dispatch to props
const mapDispatch = (dispatch) =>
{
    return {
        fetchStudent: (id) => dispatch(fetchStudentThunk(id))
    };
}

// Export our store-connected container by default
export default connect(mapState, mapDispatch)(StudentContainer);