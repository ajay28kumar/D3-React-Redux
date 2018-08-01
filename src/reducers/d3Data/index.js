import actionTypes from '../../action_types';

export default function(state = {}, action) {
  switch (action.type) {
    case actionTypes.DB_CLICK:
      return {
        ...state,
        msg: 'double click happened',
      };
    default:
      return state;
  }
}
