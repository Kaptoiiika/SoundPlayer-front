import { StateSchema } from "app/providers/StoreProvider/config/StateSchema"
import { uploadAudioInitialState } from "../../slice/UploadAudioSlice"

export const getUploadFormState = (state: StateSchema) =>
  state.audioForm || uploadAudioInitialState
