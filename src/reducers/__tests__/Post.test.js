import reducer from 'reducers/Post';
import * as types from 'constants/actionTypes/postActionTypes';
import * as likeTypes from 'constants/actionTypes/likeActionTypes';
import * as commentTypes from 'constants/actionTypes/commentActionTypes';

describe('Post reducer', () => {
  it('should return init state', () => {
    const initialState = {
      isFetching: false,
      error: false,
      entry: null
    };
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  describe('Fetch', () => {
    it('should request fetch post', () => {
      const reducerResult = reducer([], {
        type: types.FETCH_POST_REQUEST
      });
      expect(reducerResult.isFetching).toEqual(true);
    });

    it('should error fetch post', () => {
      const reducerResult = reducer([], {
        type: types.FETCH_POST_ERROR
      });
      expect(reducerResult.error).toEqual(true);
    });

    it('should succeed fetch post', () => {
      const reducerResult = reducer([], {
        type: types.FETCH_POST_SUCCESS,
        response: 'good'
      });
      expect(reducerResult).toEqual({
        isFetching: false,
        error: false,
        entry: 'good'
      });
    });
  });

  describe('Update', () => {
    let state;
    beforeEach(() => {
      state = {
        isFetching: false,
        error: false,
        entry: 'object'
      };
    });

    it('should request update post', () => {
      const reducerResult = reducer(state, {
        type: types.UPDATE_POST_REQUEST
      });
      state.isFetching = true;
      expect(reducerResult).toEqual(state);
    });

    it('should error update post', () => {
      const reducerResult = reducer(state, {
        type: types.UPDATE_POST_ERROR
      });
      state.error = true;
      expect(reducerResult).toEqual(state);
    });

    it('should succeed update post', () => {
      const reducerResult = reducer(state, {
        type: types.UPDATE_POST_SUCCESS,
        response: 'good'
      });
      state.entry = 'good';
      expect(reducerResult).toEqual(state);
    });
  });

  describe('Comment', () => {
    let state;
    beforeEach(() => {
      state = {
        isFetching: false,
        error: false,
        entry: 'object'
      };
    });

    it('should succeed comment post', () => {
      const reducerResult = reducer(state, {
        type: commentTypes.CREATE_COMMENT_SUCCESS,
        response: 'good'
      });
      state.entry = 'good';
      expect(reducerResult).toEqual(state);
    });
  });

  describe('Comment', () => {
    let state;
    beforeEach(() => {
      state = {
        isFetching: false,
        error: false,
        entry: 'object'
      };
    });

    it('should succeed update like', () => {
      const reducerResult = reducer(state, {
        type: likeTypes.UPDATE_LIKE_SUCCESS,
        response: 'good'
      });
      state.entry = 'good';
      expect(reducerResult).toEqual(state);
    });
  });
});
