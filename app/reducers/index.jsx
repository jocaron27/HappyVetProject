import { combineReducers } from 'redux'

//Initial State
const initialState = {
  allCampuses : [],
  allStudents : []
}

//Action Creators
const GET_CAMPUS = 'GET_CAMPUS';
const GET_CAMPUSES = 'GET_CAMPUSES';
const ADD_CAMPUS = 'ADD_CAMPUS';
const GET_STUDENT = 'GET_STUDENT';
const GET_STUDENTS = 'GET_STUDENTS';
const ADD_STUDENT = 'ADD_STUDENT';

//Thunk Creators

//Reducer
const rootReducer = function(state = initialState, action) {
  switch(action.type) {
    default: return state
  }
};

export default rootReducer
