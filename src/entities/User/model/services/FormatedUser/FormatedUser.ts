import { UserModel } from "../../types/userSchema"

export const FormateAtributedUser = (user: any): UserModel => {
  return {
    id: user.data.id,
    username: user.data.attributes.username,
    email: user.data.attributes.email,
    avatar: user.data.attributes.avatar
      ? {
        ...user.data.attributes.avatar.data.attributes,
        size: user.data.attributes.avatar.data.attributes.size,
        url: user.data.attributes.avatar.data.attributes.url,
        id: user.data.attributes.avatar.data.id,
      }
      : undefined,
  }
}
