import { createAsyncThunk } from "@reduxjs/toolkit"
import { UserModel } from "@/entities/User"
import { FormateError } from "@/shared/api/Errors/FormateError/FormateError"
import { ThunkConfig } from "@/shared/config/storeConfig"

interface fetchProfileDataByIdDTO {
  id: string
  noCashe?: boolean
}

export const fetchProfileDataById = createAsyncThunk<
  { user: UserModel; isMe: boolean },
  fetchProfileDataByIdDTO,
  ThunkConfig<string>
>("profile/fetchProfileDataById", async (dto, thunkApi) => {
  const { id, noCashe } = dto
  const params = { populate: "*" }

  if (!noCashe) {
    const profile = thunkApi.getState().profile?.profiles[id]
    if (profile) return { user: profile, isMe: id === "me" }
  }

  try {
    const { data } = await thunkApi.extra.api.get<Required<UserModel>>(
      `/api/users/${id}`,
      {
        params,
      }
    )

    return { user: data, isMe: id === "me" }
  } catch (error: any) {
    return thunkApi.rejectWithValue(FormateError(error))
  }
})
