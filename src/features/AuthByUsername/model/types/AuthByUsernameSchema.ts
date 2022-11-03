export interface AuthByUsernameSchema {
  password: string
  username: string
  email?: string

  isloading: boolean
  error?: string
}
