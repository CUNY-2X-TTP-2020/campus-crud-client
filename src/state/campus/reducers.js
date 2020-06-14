import types from "./action_types";

// REDUCER
const reducer = (state = [], action) =>
{
    switch(action.type)
    {
        case types.FETCH_ALL_CAMPUSES:
            return action.payload;
        case types.FETCH_CAMPUS:
            return action.payload;
        default:
            return state;
    }
};

export default reducer;