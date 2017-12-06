import * as types from 'constants/actionTypes/contactActionTypes';
import { API_CALL } from 'middleware/API';

export function sendContactMessage(data) {
  return {
    [API_CALL]: {
      endpoint: '/contact/new',
      method: 'POST',
      payload: data,
      query: {},
      types: [
        types.CREATE_CONTACT_REQUEST,
        types.CREATE_CONTACT_SUCCESS,
        types.CREATE_CONTACT_ERROR
      ]
    }
  };
}
