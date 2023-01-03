/* eslint-disable boundaries/element-types */
import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit"
import { AxiosInstance } from "axios"
import { AlbumPageSchema } from "pages/AlbumPage"
import { AlbumDetailsCommetsSchema } from "features/AlbumDetailsCommets"
import { AuthByUsernameSchema } from "features/AuthByUsername"
import { EditableAlbumSchema } from "features/EditableAlbum/model/types/editableAlbumSchema"
import { EditableProfileSchema } from "features/EditableProfile"
import { ScrollSaverSchema } from "features/ScrollSaver"
import { UploadAudioFormSchema } from "features/UploadAudio"
import { AlbumSchema } from "entities/Album"
import { AudioSchema } from "entities/Audio"
import { AudioPlayerSchema } from "entities/AudioPlayer"
import { AddCommentFormSchema } from "entities/Comment"
import { ProfileSchema } from "entities/Profile"
import { UserSchema } from "entities/User"
import { rtkApi } from "shared/api/RtkApi"

export interface StateSchema {
  user: UserSchema
  scrollSaver: ScrollSaverSchema
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>

  // models
  audio?: AudioSchema
  audioPlayer?: AudioPlayerSchema
  profile?: ProfileSchema
  albumPage?: AlbumPageSchema
  albumDetails?: AlbumSchema
  albumDetailsCommets?: AlbumDetailsCommetsSchema

  // forms
  audioForm?: UploadAudioFormSchema
  authByUsername?: AuthByUsernameSchema
  addCommentForm?: AddCommentFormSchema
  editableProfile?: EditableProfileSchema
  editableAlbum?: EditableAlbumSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}

export interface ThunkExtraArg {
  api: AxiosInstance
}

export interface ThunkConfig<T> {
  rejectValue: T
  extra: ThunkExtraArg
  state: StateSchema
}
