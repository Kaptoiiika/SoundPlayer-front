import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider/config/StateSchema"
import { fetchProfileDataById } from "entities/Profile"
import { FormateError } from "shared/api/Errors/FormateError/FormateError"

interface UploadAvatarDTO {
  avatar: Blob
  userId: number
}

export const UpdateProfileAvatar = createAsyncThunk<
  void,
  UploadAvatarDTO,
  ThunkConfig<string>
>("profile/UpdateProfileAvatar", async ({ avatar, userId }, thunkAPI) => {
  const body = new FormData()
  body.append("files", avatar)
  body.append("refId", String(userId))
  body.append("ref", "plugin::users-permissions.user")
  body.append("field", "avatar")
  try {
    await thunkAPI.extra.api.post("/api/upload", body)
    thunkAPI.dispatch(fetchProfileDataById({ id: "me", noCashe: true }))
    return
  } catch (error: any) {
    return thunkAPI.rejectWithValue(FormateError(error))
  }
})
