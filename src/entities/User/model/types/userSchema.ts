export interface UserModel {
  id: number
  username: string
  email: string
  avatar?: string
}

export interface UserSchema {
  authData?: UserModel
  isInited: boolean
}
