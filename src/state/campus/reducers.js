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
        case types.ADD_CAMPUS:
            return [...state, action.payload];
        case types.DELETE_CAMPUS:
            return state.filter((campus) => campus.id !== action.payload);
        default:
            return state;
    }
};

export default reducer;