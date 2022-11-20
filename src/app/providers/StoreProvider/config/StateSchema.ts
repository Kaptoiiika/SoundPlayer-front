import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit"
import { AxiosInstance } from "axios"
import { AlbumSchema } from "entities/Album/model/types/AlbumSchema"
import { AudioSchema } from "entities/Audio"
import { AudioPlayerSchema } from "entities/AudioPlayer/model/types/audioPlayerSchema"
import { ProfileSchema } from "entities/Profile"
import { UserSchema } from "entities/User"
import { AuthByUsernameSchema } from "features/AuthByUsername/model/types/AuthByUserNameSchema"
import { UploadAudioFormSchema } from "features/UploadAudio"

export interface StateSchema {
  user: UserSchema
  audio: AudioSchema

  // ??
  audioPlayer?: AudioPlayerSchema
  albumDetails?: AlbumSchema
  profile?: ProfileSchema

  // forms
  audioForm?: UploadAudioFormSchema
  authByUsername?: AuthByUsernameSchema
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
