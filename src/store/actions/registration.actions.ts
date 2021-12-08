import createSagaActions from './main';
import { RegistrationPendingType, RegistrationSuccessType } from './actions.types';
import { ProfileResponseType } from '../../api/auth/auth.types';

const registration = createSagaActions<RegistrationPendingType, RegistrationSuccessType, ProfileResponseType>('registration');

export default registration;
