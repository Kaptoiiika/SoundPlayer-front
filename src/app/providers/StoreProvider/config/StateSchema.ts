import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit"
import { AxiosInstance } from "axios"
import { AlbumSchema } from "entities/Album"
import { AudioSchema } from "entities/Audio"
import { ProfileSchema } from "entities/Profile"
import { UserSchema } from "entities/User"
import { AudioPlayerSchema } from "entities/AudioPlayer"
import { AuthByUsernameSchema } from "features/AuthByUsername"
import { EditableProfileSchema } from "features/EditableProfile"
import { UploadAudioFormSchema } from "features/UploadAudio"
import { AlbumDetailsCommetsSchema } from "features/AlbumDetailsCommets"
import { AddCommentFormSchema } from "entities/Comment"
import { AlbumPageSchema } from "pages/AlbumPage"
import { ScrollSaverSchema } from "features/ScrollSaver"

export interface StateSchema {
  user: UserSchema
  scrollSaver: ScrollSaverSchema

  // ??
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
