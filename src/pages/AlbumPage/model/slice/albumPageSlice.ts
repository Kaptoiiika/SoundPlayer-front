import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit"
import { AlbumModel } from "entities/Album/model/types/AlbumSchema"
import { SortOrder } from "shared/types"
import { fetchAlbumList } from "../services/fetchAlbumList/fetchAlbumList"
import { AlbumPageSchema } from "../types/albumPageSchema"

export const albumListAdapter = createEntityAdapter<AlbumModel>({
  selectId: (album) => album.id,
})

const initialState: AlbumPageSchema = {
  isLoading: true,
  hasMany: true,
  limit: 25,
  page: 1,
  //todo: что то придумать с этим
  order:
    new URLSearchParams(window.location.search).get("order") || "" in SortOrder
      ? (new URLSearchParams(window.location.search).get("order") as SortOrder)
      : undefined,
  ids: [],
  entities: {},
}

export const albumPageSlice = createSlice({
  name: "albumPage",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },

    setOrder: (state, action: PayloadAction<SortOrder | undefined>) => {
      state.order = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAlbumList.fulfilled, (state, action) => {
        state.isLoading = false
        if (action.meta.arg.replace) {
          albumListAdapter.setAll(state, action.payload.data)
        } else {
          albumListAdapter.addMany(state, action.payload.data)
        }

        state.hasMany =
          action.payload.meta.pagination.page <
          action.payload.meta.pagination.pageCount
      })
      .addCase(fetchAlbumList.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
      .addCase(fetchAlbumList.pending, (state, action) => {
        state.isLoading = true
        if (action.meta.arg.replace) {
          albumListAdapter.removeAll(state)
          state.page = 1
        }
      })
  },
})

export const { actions: albumPageActions } = albumPageSlice
export const { reducer: albumPageReducer } = albumPageSlice
