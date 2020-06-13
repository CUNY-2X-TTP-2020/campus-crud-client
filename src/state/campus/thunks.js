import axios from "axios";

import { fetchAllCampuses } from "./actions";

// THUNK CREATORS
export const fetchAllCampusesThunk = () => (dispatch) =>
{
    return axios.get("/api/campuses")
    .then((res) => res.data)
    .then((campuses) => dispatch(fetchAllCampuses(campuses)))
    .catch((err) => console.error(err));
};