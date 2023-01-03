import { StateSchema } from "shared/config/storeConfig"

export const getAudioList = (state: StateSchema) => state.audio?.list
