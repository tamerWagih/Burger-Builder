import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

describe('auth reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      token: null,
      userId: null,
      error: null,
      loading: false,
      authRedirectPath: '/',
    });
  });

  it('Should Store the token upon login', () => {
    expect(
      reducer(
        {
          token: null,
          userId: null,
          error: null,
          loading: false,
          authRedirectPath: '/',
        },
        {
          type: actionTypes.AUTH_SUCCESS,
          idToken: 'Some-token',
          userId: 'Some-user-id',
        }
      )
    ).toEqual({
      token: 'Some-token',
      userId: 'Some-user-id',
      error: null,
      loading: false,
      authRedirectPath: '/',
    });
  });
});
