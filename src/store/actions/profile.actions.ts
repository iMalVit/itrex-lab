import createSagaActions from './main';
import { ProfileResponseType } from '../../api/auth/auth.types';

const profile = createSagaActions<ProfileResponseType>('profile');

export default profile;
