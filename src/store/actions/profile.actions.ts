import { createSagaActions } from "./main";
import { ProfileResponseType } from "../../api/auth/auth.types";


export const profile = createSagaActions<ProfileResponseType>('profile');
