import types from "./action_types";

// ACTION CREATORS
export function fetchAllStudents(students)
{
    return {
        type: types.FETCH_ALL_STUDENTS,
        payload: students
    };
}