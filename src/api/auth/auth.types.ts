


export type LoginResponseType = {
  access_token: string
  refresh_token: string
}

export type RegisterDataType = {
  userName: string
  password: string
  firstName: string
  lastName: string
}

export type LoginDataType = {
  userName: string
  password: string
}

export type ProfileResponseType = {
  id: string,
  first_name: string,
  last_name: string,
  photo: string,
  role_name: string
}


export type AppointmentsResponseType = {

    appointments: [
      {
        id: string,
        reason: string,
        note: string,
        patient_id: string,
        doctor_id: string,
        visit_date: string,
        status: string,
        doctor: {
          last_name: string,
          first_name: string,
          id: string,
          photo: string,
          specialization_name: string
        }
      }
    ],
    total: any

}