import { UserModel } from "@/entities/User"

export interface CommentModel {
  id: number
  author: UserModel
  text: string
  createdAt: Date
}
