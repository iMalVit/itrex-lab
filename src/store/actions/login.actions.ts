import createSagaActions from './main';
import { LoginPendingType } from './actions.types';

export const login = createSagaActions<LoginPendingType, any, any>('login');
