import { UserActions } from '../../actions/user/user.actions';
import { IUser } from './user.types';
import { reimmutifyUser } from './user.transformers';
import { INITIAL_STATE } from './user.initial-state';

export function userReducer(state: IUser = INITIAL_STATE, action: any) {
  switch (action.type) {
    case UserActions.LOGIN_USER:
    case UserActions.REGISTER_USER:
      // Indead of return a new Map, have immutable manage
      // what happens to the old object by merging
      return state.mergeWith((prev, next) => next, reimmutifyUser(action.payload));
    case UserActions.LOGOUT_USER:
      return state.clear();
    default:
      return state;
  }
}