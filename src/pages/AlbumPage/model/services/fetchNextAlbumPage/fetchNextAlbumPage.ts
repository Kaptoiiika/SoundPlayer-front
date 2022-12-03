import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider"
import { getAlbumHasMany, getAlbumIsLoading, getAlbumPageNum } from "../../selectors/albumPageSelectors"
import { albumPageActions } from "../../slice/albumPageSlice"
import { fetchAlbumList } from "../fetchAlbumList/fetchAlbumList"

export const fetchNextArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>("articlesPage/fetchNextArticlesPage", async (_, thunkApi) => {
  const { getState, dispatch } = thunkApi
  const hasMany = getAlbumHasMany(getState())
  const page = getAlbumPageNum(getState())
  const isLoading = getAlbumIsLoading(getState())

  if (hasMany && !isLoading) {
    dispatch(albumPageActions.setPage(page + 1))
    dispatch(fetchAlbumList({}))
  }
})
