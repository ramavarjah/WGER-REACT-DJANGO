import { GET_WORKOUT, DELETE_WORKOUT, ADD_WORKOUT, CLEAR_WORKOUT } from '../actions/types.js';

const initialState = {
  workouts: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_WORKOUT:
      return {
        ...state,
        workouts: action.payload,
      };
    case DELETE_WORKOUT:
      return {
        ...state,
        workouts: state.workouts.filter((Workout) => Workout.id !== action.payload),
      };
    case ADD_WORKOUT:
      return {
        ...state,
        workouts: [...state.workouts, action.payload],
      };
    case CLEAR_WORKOUT:
      return {
        ...state,
        workouts: [],
      };
    default:
      return state;
  }
}
