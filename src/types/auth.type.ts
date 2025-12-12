export type LoginRequestBody = {
  username: string
  password: string
}
export type RegisterRequestBody = {
  username: string
  password: string
  passwordConfirm: string
}
export type ForgotPasswordRequestBody = {
  email: string
  key?: string
}
export type CreateNewPasswordRequestBody = {
  // password: string
  // passwordConfirm: string
  email: string
  token: string
  newPassword: string
}

//
export type TFetchConfig = {
  method?: string
  body?: any
  token?: string
}

export interface User {
  id: string
  uuid: string
  display_name: string
  username: string
  email: string | null
  avatar: string | null
  phone: string | null
  fullname: string | null
  birthday: string | null
  gender: string | null
  address: string | null
  id_no: string | null
  id_date: string | null
  id_address: string | null
  banned_at: string | null
  first_updated_at: string | null
  first_change_password_at: string | null
  upload_file_at: string | null
  username_updated_at: string | null
  email_verified_at: string | null
  phone_verified_at: string | null
  emailVerified: boolean
  phoneVerified: boolean
  usernameUpdated: boolean
  firstChangePassword: boolean
  uploadFile: boolean
}
