import React, { Component } from "react";
import { connect } from "react-redux";

import StudentView from "./StudentView";
import { fetchStudentThunk, deleteStudentThunk } from "../../state/thunks";

// Smart container
class StudentContainer extends Component
{
    componentDidMount()
    {
        this.props.fetchStudent(this.props.match.params.id);
    }

    handleDelete = (studentId) =>
    {
        if(!window.confirm(`Are you sure you want to delete student ${studentId}?`)) return;

        this.props.deleteStudent(studentId);
    }

    render()
    {
        return (
            <StudentView 
                student={this.props.student}
                handleDelete={this.handleDelete}
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
        fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
        deleteStudent: (studentId) => dispatch(deleteStudentThunk(studentId))
    };
}

// Export our store-connected container by default
export default connect(mapState, mapDispatch)(StudentContainer);