import types from "./action_types";

// REDUCER
const reducer = (state = [], action) =>
{
    switch(action.type)
    {
        case types.FETCH_ALL_STUDENTS:
            return action.payload;
        case types.FETCH_STUDENT:
            return action.payload;
        case types.ADD_STUDENT:
            return [...state, action.payload];
        default:
            return state;
    }
};

export default reducer;