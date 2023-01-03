import { AlbumModel } from "entities/Album"
import { FormateAtributedAlbum } from "entities/Album/model/services/FormateAlbum/FormateAtributedAlbum"
import { rtkApi } from "shared/api/RtkApi"
import { PaginationResponse } from "shared/api/types/PaginationResponse"
import { SortOrder } from "shared/types"

type getAlbumListParams = {
  page: number
  limit: number
  order: SortOrder
}

const albumPageApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getAlbumList: build.query({
      query: ({ page, limit, order }: getAlbumListParams) => ({
        url: "/api/albums",
        params: {
          "populate[1]": "author",
          "populate[2]": "image",
          "pagination[page]": page,
          "pagination[pageSize]": limit,
          "sort[0]": order ? `createdAt:${order}` : undefined,
        },
      }),
      transformResponse: (
        baseQueryReturnValue: PaginationResponse<any>
      ): PaginationResponse<AlbumModel[]> => {
        const rawAlbums = baseQueryReturnValue.data
        const resMeta = baseQueryReturnValue.meta

        const parsedAlbums: AlbumModel[] = rawAlbums.map((album: any) =>
          FormateAtributedAlbum(album)
        )

        return { data: parsedAlbums, meta: resMeta }
      },
    }),
  }),
})

export const useAlbumPageList = albumPageApi.useGetAlbumListQuery
