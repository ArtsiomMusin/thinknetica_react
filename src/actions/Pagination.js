import * as types from 'constants/actionTypes/paginationActionTypes';
import { PAGINATION } from 'middleware/Pagination';

export function setActivePage(eventKey) {
  return {
    [PAGINATION]: {
      activePage: eventKey,
      types: [
        types.SET_ACTIVE_PAGE,
      ]
    }
  };
}
