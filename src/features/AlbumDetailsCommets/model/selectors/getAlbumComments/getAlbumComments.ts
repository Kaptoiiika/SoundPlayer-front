import { StateSchema } from "shared/config/storeConfig";
import { commentsAdapter } from "../../slice/albumDetailsCommetsSlice";

export const getAlbumComments = commentsAdapter.getSelectors<StateSchema>(
  (state) => state.albumDetailsCommets || commentsAdapter.getInitialState()
)

export const getAlbumDetailsCommentsIsloading = (state:StateSchema) => state.albumDetailsCommets?.isLoading