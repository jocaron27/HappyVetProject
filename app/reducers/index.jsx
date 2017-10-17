import axios from 'axios'

//Initial State
const initialState = {
  allCampuses: [],
  allStudents: [],
  selectedCampus: {}
}

//Constants
const GET_CAMPUS = 'GET_CAMPUS';
const GET_CAMPUSES = 'GET_CAMPUSES';
const ADD_CAMPUS = 'ADD_CAMPUS';
const GET_STUDENT = 'GET_STUDENT';
const GET_STUDENTS = 'GET_STUDENTS';
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

//Thunk Creators
export function fetchCampuses(dispatch) {
  axios.get('/api/campuses')
  .then(res => res.data)
  .then(campuses => dispatch(getCampuses(campuses)))
  .catch(console.error)
}

export function fetchStudents(dispatch) {
  axios.get('/api/students')
  .then(res => res.data)
  .then(students => dispatch(getStudents(students)))
  .catch(console.error)
}

export function fetchCampus(dispatch) {
  axios.get('/api/campuses/:id')
  .then(res => res.data)
  .then(campus => dispatch(getCampus(campus)))
  .catch(console.error)
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
    default: return state
  }
};

export default rootReducer
