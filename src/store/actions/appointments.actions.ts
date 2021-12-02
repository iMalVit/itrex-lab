import { createSagaActions } from "./main";
import { AppointmentPendingType, AppointmentFulfilledType } from "./actions.types";


export const appointments = createSagaActions<AppointmentPendingType, AppointmentFulfilledType>('appointments');
