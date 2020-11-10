import { useSelector, useDispatch } from 'react-redux';

import { useCallback } from 'react';
import * as LOGGUED_USER_ACTIONS from '../actions/logguedUser';

export default function useLogguedUser() {
  const logguedUser = useSelector(state => state.logguedUser);

  const dispatch = useDispatch();

  const login = useCallback(
    (email, password) => dispatch(LOGGUED_USER_ACTIONS.login({ email, password })),
    [dispatch]
  );

  const register = useCallback(
    payload => dispatch(LOGGUED_USER_ACTIONS.register(payload)),
    [dispatch]
  );

  const signInUsingFacebook = useCallback(
    () => dispatch(LOGGUED_USER_ACTIONS.signInUsingFacebook()),
    [dispatch]
  );

  const logout = useCallback(
    () => dispatch(LOGGUED_USER_ACTIONS.logout()),
    [dispatch]
  );


  return {
    isAuthentificated: logguedUser.isAuthentificated,
    logguedUser: logguedUser.user,
    login,
    register,
    signInUsingFacebook,
    logout
  };
}
