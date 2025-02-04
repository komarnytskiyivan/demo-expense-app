import { combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
  user: userReducer,
});

export type RootStateType = ReturnType<typeof rootReducer>;
