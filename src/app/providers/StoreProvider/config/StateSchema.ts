import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit"
import { AxiosInstance } from "axios"
import { AudioSchema } from "entities/Audio"
import { AudioPlayerSchema } from "entities/AudioPlayer/model/types/audioPlayerSchema"
import { UserSchema } from "entities/User"
import { AuthByUsernameSchema } from "features/AuthByUsername/model/types/AuthByUserNameSchema"
import { UploadAudioFormSchema } from "features/UploadAudio"

export interface StateSchema {
  audio: AudioSchema
  user: UserSchema
  audioPlayer: AudioPlayerSchema

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
