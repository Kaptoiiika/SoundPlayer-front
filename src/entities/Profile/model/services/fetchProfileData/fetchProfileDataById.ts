import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider"
import { UserModel } from "entities/User"
import { FormateError } from "shared/api/Errors/FormateError/FormateError"

interface fetchProfileDataByIdDTO {
  id: string
}

export const fetchProfileDataById = createAsyncThunk<
  { user: UserModel; isMe: boolean },
  fetchProfileDataByIdDTO,
  ThunkConfig<string>
>("profile/fetchProfileDataById", async (dto, thunkAPI) => {
  const { id } = dto
  const params = { populate: "*" }

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
