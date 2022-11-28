import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider"
import { CommentModel, FormateAtributedComment } from "entities/Comment"
import { FormateError } from "shared/api/Errors/FormateError/FormateError"
import { PaginationResponse } from "shared/api/types/PaginationResponse"

export const fetchCommentsByAlbumId = createAsyncThunk<
  CommentModel[],
  string,
  ThunkConfig<string>
>("albumDetailsComments/fetchCommentsByAlbumId", async (albumId, thunkApi) => {
  if (!albumId) {
    return thunkApi.rejectWithValue("error")
  }

  try {
    const params = {
      populate: "author.avatar",
      ["filters[album][id][$in]"]: albumId,
    }

    const { data } = await thunkApi.extra.api.get<PaginationResponse<any>>(
      "/api/comments",
      {
        params,
      }
    )

    const parsedComments: CommentModel[] = data.data.map((data: any) =>
      FormateAtributedComment(data)
    )

    return parsedComments
  } catch (error) {
    return thunkApi.rejectWithValue(FormateError(error))
  }
})
