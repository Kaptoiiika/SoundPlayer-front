import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "@/shared/config/storeConfig"
import {
  getAlbumHasMany,
  getAlbumPageNum,
} from "../../selectors/albumPageSelectors"
import { albumPageActions } from "../../slice/albumPageSlice"

export const fetchNextArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>("articlesPage/fetchNextArticlesPage", async (_, thunkApi) => {
  const { getState, dispatch } = thunkApi
  const hasMany = getAlbumHasMany(getState())
  const page = getAlbumPageNum(getState())

  if (hasMany) {
    dispatch(albumPageActions.setPage(page + 1))
  }
})
