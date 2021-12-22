import { createAction } from '@reduxjs/toolkit';

const createSagaActions = <T1 = any, T2 = any, T3 = any>(prefix: string) => ({
  pending: createAction<T1>(`${prefix}/pending`),
  success: createAction<T2>(`${prefix}/success`),
  failed: createAction<T3>(`${prefix}/failed`),
});

export default createSagaActions;
