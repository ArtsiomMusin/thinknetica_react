import { assign } from 'lodash/object';

export const PAGINATION = 'PAGINATION';

const nextAction = (action, data) => (
  assign({}, action, data, { [PAGINATION]: undefined})
);

export default store => next => action => {
  if (!action[PAGINATION]) {
    return next(action);
  }
  const [setPage] = action[PAGINATION].types;
  next(
    nextAction(
      action,
      {
        activePage: action[PAGINATION].activePage,
        type: setPage
      }
    )
  );
};
