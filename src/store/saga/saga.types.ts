import { PayloadActionCreator } from '@reduxjs/toolkit/src/createAction';

export type AsyncActionType = {
  pending: PayloadActionCreator<any>;
  success: PayloadActionCreator<any>;
  failed: PayloadActionCreator<any>;
};

export type ProfileActionType = {
  me: PayloadActionCreator<any>;
};

export type AnyFunction = (...rest:any) => any;
