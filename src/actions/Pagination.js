import * as types from 'constants/actionTypes/paginationActionTypes';

const activePage = (activePage) => ({
  type: types.SET_ACTIVE_PAGE,
  activePage
});

export function setActivePage(eventKey) {
  return (dispatch) => {
    dispatch(activePage(eventKey));
  };
}
