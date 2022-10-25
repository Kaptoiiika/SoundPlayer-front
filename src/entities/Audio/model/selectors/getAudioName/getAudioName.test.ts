import { DeepPartial } from "@reduxjs/toolkit"
import { StateSchema } from "app/providers/StoreProvider/config/StateSchema"
import { getAudioName } from "./getAudioName"

describe("getAudio", () => {
  test("should return audio value", () => {
    const state: DeepPartial<StateSchema> = {
      audio: { name: "some name" },
    }

    expect(getAudioName(state as StateSchema)).toEqual("some name")
  })
})
