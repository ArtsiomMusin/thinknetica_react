import { assign } from 'lodash';
import * as types from 'constants/actionTypes/paginationActionTypes';

const initialState = {
  activePage: 1
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.SET_ACTIVE_PAGE:
      return assign({}, initialState, { activePage: action.activePage });
    default:
      return state;
  }
}
