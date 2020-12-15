import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth';

import { GET_WORKOUT, DELETE_WORKOUT, ADD_WORKOUT } from './types';

// GET WORKOUT
export const getWorkout = () => (dispatch, getState) => {
  axios
    .get('/api/manager/', tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_WORKOUT,
        payload: res.data,
      });
    })
    // .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

// DELETE WORKOUT
export const deleteWorkout = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/manager/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ deleteWorkout: 'Workout Deleted' }));
      dispatch({
        type: DELETE_WORKOUT,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

// ADD WORKOUT
export const addWorkout = (workout) => (dispatch, getState) => {
  axios
    .post('/api/manager/', workout, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addWorkout: 'Workout Added' }));
      dispatch({
        type: ADD_WORKOUT,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};
