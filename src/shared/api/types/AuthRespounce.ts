export interface AuthRespounce {
  token: string
  user: {
    id: number
    username: string
    email: string
    avatar: string | null
  }
}
