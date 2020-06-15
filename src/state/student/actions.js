import types from "./action_types";

// ACTION CREATORS
export function fetchAllStudents(students)
{
    return {
        type: types.FETCH_ALL_STUDENTS,
        payload: students
    };
}

export function fetchStudent(student)
{
    return {
        type: types.FETCH_STUDENT,
        payload: student
    };
}

export function addStudent(student)
{
    return {
        type: types.ADD_STUDENT,
        payload: student
    };
}

export function deleteStudent(studentId)
{
    return {
        type: types.DELETE_STUDENT,
        payload: studentId
    };
}