// Barrel file for exporting all thunks

export 
{ 
    fetchAllCampusesThunk,
    fetchCampusThunk,
    addCampusThunk,
    deleteCampusThunk
} from "./campus/thunks";

export 
{ 
    fetchAllStudentsThunk,
    fetchStudentThunk,
    addStudentThunk,
    deleteStudentThunk
} from "./student/thunks";