import { createAsyncThunk } from "@reduxjs/toolkit"
import { FormateError } from "shared/api/Errors/FormateError/FormateError"
import { ThunkConfig } from "shared/config/storeConfig"
import {
  getEditableAlbumImage,
  getEditableAlbumTitle,
  getSelectedEditableAlbum,
} from "../selectors/getEditableAlbum"

export const saveAlbumChanges = createAsyncThunk<
  void, // return value
  void, // params
  ThunkConfig<string>
>("editableAlbum/saveAlbumChanges", async (params, thunkApi) => {
  const title = getEditableAlbumTitle(thunkApi.getState())
  const image = getEditableAlbumImage(thunkApi.getState())
  const album = getSelectedEditableAlbum(thunkApi.getState())

  try {
    const body = {
      data: {
        title: title,
        image: image,
      },
    }

    if (album?.id) {
      await thunkApi.extra.api.put(`/api/albums/${album?.id}`, body)
    } else {
      await thunkApi.extra.api.post(`/api/albums`, body)
    }

    return
  } catch (e) {
    return thunkApi.rejectWithValue(FormateError(e))
  }
})
