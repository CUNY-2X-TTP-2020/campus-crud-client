import axios from "axios";

import 
{ 
    fetchAllCampuses,
    fetchCampus,
    addCampus
} from "./actions";

// THUNK CREATORS
export const fetchAllCampusesThunk = () => (dispatch) =>
{
    return axios.get("/api/campuses")
    .then((res) => res.data)
    .then((campuses) => dispatch(fetchAllCampuses(campuses)))
    .catch((err) => console.error(err));
};

export const fetchCampusThunk = (id) => (dispatch) =>
{
    return axios.get(`/api/campuses/${id}`)
    .then((res) => res.data)
    .then((campus) => dispatch(fetchCampus(campus)))
    .catch((err) => console.error(err));
};

export const addCampusThunk = (campus) => (dispatch) =>
{
    return axios.post("/api/campuses/", campus)
    .then((res) => res.data)
    .then((campus) => dispatch(addCampus(campus)))
    .catch((err) => console.error(err));
};