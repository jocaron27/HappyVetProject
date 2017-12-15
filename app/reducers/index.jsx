import axios from 'axios'

//Initial State
const initialState = {
  allVets: [],
  currentVet: {},
}

//Constants
const GET_VET = 'GET_VET';
const GET_VETS = 'GET_VETS';

//Action Creators
export function getVets(vets) {
  return {type: GET_VETS, vets}
}

export function getVet(vet) {
  return {type: GET_VET, vet}
}

//Thunk Creators
export function fetchVets() {
  return function thunk (dispatch) {
    return axios.get('/api/vets')
    .then(res => res.data)
    .then(vets => dispatch(getVets(vets)))
    .catch(console.error)
  }
}

export function fetchVet() {
  return function thunk (dispatch) {
    return axios.get('/api/vets/:id')
    .then(res => res.data)
    .then(vet => dispatch(getVet(vet)))
    .catch(console.error)
  }
}


//Reducer
const rootReducer = function(state = initialState, action) {
  switch (action.type) {
    case GET_VETS:
      return Object.assign({}, state, { allVets: action.vets })
    case GET_VET:
      return Object.assign({}, state, { currentVet: action.vet })
    default: return state
  }
};

export default rootReducer
