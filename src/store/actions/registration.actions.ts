import createSagaActions from './main';
import { RegistrationSuccessType } from './actions.types';
import { ProfileResponseType } from '../../api/auth/auth.types';

const registration = createSagaActions<any, RegistrationSuccessType, ProfileResponseType>('registration');

export default registration;
