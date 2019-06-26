import { Map as ImmutableMap, List as ImmutableList, fromJS } from 'immutable';

// Actions
const LOAD_REQUEST = 'users/LOAD_REQUEST';
const LOAD_SUCCESS = 'users/LOAD_SUCCESS';
const LOAD_FAILURE = 'users/LOAD_FAILURE';

const ADD = 'users/ADD';

// Reducer
const initialState = ImmutableMap({
  records: ImmutableList([])
});

export default function reducer(state = initialState, action = {}) {
  switch(action.type) {
    case LOAD_REQUEST:
      return state;
    case LOAD_SUCCESS:
      return state.merge({ records: ImmutableList(action.users) });
    case LOAD_FAILURE:
      return state;
    case ADD:
      return state.merge({ records: state.get('records').push(action.name) });
    default:
      return state;
  }
}

// Action Creators
export function loadRequest() {
  return { type: LOAD_REQUEST };
}
export function loadSuccess(users) {
  return { type: LOAD_SUCCESS, users: users };
}
export function loadFailure() {
  return { type: LOAD_FAILURE, errors: ['Something'] };
}

export function addUser(name) {
  return { type: ADD, name: name };
}

export function getUsers() {
  return (dispatch) => {
    dispatch(loadRequest());
    dispatch(loadSuccess(['test1']));
  }
}