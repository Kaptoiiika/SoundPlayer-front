export interface UserSchema {
  authData?: UserModel
  isInited: boolean
}

export interface UserModel {
  id: number
  username: string
  email: string
  avatar?: UserAvatar
}

export interface UserAvatar {
  id: number
  name: string
  alternativeText: string
  width: number
  height: number
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: string
  provider: string
  createdAt: string
  updatedAt: string
  // ??
  caption: any
  formats: any
  provider_metadata: any
}
