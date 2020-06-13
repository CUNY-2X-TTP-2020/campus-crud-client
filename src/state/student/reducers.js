import types from "./action_types";

// REDUCER
const reducer = (state = [], action) =>
{
    switch(action.type)
    {
        case types.FETCH_ALL_STUDENTS:
            return action.payload;
        default:
            return state;
    }
};

export default reducer;