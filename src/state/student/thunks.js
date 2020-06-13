import axios from "axios";

import { fetchAllStudents } from "./actions";

// THUNK CREATORS
export const fetchAllStudentsThunk = () => (dispatch) =>
{
    return axios.get("/api/students")
    .then((res) => res.data)
    .then((students) => dispatch(fetchAllStudents(students)))
    .catch((err) => console.error(err));
};