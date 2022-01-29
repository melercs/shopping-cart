import {User} from '../../app/auth/models/user.model';
import * as fromAuthorization from '../actions/authorization.actions';

export interface AuthState {
  user: User;
}

const initState: AuthState = {
  user: null
};

export function authorizationReducer( state = initState , action: fromAuthorization.actions): AuthState {
  switch (action.type){
    case fromAuthorization.SET_USER:
      return {
        user: { ... action.user }
      };
    case fromAuthorization.UNSET_USER:
      return {
        user: null
      };
    default:
      return state;
  }
}
