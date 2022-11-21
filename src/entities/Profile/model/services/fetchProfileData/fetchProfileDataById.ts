import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider"
import { UserModel } from "entities/User"
import { FormateError } from "shared/api/Errors/FormateError/FormateError"

interface fetchProfileDataByIdDTO {
  id: string
  noCashe?: boolean
}

export const fetchProfileDataById = createAsyncThunk<
  { user: UserModel; isMe: boolean },
  fetchProfileDataByIdDTO,
  ThunkConfig<string>
>("profile/fetchProfileDataById", async (dto, thunkAPI) => {
  const { id, noCashe } = dto
  const params = { populate: "*" }
  
  if (!noCashe) {
    const profile = thunkAPI.getState().profile?.profiles[id]
    if (profile) return { user: profile, isMe: id === "me" }
  }

  try {
    const { data } = await thunkAPI.extra.api.get<Required<UserModel>>(
      `/api/users/${id}`,
      {
        params,
      }
    )

    return { user: data, isMe: id === "me" }
  } catch (error: any) {
    return thunkAPI.rejectWithValue(FormateError(error))
  }
})
