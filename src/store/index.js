import { createStore, applyMiddleware, compose } from 'redux';
import APIMiddleware from 'middleware/API';
import PageMiddleware from 'middleware/Pagination';
import reducers from 'reducers';
//import DevTools from 'containers/DevTools';

const store = createStore(
  reducers,
  compose(
    applyMiddleware(APIMiddleware),
    applyMiddleware(PageMiddleware)
  )
);

export default store;
