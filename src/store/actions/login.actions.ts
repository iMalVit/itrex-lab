import createSagaActions from './main';
import { LoginPendingType } from './actions.types';

const login = createSagaActions<LoginPendingType, any, any>('login');

export default login;
