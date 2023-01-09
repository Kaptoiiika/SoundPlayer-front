import { StateSchema } from "@/shared/config/storeConfig"
import { uploadAudioInitialState } from "../../slice/UploadAudioSlice"

export const getUploadFormState = (state: StateSchema) =>
  state.audioForm || uploadAudioInitialState
