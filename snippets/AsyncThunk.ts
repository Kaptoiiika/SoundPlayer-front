/* eslint-disable */
// @ts-nocheck
import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider"
import { FormateError } from "shared/api/Errors/FormateError/FormateError"

export const AsyncThunk = createAsyncThunk<
  void, // return value
  string, // params
  ThunkConfig<string>
>("someReducer/AsyncThunk", async (params, thunkApi) => {
  try {
    const params = {}
    const { data } = await thunkApi.extra.api.post(`/api`, { params })
    const result = data.data

    return result
  } catch (e) {
    return thunkApi.rejectWithValue(FormateError(e))
  }
})

// vscode snippets
// ctrl+shift+p => Configure User Snippets => typescript
/*
{
  "Async Thunk": {
    "prefix": "asyncthunk",
    "body": [
      "import { createAsyncThunk } from \"@reduxjs/toolkit\"",
      "import { ThunkConfig } from \"app/providers/StoreProvider\"",
      "import { FormateError } from \"shared/api/Errors/FormateError/FormateError\"",
      "",
      "export const ${TM_FILENAME_BASE} = createAsyncThunk<",
      "  void, // return value",
      "  string, // params",
      "  ThunkConfig<string>",
      ">(\"someReducer/${TM_FILENAME_BASE}\", async (params, thunkApi) => {",
      "  try {",
      "    const params = {}",
      "    const { data } = await thunkApi.extra.api.post(`/api`, { params })",
      "    const result = data.data",
      "",
      "    return result",
      "  } catch (e) {",
      "    return thunkApi.rejectWithValue(FormateError(e))",
      "  }",
      "})"
    ]
  }
}
*/
