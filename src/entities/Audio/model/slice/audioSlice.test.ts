import { DeepPartial } from "@reduxjs/toolkit"
import { StateSchema } from "app/providers/StoreProvider/config/StateSchema"
import { AudioSchema } from "../types/audioSchema"
import { audioActions, audioReducer } from "./audioSlice"

describe("getAudio", () => {
  test("change name", () => {
    const state: AudioSchema = { name: "some name" }

    expect(
      audioReducer(state as AudioSchema, audioActions.changeName())
    ).toEqual({ name: "some name1" })
  })

  test("clear name", () => {
    const state: AudioSchema = { name: "some name" }

    expect(
      audioReducer(state as AudioSchema, audioActions.clearName())
    ).toEqual({ name: "" })
  })
})
