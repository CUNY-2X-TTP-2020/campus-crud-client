import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import AllStudentsView from "./AllStudentsView";
import { fetchAllStudentsThunk, addStudentThunk } from "../../state/student/thunks";

// Smart container
class AllStudentsContainer extends Component
{
    componentDidMount()
    {
        this.props.fetchAllStudents();
    }

    handleSubmit = (event) =>
    {
        // Prevent browser refresh
        event.preventDefault();

        const firstName = event.target.firstName.value;
        const lastName = event.target.lastName.value;
        const email = event.target.email.value;
        const imageUrl = event.target.imageUrl.value;

        let newStudent =
        {
            firstName: firstName,
            lastName: lastName,
            email: email,
            imageUrl: imageUrl
        };
        this.props.addStudent(newStudent);

        event.target.reset();
    }

    render()
    {
        return (
            <div>
                <fieldset>
                    <legend>Add New Student</legend>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="firstName">First Name: </label>
                        <input type="text" name="firstName" placeholder="First Name" required />
                        <br/>
                        <label htmlFor="lastName">Last Name: </label>
                        <input type="text" name="lastName" placeholder="Last Name" required />
                        <br/>
                        <label htmlFor="email">Email: </label>
                        <input type="text" name="email" placeholder="Email" required />
                        <br/>
                        <label htmlFor="gpa">GPA: </label>
                        <input type="number" name="gpa" step="0.01" min="0.00" max="4.00" placeholder="4.00" />
                        <br/>
                        <label htmlFor="imageUrl">Image Url: </label>
                        <input type="text" name="imageUrl" placeholder="https://via.placeholder.com/150" />
                        <br/>
                        <button type="submit">Submit</button>
                    </form>
                </fieldset>

                <AllStudentsView 
                    allStudents={this.props.allStudents}
                />
            </div>
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
        fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
        addStudent: (student) => dispatch(addStudentThunk(student))
    };
}

// Export our store-connected container by default
export default connect(mapState, mapDispatch)(AllStudentsContainer);