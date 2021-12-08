import createSagaActions from './main';
import { AppointmentPendingType, AppointmentFulfilledType } from './actions.types';

const appointments = createSagaActions<AppointmentPendingType, AppointmentFulfilledType>('appointments');

export default appointments;
