import types from "./action_types";

// ACTION CREATORS
export function fetchAllCampuses(campuses)
{
    return {
        type: types.FETCH_ALL_CAMPUSES,
        payload: campuses
    };
}

export function fetchCampus(campus)
{
    return {
        type: types.FETCH_CAMPUS,
        payload: campus
    };
}

export function addCampus(campus)
{
    return {
        type: types.ADD_CAMPUS,
        payload: campus
    };
}