import axios from "axios";

import 
{ 
    fetchAllStudents, 
    fetchStudent,
    addStudent
} from "./actions";

// THUNK CREATORS
export const fetchAllStudentsThunk = () => (dispatch) =>
{
    return axios.get("/api/students")
    .then((res) => res.data)
    .then((students) => dispatch(fetchAllStudents(students)))
    .catch((err) => console.error(err));
};

export const fetchStudentThunk = (id) => (dispatch) =>
{
    return axios.get(`/api/students/${id}`)
    .then((res) => res.data)
    .then((student) => dispatch(fetchStudent(student)))
    .catch((err) => console.error(err)); 
};

export const addStudentThunk = (student) => (dispatch) =>
{
    return axios.post("/api/students/", student)
    .then((res) => res.data)
    .then((student) => dispatch(addStudent(student)))
    .catch((err) => console.error(err));
};