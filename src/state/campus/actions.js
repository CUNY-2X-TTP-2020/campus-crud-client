import types from "./action_types";

// ACTION CREATORS
export function fetchAllCampuses(campuses)
{
    return {
        type: types.FETCH_ALL_CAMPUSES,
        payload: campuses
    };
}