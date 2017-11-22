import { createStore, applyMiddleware, compose } from 'redux';
import APIMiddleware from 'middleware/API';
import reducers from 'reducers';
//import DevTools from 'containers/DevTools';

const store = createStore(
  reducers,
  compose(
    applyMiddleware(APIMiddleware)
  )
);

export default store;
