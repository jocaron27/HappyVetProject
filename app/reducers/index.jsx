import axios from 'axios'

//Initial State
const initialState = {
  allCampuses: [],
  allStudents: [],
  selectedCampus: {},
  selectedStudent: {},
  newCampusEntryName: '',
  newCampusEntryLocation: '',
  newCampusEntryImage: '',
  newStudentEntryFirstName: '',
  newStudentEntryLastName: '',
  newStudentEntryAge: '',
  newStudentEntryEmail: '',
  newStudentEntryCampusId: ''
}

//Constants
const GET_CAMPUS = 'GET_CAMPUS';
const GET_CAMPUSES = 'GET_CAMPUSES';
const WRITE_CAMPUS_NAME = 'WRITE_CAMPUS_NAME';
const WRITE_CAMPUS_LOCATION = 'WRITE_CAMPUS_LOCATION';
const SELECT_CAMPUS_IMAGE = 'SELECT_CAMPUS_IMAGE';
const ADD_CAMPUS = 'ADD_CAMPUS';
const GET_STUDENT = 'GET_STUDENT';
const GET_STUDENTS = 'GET_STUDENTS';
const WRITE_STUDENT_FIRST_NAME = 'WRITE_STUDENT_FIRST_NAME';
const WRITE_STUDENT_LAST_NAME = 'WRITE_STUDENT_LAST_NAME';
const WRITE_STUDENT_AGE = 'WRITE_STUDENT_AGE';
const WRITE_STUDENT_EMAIL = 'WRITE_STUDENT_EMAIL';
const WRITE_STUDENT_CAMPUS = 'WRITE_STUDENT_CAMPUS';
const ADD_STUDENT = 'ADD_STUDENT';

//Action Creators
export function getCampuses(campuses) {
  return {type: GET_CAMPUSES, campuses}
}

export function getStudents(students) {
  return {type: GET_STUDENTS, students}
}

export function getCampus(campus) {
  return {type: GET_CAMPUS, campus}
}

export function getStudent(student) {
  return {type: GET_STUDENT, student}
}

export function writeCampusName(campusName) {
  return {type: WRITE_CAMPUS_NAME, campusName}
}

export function writeCampusLocation(campusLocation) {
  return {type: WRITE_CAMPUS_LOCATION, campusLocation}
}

export function selectCampusImage(campusImage) {
  return {type: SELECT_CAMPUS_IMAGE, campusImage}
}

export function addCampus(campus) {
  return {type: ADD_CAMPUS, campus}
}

export function writeStudentFirstName(studentFirstName) {
  return {type: WRITE_STUDENT_FIRST_NAME, studentFirstName}
}

export function writeStudentLastName(studentLastName) {
  return {type: WRITE_STUDENT_LAST_NAME, studentLastName}
}

export function writeStudentAge(studentAge) {
  return {type: WRITE_STUDENT_AGE, studentAge}
}

export function writeStudentEmail(studentEmail) {
  return {type: WRITE_STUDENT_EMAIL, studentEmail}
}

export function writeStudentCampus(studentCampusId) {
  return {type: WRITE_STUDENT_CAMPUS, studentCampusId}
}

export function addStudent(student) {
  return {type: ADD_STUDENT, student}
}

//Thunk Creators
export function fetchCampuses() {
  return function thunk (dispatch) {
    return axios.get('/api/campuses')
    .then(res => res.data)
    .then(campuses => dispatch(getCampuses(campuses)))
    .catch(console.error)
  }
}

export function fetchStudents() {
  return function thunk (dispatch) {
    return axios.get('/api/students')
    .then(res => res.data)
    .then(students => dispatch(getStudents(students)))
    .catch(console.error)
  }
}

export function fetchCampus() {
  return function thunk (dispatch) {
    return axios.get('/api/campuses/:id')
    .then(res => res.data)
    .then(campus => dispatch(getCampus(campus)))
    .catch(console.error)
  }
}

export function fetchStudent() {
  return function thunk (dispatch) {
    return axios.get('/api/students/:id')
    .then(res => res.data)
    .then(student => dispatch(getStudent(student)))
    .catch(console.error)
  }
}

export function createCampus(campus, history) {
  return function thunk (dispatch) {
    return axios.post('/api/campuses', campus)
    .then(res => res.data)
    .then(newCampus => {
      dispatch(addCampus(newCampus))
      history.push(`/campuses/${newCampus.id}`);
    });
  }
}

export function createStudent(student) {
  return function thunk (dispatch) {
    return axios.post('/api/students', student)
    .then(res => res.data)
    .then(newStudent => {
      dispatch(addStudent(newStudent))
    });
  }
}

//Reducer
const rootReducer = function(state = initialState, action) {
  switch (action.type) {
    case GET_CAMPUSES:
      return Object.assign({}, state, { allCampuses: action.campuses })
    case GET_STUDENTS:
      return Object.assign({}, state, { allStudents: action.students })
    case GET_CAMPUS:
      return Object.assign({}, state, { selectedCampus: action.campus })
    case GET_STUDENT:
      return Object.assign({}, state, { selectedStudent: action.student})
    case WRITE_CAMPUS_NAME:
      return Object.assign({}, state, { newCampusEntryName: action.campusName})
    case WRITE_CAMPUS_LOCATION:
      return Object.assign({}, state, { newCampusEntryLocation: action.campusLocation})
    case SELECT_CAMPUS_IMAGE:
    return Object.assign({}, state, { newCampusEntryImage: action.campusImage})
    case ADD_CAMPUS:
      return Object.assign({}, state, { allCampuses: [ ...state.allCampuses, action.campus]})
    case WRITE_STUDENT_FIRST_NAME:
      return Object.assign({}, state, { newStudentEntryFirstName: action.studentFirstName })
    case WRITE_STUDENT_LAST_NAME:
      return Object.assign({}, state, { newStudentEntryLastName: action.studentLastName })
    case WRITE_STUDENT_AGE:
      return Object.assign({}, state, { newStudentEntryAge: action.studentAge })
    case WRITE_STUDENT_EMAIL:
      return Object.assign({}, state, { newStudentEntryEmail: action.studentEmail })
    case WRITE_STUDENT_CAMPUS:
      return Object.assign({}, state, { newStudentEntryCampusId: action.studentCampusId })
    case ADD_STUDENT:
      return Object.assign({}, state, { allStudents: [ ...state.allStudents, action.student]})
    default: return state
  }
};

export default rootReducer
