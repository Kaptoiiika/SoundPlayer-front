import { StateSchema } from "app/providers/StoreProvider/config/StateSchema"

export const getCurrentWaveform = (state: StateSchema) =>
  state.audioPlayer?.currentAudio?.peaks || []
