import { createSelector } from "@reduxjs/toolkit"
import { getAudio } from "../getAudio/getAudio"

export const getAudioName = createSelector(getAudio, (state) => state.list)
