export interface AuthByUsernameSchema {
  password: string
  username: string
  email?: string

  isloading: boolean
  loginError?: string
  registrationError?: string
}
