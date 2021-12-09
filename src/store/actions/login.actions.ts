import createSagaActions from './main';
import { LoginPendingType } from './actions.types';
import { ProfileResponseType } from '../../api/auth/auth.types';

const login = createSagaActions<LoginPendingType, any, ProfileResponseType>('login');

export default login;
