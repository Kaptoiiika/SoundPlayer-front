import { FormateAtributedUser } from "entities/User"
import { CommentModel } from "../../types/CommentModel"

export const FormateAtributedComment = (comment: any): CommentModel => {
  return {
    ...comment.attributes,
    createdAt: comment.attributes.createdAt,
    text: comment.attributes.text,
    id: comment.id,
    author: comment.attributes.author?.data
      ? FormateAtributedUser(comment.attributes.author.data)
      : undefined,
  }
}
