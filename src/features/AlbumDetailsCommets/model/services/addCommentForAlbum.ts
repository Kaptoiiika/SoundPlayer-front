import { createAsyncThunk } from "@reduxjs/toolkit"
import { FormateAtributedComment } from "entities/Comment"
import { getAuthData } from "entities/User"
import { FormateError } from "shared/api/Errors/FormateError/FormateError"
import { ThunkConfig } from "shared/config/storeConfig"
import { albumDetailsCommentsActions } from "../slice/albumDetailsCommetsSlice"

type addAlbumComentDTO = {
  comment: string
  albumId: string
}

export const addCommentForAlbume = createAsyncThunk<
  void,
  addAlbumComentDTO,
  ThunkConfig<string>
>("albumDetailsCommets/addCommentForAlbum", async (dto, thunkApi) => {
  const { extra, dispatch, rejectWithValue, getState } = thunkApi
  const { albumId, comment } = dto

  const userData = getAuthData(getState())

  if (!userData || !albumId || !comment) {
    return rejectWithValue("no data")
  }

  try {
    const { data } = await extra.api.post("/api/comments", {
      data: {
        text: comment,
        author: {
          id: userData.id,
        },
        album: {
          id: albumId,
        },
      },
    })
    const parsedComment = FormateAtributedComment(data.data)
    parsedComment.author = userData

    dispatch(albumDetailsCommentsActions.addOne(parsedComment))

    return
  } catch (e) {
    return rejectWithValue(FormateError(e))
  }
})
