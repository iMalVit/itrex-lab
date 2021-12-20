import createSagaActions from './main';
import { RegistrationSuccessType } from './actions.types';
import { ProfileResponseType } from '../../api/auth/auth.types';

export const registration = createSagaActions<any, RegistrationSuccessType, ProfileResponseType>('registration');
