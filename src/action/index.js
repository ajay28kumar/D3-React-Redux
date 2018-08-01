import actionTypes from '../action_types';

export const clickAction = () => (dispatch, getState) => {
  return dispatch({type: actionTypes.DB_CLICK, payload: {}})
  
};