import { UserModel } from "entities/User"

export interface ProfileSchema {
  profiles: Record<string, UserModel>
  isLoading: boolean
}
