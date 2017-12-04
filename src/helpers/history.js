import createHistory from 'history/createBrowserHistory';

let history = null;
if (__SERVER__ === false) {
  history = createHistory();
}
export default history;
