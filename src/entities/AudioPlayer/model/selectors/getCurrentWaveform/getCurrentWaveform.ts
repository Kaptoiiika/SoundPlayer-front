import { StateSchema } from "shared/config/storeConfig"

export const getCurrentWaveform = (state: StateSchema) =>
  state.audioPlayer?.currentAudio?.peaks || []
