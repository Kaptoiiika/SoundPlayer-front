import { DeepPartial } from "@reduxjs/toolkit"
import { StateSchema } from "app/providers/StoreProvider/config/StateSchema"
import { getAudio } from "./getAudio"

describe("getAudio", () => {
  test("should return audio value", () => {
    const state: DeepPartial<StateSchema> = {
      audio: { name: "some name" },
    }

    expect(getAudio(state as StateSchema)).toEqual({ name: "some name" })
  })
})
