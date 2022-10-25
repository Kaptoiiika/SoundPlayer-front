import { createSelector } from "@reduxjs/toolkit"
import { StateSchema } from "app/providers/StoreProvider/config/StateSchema"
import { getAudio } from "../getAudio/getAudio"

export const getAudioName = createSelector(getAudio, (state) => state.name)
