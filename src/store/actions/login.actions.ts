import createSagaActions from './main';
import { LoginPendingType, LoginSuccessType } from './actions.types';
import { ProfileResponseType } from '../../api/auth/auth.types';

const login = createSagaActions<LoginPendingType, LoginSuccessType, ProfileResponseType>('login');

export default login;
